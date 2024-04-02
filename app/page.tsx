"use client";
import { useState } from "react";
import NavBar from "@/components/NavBarISGroup";
import Banner from "@/components/BannerISGroup";
import Link from "next/link";
import React from "react";
import { Image } from "@nextui-org/react";
import { imageLoader } from "./utils/ImageLoader";
import NextImage from "next/image";

export default function Page() {
  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-white_color">
        <Banner />

        <section id="my_product" className="mb-10">
          <div>
            <p className="text-black_color text-3xl font-medium text-center pt-10 leading-loose">
              Sản phẩm của chúng tôi
            </p>
            <p className="text-black_color mb-9 text-base text-gray-7 font-normal text-center">
              Những dự án nổi bật
            </p>
          </div>

          <div className="justify-center flex flex-wrap gap-10 w-full">
            <div className="flex flex-col shadow-lg rounded-xl overflow-hidden hover:cursor-pointer hover:scale-110 transition">
              <div className="relative h-[234px] w-[320px] overflow-visible">
                <Image
                  width={320}
                  height={100}
                  loader={imageLoader}
                  as={NextImage}
                  src="/assets/images/cart.png"
                  alt=""
                  className="h-[210px]"
                  radius="none"
                />
              </div>
              <div className="flex justify-center items-center h-[50px]">
                <p className="font-medium text-large text-black_color -mt-7">
                  Thương mại điện tử
                </p>
              </div>
            </div>

            <div className="flex flex-col shadow-lg rounded-xl overflow-hidden hover:cursor-pointer hover:scale-110 transition">
              <Link href="/ismos/">
                <div className="relative h-[234px] w-[320px] overflow-visible">
                  <Image
                    as={NextImage}
                    loader={imageLoader}
                    width={320}
                    height={100}
                    src="/assets/images/shop_window.png"
                    alt=""
                    className="h-[210px]"
                    radius="none"
                  />
                </div>
                <div className="flex justify-center items-center h-[50px]">
                  <p className="font-medium text-large text-black_color -mt-7">
                    Quản lý gian hàng
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex flex-col shadow-lg rounded-xl overflow-hidden hover:cursor-pointer hover:scale-110 transition">
              <Link href="/ismove/">
              <div className=" relative h-[234px] w-[320px] overflow-visible">
                <Image
                  width={320}
                  as={NextImage}
                  loader={imageLoader}
                  height={100}
                  src="/assets/images/delivery.png"
                  alt=""
                  className="h-[210px]"
                  radius="none"
                />
              </div>
              <div className="flex justify-center items-center h-[50px]">
                <p className="font-medium text-large text-black_color -mt-7">
                  Gọi xe - Giao hàng
                </p>
              </div>
              </Link>
            </div>

            <div className="w-[300px] flex flex-col shadow-lg rounded-xl overflow-hidden hover:cursor-pointer hover:scale-110 transition">
              <div className="relative h-[234px] overflow-visible">
                <Image
                  width={320}
                  as={NextImage}
                  loader={imageLoader}
                  height={100}
                  src="/assets/images/cottage.png"
                  alt=""
                  className="h-[210px]"
                  radius="none"
                />
              </div>
              <div className="flex justify-center items-center h-[50px]">
                <p className="font-medium text-large text-black_color -mt-7">
                  Mua bán nhà đất
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="justify-center pb-20">
          <div className="flex flex-wrap w-full justify-center items-center p-10 gap-10">
            <div className="w-full lg:w-1/2 ">
              <p className="text-black_color text-3xl font-medium">Sứ mệnh</p>

              <div className="flex gap-1 mt-2 mb-5">
                <div className="h-1 w-3 bg-danger-500" />
                <div className="h-1 w-10 bg-danger-500" />
              </div>

              <p className="text-black_color text-base leading-loose">
                ISGROUP - khởi nghiệp nổi bật trong lĩnh vực phần mềm, được
                thành lập với tầm nhìn đột phá và đầy tham vọng. Chúng tôi là
                đơn vị tiên phong trong việc xây dựng một ứng dụng đa nhiệm. Mục
                tiêu chính là phục vụ cộng đồng.
                <br />
                <br />
                Chúng tôi tin rằng sự tương tác mạnh mẽ của cộng đồng sẽ góp
                phần xây dựng và phát triển nền kinh tế. Vì vậy, chúng tôi tự
                tin phát triển một nền tảng độc đáo, cho phép chủ gian hàng có
                thể nhận được các lợi ích từ nền tảng.
                <br />
                <br />
                Đồng thời, thành viên mua sắm sẽ được hưởng một trải nghiệm tiện
                lợi thông qua ứng dụng di động hoặc website của chúng tôi để tìm
                kiếm, so sánh và mua sắm các sản phẩm hoặc dịch vụ từ các cửa
                hàng mà họ yêu thích.
              </p>
            </div>

            <div>
              <Image
                as={NextImage}
                loader={imageLoader}
                src="/assets/images/about_banner_1.png"
                alt=""
                width={350}
                height={200}
              />
            </div>
          </div>

          <div className="flex flex-wrap-reverse w-full justify-center items-center p-10 gap-10">
            <div>
              <Image
                as={NextImage}
                loader={imageLoader}
                src="/assets/images/about_banner_2.png"
                alt=""
                width={350}
                height={200}
              />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-black_color text-3xl font-medium">
                Chúng tôi mang đến những gì?
              </p>

              <div className="flex gap-1 mt-2 mb-5">
                <div className="h-1 w-3 bg-secondary-500" />
                <div className="h-1 w-10 bg-secondary-500" />
              </div>

              <p className="text-black_color text-base leading-loose">
                Chúng tôi luôn tập trung vào việc cung cấp giải pháp hiệu quả và
                dễ sử dụng cho các doanh nghiệp nhỏ và vừa cũng như đảm bảo rằng
                người tiêu dùng luôn có trải nghiệm mua sắm tốt nhất. Sứ mệnh
                của ISGROUP là thúc đẩy phát triển kinh doanh cho các chủ gian
                hàng, đồng thời nâng cao trải nghiệm mua sắm cho thành viên.
                <br />
                <br />
                Chúng tôi tự hào về những thành tựu đã đạt được và cam kết luôn
                tiến xa hơn để làm cho việc quản lý kinh doanh và mua sắm trở
                nên đơn giản, thông minh hơn.
              </p>
            </div>
          </div>
        </section>

        <div>
          <svg
            id="visual"
            viewBox="0 0 2500 150"
            width="2500"
            height="150"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="w-full h-auto"
          >
            <rect x="0" y="0" width="2500" height="150" fill="#FFFFFF"></rect>
            <path
              d="M0 41L139 77L278 49L417 86L556 100L694 109L833 71L972 93L1111 69L1250 63L1389 58L1528 38L1667 61L1806 85L1944 53L2083 81L2222 84L2361 82L2500 97L2500 151L2361 151L2222 151L2083 151L1944 151L1806 151L1667 151L1528 151L1389 151L1250 151L1111 151L972 151L833 151L694 151L556 151L417 151L278 151L139 151L0 151Z"
              fill="#f5f5f5"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            ></path>
          </svg>
        </div>
        <section id="clients_rate" className="pb-10 -mt-16 bg-foreground-100">
          <div>
            <p className="text-black_color text-3xl font-medium text-center pt-10 leading-loose">
              Đánh giá
            </p>
            <p className="text-black_color mb-9 text-base text-gray-7 font-normal text-center">
              Khách hàng nói gì về chúng tôi?
            </p>
          </div>

          <div
            id="rate_list"
            className="justify-center flex flex-wrap w-full gap-10 p-10 -mt-10"
          >
            <div
              id="rate_box"
              className="rounded-lg bg-white_color p-10 w-[400px]"
            >
              <div className="flex items-center mb-3">
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 ms-1 text-foreground-300 dark:text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>

              <div>
                <p className="text-lg font-semibold text-black_color leading-loose">
                  Tuyệt vời
                </p>
                <p className="text-gray_blur_color leading-loose text-sm">
                  Không chỉ đáp ứng nhu cầu mà còn mang đến những sự đột phá.
                  Chính sự chuyên nghiệp, linh hoạt và tận tâm của họ đã giúp
                  chúng tôi có được một trải nghiệm làm việc và hợp tác đáng
                  nhớ.
                </p>
                <p className="text-blue_color_2 leading-loose text-sm font-medium text-right">
                  Nguyễn Thu Trang - Tháng 3,2024
                </p>
              </div>
            </div>

            <div
              id="rate_box"
              className="rounded-lg bg-white_color p-10  w-[400px]"
            >
              <div className="flex items-center mb-3">
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>

              <div>
                <p className="text-lg font-semibold text-black_color leading-loose">
                  Tốt lắm
                </p>
                <p className="text-gray_blur_color leading-loose text-sm">
                  Dịch vụ phát triển mà ISGroup cung cấp thực sự rất ấn tượng.
                  Họ không chỉ mang đến sản phẩm có chất lượng vượt trội mà còn
                  thể hiện được sự tận tâm, chuyên nghiệp trong từng chi tiết.
                  Tôi hoàn toàn hài lòng với sản phẩm đầu ra và không thể vui
                  hơn với sự lựa chọn này.
                </p>
                <p className="text-blue_color_2 leading-loose text-sm font-medium text-right">
                  Trần Minh Nhân - Tháng 3,2024
                </p>
              </div>
            </div>

            <div
              id="rate_box"
              className="rounded-lg bg-white_color p-10  w-[400px]"
            >
              <div className="flex items-center mb-3">
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-warning-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>

              <div>
                <p className="text-lg font-semibold text-black_color leading-loose">
                  Tôi rất thích
                </p>
                <p className="text-gray_blur_color leading-loose text-sm">
                  Phần mềm sử dụng rất tốt. Mong các bạn tiếp tục phát triển.
                </p>
                <p className="text-blue_color_2 leading-loose text-sm font-medium text-right">
                  Trần Văn Toàn - Tháng 1,2024
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
