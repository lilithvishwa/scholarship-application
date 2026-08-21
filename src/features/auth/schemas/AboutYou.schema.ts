import { z } from "zod";

let message = "This field is required";
let mobileNumberRegex = /^[6-9]\d{9}$/;

export const personalDetailsSchema = z
  .object({
    dob: z.string().min(1, message),

    gender: z.string().min(1, message),

    nationality: z.string().min(1, message),

    phone: z
      .string()
      .min(1, message)
      .regex(mobileNumberRegex, "Enter a valid phone number"),

    alternatePhone: z
      .string()
      .regex(mobileNumberRegex, "Enter a valid phone number")
      .optional()
      .or(z.literal(""))
      .or(z.null()),

    street: z.string().min(1, message),

    city: z.string(),

    district: z.string(),

    state: z.string(),

    pincode: z
      .string()
      .min(1, message)
      .regex(/^\d{6}$/, "Pincode must be exactly 6 digits"),

    country: z.string().min(1, message),
  })
  .superRefine((data, ctx) => {
    if (!data.pincode) {
      ctx.addIssue({
        code: "custom",
        path: ["city"],
        message: "Enter a pincode to select a city",
      });
    } else if (!data.city) {
      ctx.addIssue({
        code: "custom",
        path: ["city"],
        message: "Please select a city",
      });
    }
  });

export type FormData = z.infer<typeof personalDetailsSchema>;
