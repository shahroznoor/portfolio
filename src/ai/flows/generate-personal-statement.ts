'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a personal statement from LinkedIn profile data.
 *
 * - generatePersonalStatement - A function that generates a personal statement.
 * - GeneratePersonalStatementInput - The input type for the generatePersonalStatement function.
 * - GeneratePersonalStatementOutput - The return type for the generatePersonalStatement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalStatementInputSchema = z.object({
  linkedinData: z.string().describe('The data extracted from the LinkedIn profile.'),
});
export type GeneratePersonalStatementInput = z.infer<typeof GeneratePersonalStatementInputSchema>;

const GeneratePersonalStatementOutputSchema = z.object({
  personalStatement: z.string().describe('The generated personal statement.'),
});
export type GeneratePersonalStatementOutput = z.infer<typeof GeneratePersonalStatementOutputSchema>;

export async function generatePersonalStatement(
  input: GeneratePersonalStatementInput
): Promise<GeneratePersonalStatementOutput> {
  return generatePersonalStatementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalStatementPrompt',
  input: {schema: GeneratePersonalStatementInputSchema},
  output: {schema: GeneratePersonalStatementOutputSchema},
  prompt: `You are a professional resume writer. Analyze the following LinkedIn profile data and generate a compelling and professional personal statement for the 'About Me' section of a portfolio website.\n\nLinkedIn Data: {{{linkedinData}}}`,
});

const generatePersonalStatementFlow = ai.defineFlow(
  {
    name: 'generatePersonalStatementFlow',
    inputSchema: GeneratePersonalStatementInputSchema,
    outputSchema: GeneratePersonalStatementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
