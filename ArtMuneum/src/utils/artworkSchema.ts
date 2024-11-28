import { z } from 'zod';
import { artWorksSchema } from './API/APIValidator.ts';

export type Artwork = z.infer<typeof artWorksSchema>;
