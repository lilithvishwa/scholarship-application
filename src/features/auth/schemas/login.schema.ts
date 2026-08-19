import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "This field required")
    .pipe(z.email("Enter a valid email address")),
  password: z.string().min(3, "Password must be at least 3 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
