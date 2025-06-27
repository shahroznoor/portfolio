'use server';

/**
 * @fileOverview LinkedIn work experience summarization flow.
 *
 * - summarizeExperience - A function that summarizes work experience descriptions into bullet points.
 * - SummarizeExperienceInput - The input type for the summarizeExperience function.
 * - SummarizeExperienceOutput - The return type for the summarizeExperience function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeExperienceInputSchema = z.object({
  experienceDescription: z
    .string()
    .describe('The detailed description of a work experience from LinkedIn.'),
});
export type SummarizeExperienceInput = z.infer<typeof SummarizeExperienceInputSchema>;

const SummarizeExperienceOutputSchema = z.object({
  summaryPoints: z
    .array(z.string())
    .describe('A list of concise and impactful bullet points summarizing the work experience.'),
});
export type SummarizeExperienceOutput = z.infer<typeof SummarizeExperienceOutputSchema>;

export async function summarizeExperience(
  input: SummarizeExperienceInput
): Promise<SummarizeExperienceOutput> {
  return summarizeExperienceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeExperiencePrompt',
  input: {schema: SummarizeExperienceInputSchema},
  output: {schema: SummarizeExperienceOutputSchema},
  prompt: `You are a resume expert. Summarize the following work experience description into 3-5 concise and impactful bullet points, highlighting key achievements and responsibilities.\n\nExperience Description: {{{experienceDescription}}}`,
});

const summarizeExperienceFlow = ai.defineFlow(
  {
    name: 'summarizeExperienceFlow',
    inputSchema: SummarizeExperienceInputSchema,
    outputSchema: SummarizeExperienceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
