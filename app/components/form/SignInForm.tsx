"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import Logo1 from "../layout/Header/logo1"; // Assuming this is a logo component
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { SignInInput, SignInvalidator } from "@/app/validator/signInvalidator";
import { signInuserAction } from "@/app/actions/signInaction";

const SignInForm = () => {
  const form = useForm({
    resolver: zodResolver(SignInvalidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control, formState } = form;

  const submit = async (value: SignInInput) => {
    const res = await signInuserAction(value);

    if (res.success) {
      form.reset();
      console.log("Sucessfully");
    } else {
      switch (res.statusCode) {
        case 400:
          return "sorry try again";
      }
    }
  };

  return (
    <div className="relative font-semibold min-h-screen w-full flex items-center justify-center md:p-6 bg-black overflow-hidden">
      {/* Animated Gradient Balls */}

      <div className="w-full max-w-lg md:p-8 space-y-8 rounded-lg shadow-lg  relative z-10">
        {/* Logo and Heading */}
        <div className="flex justify-center animate-bounce items-center">
          <Logo1 />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-semibold mb-2 text-white">
            Log in to your account
          </h1>
          <p className="text-sm text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={handleSubmit(submit)} className="space-y-6 ">
            {/* Name Field */}

            {/* Email Field */}
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-gray-400 peer-focus:text-yellow-400 transition-colors duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 12l-4 4m0 0l-4-4m4 4V8m0-8a7.002 7.002 0 00-6.745 5.564m13.49 0A7.002 7.002 0 0012 0z"
                            />
                          </svg>
                        </span>
                        <Input
                          type="email"
                          placeholder=" "
                          className="w-full pl-12 h-[66px] bg-gray-800 text-white rounded-md border border-transparent focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all duration-300 ease-in-out peer"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormLabel className="absolute mt-1 bg-gray-800 text-lg text-gray-400 left-4 top-3 transition-all duration-200 transform -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:-translate-y-7 peer-focus:scale-75">
                      Email
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FormControl>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-gray-400 peer-focus:text-yellow-400 transition-colors duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 11c-4.418 0-8 3.582-8 8v2h16v-2c0-4.418-3.582-8-8-8zm0-5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                        <Input
                          type="password"
                          placeholder=" "
                          className="w-full pl-12 h-[66px] bg-gray-800 text-white rounded-md border border-transparent focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300 ease-in-out peer"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormLabel className="absolute mt-1 bg-gray-800 text-lg text-gray-400 left-4 top-3 transition-all duration-200 transform -translate-y-7 scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:top-3 peer-focus:-translate-y-7 peer-focus:scale-75">
                      Password
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="my-2 flex justify-between">
              <span className="text-white">Don&apos;t have account</span>
              <Link href={"/auth/signup"}>
                <span className="text-blue-500 hover:text-blue-300">
                  Sign In
                </span>
              </Link>
            </div>

            <Button
              type="submit"
              disabled={formState.isSubmitting}
              className="h-[66px] flex transition hover:transition-all  justify-center hover:bg-black hover:border-purple-500 hover:border-2  w-full text-lg"
            >
              <LogIn className="w-5 h-5 text-white mr-3" />
              Log In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
