import { z } from "zod";

const parentSchema = z.object({
  isNotApplicable: z.boolean(),

  name: z.string(),

  occupation: z.string(),

  mobile: z.string(),
});

const requiredMessage = "This field is required";

export const familyDetailsSchema = z
  .object({
    father: parentSchema,
    mother: parentSchema,

    guardian: z.object({
      name: z.string(),
      occupation: z.string(),
      mobile: z.string(),
    }),

    annualFamilyIncome: z.string().min(1, requiredMessage),
  })
  .superRefine((data, ctx) => {
    // Father validation
    if (!data.father.isNotApplicable) {
      if (!data.father.name.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["father", "name"],
          message: requiredMessage,
        });
      }

      if (!data.father.occupation) {
        ctx.addIssue({
          code: "custom",
          path: ["father", "occupation"],
          message: requiredMessage,
        });
      }

      if (!/^\d{10}$/.test(data.father.mobile)) {
        ctx.addIssue({
          code: "custom",
          path: ["father", "mobile"],
          message: "Enter a valid 10-digit mobile number",
        });
      }
    }

    // Mother validation
    if (!data.mother.isNotApplicable) {
      if (!data.mother.name.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["mother", "name"],
          message: requiredMessage,
        });
      }

      if (!data.mother.occupation) {
        ctx.addIssue({
          code: "custom",
          path: ["mother", "occupation"],
          message: requiredMessage,
        });
      }

      if (!/^\d{10}$/.test(data.mother.mobile)) {
        ctx.addIssue({
          code: "custom",
          path: ["mother", "mobile"],
          message: "Enter a valid 10-digit mobile number",
        });
      }
    }

    // Guardian is required only when both parents are N/A
    const guardianRequired =
      data.father.isNotApplicable && data.mother.isNotApplicable;

    if (guardianRequired) {
      if (!data.guardian.name.trim()) {
        ctx.addIssue({
          code: "custom",
          path: ["guardian", "name"],
          message: requiredMessage,
        });
      }

      if (!data.guardian.occupation) {
        ctx.addIssue({
          code: "custom",
          path: ["guardian", "occupation"],
          message: requiredMessage,
        });
      }

      if (!/^\d{10}$/.test(data.guardian.mobile)) {
        ctx.addIssue({
          code: "custom",
          path: ["guardian", "mobile"],
          message: "Enter a valid 10-digit mobile number",
        });
      }
    }
  });

export type FamilyDetailsFormData = z.infer<typeof familyDetailsSchema>;
