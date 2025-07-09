// src/ai/flows/answer-student-query.ts
'use server';

/**
 * @fileOverview An AI agent that answers student queries about college life.
 *
 * - answerStudentQuery - A function that handles the student query and returns an answer.
 * - AnswerStudentQueryInput - The input type for the answerStudentQuery function.
 * - AnswerStudentQueryOutput - The return type for the answerStudentQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerStudentQueryInputSchema = z.object({
  query: z.string().describe('The question from the student.'),
});
export type AnswerStudentQueryInput = z.infer<typeof AnswerStudentQueryInputSchema>;

const AnswerStudentQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the student query.'),
});
export type AnswerStudentQueryOutput = z.infer<typeof AnswerStudentQueryOutputSchema>;

export async function answerStudentQuery(input: AnswerStudentQueryInput): Promise<AnswerStudentQueryOutput> {
  return answerStudentQueryFlow(input);
}

const answerStudentQueryPrompt = ai.definePrompt({
  name: 'answerStudentQueryPrompt',
  input: {schema: AnswerStudentQueryInputSchema},
  output: {schema: AnswerStudentQueryOutputSchema},
  prompt: `You are a helpful AI assistant for SRM University freshers. Answer the following question clearly and concisely:\n\nQuestion: {{{query}}}`,
});

const answerStudentQueryFlow = ai.defineFlow(
  {
    name: 'answerStudentQueryFlow',
    inputSchema: AnswerStudentQueryInputSchema,
    outputSchema: AnswerStudentQueryOutputSchema,
  },
  async input => {
    const {output} = await answerStudentQueryPrompt(input);
    return output!;
  }
);
