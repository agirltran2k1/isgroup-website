"use client"; // This is a client component
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Image, Button } from "@nextui-org/react";

import React, { useEffect, useState } from "react";
import { imageLoader } from "../app/utils/ImageLoader";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isClick, setIsClick] = useState(false);

  const handleToogleNavbar = () => {
    setIsClick(!isClick);
  };

  const menuItems = [
    { id: 1, label: "Trang chủ", route: "/ismos" },
    { id: 2, label: "Giới thiệu", route: "/ismos/introduction" },
    { id: 3, label: "Bảng giá", route: "/ismos/price_list" },
    { id: 4, label: "Hướng dẫn", route: "/ismos/instruction" },
    { id: 5, label: "Về ISGroup", route: "/" },
    // Add more menu items as needed
  ];

  const handleItemClick = (itemId: number) => {
    setSelectedItem(itemId);
  };

  const content = (
    <>
      <div className="min-1001:hidden block absolute items-center w-full top-16 left-0 right-0 bg-white_color z-50 transition">
        <ul className=" text-black_color">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.route}>
              <div
                className={`hover:bg-blue_color_1 hover:bg-opacity-10 px-8 ${
                  selectedItem === item.id ? "active" : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <li className="font-medium my-4 py-4 hover:text-blue_color_2">
                  {item.label}
                </li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY > 4;
      setScrolling(offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full h-20 px-auto bg-white_color z-20 ${
        scrolling ? "shadow-scroll" : ""
      }`}
    >
      <div className="h-full flex items-center justify-between mx-auto px-4 bg-white_color">
        <Link href="/ismos">
          <div className="w-8/12">
            <Image
              loader={imageLoader}
              src="/assets/images/ismos.png"
              alt="Home"
              width={200}
              height={0}
            />
          </div>
        </Link>

        <div>
          <ul className="hidden min-1001:inline-flex items-center text-black_color">
            {menuItems.map((item) => (
              <Link className="navbarLi" key={item.id} href={item.route}>
                <div
                  className={selectedItem === item.id ? "active" : ""}
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </ul>
        </div>

        <div>{isClick && content}</div>

        <div className="inline-flex justify-center items-center gap-6">
          <div>
            <button
              className="block min-1001:hidden transtion"
              onClick={handleToogleNavbar}
            >
              {isClick ? (
                <IoCloseSharp size={32} color="#424242" />
              ) : (
                <RiMenu3Fill size={28} color="#424242" />
              )}
            </button>
          </div>

          <Link href="/" className="use-button">
            Dùng ngay
          </Link>
        </div>
<<<<<<< HEAD
        
        <div className="w-full text-center sm:text-left hover:transition hover:duration-200">
          <Button
            radius="full"
            size="lg"
            disableRipple={true}
            className="font-medium text-base text-blue_color_2 shadow-lg border-1 border-blue_color_2 bg-white_color hover:bg-blue_color_2 hover:text-white_color"
          >
            <a href="/">Sử dụng ngay</a>
          </Button>
        </div>
=======
>>>>>>> 0feb511ea80beb29f2c6e61c1d6645925bc4e012
      </div>
    </div>
  );
}
