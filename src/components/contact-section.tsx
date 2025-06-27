
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { SectionHeading } from './section-heading';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading>Get In Touch</SectionHeading>
        <div className="grid gap-12 md:grid-cols-2">
            <div>
                <p className="mb-6 text-muted-foreground">
                    I'm currently open to new opportunities and collaborations. If you have a project in mind, a question, or just want to say hi, feel free to reach out. I'll do my best to get back to you!
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-primary"/>
                        <a href="mailto:samantha.reyes@example.com" className="text-sm hover:text-primary">samantha.reyes@example.com</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-primary"/>
                        <span className="text-sm">+1 (512) 555-0123</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="h-5 w-5 text-primary"/>
                        <span className="text-sm">Austin, TX</span>
                    </div>
                </div>
            </div>
            <Card className="shadow-lg bg-card border-border">
                <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your message..." rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
