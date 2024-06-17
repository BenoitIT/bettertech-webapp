import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  subject:z.string().min(2),
  message:z.string().min(2),
});

export default schema;
