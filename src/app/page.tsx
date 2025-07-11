import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { BookOpen, Users, Bot, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    icon: Bot,
    title: 'AI Assistant',
    description: 'Get instant answers to your questions about SRM, from academics to campus life.',
    href: '/ai-assistant',
    cta: 'Ask a Question'
  },
  {
    icon: BookOpen,
    title: 'Student Handbook',
    description: 'Explore detailed guides, FAQs, and articles about navigating college life.',
    href: '/faq',
    cta: 'Read the Guide'
  },
  {
    icon: Users,
    title: 'Community Tools',
    description: 'Use our calculators and tools to stay on top of your attendance and grades.',
    href: '/dashboard',
    cta: 'Use the Tools'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Navigate SRM University with Confidence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your all-in-one AI-powered companion for mastering college life. Get instant answers, calculate your grades, and stay organized.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/ai-assistant">Ask our AI</Link>
                  </Button>
                   <Button asChild size="lg" variant="outline">
                    <Link href="/dashboard">Explore Tools</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                data-ai-hint="students university campus"
                width="600"
                height="400"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted-foreground/10 px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From an AI assistant to academic tools, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:max-w-none mt-12">
              {features.map((feature) => (
                <Card key={feature.title}>
                    <CardHeader className="flex flex-col items-center text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-4">
                          <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button asChild className="w-full" variant="outline">
                        <Link href={feature.href}>{feature.cta}</Link>
                      </Button>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                What Our Users Are Saying
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from students who have transformed their university experience with SRM Guide.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="text-left flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12">
                        <Image
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                          data-ai-hint={testimonial.dataAiHint}
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Master Your College Journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Jump in and explore all the features. Your smarter college experience starts now.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Button asChild size="lg">
                  <Link href="/ai-assistant">Get Started</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
