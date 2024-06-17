import { z } from "zod";

const schema = z.object({
  clientNames: z.string().min(4),
  clientType: z.string().min(3),
  industry: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
  province: z.string().min(2),
  district: z.string().min(2),
});

export default schema;
