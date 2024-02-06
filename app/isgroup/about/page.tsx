import NavBar from "@/components/NavBarISGroup";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="justify-center">
        <div className="w-full h-auto bg-blue_color_2 py-5 xl:py-12 lg:py-9 md:py-7 sm:py-5">
          <p className="p_1 ml-8">CÔNG TY CỔ PHẦN ISGROUP</p>
        </div>

        <div className="col_about">
          <div className="col-span-2">
            <p className="p_title">VỀ CHÚNG TÔI</p>
            <p className="p_about">
              ISGROUP - khởi nghiệp nổi bật trong lĩnh vực phần mềm, được thành
              lập với tầm nhìn đột phá và đầy tham vọng. Chúng tôi là đơn vị
              tiên phong trong việc xây dựng một ứng dụng đa nhiệm. Mục tiêu
              chính là phục vụ cộng đồng.
              <br />
              <br />
              Chúng tôi tin rằng sự tương tác mạnh mẽ của cộng đồng sẽ góp phần
              xây dựng và phát triển nền kinh tế. Vì vậy, chúng tôi tự tin phát
              triển một nền tảng độc đáo, cho phép chủ gian hàng có thể nhận
              được các lợi ích từ nền tảng.
              <br />
              <br />
              Đồng thời, thành viên mua sắm sẽ được hưởng một trải nghiệm tiện
              lợi thông qua ứng dụng di động hoặc website của chúng tôi để tìm
              kiếm, so sánh và mua sắm các sản phẩm hoặc dịch vụ từ các cửa hàng
              mà họ yêu thích.
            </p>
          </div>
          <Image
            src="/assets/images/about_banner_1.png"
            alt=""
            quality="100"
            layout="responsive"
            width={600}
            height={200}
          />
        </div>

        <div className="col_about">
          <Image
            src="/assets/images/about_banner_2.png"
            alt=""
            quality="100"
            layout="responsive"
            width={100}
            height={200}
          />

          <div className="col-span-2">
            <p className="p_title">CHÚNG TÔI MANG ĐẾN NHỮNG GÌ?</p>
            <p className="p_about">
              Chúng tôi luôn tập trung vào việc cung cấp giải pháp hiệu quả và
              dễ sử dụng cho các doanh nghiệp nhỏ và vừa cũng như đảm bảo rằng
              người tiêu dùng luôn có trải nghiệm mua sắm tốt nhất. Sứ mệnh của
              ISGROUP là thúc đẩy phát triển kinh doanh cho các chủ gian hàng,
              đồng thời nâng cao trải nghiệm mua sắm cho thành viên.
              <br />
              <br />
              Chúng tôi tự hào về những thành tựu đã đạt được và cam kết luôn
              tiến xa hơn để làm cho việc quản lý kinh doanh và mua sắm trở nên
              đơn giản, thông minh hơn.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
