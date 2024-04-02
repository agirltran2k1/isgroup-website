"use client";
import NavBar from "@/components/NavBarISMos";
import Bussiness_Inf from "@/components/Bussiness_Inf";
import { imageLoader } from "@/app/utils/ImageLoader";
import NextImage from "next/image";
import { Image } from "@nextui-org/react";

export default function Page() {
  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-[#FDFDFE]">
        <section id="about" className="justify-center p-20">
          <div className="flex flex-wrap w-full justify-center items-center p-10 gap-10">
            <div className="w-full lg:w-1/2 ">
              <p className="text-black_color text-3xl font-medium">
                Chào mừng bạn đến với ISMOS
              </p>

              <div className="flex gap-1 mt-2 mb-5">
                <div className="h-1 w-3 bg-danger-500" />
                <div className="h-1 w-10 bg-danger-500" />
              </div>

              <p className="text-black_color text-base leading-loose">
                Dù cho bạn là người mới kinh doanh hay đã là một người với nhiều
                kinh nghiệm trong lĩnh vực này, chúng tôi tin rằng bạn cũng sẽ
                tìm được những câu trả lời hữu ích cho những thắc mắc của mình
                tại đây!
              </p>
            </div>

            <div>
              <Image
                loader={imageLoader}
                as={NextImage}
                src="/assets/images/ISMOS/img_21.png"
                alt=""
                width={350}
                height={200}
              />
            </div>
          </div>

          <div className="flex flex-wrap-reverse w-full justify-center items-center p-10 gap-10">
            <div>
              <Image
                as={NextImage}
                loader={imageLoader}
                src="/assets/images/ISMOS/img_5.png"
                alt=""
                width={350}
                height={200}
              />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-black_color text-base leading-loose">
                Sau khi hoàn tất đăng ký sử dụng miễn phí LinkPos, bạn cần kiên
                nhẫn chờ đợi xác nhận và kích hoạt tài khoản từ LinkPos để có
                thể bắt đầu sử dụng.
                <br />
                <br />
                Đây là sự chuẩn bị quan trọng, với những hạng mục cần hoàn tất
                trước khi bạn thực sự bắt tay vào bán hàng. Bạn có thể in ra
                danh sách những việc cần làm để theo dõi được tiến độ công việc.
              </p>
            </div>
          </div>
        </section>
      
        <Bussiness_Inf />
      </main>
    </div>
  );
}
