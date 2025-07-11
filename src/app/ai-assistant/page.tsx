'use client';

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import { Loader } from "lucide-react";

// Dynamically import the AiAssistant component with SSR turned off
const AiAssistant = dynamic(() => import('@/components/AiAssistant').then(mod => mod.AiAssistant), { 
    ssr: false,
    loading: () => <div className="flex h-full items-center justify-center"><Loader className="animate-spin h-8 w-8 text-primary" /></div>
});

function AiAssistantPageComponent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    return (
        <div className="flex-1 p-4 md:p-6 lg:p-8">
            <div className="mx-auto max-w-4xl h-[calc(100vh-10rem)]">
                <AiAssistant initialQuery={query} />
            </div>
        </div>
    );
}

export default function AiAssistantPage() {
    return (
        <Suspense fallback={<div className="flex h-full items-center justify-center"><Loader className="animate-spin h-8 w-8 text-primary" /></div>}>
            <AiAssistantPageComponent />
        </Suspense>
    )
}
