'use client';
import { useFormStatus } from 'react-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getAiAnswer } from '@/actions/ai';
import { Bot, Loader, Send, Sparkles } from 'lucide-react';
import { useActionState, useEffect, useRef } from 'react';

const initialState = {
  answer: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" aria-label="Ask" disabled={pending}>
      {pending ? <Loader className="animate-spin" /> : <Send />}
    </Button>
  );
}

export function AiAssistant() {
  const [state, formAction] = useActionState(getAiAnswer, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const { pending } = useFormStatus();

  useEffect(() => {
    if(!pending) {
        formRef.current?.reset();
    }
  }, [pending]);


  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-2 border-primary/20">
        <CardHeader>
            <CardTitle className='flex items-center gap-2'>
                <Sparkles className='text-accent'/>
                Ask your personal AI guide
            </CardTitle>
            <CardDescription>
                Type any question you have about SRM University, from exam schedules to campus life.
            </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
            ref={formRef}
            action={formAction} 
            className="flex items-center gap-2"
          >
            <Input
              name="query"
              placeholder="e.g., How is GPA calculated?"
              className="flex-grow"
              required
            />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state?.answer && (
        <Card className="bg-white animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Bot /> Here's your answer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 whitespace-pre-wrap">{state.answer}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
