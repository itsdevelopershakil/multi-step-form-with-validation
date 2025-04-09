import { z } from "zod";

export const formValidation = z
  .object({
    fullName: z.string().min(1, "Full Name is Required!!!"),
    email: z
      .string()
      .email("Invalid Email Address!!!")
      .min(1, "Email is Required!!!"),
    phoneNumber: z.string().min(10, "Must be at least 10 digits!!!"),
    streetAddress: z.string().min(1, "Street Address is Required!!!"),
    city: z.string().min(1, "City is Required!!!"),
    zipCode: z
      .string({ message: "Zip Code is Required!!!" })
      .min(5, "Minimum 5 Digits Required!!!"),
    userName: z
      .string({ message: "UserName is Required!!!" })
      .min(5, "Minimum 4 characters Required!!!"),
    passWord: z
      .string({ message: "Password is Required!!!" })
      .min(5, "Minimum 6 characters Required!!!"),
    confirmPassWord: z.string(),
  })
  .refine((data) => data.passWord === data.confirmPassWord, {
    message: "Password doesn't matched!!!",
    path: ["confirmPassWord"],
  });
