import { z } from "zod";

const schema = z.object({
  quantity: z.number(),
});

export default schema;
