// src/actions/ai.ts
'use server';

import { answerStudentQuery } from '@/ai/flows/answer-student-query';
import { assistAdminAnswer } from '@/ai/flows/assist-admin-answer';
import { z } from 'zod';

const querySchema = z.string().min(1, 'Please provide a query.');

export async function getAiAnswer(prevState: any, formData: FormData) {
  const query = formData.get('query') as string;
  const validatedQuery = querySchema.safeParse(query);

  if (!validatedQuery.success) {
    return { answer: validatedQuery.error.errors[0].message };
  }

  try {
    const result = await answerStudentQuery({ query: validatedQuery.data });
    return { answer: result.answer };
  } catch (e) {
    console.error(e);
    return { answer: "Sorry, I couldn't process your request. Please try again." };
  }
}

const doubtSchema = z.string().min(1, "Doubt cannot be empty.");

export async function getAdminDraft(prevState: any, formData: FormData) {
    const doubt = formData.get('doubt') as string;
    const validatedDoubt = doubtSchema.safeParse(doubt);

    if (!validatedDoubt.success) {
        return { error: validatedDoubt.error.flatten().fieldErrors.doubt?.[0] };
    }

    try {
        const result = await assistAdminAnswer({ doubt: validatedDoubt.data });
        return { draftAnswer: result.draftAnswer, error: null };
    } catch (e) {
        console.error(e);
        return { error: 'An unexpected error occurred. Please try again.' };
    }
}
