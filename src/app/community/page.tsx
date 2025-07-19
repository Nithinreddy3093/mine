'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageSquare, Search } from 'lucide-react';
import { communityQuestions, CommunityQuestion } from '@/lib/data';
import { QuestionCard } from '@/components/QuestionCard';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';


export default function CommunityPage() {
  const [questions, setQuestions] = useState<CommunityQuestion[]>(communityQuestions);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h1 className="text-3xl font-bold">Community Q&A</h1>
          <p className="text-muted-foreground">
            Ask questions, share knowledge, and help fellow students
          </p>
        </div>
        <Button asChild className="w-full sm:w-auto">
            <Link href="https://chat.whatsapp.com/CcDNDOGKIY268dmQRTzeLr" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask in WhatsApp Group
            </Link>
        </Button>
      </div>

      <div className="p-4 bg-card rounded-lg border shadow-sm">
        {isClient ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative sm:col-span-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search questions..." className="pl-10" />
                </div>
                <Select defaultValue="all">
                    <SelectTrigger>
                    <SelectValue placeholder="All Questions" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="all">All Questions</SelectItem>
                    <SelectItem value="answered">Answered</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="recent">
                    <SelectTrigger>
                    <SelectValue placeholder="Most Recent" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
            </div>
        )}
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
