"use client";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";
import useAuthStore from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";

import { startSession } from "@/lib/session";
import loginUser from "@/actions/login";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});

const LoginPage = () => {
  const { loader, setLoader } = useAuthStore();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setLoader(true);
    loginUser(data.email, data.password)
      .then(
        (resp) => {
          startSession(resp.user, resp.jwt);
          toast({
            variant: "success",
            title: "accounct created",
          });
          setLoader(false);
          router.push("/");
        },
        (error) => {
          setLoader(false);
          toast({
            variant: "destructive",
            title: "something went wrong",
          });
        }
      )
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-4/5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>

              <FormMessage className="validationLogin" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>

              <FormMessage className="validationLogin" />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          {loader ? <Loader2Icon className="animate-spin" /> : "Login"}
        </Button>
      </form>
      <div className="mt-8">
        <Label className="flex flex-col items-center">
          Dont have an account
          <Link
            href="/create-user"
            className="text-mycolor3 font-semibold mt-5 "
          >
            Click Here to create a new account
          </Link>
        </Label>
      </div>
    </Form>
  );
};

export default LoginPage;
