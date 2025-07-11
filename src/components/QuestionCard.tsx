
import type { CommunityQuestion } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, MessageSquare, ThumbsUp, UserCircle, Clock } from 'lucide-react';

export function QuestionCard({ question }: { question: CommunityQuestion }) {
  const isAnswered = question.status === 'Answered';

  return (
    <Card className="hover:bg-muted/50 transition-colors">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant={isAnswered ? 'default' : 'secondary'} className={isAnswered ? 'bg-green-100 text-green-800 border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200'}>
              {isAnswered && <CheckCircle2 className="mr-1 h-3 w-3" />}
              {question.status}
            </Badge>
            <Badge variant="outline">{question.category}</Badge>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{question.description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-muted-foreground">
            <div className='flex items-center gap-4'>
                <div className="flex items-center gap-1">
                    <UserCircle className="h-4 w-4" />
                    <span>{question.author}</span>
                    <Badge variant="outline" className="text-xs">{question.authorRole}</Badge>
                </div>
                <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{question.timestamp}</span>
                </div>
            </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>{question.votes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{question.answersCount}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
