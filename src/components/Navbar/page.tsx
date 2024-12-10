import { Heart, Menu, Search, ShoppingCart,} from 'lucide-react';
import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Navbar = () => {
  return (
    <nav className="bg-white text-black ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            width={500}
            height={30}
            src="/images/logoo.png"
            alt="Logo"
            className="w-[100px] h-[30px] md:w-[185px] md:h-[42px]"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-12">
          <Link href="/" className="hover:text-gray-400 text-[16px] font-poppins">
            Home
          </Link>
          <Link href="/Shop" className="hover:text-gray-400 text-[16px]">
            Shop
          </Link>
          <Link href="/Blog" className="hover:text-gray-400 text-[16px]">
            Blog
          </Link>
          <Link href="/ContactPage" className="hover:text-gray-400 text-[16px]">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-6">
          <Image height={10} width={10} src="/images/usericon.png" alt="User" className="w-[23px] h-[18px]" />
          <Search className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400 text-[16px]" />
          {/* <ShoppingCart className="w-[28px] h-[28px] cursor-pointer" /> */}
          <Link href="/Cart">
            <ShoppingCart className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400 text-[16px]" />
          </Link>
          {/* <Heart className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400 text-[16px]" /> */}
          <Link href="#">
            <Heart className="w-[28px] h-[28px] cursor-pointer hover:text-gray-400 text-[16px]" />
          </Link>
        </div>



        <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="p-2">
                <Heart className="w-[28px] h-[28px] cursor-pointer" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-black">
              <SheetHeader>
                <SheetTitle>Wishlist</SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                {/* Wishlist items */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <Image
                      src="/images/b1.png"
                      alt="Wishlist Item"
                      width={100}
                      height={100}
                      className="lg:w-[100px] lg:h-[100px]  object-cover"
                    />
                    <div>
                      <h3 className="text-[10px] md:text-[16px] font-poppins">Asgard Sofa</h3>
                      <p className="text-[10px] md:text-[16px] text-[#B88E2F]"><span className='text-black'>1 X </span>Rs. 44,000</p>
                    </div>
                    <div><Image src="/images/cross.png"alt="Wishlist Item"
                      width={20}
                      height={20}
                      className="" /></div>
                  
                  </div>

                  <div className="flex items-center justify-between border-b pb-4">
                    <Image
                      src="/images/pro4.png"
                      alt="Wishlist Item"
                      width={100}
                      height={100}
                      className="lg:w-[100px] lg:h-[100x] object-cover"
                    />
                    <div>
                      <h3 className="text-[10px] md:text-[16px] font-poppins">Casoliving Wood</h3>
                      <p className="text-[10px] md:text-[16px] text-[#B88E2F] "><span className='text-black'>1 X </span>Rs. 35,000</p>
                    </div>
                    <div><Image src="/images/cross.png"alt="Wishlist Item"
                      width={20}
                      height={20}
                      className="" /></div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>


        {/* Hamburger Menu (Mobile View) */}
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white text-black">
            <SheetHeader>
              <SheetTitle>
                <div className="flex justify-center">
                  <img
                    src="/images/logoo.png"
                    alt="Logo"
                    className="w-[185px] h-[42px]"
                  />
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-center gap-6 mt-6">
            <Link href="/" className="hover:text-gray-400 text-[16px] font-poppins">
            Home
          </Link>
          <Link href="/Shop" className="hover:text-gray-400 text-[16px]">
            Shop
          </Link>
          <Link href="/Blog" className="hover:text-gray-400 text-[16px]">
            Blog
          </Link>
          <Link href="/ContactPage" className="hover:text-gray-400 text-[16px]">
            Contact
          </Link>
            </div>
          </SheetContent>
        </Sheet>
      
    </nav>
                 

  );
};



export default Navbar;