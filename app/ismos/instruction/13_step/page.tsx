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
      step: "GIAI ĐOẠN 1 - CHUẨN BỊ TRƯỚC KHI BÁN HÀNG",
      description:
        "Thiết lập cửa hàng mới nhanh chóng và dễ dàng chỉ cần có kết nối Internet. Sau đó sử dụng Điểm bán hàng của bạn ở mọi nơi, mọi lúc. <br/>Mặc dù cần phải có kết nối Internet để khởi động Điểm bán hàng MOS, nhưng ứng dụng này sẽ vẫn hoạt động ngay cả khi đã ngắt kết nối hoàn toàn.",
      detail:
        "<br/>1. ĐĂNG NHẬP HỆ THỐNG"
        + "<br/>Việc đăng nhập này bao gồm hai việc:"
        + "<br/>1.1. Đăng ký và Đăng nhập vào ISMOS"
        + "<br/>1.2. Đăng nhập vào ISMOS"
        + "<br/>Đăng nhập trực tiếp tại website"

        + "<br/><br/>2. KHỞI TẠO VÀ CẤU HÌNH ĐỊA CHỈ"
        + "<br/>Để bán hàng, bạn cần có cửa hàng và cửa hàng này được ghi nhận trên hệ thống ISMOS."
        + "<br/>Việc này bao gồm các thao tác sau:"
        + "<br/>2.1. Tạo địa chỉ"
        + "<br/>Để có thể hoạt động, bán hàng và quản lý kho, bạn cần tạo địa chỉ trên trang dữ liệu ISMOS."
        + "<br/>2.2. Chọn chi nhánh"
        + "<br/>Sau khi tạo xong địa chỉ trên ISMOS bạn cần chọn địa chỉ này ISMOS để hệ thống ghi nhận hoạt động cho địa chỉ được chọn. Trong ISMOS, thao tác này gọi là Đổi chi nhánh bán hàng."
        + "<br/>2.3. Cấu hình cho chi nhánh"
        + "<br/>Việc bán hàng cho địa chỉ sẽ tuân theo các cấu hình ISMOS cho địa chỉ đó. Nếu bạn không thực hiện thiết lập, hệ thống sẽ lấy theo cấu hình mặc định của ISMOS."
        + "<br/>Thực tế mỗi tổ chức sẽ có các quy tắc và cách thức hoạt động khác nhau, và ISMOS cũng tin rằng bạn sẽ cần được hiểu về các thiết lập."
        + "<br/>- Cấu hình này bao gồm các hoạt động:"
        + "<br/>- Cấu hình chuyển ca."
        + "<br/>- Cấu hình bán hàng."
        + "<br/>- Cấu hình chung."

        + "<br/><br/>3. TẠO CÁC CƠ SỞ DỮ LIỆU"
        + "<br/>Có hai loại dữ liệu thực sự cần thiết cho hệ thống:"
        + "<br/>3.1. Sản phẩm"
        + "<br/>Dữ liệu về số lượng là vô cùng cần thiết. Bạn không thể bán hàng mà không có sản phẩm."
        + "<br/>Theo LinkPos, bạn cần được biết về cách tạo sản phẩm cũng như ý nghĩa của các thông tin trên sản phẩm. Việc tạo dữ liệu được thực hiện trực tiếp trên hệ thống dữ liệu ISMOS."
        + "<br/>Lưu ý là Bạn cần đảm bảo cho sản phẩm hai điều kiện sau:"
        + "<br/>Sản phẩm phải có barcode."
        + "<br/>Sản phẩm phải Có quản lý tồn kho."
        + "<br/>3.2. Khách hàng"
        + "<br/>Khác với sản phẩm, dữ liệu về khách hàng không mang tính bắt buộc. Tuy nhiên, nếu đã có loại dữ liệu này, bạn nên nhập dữ liệu vào hệ thống. như vậy mới thuận lợi hơn khi nhân viên thao tác bán hàng cũng như đảm bảo quyền lợi mua hàng (Khuyến mãi, Tích điểm) cho Khách mua hàng."

        + "<br/><br/>4. KIỂM TRA HOẠT ĐỘNG CỦA THIẾT BỊ PHẦN CỨNG"
        + "<br/>Để có thể thực hiện được thao tác này, bạn cần có các thiết bị phần cứng từ trước đó, cũng như đảm bảo được các thiết bị này sẵn sàng hoạt động được."
        + "<br/>Các thiết bị phần cứng cần thiết để hoạt động có rất nhiều, trong đó cần thiết nhất là ba thiết bị:"
        + "<br/>- Máy in barcode"
        + "<br/>- Máy quét barcode"
        + "<br/>- Máy in hóa đơn"
        + "<br/>Để các thiết bị này hoạt động và tương thích được trên hệ thống ISMOS, ngoài việc đảm bảo được về mặt thiết bị, bạn cũng cần thiết lập các cấu hình liên quan."

        + "<br/><br/>5. PHÂN QUYỀN CHO NGƯỜI DÙNG"
        + "<br/>Việc phân quyền cho người dùng bao gồm các hoạt động:"
        + "<br/>5.1. Cấu hình nhóm tài khoản"
        + "<br/>Cấu hình nhóm tài khoản giúp bạn thiết lập các quyền quản trị thông qua các nhóm quyền. Bạn nên định hình các nhóm quyền khác nhau theo hoạt động thực tế và cách thức quản lý của cửa hàng."
        + "<br/>5.2. Cấu hình tài khoản"
        + "<br/>Đây là thao tác cực kỳ quan trọng, để nhân viên bán hàng thực hiện được các thao tác bán hàng."
        + "<br/>Có hai thao tác mà bạn cần thực hiện:"
        + "<br/>- Thêm tài khoản"
        + "<br/>- Thêm vào nhóm tài khoản"
        + "<br/>5.3. Cấu hình khu vực"
        + "<br/>Cấu hình khu vực không phải là thao tác cần thiết cho việc phân quyền, bạn hoàn toàn có thể bỏ qua. Tuy nhiên, đây là thao tác cần thiết cho cấu hình địa chỉ, mà theo ISMOS là thao tác thực hiện quan trọng và bắt buộc thực hiện để bán hàng cho cửa hàng."
        + "<br/>5.4. Cấu hình địa chỉ"
        + "<br/>Để nhân viên bán hàng bán hàng được, nhân viên này phải được thêm vào địa chỉ của cửa hàng. Bởi vì bạn đã tạo địa chỉ từ trước đó, trong phần này, bạn chỉ cần Thiết lập nhân viên/nhóm nhân viên quản lý địa chỉ."
    },
    {
      id: 2,
      step: "GIAI ĐOẠN 2 - BÁN HÀNG",
      description:
        "Các hoạt động trong giai đoạn phù hợp với cấp độ nhân viên. Dù vậy, Chủ sở hữu có thể thực hiện các hoạt động này thay thế cho nhân viên."
        + "<br/>Sau khi hoàn thành các thao tác trong giai đoạn này, bạn sẽ nắm bắt được các thao tác bán hàng, các hoạt động liên quan đến bán hàng, in được hóa đơn và biết cách xem các báo cáo doanh số cơ bản."
        + "<br/>Việc bán hàng của nhân viên sẽ bao gồm các hoạt động cần thiết sau:",
      detail:
        "<br/>6. TẠO ĐƠN HÀNG"
        + "<br/>Hoạt động này được tạo ra khi Khách mua hàng đưa ra yêu cầu và nhân viên bán hàng thực hiện việc tạo đơn hàng trên hệ thống."
        + "<br/>Một đơn hàng được tạo ra sẽ bao gồm các hoạt động: thêm sản phẩm vào giỏ hàng, lựa chọn hình thức khuyến mãi, thêm khách hàng, các thông tin cho đơn hàng, lựa chọn phương thức thanh toán."

        + "<br/><br/>7. THỰC HIỆN ĐỔI TRẢ"
        + "<br/>Khi một đơn hàng đã phát sinh và hoàn thành, việc cho phép đổi trả giúp Khách mua hàng an tâm hơn khi mua hàng. Và khi Khách mua hàng đến cửa hàng để yêu cầu đổi trả, nhân viên bán hàng sẽ thực hiện đổi trả ngay trên hệ thống."

        + "<br/><br/>8. BÁO CÁO DOANH SỐ"
        + "<br/>Báo cáo doanh số giúp bạn xem ngay được tình hình hoạt động kinh doanh trong ngày."
        + "<br/>Báo cáo này được tích hợp trong trang ISMOS."
    },
    {
      id: 3,
      step: "GIAI ĐOẠN 3 - QUẢN LÝ KHO",
      description:
        "Giao đoạn quản lý phù hợp với Nhân viên cấp độ Quản lý hay Chủ sở hữu. Các thao tác trong giai đoạn này cung cấp cho bạn biết cách tạo các phiếu và cách quản lý kho. <br/>Hoạt động trong giai đoạn này bao gồm các hoạt động quản lý:",
        detail:
        "<br/>9. QUẢN LÝ NHÀ PHÂN PHỐI"
        + "<br/>Để có thể bán hàng, một điều rõ ràng là bạn cần có hàng hóa. Để có hàng hóa, bạn cần có nhà phân phối, là những nhà cung ứng hàng cho hoạt động kinh doanh cho cửa hàng."
        + "<br/>Việc quản lý Nhà phân phối sẽ giúp bạn nắm bắt được thông tin cũng như biết cách quản lý tốt hơn."
        + "<br/>ISMOS hỗ trợ bạn quản lý Nhà phân phối trực tiếp trên trang ISMOS. Thao tác mà bạn cần thực hiện là tạo danh sách Nhà phân phối, và có thể xóa khi cần."

        + "<br/><br/>10. QUẢN LÝ GIÁ VỐN"
        + "<br/>Giá vốn là một thông số rất quan trọng trong việc quản lý tồn kho. Do đó, Nhà bán hàng cần xác định được các vấn đề:"
        + "<br/>- Có quản lý giá vốn hay không?"
        + "<br/>- Nếu có, quản lý giá vốn như thế nào?"
        + "<br/>Đối với việc quản lý giá vốn, Nhà bán hàng có thể thực hiện quản lý giá vốn trên một hệ thống quản lý khác, hay trên hệ thống kế toán. Tuy nhiên, ISMOS đánh giá việc này gây ra một số gián đoạn hay sai lệch khi thực hiện trên hai hệ thống khác nhau. Chưa kể là, hệ thống của ISMOS hỗ trợ Nhà bán hàng quản lý giá vốn ngay trên trang dữ liệu ISMOS."

        + "<br/><br/>11. QUẢN LÝ PHIẾU MUA HÀNG"
        + "<br/>Phiếu mua hàng trong ISMOS được định nghĩa là một chứng từ để ghi nhận nghiệp vụ mua hàng."
        + "<br/>Trong giai đoạn này, bạn chỉ cần biết cách tạo phiếu mua hàng và những vấn đề liên quan."

        + "<br/><br/>12. QUẢN LÝ ĐIỀU CHỈNH"
        + "<br/>Bạn thực hiện điều chỉnh khi có sai lệch tồn kho, hay cho những trường hợp hàng hóa hỏng hóc, thâm hụt, mua hàng nhận nhiều lần, cần thực hiện điều chỉnh."
    },
    {
      id: 4,
      step: "GIAI ĐOẠN 4 - QUẢN LÝ DÒNG TIỀN",
      description:
        "Tiền là cái cuối cùng bạn thu lại được sau những đơn hàng. Do đó, việc xem được các báo cáo và biết cách quản lý là việc làm tối quan trọng. <br/>Các báo cáo này được tích hợp trong trang dữ liệu LinkPos, ghi nhận từ tình hình hoạt động thực tế trên cho kênh bán hàng MOS.",
    },
    // Add more menu items as needed
  ];

  //Mở Description
  const [isOpenDescription, setIsOpenDescription] = useState<number | null>(
    null
  );

  const toggleDescription = (itemId: number) => {
    setIsOpenDescription(itemId === isOpenDescription ? null : itemId);
  };

  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-[#FDFDFE]">
        <div className="w-full h-auto bg-blue_color_2 py-5 xl:py-12 lg:py-9 md:py-7 sm:py-5">
          <p className="p_1 ml-8">
            13 BƯỚC SỬ DỤNG ISMOS DÀNH CHO MỘT GIAN HÀNG
          </p>
        </div>

        <Image
          src="/assets/images/ISMOS/img_32.png"
          alt="Home"
          quality="100"
          width={1920}
          height={1080}
          className="xl:px-96 lg:px-80 md:px-32 mt-10"
        />

        {/*13 BƯỚC SỬ DỤNG ISMOS CHO MỘT GIAN HÀNG*/}
        <div className="mt-20">
          <p className="text-blue_color_2 text-base font-medium mb-2 text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
            13 bước sử dụng ISMOS cho một gian hàng
          </p>

          <div className="question_list">
            {menuItems.map((item) => (
              <div className="ql_div_1" key={item.id}>
                <div
                  className="ql_div_2"
                  onClick={() => toggleDescription(item.id)}
                >
                  <p className="ql_p_1">{item.step}</p>
                  {isOpenDescription === item.id ? (
                    <RxChevronUp size={32} color="#424242" />
                  ) : (
                    <RxChevronDown size={28} color="#424242" />
                  )}
                </div>
                {isOpenDescription === item.id && (
                  <div>
                    <p className="ql_p_2">
                      {item.description.split("<br/>").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    {item.detail && (
                      <p className="ql_p_2">
                        {item.detail.split("<br/>").map((line, index) => {

                          const containsUppercase = /[1-9]/.test(line);

                          return (
                            <React.Fragment key={index}>
                              <span
                                className={
                                  containsUppercase ? "font-medium text-blue_color_2" : ""
                                }
                              >
                                {line}
                              </span>
                              <br />
                            </React.Fragment>
                          );
                        })}
                      </p>
                    )}
                  </div>
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
