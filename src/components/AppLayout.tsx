

'use client';

import Link from 'next/link';
import { Bot, Book, Gauge, GraduationCap, Menu, Newspaper, Users, Contact } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { useState, useEffect } from 'react';
import { Footer } from './Footer';

const navItems = [
  { href: '/', label: 'Home', icon: GraduationCap },
  { href: '/ai-assistant', label: 'AI Assistant', icon: Bot },
  { href: '/faq', label: 'FAQ', icon: Book },
  { href: '/dashboard', label: 'Tools', icon: Gauge },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/contact', label: 'Contact', icon: Contact },
];

function DesktopNav() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = isClient && pathname === item.href;
        return (
            <Link
                suppressHydrationWarning
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors hover:text-primary hover:bg-primary/10 ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-muted-foreground'}`}
            >
                <Icon className="h-4 w-4" />
                {item.label}
            </Link>
        )
      })}
    </nav>
  );
}

function MobileNav() {
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">SRM Guide</span>
                </Link>
                {navItems.map((item) => {
                    const isActive = isClient && pathname === item.href;
                    return (
                        <Link
                        suppressHydrationWarning
                        key={item.label}
                        href={item.href}
                        className={`hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                        {item.label}
                        </Link>
                    )
                })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}


export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background/60">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 z-50">
        <Link href="/" className="flex items-center gap-2 font-semibold" suppressHydrationWarning>
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SRM Guide</span>
        </Link>
        
        <div className="hidden md:flex flex-1 justify-center">
            <DesktopNav />
        </div>

        <div className='flex items-center gap-2'>
            <div className='hidden md:flex items-center gap-2'>
                <Button variant="outline" asChild>
                    <Link href="/auth/signin">Sign In</Link>
                </Button>
                <Button asChild>
                    <Link href="/auth/signup">Sign Up</Link>
                </Button>
            </div>
            <MobileNav />
        </div>
      </header>
      <main className="flex flex-1 flex-col p-4 sm:p-6 lg:p-8">{children}</main>
      <Footer />
    </div>
  );
}
