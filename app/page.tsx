"use client";
import NavBar from "@/components/NavBarISGroup";
import Banner from "@/components/BannerISGroup";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "./utils/ImageLoader";

export default function Page() {
  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-white_color">
        <Banner />

        <div className="w-full h-full">
          <p className="text-black_color text-xl font-medium my-12 text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl ">
            Sản phẩm của chúng tôi
          </p>

          <div className="col_products">
            <div>
              <Image
                loader={imageLoader}
                src="/assets/images/cart.png"
                alt="Home"
                quality="100"
                layout="responsive"
                width={500}
                height={500}
                className="p-10"
              />
              <p>Thương mại điện tử</p>
            </div>

            <div>
              <Link href="/ismos/">
                <Image
                  loader={imageLoader}
                  src="/assets/images/shop_window.png"
                  alt="Home"
                  quality="100"
                  layout="responsive"
                  width={500}
                  height={500}
                  className="p-10"
                />
                <p>
                  Quản lý gian hàng <br /> & Hỗ trợ bán hàng
                </p>
              </Link>
            </div>

            <div>
              <Image
                loader={imageLoader}
                src="/assets/images/delivery.png"
                alt="Home"
                quality="100"
                layout="responsive"
                width={500}
                height={500}
                className="p-10"
              />
              <p>Gọi xe & Giao hàng</p>
            </div>

            <div>
              <Image
                loader={imageLoader}
                src="/assets/images/cottage.png"
                alt="Home"
                quality="100"
                layout="responsive"
                width={500}
                height={500}
                className="p-10"
              />
              <p>Mua bán bất động sản</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
