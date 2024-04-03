import NavBar from "@/components/NavBarISMove";
import Banner from "@/components/BannerISMove";
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
              Tại sao bạn nên sử dụng ISMOVE?
            </p>
          </div>

          <section id="features" className="text-black_color body-font">
            <div className="container px-20 py-24 mx-auto">
              <div className="w-full flex items-center lg:flex-row border-b pb-10 mb-10 border-foreground-200 flex-col lg:gap-24">
                <Image
                  as={NextImage}
                  loader={imageLoader}
                  src="/assets/images/ISMOVE/img_1.png"
                  alt=""
                  width={90}
                  height={100}
                  className="h-auto"
                />
                <div className="lg:text-left text-center mt-6 sm:mt-0 lg:w-4/5">
                  <p className="text-black_color text-3xl font-medium leading-loose">
                    Không lo về giá
                  </p>
                  <p className="leading-loose text-base">
                    ISMOVE mang đến cho bạn giải pháp di chuyển tiết kiệm và
                    hiệu quả về mặt chi phí. Với mức giá cạnh tranh và minh
                    bạch, bạn có thể tin tưởng vào sự công bằng và tính minh
                    bạch trong mọi giao dịch.
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center lg:flex-row border-b pb-10 mb-10 border-foreground-200 flex-col-reverse lg:gap-24 ">
                <div className="lg:text-left text-center mt-6 sm:mt-0 lg:w-4/5">
                  <p className="text-black_color text-3xl font-medium leading-loose">
                    An toàn & Đảm bảo
                  </p>
                  <p className="leading-loose text-base">
                    Sự an toàn của bạn luôn là ưu tiên hàng đầu của chúng tôi.
                    <br />
                    Với các biện pháp an ninh và kiểm soát chất lượng nghiêm
                    ngặt, ISMOVE cam kết mang lại cho bạn một hành trình an toàn
                    và đáng tin cậy.
                  </p>
                </div>
                <Image
                  as={NextImage}
                  loader={imageLoader}
                  src="/assets/images/ISMOVE/img_2.png"
                  alt=""
                  width={90}
                  className="h-auto"
                  height={100}
                />
              </div>
              <div className="w-full flex items-center lg:flex-row border-b pb-10 mb-10 border-foreground-200 flex-col lg:gap-24">
                <Image
                  as={NextImage}
                  loader={imageLoader}
                  src="/assets/images/ISMOVE/img_3.png"
                  alt=""
                  width={90}
                  height={100}
                  className="h-auto"
                />
                <div className="lg:text-left text-center mt-6 sm:mt-0 lg:w-4/5">
                  <p className="text-black_color text-3xl font-medium leading-loose">
                    Hỗ trợ khách hàng 24/7
                  </p>
                  <p className="leading-loose text-base">
                    ISMOVE luôn đặt sự hài lòng của khách hàng lên hàng đầu. Đội
                    ngũ chăm sóc khách hàng của chúng tôi sẵn lòng hỗ trợ bạn
                    24/7, giúp bạn giải quyết mọi vấn đề và yêu cầu một cách
                    nhanh chóng và hiệu quả.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="outstanding" className="mb-32 -mt-10">
            <div>
              <p className="text-black_color text-3xl font-medium text-center pt-10 leading-loose">
                Các loại dịch vụ
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
                    src="/assets/images/ISMOVE/img_4.png"
                    alt=""
                    className="h-auto"
                    radius="none"
                  />
                </div>
                <div className="block justify-center items-center w-[320px] p-5">
                  <p className="font-medium text-large text-black_color mb-2 text-center">
                    Đặt xe
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
                    src="/assets/images/ISMOVE/img_5.png"
                    alt=""
                    className="h-auto"
                    radius="none"
                  />
                </div>
                <div className="block justify-center items-center w-[320px] p-5">
                  <p className="font-medium text-large text-black_color mb-2 text-center">
                    Gọi tài xế
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
                    src="/assets/images/ISMOVE/img_6.png"
                    alt=""
                    className="h-auto"
                    radius="none"
                  />
                </div>
                <div className="block justify-center items-center w-[320px] p-5">
                  <p className="font-medium text-large text-black_color mb-2 text-center">
                    Thuê xe
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="using" className="-mt-10 bg-[#f5f5f5]">
          <div>
              <p className="text-black_color text-3xl font-medium text-center pt-10 leading-loose">
                Cách sử dụng ISMOVE
              </p>
            </div>

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
                      Chọn điểm đón và điểm đến
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
                      Chọn dịch vụ
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
                    Chọn hình thức thanh toán (Tiền mặt, thẻ hoặc ví điện tử)
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
                    Nhập mã khuyến mãi (nếu có) để được khấu trừ vào chuyến đi
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-foreground-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-500 text-white_color relative z-10 title-font font-medium text-sm">
                  5
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-black_color mb-1 text-large">
                    Chọn XÁC NHẬN và trải nghiệm sự chuyên nghiệp từ ISGroup
                    </h2>
                  </div>
                </div>
              </div>
              
             
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
