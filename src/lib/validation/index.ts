import * as z from "zod";


export const signupFormSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    username: z.string().min(2, "Username is too short"),
    email: z.string().email("Please provide a valid email"),
    password: z.string().min(8, "Password must be of at least 8 characters")
  });