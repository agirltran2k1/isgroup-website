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

      <main className="relative bg-[#FDFDFE]">
        <section id="about" className="justify-center p-20">
          <div className="flex flex-wrap w-full justify-center items-center p-10 gap-10">
            <div className="w-full lg:w-1/2 ">
              <p className="text-black_color text-3xl font-medium">Xin chào</p>

              <div className="flex gap-1 mt-2 mb-5">
                <div className="h-1 w-3 bg-primary-500" />
                <div className="h-1 w-10 bg-primary-500" />
              </div>

              <p className="text-black_color text-base leading-loose">
                Bạn đang muộn phiền về những dịch vụ gọi xe kém chất lượng,
                những lần đặt xe để di chuyển luôn gặp khó khăn và giá cước xe
                thì chẳng hề dễ chịu?
              </p>
            </div>

            <div>
              <Image
                as={NextImage}
                loader={imageLoader}
                src="/assets/images/ISMOVE/img_7.png"
                alt=""
                width={350}
                height={200}
              />
            </div>
          </div>

          <div className="flex flex-wrap-reverse w-full justify-center items-center p-10 gap-10 mt-10">
            <div>
              <Image
                as={NextImage}
                loader={imageLoader}
                src="/assets/images/ISMOVE/img_8.png"
                alt=""
                width={350}
                height={200}
              />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-black_color text-3xl font-medium">
                Tất cả sẽ trở nên thật dễ dàng khi ISMOVE đồng hành cùng bạn!
              </p>

              <div className="flex gap-1 mt-2 mb-5">
                <div className="h-1 w-3 bg-primary-500" />
                <div className="h-1 w-10 bg-primary-500" />
              </div>
              <p className="text-black_color text-base leading-loose">
                Ứng dụng gọi xe ISMOVE không chỉ áp dụng chính sách không thu
                phí hoa hồng trọn đời của các Đối tác Tài Xế mà còn có chế độ
                điểm thưởng hấp dẫn dành cho những Tài Xế có thái độ phục vụ
                chuyên nghiệp và chất lượng dịch vụ tốt.
              </p>
            </div>
          </div>

          <div className="items-center justify-center mx-auto flex flex-col mt-20">
            <div className="">
              <Image
                as={NextImage}
                loader={imageLoader}
                src="/assets/images/ISMOVE/img_9.png"
                alt=""
                width={350}
                height={200}
              />
            </div>

            <div className="w-full lg:w-1/2 text-center">
              <p className="text-black_color text-base leading-loose">
                Nhờ vậy, hành khách khi đặt xe thông qua ứng dụng ISMOVE sẽ được
                trải nghiệm trọn vẹn những tiện ích của dịch vụ gọi xe công nghệ
                cao mang lại, cùng sự yên tâm và tin tưởng tuyệt đối.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
