import { string, z } from "zod";

const schema = z.object({
  activityName: z.string().min(4),
  requirements: z.array(string()),
  price: z.number().min(1),
});

export default schema;
