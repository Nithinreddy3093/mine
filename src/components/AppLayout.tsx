'use client';

import Link from 'next/link';
import { Bot, Book, Gauge, GraduationCap, Menu, Newspaper, Users, Contact } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/ai-assistant', label: 'AI Assistant', icon: Bot },
  { href: '/faq', label: 'FAQ', icon: Book },
  { href: '/dashboard', label: 'Tools', icon: Gauge },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/contact', label: 'Contact', icon: Contact },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const desktopNav = (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`transition-colors hover:text-primary ${pathname === item.href ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  const mobileNav = (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SRM Guide</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`hover:text-primary ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-4 md:px-6 z-50">
        <Link href="/" className="flex items-center gap-2 font-semibold mr-6">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="text-xl">
            <span className='font-bold'>SRM</span> Guide
          </span>
        </Link>
        <div className="flex w-full items-center justify-end gap-4 md:justify-between">
            {desktopNav}
            <div className='flex items-center gap-2'>
                <div className='hidden md:flex items-center gap-2'>
                    <Button variant="outline" asChild>
                        <Link href="#">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link href="#">Sign Up</Link>
                    </Button>
                </div>
                {mobileNav}
            </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
