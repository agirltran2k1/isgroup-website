"use client";
import NavBar from "@/components/NavBarISMos";
import Bussiness_Inf from "@/components/Bussiness_Inf";
import Banner from "@/components/BannerISMos";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { RxChevronUp } from "react-icons/rx";

export default function Page() {
  const menuItems = [
    {
      id: 1,
      question: "ISMOS có miễn phí không?",
      answer:
        "Bạn có thể sử dụng ứng dụng ISMOS miễn phí trọn đời. Bạn có thể bổ sung các mặt hàng, doanh số, sử dụng phân tích và nhiều chức năng khác mà không cần thanh toán bất kỳ khoản nào.",
    },
    {
      id: 2,
      question: "Làm thế nào để sử dụng ISMOS?",
      answer:
        "Tải xuống và cài đặt ISMOS trên thiết bị di động Android hoặc IOS từ Play Market hoặc App Store. Tạo tài khoản và đợi xác nhận phản hồi từ ISMOS để kích hoạt tài khoản của bạn Thực hiện các cài đặt cần thiết trong Văn phòng hỗ trợ. Tại đây, bạn cũng có thể quản lý các mặt hàng, giảm giá, thuế,... cũng như xem các báo cáo về doanh số của mình. Hãy bổ sung các mặt hàng tại POS hoặc Văn phòng hỗ trợ và bắt đầu bán hàng!",
    },
    {
      id: 3,
      question: "ISMOS có hoạt động ngoại tuyến không?",
      answer:
        "ISMOS có hỗ trợ hoạt động ngoại tuyến. Thiết bị của bạn có thể tiếp tục tạo doanh số và hoạt động theo ca ngay cả khi không kết nối với Internet. Tuy nhiên, không phải tất cả các chức năng đều hỗ trợ ngoại tuyến; chẳng hạn như hoàn tiền, đăng ký khách hàng mới, bổ sung các mặt hàng và một vài hạn chế khác. Tham khảo thông tin chi tiết tại trung tâm trợ giúp: Sử dụng ISMOS ngoại tuyến.",
    },
    {
      id: 4,
      question: "Loại phần cứng nào có thể hoạt động với ISMOS?",
      answer:
        "Với ứng dụng ISMOS, bạn có thể kết nối và sử dụng máy quét mã vạch, máy in hóa đơn, ngăn kéo đựng tiền và các phần cứng khác.",
    },
    {
      id: 5,
      question: "ISMOS có chức năng thẻ khách hàng thân thiết không?",
      answer:
        "ISMOS được tích hợp sẵn chương trình khách hàng thân thiết, cho phép bạn tặng thưởng cho khách quen khi họ ghé thăm cửa hàng của bạn. Bạn có thể tự mình phát hành thẻ khách hàng thân thiết có in mã vạch. Khi khách ghé thăm cửa hàng của bạn, nhân viên thu ngân có thể nhanh chóng nhận diện anh/cô ấy bằng cách quét mã vạch trên thẻ khách hàng thân thiết bằng máy quét mã vạch riêng hoặc dùng máy ảnh tích hợp sẵn với thiết bị. Còn một cách khác để nhận diện khách hàng đó là thông qua số điện thoại của anh/cô ấy.",
    },
    // Add more menu items as needed
  ];

  //Mở Answer của câu hỏi
  const [isOpenAnswer, setIsOpenAnswer] = useState<number | null>(null);

  const toggleAnswer = (itemId: number) => {
    setIsOpenAnswer(itemId === isOpenAnswer ? null : itemId);
  };

  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-[#FDFDFE]">
        <div className="w-full h-auto bg-blue_color_2 py-5 xl:py-12 lg:py-9 md:py-7 sm:py-5">
          <p className="p_1 ml-8">Bảng giá</p>
        </div>

        <div className="col_1">
          <div>
            <p className="p_title_1">
              Dễ dàng bán hàng Online đa kênh và tăng trưởng khách hàng với các
              gói giải pháp của ISMOS
            </p>
            <p className="p_about_1">
              - Bán hàng Online đa Kênh
              <br />- Chốt đơn, tăng số đơn hàng
              <br />- Chăm sóc và Bán lại khách hàng
            </p>
          </div>
          <Image
            src="/assets/images/ISMOS/img_23.png"
            alt=""
            quality="100"
            layout="responsive"
            width={600}
            height={200}
          />
        </div>

        <div className="col_1">
          <Image
            src="/assets/images/ISMOS/img_24.png"
            alt=""
            quality="100"
            layout="responsive"
            width={100}
            height={200}
          />

          <div>
            <p className="p_title_1">ISMOS STANDARD</p>
            <p className="p_about_1">
              Dễ dàng quản lý và bán hàng online đa kênh cho người mới khởi
              nghiệp kinh doanh.
              <br />
              <br />- Quản lý hàng hóa Quản lý kho hàng
              <br />- Quản lý bán lẻ, bán sỉ
              <br />- Quản lý công nợ, quỹ tiền mặt
              <br />- Quản lý qua điện thoại
              <br />- Quản lý Thông báo điều hành
              <br />- Quản lý châm công
              <br />- Quản lý khuyến mại tích điểm
              <br />- Quản lý hoạt động nhân viên
              <br />- Quản lý chăm sóc khách hàng
              <br />- Quản lý chuỗi cửa hàng online
              <br />- Hệ thống báo cáo realtime
            </p>
          </div>
        </div>

        {/*CÂU HỎI THƯỜNG GẶP*/}
        <div className="mt-20">
          <p className="text-blue_color_2 text-xl font-medium text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl">
            Câu hỏi thường gặp
          </p>

          <div className="question_list">
            {menuItems.map((item) => (
              <div className="ql_div_1" key={item.id}>
                <div className="ql_div_2" onClick={() => toggleAnswer(item.id)}>
                  <p className="ql_p_1">
                    {item.id}. {item.question}
                  </p>
                  {isOpenAnswer === item.id ? (
                    <RxChevronUp size={28} color="#424242" />
                  ) : (
                    <RxChevronDown size={28} color="#424242" />
                  )}
                </div>
                {isOpenAnswer === item.id && (
                  <p className="ql_p_2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <Bussiness_Inf />
      </main>
    </div>
  );
}
