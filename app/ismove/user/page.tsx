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
                        Yêu cầu chuyến đi
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
                    3
                  </div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 className="font-medium title-font text-black_color mb-1 text-large">
                        Chuyến đi
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
                        Thanh toán và đánh giá dịch vụ
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className=" w-full lg:w-1/2">
              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Thoải mái đặt xe đi bất cứ nơi đâu
                </p>
                <p className="text-black_color text-base leading-loose">
                  Chúng tôi kết nối bạn với tài xế một cách nhanh chóng dựa trên
                  công nghệ kết nối tốt nhất. <br />
                  Chúng tôi kết nối bạn với tài xế ở gần nhất và cung cấp dịch
                  vụ chất lượng cao và an toàn.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Kết nối trong giờ cao điểm
                </p>
                <p className="text-black_color text-base leading-loose">
                  Chúng tôi kết nối bạn với tài xế kể cả trong giờ cao điểm hay
                  điều kiện thời tiết xấu.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Cung cấp dịch vụ trong phạm vi rộng
                </p>
                <p className="text-black_color text-base leading-loose">
                  Chúng tôi kết nối bạn với tài xế bất kể bạn đang ở đâu và bất
                  kể bạn muốn đến nơi nào.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Phương thức thanh toán dễ dàng hơn
                </p>
                <p className="text-black_color text-base leading-loose">
                  Bạn có thể chọn thanh toán bằng tiền mặt hoặc thẻ trả trước/
                  thẻ tính dụng. <br />
                  Chọn kết nối với thẻ trả trước/tín dụng yêu thích của bạn để
                  thanh toán trực tiếp.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Quản lý đánh giá một cách cẩn thận
                </p>
                <p className="text-black_color text-base leading-loose">
                  Bạn có thể để lại ý kiến phản hồi cho tài xế. Chúng tôi sẽ
                  quản lý tài xế dựa trên ý kiến phản hồi của bạn để kết nối bạn
                  với tài xế đáng tin cậy.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-black_color text-lg font-medium">
                  Trao thưởng cho những phản hồi
                </p>
                <p className="text-black_color text-base leading-loose">
                  Nếu bạn để lại những phản hồi chính xác để giúp những hành
                  khách khác, chúng tôi sẽ trao cho bạn điểm MVL để bạn có thể
                  sử dụng cho những chuyến đi sau.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
