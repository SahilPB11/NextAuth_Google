import User from "@/models/User";
import connectDB from "@/config/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { username, email, password, confirmPassword } = await req.json();
  if (password !== confirmPassword) {
    return new NextResponse(
      JSON.stringify({ error: "Passwords do not match" }, { status: 400 })
    );
  }
  await connectDB();

  const existingUsers = await User.findOne({ email });
  if (existingUsers) {
    return new NextResponse(
      JSON.stringify({ error: "User already exist", status: 400 })
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    return new NextResponse("User successfully registerd", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
