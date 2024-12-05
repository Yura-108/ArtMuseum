<<<<<<< HEAD
import { artWorksSchema } from './API/APIValidator.ts';
import { z } from 'zod';
=======
import { z } from 'zod';
import { artWorksSchema } from './API/APIValidator.ts';
>>>>>>> main

export type Artwork = z.infer<typeof artWorksSchema>;
