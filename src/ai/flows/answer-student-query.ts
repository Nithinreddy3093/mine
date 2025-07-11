
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
import { faqs } from '@/lib/data';

const AnswerStudentQueryInputSchema = z.object({
  query: z.string().describe('The question from the student.'),
});
export type AnswerStudentQueryInput = z.infer<typeof AnswerStudentQueryInputSchema>;

const AnswerStudentQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the student query.'),
});
export type AnswerStudentQueryOutput = z.infer<typeof AnswerStudentQueryOutputSchema>;

export async function answerStudentQuery(input: AnswerStudentQueryInput): Promise<AnswerStudentQueryOutput> {
  // Serialize the FAQ data to pass to the prompt
  const faqContext = JSON.stringify(faqs);
  return answerStudentQueryFlow({ ...input, faqContext });
}

const answerStudentQueryPrompt = ai.definePrompt({
  name: 'answerStudentQueryPrompt',
  input: {schema: z.object({
    query: z.string(),
    faqContext: z.string(),
  })},
  output: {schema: AnswerStudentQueryOutputSchema},
  prompt: `You are SRM Navigator, a friendly and knowledgeable AI assistant designed to help students at SRM University. Your personality is that of a helpful senior student who knows all the ins and outs of college life.

Your goal is to provide clear, comprehensive, and friendly answers to student questions.

You have access to a set of Frequently Asked Questions (FAQs) to ensure your answers are accurate and specific to SRM. Use this information as your primary source of truth.

FAQs Context:
{{{faqContext}}}

Now, please answer the following student's question. Be encouraging and use formatting like lists or bold text to make the information easy to digest.

Student's Question: {{{query}}}`,
});

const answerStudentQueryFlow = ai.defineFlow(
  {
    name: 'answerStudentQueryFlow',
    inputSchema: z.object({
        query: AnswerStudentQueryInputSchema.shape.query,
        faqContext: z.string(),
    }),
    outputSchema: AnswerStudentQueryOutputSchema,
  },
  async input => {
    const {output} = await answerStudentQueryPrompt(input);
    return output!;
  }
);
