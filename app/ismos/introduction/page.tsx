"use client";
import NavBar from "@/components/NavBarISMos";
import Bussiness_Inf from "@/components/Bussiness_Inf";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-[#FDFDFE]">
        <div className="w-full h-auto bg-blue_color_2 py-5 xl:py-12 lg:py-9 md:py-7 sm:py-5">
          <p className="p_1 ml-8">Giới thiệu</p>
        </div>

        <div className="col_1">
          <div>
            <p className="p_title_1">Chào mừng bạn đến với ISMOS!</p>
            <p className="p_about_1">
              Dù cho bạn là người mới kinh doanh hay đã là một người với nhiều
              kinh nghiệm trong lĩnh vực này, chúng tôi tin rằng bạn cũng sẽ tìm
              được những câu trả lời hữu ích cho những thắc mắc của mình tại
              đây!
            </p>
          </div>
          <Image
            src="/assets/images/ISMOS/img_21.png"
            alt=""
            quality="100"
            layout="responsive"
            width={600}
            height={200}
          />
        </div>

        <div className="col_about">
          <Image
            src="/assets/images/ISMOS/img_5.png"
            alt=""
            quality="100"
            layout="responsive"
            width={600}
            height={200}
          />
          <div className="col-span-2">
            <p className="p_about">
              Sau khi hoàn tất đăng ký sử dụng miễn phí LinkPos, bạn cần kiên
              nhẫn chờ đợi xác nhận và kích hoạt tài khoản từ LinkPos để có thể
              bắt đầu sử dụng. Đây là sự chuẩn bị quan trọng, với những hạng mục
              cần hoàn tất trước khi bạn thực sự bắt tay vào bán hàng. Bạn có
              thể in ra danh sách những việc cần làm để theo dõi được tiến độ
              công việc.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/assets/images/ISMOS/img_22.png"
            alt="Home"
            quality="100"
            width={1920}
            height={1080}
          />
          <div className="px-16 xl:px-52 lg:px-52 md:px-40 sm:px-32">
            <p className="text-black_color text-sm text-center mx-4 xl:text-xl lg:text-xl md:text-sm sm:text-sm">
              Nếu bạn đã từng bán hàng với những hệ thống khác mà không phải là
              ISMos, vậy thì chần chừ gì nữa???
              <br />
              Hãy bắt đầu sự chuyển dịch ngay bây giờ để cảm nhận sự khác biệt
              của ISMos!
            </p>
          </div>
        </div>

        <Bussiness_Inf />
      </main>
    </div>
  );
}
