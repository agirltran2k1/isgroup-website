import { Image, Button } from "@nextui-org/react";
import { imageLoader } from "../app/utils/ImageLoader";
import NextImage from "next/image";

export default function Banner() {
  return (
    <section id="banner_ismove" className="flex flex-wrap mb-10 items-center">
      <div className="w-full p-10 lg:p-20 lg:w-2/3">
        <span className="text-black_color font-medium text-3xl leading-normal">
          Kết nối tài xế
          <span className="text-blue_color_2"> CHUYÊN NGHIỆP & DỄ DÀNG </span>
          đến nơi
        </span>

        <div className="flex gap-1 mt-2 mb-5">
          <div className="h-1 w-3 bg-blue_color_1" />
          <div className="h-1 w-10 bg-blue_color_1" />
        </div>

        <p className="text-black_color mt-6 mb-9 text-base text-gray-7 font-normal leading-loose text-center sm:text-left">
          Ứng dụng đặt xe công nghệ kết nối khách hàng với các tài xế chuyên
          nghiệp trong một môi trường thuận tiện, an toàn và hiệu quả, mang đến
          hành trình linh hoạt và tiện lợi
          <br />
        </p>

        {/*<div className="w-full text-center sm:text-left hover:transition hover:duration-200">
          <Button
            radius="full"
            size="lg"
            disableRipple={true}
            className="font-medium text-base text-blue_color_2 shadow-lg border-1 border-blue_color_2 bg-white_color hover:bg-blue_color_2 hover:text-white_color"
          >
            <a href="https://mos.giaiphap.xyz">Bắt đầu ngay →</a>
          </Button>
  </div>*/}
      </div>

      <div className="w-full lg:w-1/3">
        <Image
          as={NextImage}
          loader={imageLoader}
          width={1000}
          height={200}
          src="/assets/images/banner-3.png"
          alt=""
          className="h-auto z-0"
          radius="lg"
        />
      </div>
    </section>
  );
}
