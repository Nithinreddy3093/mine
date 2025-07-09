// src/ai/flows/assist-admin-answer.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow that assists admins in preparing answers to student doubts.
 *
 * - assistAdminAnswer - A function that takes a student's doubt and generates a draft answer.
 * - AssistAdminAnswerInput - The input type for the assistAdminAnswer function.
 * - AssistAdminAnswerOutput - The return type for the assistAdminAnswer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssistAdminAnswerInputSchema = z.object({
  doubt: z.string().describe('The student\u2019s doubt that needs to be answered.'),
});
export type AssistAdminAnswerInput = z.infer<typeof AssistAdminAnswerInputSchema>;

const AssistAdminAnswerOutputSchema = z.object({
  draftAnswer: z.string().describe('A draft answer to the student\u2019s doubt.'),
});
export type AssistAdminAnswerOutput = z.infer<typeof AssistAdminAnswerOutputSchema>;

export async function assistAdminAnswer(input: AssistAdminAnswerInput): Promise<AssistAdminAnswerOutput> {
  return assistAdminAnswerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assistAdminAnswerPrompt',
  input: {schema: AssistAdminAnswerInputSchema},
  output: {schema: AssistAdminAnswerOutputSchema},
  prompt: `You are an expert assistant helping SRM University admins answer student questions.

  Generate a detailed and informative answer to the following student doubt:

  Doubt: {{{doubt}}}
  `,
});

const assistAdminAnswerFlow = ai.defineFlow(
  {
    name: 'assistAdminAnswerFlow',
    inputSchema: AssistAdminAnswerInputSchema,
    outputSchema: AssistAdminAnswerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
