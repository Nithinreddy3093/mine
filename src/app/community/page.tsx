
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PlusCircle, Search } from 'lucide-react';
import { communityQuestions, CommunityQuestion } from '@/lib/data';
import { QuestionCard } from '@/components/QuestionCard';
import { AskQuestionDialog } from '@/components/AskQuestionDialog';


export default function CommunityPage() {
  const [questions, setQuestions] = useState<CommunityQuestion[]>(communityQuestions);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleQuestionAsked = (newQuestion: Omit<CommunityQuestion, 'id' | 'author' | 'timestamp' | 'votes' | 'answersCount' | 'status'>) => {
    const questionToAdd: CommunityQuestion = {
        id: questions.length + 1,
        ...newQuestion,
        author: 'You',
        timestamp: 'Just now',
        votes: 0,
        answersCount: 0,
        status: 'Open',
        authorRole: 'student'
    };
    setQuestions(prev => [questionToAdd, ...prev]);
  };


  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Community Q&A</h1>
          <p className="text-muted-foreground">
            Ask questions, share knowledge, and help fellow students
          </p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Ask a Question
        </Button>
      </div>

      <div className="p-4 bg-card rounded-lg border shadow-sm">
        <div className="grid sm:grid-cols-3 gap-4">
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
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
       <AskQuestionDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onQuestionAsked={handleQuestionAsked}
      />
    </div>
  );
}
