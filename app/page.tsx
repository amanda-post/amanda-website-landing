'use client';

import { useForm } from 'react-hook-form';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { GitHubLogo, LinkedInLogo, PokeBall } from '~/components/ui/icons';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Landing() {
  const formSchema = z.object({
    name: z
      .string()
      .nonempty({ message: 'Name is required' })
      .min(2, { message: 'Name must be more than 2 characters' })
      .max(50, { message: 'Name must be under 50 characters' }),
    email: z
      .string()
      .nonempty({ message: 'Email is required' })
      .email({ message: 'Invalid email' }),
    message: z
      .string()
      .nonempty({ message: 'Message is required' })
      .min(10, { message: 'Must be at least 10 characters' })
      .max(500, { message: 'Must be under 500 characters' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const {
    formState: { errors },
    trigger,
  } = form;
  console.log(errors);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Amanda Slocum</h1>

      <Button className='bg-violet-400 group'>
        <LinkedInLogo className='text-black group-hover:text-violet-400 h-6 w-6' />
      </Button>
      <Button className='bg-violet-400 group'>
        <GitHubLogo className='text-black group-hover:text-violet-400 h-6 w-6' />
      </Button>
      <Button className='bg-violet-400 group'>
        <PokeBall className='text-black group-hover:text-violet-400 h-6 w-6' />
      </Button>

      <Card>
        <h2>Get in touch</h2>
        <p>
          Want to work together? I'd love to hear from you. Send me a message
          below and I'll get back to you as soon as I can.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Your Name' {...field} />
                  </FormControl>
                  <FormMessage>
                    {errors?.name && errors.name.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='example@gmail.com' {...field} />
                  </FormControl>
                  <FormMessage>
                    {errors?.email && errors.email.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I've got the perfect position for you!"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This message and your contact info will be sent to my email!
                  </FormDescription>
                  <FormMessage>
                    {errors?.message && errors.message.message}
                  </FormMessage>
                </FormItem>
              )}
            />

            <Button type='submit'>Send</Button>
          </form>
        </Form>
      </Card>
    </main>
  );
}
