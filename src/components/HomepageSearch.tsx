// src/components/HomepageSearch.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ArrowRight, Book, Calculator, Newspaper, HelpCircle } from 'lucide-react';
import { faqs, posts } from '@/lib/data';
import Link from 'next/link';

type SearchResult = {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: React.ElementType;
};

const searchData: SearchResult[] = [
  ...faqs.flatMap(faqCategory => 
    faqCategory.questions.map(q => ({
      title: q.question,
      description: q.answer,
      href: `/faq#${faqCategory.category.toLowerCase().replace(/\s/g, '-')}`,
      category: `FAQ: ${faqCategory.category}`,
      icon: HelpCircle,
    }))
  ),
  ...posts.map(post => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.slug}`,
    category: 'Blog',
    icon: Newspaper,
  })),
  {
    title: 'GPA Calculator',
    description: 'Calculate your semester GPA based on credits and grades.',
    href: '/dashboard',
    category: 'Tool',
    icon: Calculator,
  },
  {
    title: 'Attendance Calculator',
    description: 'Calculate your attendance percentage and find out how many classes you can miss.',
    href: '/dashboard',
    category: 'Tool',
    icon: Calculator,
  },
  {
    title: 'Credit Calculator',
    description: 'Calculate your total credits for the semester.',
    href: '/dashboard',
    category: 'Tool',
    icon: Calculator,
  }
];

export function HomepageSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 1) {
      const lowerCaseQuery = query.toLowerCase();
      const filteredResults = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerCaseQuery) ||
          item.description.toLowerCase().includes(lowerCaseQuery) ||
          item.category.toLowerCase().includes(lowerCaseQuery)
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/ai-assistant?query=${encodeURIComponent(query)}`);
    } else {
        router.push('/ai-assistant');
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchContainerRef]);

  return (
    <div className="max-w-xl mx-auto relative" ref={searchContainerRef}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          name="query"
          type="search"
          placeholder='Ask anything about SRM... (e.g. "What is the pass criteria?")'
          className="w-full pl-12 pr-4 py-7 rounded-full bg-background text-foreground text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
      </form>
      {isFocused && query.length > 1 && (
        <Card className="absolute top-full mt-2 w-full shadow-lg z-10 animate-in fade-in-0 zoom-in-95">
          <CardContent className="p-4">
            {results.length > 0 ? (
                <div className='space-y-2'>
                    <p className='text-xs font-semibold text-muted-foreground px-2'>SEARCH RESULTS</p>
                    {results.slice(0, 5).map((result, index) => (
                    <Link href={result.href} key={index} className="block" onClick={() => setIsFocused(false)}>
                        <div className="p-3 rounded-lg hover:bg-muted flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-md">
                                <result.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className='flex-grow'>
                                <p className="font-semibold text-foreground">{result.title}</p>
                                <p className="text-sm text-muted-foreground truncate">{result.description}</p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                    </Link>
                    ))}
                </div>
            ) : (
              <p className="text-center text-muted-foreground p-4">No results found.</p>
            )}
             <div className="mt-2 border-t pt-2">
                 <button onClick={handleSubmit} className='w-full p-3 rounded-lg hover:bg-muted flex items-center gap-4 text-left'>
                    <div className="p-2 bg-accent/10 rounded-md">
                        <Search className="h-5 w-5 text-accent" />
                    </div>
                    <div className='flex-grow'>
                        <p className="font-semibold text-accent-foreground">Ask SRM AI Guide</p>
                        <p className="text-sm text-muted-foreground truncate">Get an instant answer from our AI assistant</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </button>
             </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
