"use server";

import prisma from "./prisma";
import { RegisterValidation } from "./validation/register";

export async function registerStore(
  prevState: string | null,
  formData: FormData
) {
  const validatedFields = RegisterValidation.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  if (!validatedFields.success) {
    // console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const insertToDb = await prisma.user.create({
      data: {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      },
    });
    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      message: "Data gagal tersimpan",
    };
  }
}
