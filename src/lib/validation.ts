import { z } from "zod";

const requiredString = z

  .string({ required_error: "This field should have a value" })
  .trim();

// Signup
export const signUpSchema = z.object({
  email: requiredString
    .min(1, "Please an email is required")
    .describe("Email for signing up")
    .email(),
  username: requiredString
    .min(1, "You need a username")
    .describe("User username for the user.")
    .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, - and _ are allowed"),
  password: requiredString
    .min(8, "Password must be at least 8 characters")
    .describe("Password for the user."),
});

export type SignUpValues = z.infer<typeof signUpSchema>;

// Login
export const loginSchema = z.object({
  username: requiredString.min(
    1,
    "Please input your username or email that you registered with.",
  ),
  password: requiredString
    .min(1, "Password is required to login")
    .describe("Password that you registered with."),
});
export type LoginValues = z.infer<typeof loginSchema>;
export const staffLoginSchema = z.object({
  ippsNumber: z
    .number({ required_error: "Please input your staff assigned IPPS number." })
    .min(1, "Please input your staff assigned IPPS number."),
  password: requiredString
    .min(1, "Password is required to login")
    .describe("Password that you registered with."),
});
export type StaffLoginValues = z.infer<typeof staffLoginSchema>;

//User
export const userSchema = z.object({
  name: requiredString
    .min(1, "Name must be provided.")
    .transform((val) =>
      val.trim().replace(/\b\w/g, (char) => char.toUpperCase()),
    ),
  id: z.string().optional(),
  username: z.string().optional(),
  email: z.string().email().optional(),
  telephone: z
    .string()
    .optional()
    .refine((val) => !val || /^\+\d{1,3}\d{7,14}$/.test(val), {
      message:
        "Telephone number must start with a '+' followed by country code and number.",
    }),
});
export type UserSchema = z.infer<typeof userSchema>;

export const verifyUserSchema = z.object({
  name: requiredString
    .min(1, "Name must be provided.")
    .transform((val) =>
      val.trim().replace(/\b\w/g, (char) => char.toUpperCase()),
    ),
  id: requiredString.min(1, "User id is missing"),
  username: requiredString
    .min(1, "Please add a user name")
    .describe("User username for the user.")
    .regex(/^[a-zA-Z0-9_-]+$/, "Only letters, numbers, - and _ are allowed"),
  email: requiredString.email().min(1, "A working email is required"),
  telephone: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^\+\d{1,3}\d{7,14}$/.test(val), {
      message:
        "Telephone number must start with a '+' followed by country code and number.",
    }),
  password: requiredString
    .min(8, "Password must be at least 8 characters")
    .describe("Password for the user."),
});
export type VerifyUserSchema = z.infer<typeof verifyUserSchema>;

// Employee
export const employeeSchema = z.object({
  departmentalSectorId: requiredString,
  userId: requiredString,
  name: requiredString,
  ippsNumber: z.number({ required_error: "IPPS number is a must" }),
  employeeId: requiredString,
  position: requiredString,
  assumedOffice: z.number({
    required_error: "Please enter year staff assumed office.",
  }),
});
export type EmployeeSchema = z.infer<typeof employeeSchema>;

// Market
export const marketSchema = z.object({
  id: z.string().optional(),
  name: requiredString.min(1, "The market name is a requirement."),
  location: requiredString.min(1, "The market location is a requirement."),
  mapCoordinates: z.string().optional(),
});
export type MarketSchema = z.infer<typeof marketSchema>;

// miscellaneous
export const emailSchema = z.object({ email: z.string().trim().email() });
export type EmailSchema = z.infer<typeof emailSchema>;
