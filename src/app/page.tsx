import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { features, stats } from '@/lib/data';
import { Search, Users, HelpCircle, BookOpen, Calculator, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { HomepageSearch } from '@/components/HomepageSearch';

export default function Home() {

  const iconMap: { [key: string]: React.ElementType } = {
    Bot: HelpCircle,
    Book: BookOpen,
    Gauge: Calculator,
    Users,
    Clock,
    CheckCircle
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Welcome to <span className='text-accent'>SRM Guide</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8">
              Your comprehensive guide to navigating SRM University. Get instant answers to all your college-related questions.
            </p>
            <HomepageSearch />
            <div className="flex justify-center gap-4 mt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/ai-assistant">Ask AI Assistant</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/faq">View FAQs</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Everything You Need to Succeed</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                From academic guidance to campus life tips, we've got you covered with all the tools and information you need.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                 const Icon = iconMap[feature.icon as string] || HelpCircle;
                 return (
                  <Card key={feature.title} className="bg-blue-50/50 hover:bg-blue-100/70 hover:shadow-lg transition-all duration-300 border-0 text-left p-6 flex flex-col items-start">
                    <div className="mb-4 rounded-lg bg-blue-100 p-3">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                 )
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
         <section className="w-full pb-12 md:pb-24 lg:pb-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                 const Icon = iconMap[stat.icon] || Users;
                 return (
                    <Card key={stat.label} className="bg-card shadow-sm border p-6 flex flex-col items-center justify-center text-center">
                        <Icon className="h-8 w-8 text-primary mb-3" />
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </Card>
                 )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Start Your SRM Journey?
              </h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of students who have successfully navigated their college life with SRM Guide.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
               <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/ai-assistant">Get Started Now</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
