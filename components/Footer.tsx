"use client"; // This is a client component
<<<<<<< HEAD
import { Image, Button } from "@nextui-org/react";

export default function Footer() {
  return (
    <section id="footer" className="w-full bg-white_color">
      <div
        id="footer-1"
        className="w-full flex flex-wrap text-black_color p-10 gap-36 items-center"
      >
        <div className="w-full md:w-2/4">
          <div className="-mt-10">
            <Image
              src="/assets/images/isgroup.png"
              alt="Home"
              width={120}
              height={0}
            />
          </div>
          <p className="-mt-5 mb-3 leading-loose">
            Ra đời vào năm 2023, ISGroup là một đội ngũ gắn kết chặt chẽ và luôn
            chuyên tâm vào việc xây dựng sản phẩm, mang đến giải pháp tối ưu cho
            khách hàng. Trong suốt quá trình xây dựng và phát triển, tinh thần
            đó không hề thay đổi.
          </p>
          <a
            href="#about"
            className="font-semibold text-black_color hover:underline leading-loose"
          >
            Về chúng tôi →
          </a>

          <div className="mt-3">
            <p className="text-black_color">Tải ứng dụng tại đây</p>
            <div className="w-full flex flex-wrap items-center">
              <Image
                src="/assets/images/ic_download_appstore.png"
                alt=""
                width={120}
                height={400}
                className="hover: cursor-pointer"
              />
              <Image
                src="/assets/images/ic_download_googleplay.png"
                alt=""
                width={160}
                height={400}
                className="hover: cursor-pointer"
              />
              <Image
                src="/assets/images/ic_download_apk.png"
                alt=""
                width={130}
                height={400}
                className="hover: cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="md:-mt-20">
          <p className="font-semibold text-black_color leading-loose">
            Tham Gia Bản Tin & Truyền Thông Tiếp Thị Của Chúng Tôi
          </p>
          <p className="leading-loose text-black_color">
            Chúng tôi sẽ gửi cho bạn tin tức và ưu đãi.
          </p>

          <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="join@example.com"
            className="p-3 mt-1 block w-full rounded-s-md bg-foreground-100 border-none focus:border-gray-500 focus:bg-white focus:ring-0"
          ></input>
          <Button
          disableRipple={true}
          className="py-6 px-10 mt-1 font-medium text-base text-white_color bg-blue_color_2 rounded-none rounded-e-md">
            Tham gia
          </Button>
          </div>
        </div>
      </div>

      <div
        id="footer-2"
        className="bg-blue_color_2 w-full flex text-white_color p-3 justify-center"
      >
        <p>© 2023 ISGroup 1</p>
      </div>
    </section>
=======
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { imageLoader } from "../app/utils/ImageLoader";

export default function Footer() {
  return (
    <div className="col_footer">
      <div className="col_footer_div_1">
        <p className="col_footer_p_1">CÔNG TY CỔ PHẦN ISGROUP</p>
      </div>

      <div className="col_footer_div_1">
        <p className="col_footer_p_1">DOANH NGHIỆP</p>
        <div className="col_footer_div_2">
          <FaAngleRight color={"#137BAE"} />
          <p>Trang chủ</p>
        </div>
        <div className="col_footer_div_2">
          <FaAngleRight color={"#137BAE"} />
          <p>Sản phẩm</p>
        </div>
        <div className="col_footer_div_2">
          <FaAngleRight color={"#137BAE"} />
          <p>Về chúng tôi</p>
        </div>
        <div className="col_footer_div_2">
          <FaAngleRight color={"#137BAE"} />
          <p>Tuyển dụng</p>
        </div>
        <div className="col_footer_div_2">
          <FaAngleRight color={"#137BAE"} />
          <p>Liên hệ</p>
        </div>
      </div>

      <div>
        <Image
          loader={imageLoader}
          src="/assets/images/email.png"
          alt="Home"
          quality="100"
          width={170}
          height={400}
          className="p-5"
        />
      </div>

      <div className="col_footer_div_1">
        <p className="col_footer_p_1">THÔNG TIN LIÊN HỆ</p>
        <div className="col_footer_div_2">
          <MdEmail color={"#137BAE"} />
          <p>abc@gmail.com</p>
        </div>
        <div className="col_footer_div_2">
          <MdPhone color={"#137BAE"} />
          <p>+84 123456789</p>
        </div>
      </div>
    </div>
>>>>>>> 0feb511ea80beb29f2c6e61c1d6645925bc4e012
  );
}
