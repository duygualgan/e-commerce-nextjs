import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <div className="relative cursor-pointer">
            <span className="text-mycolor1 bg-mycolor3 absolute text-xs font-semibold rounded-lg items-center justify-center text-center -right-2 -top-1 w-5 h-5">
              3
            </span>
            <ShoppingBag />
          </div>
        </SheetTrigger>
        <SheetContent className="bgone">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
