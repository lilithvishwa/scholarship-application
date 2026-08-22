import { z } from "zod";

const requiredMessage = "This field is required";

export const academicDetailsSchema = z
  .object({
    levelOfEducation: z.string().min(1, requiredMessage),

    institutionName: z.string().min(1, requiredMessage),

    boardUniversity: z.string().min(1, requiredMessage),

    courseStreamSpecialization: z
      .string()
      .optional()
      .or(z.literal(""))
      .or(z.null()),

    yearOfPassing: z
      .string()
      .min(1, requiredMessage)
      .regex(/^\d{4}$/, "Enter a valid 4-digit year"),

    registerNumber: z.string().optional().or(z.literal("")).or(z.null()),

    gradingSystem: z.string().optional().or(z.literal("")).or(z.null()),

    score: z.string().optional().or(z.literal("")).or(z.null()),

    currentSemester: z
      .number()
      .max(20, "Semester must be less than 20")
      .int("Semester must be a whole number")
      .positive("Semester must be greater than 0")
      .nullable()
      .optional(),

    currentlyEnrolled: z.boolean(),
  })
  .superRefine((data, ctx) => {
    // Score validation only when score is entered
    if (data.score) {
      const score = Number(data.score);

      if (Number.isNaN(score)) {
        ctx.addIssue({
          code: "custom",
          path: ["score"],
          message: "Enter a valid score",
        });
      }

      if (data.gradingSystem === "percentage" && score > 100) {
        ctx.addIssue({
          code: "custom",
          path: ["score"],
          message: "Percentage cannot be greater than 100",
        });
      }

      if (data.gradingSystem === "cgpa" && score > 10) {
        ctx.addIssue({
          code: "custom",
          path: ["score"],
          message: "CGPA cannot be greater than 10",
        });
      }
    }
  });

export type AcademicDetailsFormData = z.infer<typeof academicDetailsSchema>;
