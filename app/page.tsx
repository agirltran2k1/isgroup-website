"use client";
import NavBar from "@/components/NavBarISGroup";
import Banner from "@/components/BannerISGroup";
import Link from "next/link";
import React from "react";
import { Image } from "@nextui-org/react";
import { imageLoader } from "./utils/ImageLoader";
import NextImage from "next/image";
// import { useRouter } from "next/router";

export default function Page() {
  // const router = useRouter();
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
              <Link href="#">
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
              </Link>
            </div>

            <div className="flex flex-col shadow-lg rounded-xl overflow-hidden hover:cursor-pointer hover:scale-110 transition">
              <Link href="/ismos/home">
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
              <Link href="/ismove/home">
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
              strokeLinecap="square"
              strokeLinejoin="bevel"
            ></path>
          </svg>
        </div>
      </main>
    </div>
  );
}
export const dynamic = "force-dynamic";
