'use client';

import { AiAssistant } from "@/components/AiAssistant";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

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
        <Suspense fallback={<div>Loading...</div>}>
            <AiAssistantPageComponent />
        </Suspense>
    )
}