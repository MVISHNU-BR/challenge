"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import loginImage from "@/assets/login-img.png";
import { z } from "zod";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const FormSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.email === "user@example.com" && data.password === "password123") {
      toast.success("Login successful!");
    } else {
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[linear-gradient(180deg,_rgba(241,241,241,1)_50%,_rgba(226,54,54,1)_50%)] px-5">
      <div className="md:flex justify-center max-w-[925px] w-full bg-white rounded-2xl ">
        <div className="">
          <Image src={loginImage} width={484} height={484} alt="login image" />
        </div>

        <div className=" flex flex-col p-5 justify-center md:max-w-[400px] w-full ">
          <h1 className="text-3xl">Login</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="sm:w-5/6 space-y-6 py-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    {formState.errors.email && (
                      <FormMessage>
                        {formState.errors.email.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field, formState }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    {formState.errors.password && (
                      <FormMessage>
                        {formState.errors.password.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <Button type="submit">Login</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
