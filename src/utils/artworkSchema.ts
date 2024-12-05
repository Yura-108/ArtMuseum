import { artWorksSchema } from './API/APIValidator.ts';
import { z } from 'zod';

export type Artwork = z.infer<typeof artWorksSchema>;
