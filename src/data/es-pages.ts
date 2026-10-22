// Spanish text for pages other than the service pages. English text (exact) or template -> Spanish.
import { locationsEs, locationTerms } from './es-locations';
import { dentalEcmEs } from './es-dental-ecm';
import { miscEs } from './es-misc';

export const pagesEs: { phrases: Record<string, string>; terms?: Record<string, string> } = {
  phrases: { ...locationsEs, ...dentalEcmEs, ...miscEs },
  terms: { ...locationTerms },
};
