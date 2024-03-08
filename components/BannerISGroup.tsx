import { Image, Button } from "@nextui-org/react";
import { imageLoader } from "../app/utils/ImageLoader";
export default function Banner() {
  return (
    <section
      id="banner_isgroup"
      className="flex flex-wrap mb-10 items-center"
    >
      <div className="w-full p-10 lg:p-20 lg:w-2/3">
        <span className="text-black_color font-medium text-3xl leading-normal">
          Kiến tạo phần mềm
          <span className="text-blue_color_2"> ĐỔI MỚI </span>
          để phục vụ công nghệ
        </span>

        <div className="flex gap-1 mt-2 mb-5">
          <div className="h-1 w-3 bg-blue_color_1" />
          <div className="h-1 w-10 bg-blue_color_1" />
        </div>

        <p className="text-black_color mt-6 mb-9 text-base text-gray-7 font-normal leading-loose text-center sm:text-left">
          Ra đời vào năm 2023, ISGroup là một đội ngũ gắn kết chặt chẽ và luôn
          chuyên tâm vào việc xây dựng sản phẩm, mang đến giải pháp tối ưu cho
          khách hàng. Trong suốt quá trình xây dựng và phát triển, tinh thần đó
          không hề thay đổi.
          <br />
          <br />
          Chúng tôi mở rộng quy mô với nhiều thành viên có chuyên môn và giàu
          kinh nghiệm thực chiến, đáp ứng mọi yêu cầu của khách hàng...
        </p>

        <div className="w-full text-center sm:text-left hover:transition hover:duration-200">
          <Button
            radius="full"
            size="lg"
            disableRipple={true}
            className="font-medium text-base text-blue_color_2 shadow-lg border-1 border-blue_color_2 bg-white_color hover:bg-blue_color_2 hover:text-white_color"
          >
            <a href="#about">Khám phá chúng tôi</a>
          </Button>
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <Image
          width={1000}
          src="/assets/images/banner-1.png"
          alt=""
          className="h-auto"
          radius="lg"
        />
      </div>
    </section>
  );
}
