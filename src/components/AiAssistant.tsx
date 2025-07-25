'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getAiAnswer } from '@/actions/ai';
import { Bot, Loader, Send, Lightbulb } from 'lucide-react';
import { useActionState, useEffect, useRef, useState } from 'react';
import { ScrollArea } from './ui/scroll-area';
import { useFormStatus } from 'react-dom';

const initialState = {
  answer: '',
};

type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const suggestions = [
    "What is the minimum attendance required at SRM?",
    "How is the GPA calculated in SRM?",
    "When do cycle tests happen?",
    "What are the hostel rules and facilities?",
    "How do I join clubs at SRM?",
    "What is the exam pattern for B.Tech?",
    "How to prepare for placements at SRM?",
    "What is the credit system in SRM?",
]

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" size="icon" aria-label="Ask" disabled={pending}>
            {pending ? <Loader className="animate-spin" /> : <Send />}
        </Button>
    )
}

export function AiAssistant({ initialQuery }: { initialQuery?: string | null }) {
  const [state, formAction, isPending] = useActionState(getAiAnswer, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  
  useEffect(() => {
    // This now runs only on the client, preventing hydration mismatch
    const welcomeMessage = {
        role: 'assistant' as const,
        content: "Hello! I'm your SRM Guide AI Assistant. I'm here to help you with any questions about SRM University. Ask me about academics, exams, attendance, hostel life, or anything else related to college life at SRM!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([welcomeMessage]);
    
    if (initialQuery && inputRef.current) {
        inputRef.current.value = initialQuery;
        formRef.current?.requestSubmit();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs once on mount on client-side

  useEffect(() => {
    if (state.answer) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: state.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }
  }, [state]);


  const handleSuggestionClick = (suggestion: string) => {
    if (inputRef.current) {
        inputRef.current.value = suggestion;
        formRef.current?.requestSubmit();
    }
  }

  const handleFormAction = (formData: FormData) => {
     const query = formData.get('query') as string;
      if (query.trim()) {
          setMessages(prev => [...prev, {
              role: 'user',
              content: query,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }]);
          formAction(formData);
          formRef.current?.reset();
      }
  }


  return (
    <div className="flex flex-col h-full bg-card rounded-xl shadow-lg">
        <div className="bg-primary text-primary-foreground p-4 rounded-t-xl flex items-center gap-4">
            <Bot className="h-8 w-8" />
            <div>
                <h1 className="text-xl font-bold">SRM Guide AI Assistant</h1>
                <p className="text-sm opacity-90">Ask me anything about SRM University</p>
            </div>
        </div>

        <div className='p-6 flex-grow overflow-hidden flex flex-col'>
            {messages.length <= 1 && (
                 <div className="p-4 border-l-4 border-accent bg-accent/10 rounded-r-lg mb-4">
                    <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-5 w-5 text-accent"/>
                        <h3 className="font-semibold text-accent-foreground">Try asking:</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                        {suggestions.map((q) => (
                            <button 
                                key={q}
                                onClick={() => handleSuggestionClick(q)}
                                className="text-sm text-primary text-left hover:underline"
                            >
                                "{q}"
                            </button>
                        ))}
                    </div>
                </div>
            )}
            <ScrollArea className="flex-1 pr-4 -mr-4 mb-4">
                <div className="space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'assistant' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                            <div className={`rounded-lg p-3 max-w-lg ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                <p className={`text-xs mt-2 ${msg.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{msg.timestamp}</p>
                            </div>
                            {msg.role === 'user' && <div className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
                        </div>
                    ))}
                     {isPending && (
                        <div className="flex items-start gap-3 justify-start">
                            <Bot className="h-6 w-6 text-primary flex-shrink-0" />
                            <div className="rounded-lg p-3 max-w-lg bg-muted flex items-center">
                                <Loader className="h-5 w-5 animate-spin text-primary"/>
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
        
            <form 
                ref={formRef}
                action={handleFormAction}
                className="flex items-center gap-2 border-t pt-4"
            >
                <Input
                ref={inputRef}
                name="query"
                placeholder="Ask your question about SRM..."
                className="flex-grow bg-background"
                required
                disabled={isPending}
                />
                <SubmitButton />
            </form>
        </div>
    </div>
  );
}
