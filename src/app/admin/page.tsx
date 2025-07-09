'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader, Wand2 } from 'lucide-react';
import { getAdminDraft } from '@/actions/ai';
import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  draftAnswer: '',
  error: null,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="w-full">
            {pending ? (
            <Loader className="animate-spin mr-2" />
            ) : (
            <Wand2 className="mr-2" />
            )}
            Generate Draft
        </Button>
    )
}

export default function AdminPage() {
  const [state, formAction] = useFormState(getAdminDraft, initialState);
  const [draft, setDraft] = useState('');
  const {toast} = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  useEffect(() => {
    if (state.draftAnswer) {
      setDraft(state.draftAnswer);
      formRef.current?.reset();
    }
    if (state.error) {
        toast({
            variant: "destructive",
            title: "Error",
            description: state.error,
        })
    }
  }, [state, toast]);


  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Admin Answer Assistant</CardTitle>
          <CardDescription>Enter a student's doubt and get an AI-generated draft answer to help you respond quickly and accurately.</CardDescription>
        </CardHeader>
        <form action={formAction} ref={formRef}>
            <CardContent>
                <Textarea
                    name="doubt"
                    placeholder="e.g., 'What are the options for a minor degree in the CSE department and what are the eligibility criteria?'"
                    rows={5}
                    required
                />
            </CardContent>
            <CardFooter>
                <SubmitButton />
            </CardFooter>
        </form>
      </Card>
      
      {draft && (
        <Card className="animate-in fade-in-50">
          <CardHeader>
            <CardTitle>Generated Draft</CardTitle>
            <CardDescription>Review and edit the draft below before sending it to the student.</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea 
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={10}
                className="bg-muted text-base" 
            />
          </CardContent>
           <CardFooter>
                <Button onClick={() => {
                    navigator.clipboard.writeText(draft);
                    toast({title: "Copied!", description: "Draft answer copied to clipboard."})
                }}>Copy Draft</Button>
           </CardFooter>
        </Card>
      )}
    </div>
  );
}
