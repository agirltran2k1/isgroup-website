"use client";
import NavBar from "@/components/NavBarISMove";
import { imageLoader } from "@/app/utils/ImageLoader";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-[#f5f5f5]">
        <section id="about" className="justify-center p-20">
          <div className="flex flex-wrap w-full justify-center items-center p-5 gap-20">
            <section id="using" className="-mt-10">
              <div className="container px-10 py-24 mx-auto">
                <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-foreground-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-500 text-white_color relative z-10 title-font font-medium text-sm">
                    1
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-black_color mb-1 text-large">
                        Tìm chuyến
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-foreground-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-500 text-white_color relative z-10 title-font font-medium text-sm">
                    2
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-black_color mb-1 text-large">
                        Đón khách
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-foreground-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-500 text-white_color relative z-10 title-font font-medium text-sm">
                    3
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-black_color mb-1 text-large">
                        Chạy xe
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-foreground-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-500 text-white_color relative z-10 title-font font-medium text-sm">
                    4
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-black_color mb-1 text-large">
                        Trả khách và thanh toán
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className=" w-full lg:w-1/2">
              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Không thu phí hoa hồng đối tác tài xế
                </p>
                <p className="text-black_color text-base leading-loose">
                  ISMOVE không thu phí hoa hồng Đối Tác Tài Xế. Ngoại trừ phí
                  giao dịch cho thẻ trả trước/ tín dụng, tất cả lợi nhuận đều
                  thuộc về thu nhập của tài xế. Chúng tôi sẽ tiếp tục giữ tiêu
                  chí này.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Dễ dàng đăng ký trở thành Đối Tác Tài Xế
                </p>
                <p className="text-black_color text-base leading-loose">
                  Chúng tôi đã đơn giản hóa quy trình đăng kí để thuận tiện hơn
                  cho bạn. <br />
                  Chúng tôi cũng có một quy trình đăng kí đơn giản hơn cho các
                  dạng tài xế khác dễ dàng tham gia.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Tìm chuyến nâng cao
                </p>
                <p className="text-black_color text-base leading-loose">
                  ISMOVE phân tích khái niệm dịch vụ của tài xế dựa trên dữ liệu
                  lớn và cung cấp một hệ thống kết nối cá nhân hóa từ đó nhiều
                  người dùng có thể kết nối với tài xế.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Dịch vụ đón khách liên tục
                </p>
                <p className="text-black_color text-base leading-loose">
                  Bạn có thể nhận được yêu cầu đặt xe khác khi hành khách đang ở
                  trên xe nếu như bạn đã gần điểm đến. Bạn có thể nhận chuyến xe
                  liên tục mà không cần chờ đợi.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Dễ dàng truy cập đến thông tin vận hành
                </p>
                <p className="text-black_color text-base leading-loose">
                  Chúng tôi cung cấp tính năng bảng điều khiển cho phép bạn có
                  thể kiểm tra thông tin chuyến đi như: số lượng hành khách;
                  khoảng cách và số dư tài khoản mỗi ngày hoặc hàng tuần một
                  cách thuận tiện.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Trao thưởng: Thưởng cho việc lái xe an toàn
                </p>
                <p className="text-black_color text-base leading-loose">
                  Nếu bạn cung cấp một dịch vụ chất lượng cao cho hành khách,
                  chúng tôi sẽ trao cho bạn điểm MVL ngoài phí dịch vụ.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
