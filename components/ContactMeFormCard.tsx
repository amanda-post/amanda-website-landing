"use client"

import { useMemo, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Spinner } from "~/components/ui/spinner"
import { Textarea } from "~/components/ui/textarea"
import { useToast } from "~/components/ui/use-toast"
import axios from "axios"
import { useForm } from "react-hook-form"
import z from "zod"

interface EmailFormFields {
  name: string
  email: string
  message: string
  areYouARobot: string
}

type MathProblemNumbers = [number, number]

const generateFormSchema = (mathProblemNumbers: MathProblemNumbers) => {
  const regex = new RegExp(
    "^" + `${mathProblemNumbers[0] + mathProblemNumbers[1]}` + "$"
  )

  return z.object({
    name: z
      .string()
      .nonempty({ message: "Name is required" })
      .min(2, { message: "Name must be more than 2 characters" })
      .max(50, { message: "Name must be under 50 characters" }),
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "Invalid email" }),
    message: z
      .string()
      .nonempty({ message: "Message is required" })
      .min(10, { message: "Must be at least 10 characters" })
      .max(500, { message: "Must be under 500 characters" }),
    areYouARobot: z.string().regex(regex, { message: "Incorrect answer" }),
  })
}
const generateNewMathProblem = (): MathProblemNumbers => {
  const num1 = Math.floor(Math.random() * 10)
  const num2 = Math.floor(Math.random() * 10)
  return [num1, num2]
}

export default function ContactMeFormCard() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const mathProblem = useMemo(() => generateNewMathProblem(), [])
  const formSchema = generateFormSchema(mathProblem)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      areYouARobot: "",
    },
    mode: "onBlur",
  })

  const {
    formState: { errors },
  } = form

  const onSubmit = (data: EmailFormFields) => {
    setLoading(true)
    axios
      .post("https://formsubmit.co/ajax/e95b9650b1dd372235b83c21568d08ab", {
        _replyto: data.email,
        _template: "table",
        _subject: "New message from your website!",
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then(() => {
        toast({ title: "Message sent!" })
        setSubmitted(true)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }

  return (
    <Card className="w-auto p-8 lg:w-1/2">
      <p className="text-xl font-extrabold">Get in touch</p>
      <p className="my-2 leading-5">
        Send me a message below! If you have any questions, I'll get back to you
        ASAP.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    className="placeholder:italic placeholder:text-gray-400"
                    {...field}
                    disabled={submitted}
                  />
                </FormControl>
                <FormMessage className="text-xs">
                  {errors?.name && errors.name.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    className="placeholder:italic placeholder:text-gray-400"
                    {...field}
                    disabled={submitted}
                  />
                </FormControl>
                <FormMessage className="text-xs">
                  {errors?.email && errors.email.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I've got the perfect position for you!"
                    className="placeholder:italic placeholder:text-gray-400"
                    {...field}
                    disabled={submitted}
                  />
                </FormControl>
                <FormMessage className="text-xs">
                  {errors?.message && errors.message.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="areYouARobot"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">
                  What is {mathProblem[0]} + {mathProblem[1]}?
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Are you a robot?"
                    className="placeholder:italic placeholder:text-gray-400"
                    {...field}
                    disabled={submitted}
                  />
                </FormControl>
                <FormMessage className="text-xs">
                  {errors?.areYouARobot && errors.areYouARobot.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <Button type="submit" disabled={submitted}>
            {loading ? <Spinner /> : submitted ? "Submitted!" : "Send"}
          </Button>
        </form>
      </Form>
    </Card>
  )
}
