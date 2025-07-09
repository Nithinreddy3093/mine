import { AiAssistant } from '@/components/AiAssistant';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gauge, HelpCircle, Newspaper } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Gauge,
    title: 'Quick Info Dashboard',
    description: 'Calculators for GPA, attendance, credits, and important dates at a glance.',
    href: '/dashboard',
    cta: 'View Dashboard',
  },
  {
    icon: HelpCircle,
    title: 'FAQs Section',
    description: 'Find answers to common questions about academics, exams, hostel life, and more.',
    href: '/faq',
    cta: 'Explore FAQs',
  },
  {
    icon: Newspaper,
    title: 'Blog',
    description: 'Read articles and tips on surviving your first year, internships, and campus life.',
    href: '/blog',
    cta: 'Read Blog',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Welcome to SRM Navigator
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Your AI-powered guide to effortlessly navigate college life at SRM University. Ask anything, find answers, and stay ahead.
        </p>
      </section>

      <section>
        <AiAssistant />
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Everything You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={feature.href} asChild>
                  <Button className="w-full" variant="outline">
                    {feature.cta}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
