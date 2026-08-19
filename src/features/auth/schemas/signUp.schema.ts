import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "this field is required"),
    email: z
      .string()
      .min(1, "This field required")
      .pipe(z.email("Enter a valid email address")),
    password: z.string().min(3, "Password must be at least 3 characters"),
    confirmPassword: z
      .string()
      .min(3, "Password must be at least 3 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export type signUpSchemaData = z.infer<typeof signUpSchema>;
