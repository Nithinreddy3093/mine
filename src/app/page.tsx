import { AiAssistant } from '@/components/AiAssistant';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { BookOpen, Newspaper, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Guides',
    description: 'Access detailed guides on academics, campus life, and more.',
  },
  {
    icon: Newspaper,
    title: 'Latest News & Updates',
    description: 'Stay informed with the latest news and announcements from SRM.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with peers and seniors for help and guidance.',
  },
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
          Welcome to SRM Navigator
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Your AI-powered guide to effortlessly navigate college life at SRM University. Ask anything, find answers, and stay ahead.
        </p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/dashboard">Get Started</Link>
        </Button>
      </section>

      <section>
        <AiAssistant />
      </section>

      <section className="space-y-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why SRM Navigator?</h2>
          <p className="mt-4 text-muted-foreground">
            We provide all the tools and information you need to succeed at SRM, right at your fingertips.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Users Say</h2>
          <p className="mt-4 text-muted-foreground">
            Hear from students and faculty who love using SRM Navigator.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col text-left">
              <CardContent className="pt-6 flex-grow">
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="bg-primary/5 rounded-lg p-8 md:p-12 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Ready to Dive In?</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Explore the dashboard, read the blog, or ask our AI assistant your first question. Your journey at SRM just got a whole lot easier.
        </p>
        <Button asChild className="mt-8" size="lg">
          <Link href="/dashboard">Explore Dashboard</Link>
        </Button>
      </section>
    </div>
  );
}
