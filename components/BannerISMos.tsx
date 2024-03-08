<<<<<<< HEAD
import { Image, Button } from "@nextui-org/react";

export default function Banner() {
  return (
    <section id="banner_isgroup" className="flex flex-wrap mb-10 items-center">
      <div className="w-full p-10 lg:p-20 lg:w-2/3">
        <span className="text-black_color font-medium text-3xl leading-normal">
          Giải pháp hàng đầu trong
          <span className="text-blue_color_2"> QUẢN LÝ </span>
          bán hàng
        </span>
=======
import Image from "next/image";
import Link from "next/link";
import { imageLoader } from "../app/utils/ImageLoader";

export default function Banner() {
  return (
    <div className="w-full bg-white_color">
      {/*Banner*/}
      <div>
        <Image
          loader={imageLoader}
          src="/assets/images/banner-ismos.png"
          alt="Home"
          quality="100"
          layout="responsive"
          width={500}
          height={500}
        />
>>>>>>> 0feb511ea80beb29f2c6e61c1d6645925bc4e012

        <div className="flex gap-1 mt-2 mb-5">
          <div className="h-1 w-3 bg-blue_color_1" />
          <div className="h-1 w-10 bg-blue_color_1" />
        </div>

<<<<<<< HEAD
        <p className="text-black_color mt-6 mb-9 text-base text-gray-7 font-normal leading-loose text-center sm:text-left">
          Một giải pháp quản trị bán lẻ mạnh mẽ, giúp khách hàng cũ từ đa kênh
          quay lại mua hàng.
          <br />
          Hướng đến trải nghiệm mua sắm tuyệt vời và gắn kết.
        </p>

        <div className="w-full text-center sm:text-left hover:transition hover:duration-200">
          <Button
            radius="full"
            size="lg"
            disableRipple={true}
            className="font-medium text-base text-blue_color_2 shadow-lg border-1 border-blue_color_2 bg-white_color hover:bg-blue_color_2 hover:text-white_color"
          >
            <a href="/ismos">Sử dụng miễn phí ngay</a>
          </Button>
=======
          <p className="p_4">
            Một giải pháp quản trị bán lẻ mạnh mẽ, giúp khách hàng cũ từ đa kênh
            quay lại mua hàng.
            <br />
            Hướng đến trải nghiệm mua sắm tuyệt vời và gắn kết.
          </p>
>>>>>>> 0feb511ea80beb29f2c6e61c1d6645925bc4e012
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <Image
          width={1000}
          src="/assets/images/banner-2.png"
          alt=""
          className="h-auto z-0"
          radius="lg"
        />
      </div>
    </section>
  );
}
