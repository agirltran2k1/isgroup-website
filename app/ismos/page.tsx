import NavBar from "@/components/NavBarISMos";
import Banner from "@/components/BannerISMos";
import Bussiness_Inf from "@/components/Bussiness_Inf";
import Link from "next/link";
import { Image, Button } from "@nextui-org/react";
import { imageLoader } from "../utils/ImageLoader";
import NextImage from "next/image";

export default function Page() {
  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-white_color">
        <Banner />
        <div className="w-full h-full">
          <div className="-my-10">
            <p className="text-black_color text-3xl font-medium text-center pt-10 leading-loose">
              ISMOS giúp bạn quản lý và bán hàng dễ dàng hơn
            </p>
            <p className="text-black_color mb-9 text-base text-gray-7 font-normal text-center">
              Phù hợp với mọi quy mô từ một cửa hàng cho đến nhiều chuỗi cửa
              hàng và bán hàng đa kênh.
            </p>
          </div>

          <section id="features" className="text-black_color body-font">
            <div className="container px-20 py-24 mx-auto">
              <div className="w-full flex items-center lg:flex-row border-b pb-10 mb-10 border-foreground-200 flex-col lg:gap-24">
                <Image
                  as={NextImage}
                  loader={imageLoader}
                  src="/assets/images/ISMOS/img_1.png"
                  alt=""
                  width={300}
                  height={100}
                  className="h-auto"
                />
                <div className="lg:text-left text-center mt-6 sm:mt-0 lg:w-4/5">
                  <p className="text-black_color text-3xl font-medium leading-loose">
                    MOS - Phần mềm quản lý bán hàng
                  </p>
                  <p className="leading-loose text-base">
                    Đồng bộ sản phẩm tồn kho, đơn hàng với sàn ISLink.
                  </p>
                  <a className="mt-3 text-blue_color_2 inline-flex items-center">
                    Xem thêm
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full flex items-center lg:flex-row border-b pb-10 mb-10 border-foreground-200 flex-col-reverse lg:gap-24 ">
                <div className="lg:text-left text-center mt-6 sm:mt-0 lg:w-4/5">
                  <p className="text-black_color text-3xl font-medium leading-loose">
                    ECOM - Bán hàng trên sàn TMĐT
                  </p>
                  <p className="leading-loose text-base">
                    • ISMOS đem đến giải pháp quản lý bán hàng dễ dàng & hiệu
                    quả trên các sàn TMĐT.
                    <br />• Quản lý tập trung nhiều gian hàng trên một giao
                    diện, tự động đồng bộ tồn kho - giá bán, tiết kiệm thời
                    gian, đơn đi bạt ngàn.
                  </p>
                  <a className="mt-3 text-blue_color_2 inline-flex items-center">
                    Xem thêm
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <Image
                  as={NextImage}
                  loader={imageLoader}
                  src="/assets/images/ISMOS/img_2.png"
                  alt=""
                  width={300}
                  className="h-auto"
                  height={100}
                />
              </div>
              <div className="w-full flex items-center lg:flex-row border-b pb-10 mb-10 border-foreground-200 flex-col lg:gap-24">
                <Image
                  as={NextImage}
                  loader={imageLoader}
                  src="/assets/images/ISMOS/img_3.png"
                  alt=""
                  width={300}
                  height={100}
                  className="h-auto"
                />
                <div className="lg:text-left text-center mt-6 sm:mt-0 lg:w-4/5">
                  <p className="text-black_color text-3xl font-medium leading-loose">
                    SHIPPING - Cổng vận chuyển, thu hộ COD toàn quốc
                  </p>
                  <p className="leading-loose text-base">
                    • Tích hợp với hầu hết các hãng vận chuyển trên thị trường
                    như Giaohangnhanh, ViettelPost, VNPT Post, J&T…
                    <br />• Chúng tôi mang lại cho khách hàng một dịch vụ thuận
                    tiện và chi phí vô cùng tiết kiệm với nhiều chính sách ưu
                    đãi của các hãng vận chuyển.
                  </p>
                  <a className="mt-3 text-blue_color_2 inline-flex items-center">
                    Xem thêm
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full flex items-center lg:flex-row border-b pb-10 mb-10 border-foreground-200 flex-col-reverse lg:gap-24 ">
                <div className="lg:text-left text-center mt-6 sm:mt-0 lg:w-4/5">
                  <p className="text-black_color text-3xl font-medium leading-loose">
                    OMNICHANNEL - Quản lý bán hàng đa kênh
                  </p>
                  <p className="leading-loose text-base">
                    Tổng hợp tất cả các dịch vụ của Nhanh.vn bao gồm POS,
                    Website, Vpage, Ecom và cổng vận chuyển.
                  </p>
                  <a className="mt-3 text-blue_color_2 inline-flex items-center">
                    Xem thêm
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <Image
                  as={NextImage}
                  loader={imageLoader}
                  src="/assets/images/ISMOS/img_4.png"
                  alt=""
                  width={300}
                  height={100}
                  className="h-auto"
                />
              </div>
            </div>
          </section>

          <section id="outstanding" className="mb-32 -mt-10">
            <div>
              <p className="text-black_color text-3xl font-medium text-center pt-10 leading-loose">
                Phần mềm có gì nổi bật?
              </p>
            </div>

            <div className="justify-center flex flex-wrap gap-10 w-full mt-5">
              <div className="flex flex-col shadow-lg rounded-xl overflow-hidden">
                <div className="relative overflow-visible w-[320px]">
                  <Image
                    as={NextImage}
                    loader={imageLoader}
                    width={320}
                    height={100}
                    src="/assets/images/ISMOS/img_6.png"
                    alt=""
                    className="h-auto"
                    radius="none"
                  />
                </div>
                <div className="block justify-center items-center w-[320px] p-5">
                  <p className="font-medium text-large text-black_color mb-2 text-center">
                    Trải nghiệm bán lẻ hoàn toàn mới
                  </p>
                  <p className="text-black_color text-base leading-loose">
                    • Phiên bản PC: Đáp ứng đầy đủ các nghiệm vụ bán hàng, phối
                    hợp từ online tới offline.
                    <br />• Phiên bản Mobile: Giúp việc quản lý tiện lợi, nâng
                    cao trải nghiệm mua bán tại cửa hàng.
                  </p>
                </div>
              </div>

              <div className="flex flex-col shadow-lg rounded-xl overflow-hidden">
                <div className="relative overflow-visible w-[320px]">
                  <Image
                    as={NextImage}
                    width={320}
                    height={300}
                    loader={imageLoader}
                    src="/assets/images/ISMOS/img_7.png"
                    alt=""
                    className="h-auto"
                    radius="none"
                  />
                </div>
                <div className="block justify-center items-center w-[320px] p-5">
                  <p className="font-medium text-large text-black_color mb-2 text-center">
                    Đồng bộ dữ liệu trong thời gian thực
                  </p>
                  <p className="text-black_color text-base leading-loose">
                    Dữ liệu Online và Offline được đồng bộ theo thời gian thực,
                    về tồn kho, thông tin khách hàng, khuyến mãi, linh hoạt vận
                    hành để mang lại trải nghiệm tuyệt vời cho khách hàng.
                  </p>
                </div>
              </div>

              <div className="flex flex-col shadow-lg rounded-xl overflow-hidden">
                <div className="relative overflow-visible w-[320px]">
                  <Image
                    as={NextImage}
                    loader={imageLoader}
                    width={320}
                    height={300}
                    src="/assets/images/ISMOS/img_8.png"
                    alt=""
                    className="h-auto"
                    radius="none"
                  />
                </div>
                <div className="block justify-center items-center w-[320px] p-5">
                  <p className="font-medium text-large text-black_color mb-2 text-center">
                    Tự động bán lại khách hàng cũ
                  </p>
                  <p className="text-black_color text-base leading-loose">
                    ISMOS có khả năng khai thác dữ liệu, lịch sử mua hàng để tự
                    động kết nối, chăm sóc và cá nhân hoá ưu đãi cho từng khách
                    hàng qua các kênh SMS, FACEBOOK, EMAIL,...
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="device" className="">
            <div className="-my-10">
              <p className="text-black_color text-3xl font-medium text-center pt-10 leading-loose">
                Tương thích với mọi thiết bị
              </p>
              <p className="text-black_color mb-9 text-base text-gray-7 font-normal text-center">
                Không cần cài đặt và không yêu cầu phần cứng đặt biệt nào.
              </p>
            </div>
            <Image
              as={NextImage}
              loader={imageLoader}
              src="/assets/images/ISMOS/img_9.png"
              alt="Home"
              width={1920}
              height={1080}
              className="xl:px-72 lg:px-56 md:px-32 sm:px-20"
            />
          </section>

          <Bussiness_Inf />
        </div>
      </main>
    </div>
  );
}
