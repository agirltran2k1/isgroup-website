"use client"; // This is a client component
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
  );
}
