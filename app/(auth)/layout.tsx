import Logo from "@/components/Logo";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayoutProps = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-screen flex justify-center items-center bgone">
      <div className="hidden lg:block w-1/2 h-full">
        <Image
          src="/login.jpg"
          alt="login"
          width={1080}
          height={1920}
          className="h-full w-full object-cover object-top"
        ></Image>
      </div>
      <div className="w-full lg:w-1/2 p-10 flex flex-col items-center justify-center">
        <div className="flex items-center mb-6">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayoutProps;
