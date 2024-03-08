"use client";
import NavBar from "@/components/NavBarISMos";
import Bussiness_Inf from "@/components/Bussiness_Inf";
import Banner from "@/components/BannerISMos";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { RxChevronUp } from "react-icons/rx";
import { imageLoader } from "@/app/utils/ImageLoader";

export default function Page() {
  const menuItems = [
    {
      id: 1,
      label: "Sản phẩm",
      description:
        "Thêm sản phẩm, tạo nhóm sản phẩm và quản lý tất cả sản phẩm của bạn.",
      img: "/assets/images/ISMOS/img_26.png",
    },
    {
      id: 2,
      label: "Bán hàng",
      description:
        "Tất cả các nghiệp vụ liên quan tới bán hàng tại cửa hàng. Ca bán hàng, chuyển ca, thêm sản phẩm vào giỏ hàng...",
      img: "/assets/images/ISMOS/img_27.png",
    },
    {
      id: 3,
      label: "Thanh toán",
      description:
        "Thêm sản phẩm, tạo nhóm sản phẩm và quản lý tất cả sản phẩm của bạn.",
      img: "/assets/images/ISMOS/img_28.png",
    },
    {
      id: 4,
      label: "Vận chuyển",
      description:
        "Chọn và quản lý cách sản phẩm của bạn được vận chuyển đến tay khách hàng.",
      img: "/assets/images/ISMOS/img_29.png",
    },
    {
      id: 5,
      label: "Đơn hàng",
      description:
        "Tạo đơn hàng từ hệ thống quản lý, xử lý, chỉnh sửa đơn hàng và quản lý tập trung tất cả đơn hàng của bạn.",
      img: "/assets/images/ISMOS/img_30.png",
    },
    {
      id: 6,
      label: "Tồn kho",
      description:
        "Quản lý tồn kho, điều chỉnh và điều chuyển hàng hoá giữa các kho hàng.",
      img: "/assets/images/ISMOS/img_31.png",
    },
    // Add more menu items as needed
  ];

  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-[#FDFDFE]">
        <div className="w-full h-auto bg-blue_color_2 py-5 xl:py-12 lg:py-9 md:py-7 sm:py-5">
          <p className="p_1 ml-8">Hướng dẫn tính năng ISMOS</p>
        </div>

        <Image
          loader={imageLoader}
          src="/assets/images/ISMOS/img_25.png"
          alt="Home"
          quality="100"
          width={1920}
          height={1080}
          className="xl:px-40 lg:px-40"
        />

        {/*CHÀO MỪNG BẠN ĐẾN VỚI ISMOS*/}
        <div className="mt-12">
          <p className="text-blue_color_2 text-base font-medium mb-2 text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
            Chào mừng bạn đến với ISMOS
          </p>
        </div>

        <div className="col_welcome">
          <div className="grid place-items-center bg-[#F2FBF5]">
            <p className="p_welcome_1">TỔNG QUAN ISMOS</p>
            <p className="p_welcome_2">
              Chào mừng bạn đến với ISMOS! Dù cho bạn là người mới kinh doanh
              hay đã là một người với nhiều kinh nghiệm trong lĩnh vực này,
              chúng tôi tin rằng bạn cũng sẽ tìm được những câu trả lời hữu ích
              cho những thắc mắc của mình tại đây !
            </p>
          </div>

          <div className="bg-[#F2F8FE]">
            <p className="p_welcome_1">TÀI KHOẢN ISMOS</p>
            <p className="p_welcome_2 text-center">
              ISMOS có 2 loại tài khoản chính với những phân quyền khác nhau:
              Tài khoản chủ doanh nghiệp và tài khoản nhân viên. Tài khoản chủ
              doanh nghiệp là tài khoản đầu tiên được dùng để đăng ký sử dụng
              ISMOS với địa chỉ email và thông tin lạc chính cho cửa hàng của
              bạn.
            </p>
          </div>

          <div className="bg-[#FFF2F2]">
            <p className="p_welcome_1">CỘNG ĐỒNG ISMOS</p>
            <p className="p_welcome_2">
              Khi bạn bán hàng với ISMOS, luôn có những cộng đồng để giúp đỡ
              bạn. Ngoài trung tâm tư vấn của ISMOS, còn có nhiều sự hỗ trợ từ
              bên ngoài có thể giúp bạn giải đáp thắc mắc, nâng cao kĩ năng ,
              bên cạnh đó ISMOS còn có những sự kiện, hội thảo chuyên ngành sẽ
              giúp bạn nâng cao kiến thức, kinh nghiệm cũng như xây dựng mối
              quan hệ với nhiều doanh nghiệp khác.
            </p>
          </div>
        </div>

        {/*THIẾT LẬP VÀ VẬN HÀNH GIAN HÀNG*/}
        <div className="mt-20">
          <p className="text-blue_color_2 text-xl font-medium text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl">
            Thiết lập và vận hành gian hàng
          </p>

          <div>
            {menuItems.map((item) => (
              <div className="setup_list" key={item.id}>
                {item.img && (
                  <Image
                    loader={imageLoader}
                    src={item.img}
                    alt="Home"
                    quality="100"
                    width={200}
                    height={100}
                    className="p-5"
                  />
                )}
                <div className="col-span-2">
                  <p className="sl_p_1">{item.label}</p>
                  <p className="sl_p_2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col_setup_1">
          <div className="bg-[#FFF9F2]">
            <Image
              loader={imageLoader}
              src="/assets/images/ISMOS/img_32.png"
              alt="Home"
              quality="100"
              width={400}
              height={0}
              className="p-10"
            />
            <p className="p_col_setup_1">
              13 BƯỚC SỬ DỤNG ISMOS DÀNH CHO MỘT GIAN HÀNG
            </p>
            <p className="p_col_setup_2">
              <br />
              Đối với các doanh nghiệp kinh doanh một cửa hàng, bạn có thể tham
              khảo các bước sau đây để có thể bắt đầu sử dụng ISMOS một cách
              nhanh chóng.
            </p>

            <Link
              href="/ismos/instruction/13_step"
              className="detail-button bg-[#FFE7CC] text-[#995200] hover:bg-[#995200] hover:text-[#FFE7CC]"
            >
              Xem chi tiết
            </Link>
          </div>

          <div className="bg-[#F2FBF5]">
            <div>
              <Image
                loader={imageLoader}
                src="/assets/images/ISMOS/img_33.png"
                alt="Home"
                quality="100"
                width={400}
                height={0}
                className="p-10"
              />
            </div>
            <p className="p_col_setup_1">
              14 BƯỚC SỬ DỤNG ISMOS DÀNH CHO CHUỖI GIAN HÀNG
            </p>
            <p className="p_col_setup_2 text-center">
              <br />
              Đối với cách doanh nghiệp kinh doanh từ 2 cửa hàng trở lên, các
              bước thiết lập dưới đây sẽ giúp bạn bắt đầu sử dụng ISMOS một cách
              nhanh chóng và tận dụng được sức mạnh từ chuỗi cửa hàng.
            </p>
            <Link
              href="/ismos/instruction/14_step"
              className="detail-button bg-[#CCF0D8] text-[#006D25] hover:bg-[#006D25] hover:text-[#CCF0D8]"
            >
              Xem chi tiết
            </Link>
          </div>
        </div>

        <Bussiness_Inf />
      </main>
    </div>
  );
}
