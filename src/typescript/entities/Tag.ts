import { createTypeFromZodSchema } from "./../helpers/createType";
import { z } from "zod";

const TagSchema = z.object({
    id: z.string().uuid(),
    tagName: z.string(),
});

export const Tag = createTypeFromZodSchema(TagSchema);