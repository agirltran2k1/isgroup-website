import NavBar from "@/components/NavBarISMos";
import Banner from "@/components/BannerISMos";
import Bussiness_Inf from "@/components/Bussiness_Inf";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "../utils/ImageLoader";

export default function Page() {
  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative bg-[#FDFDFE]">
        <Banner />
        <div className="w-full h-full">
          <div className="mt-12">
            <p className="text-blue_color_2 text-base font-medium mb-2 text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
              ISMOS giúp bạn quản lý và bán hàng dễ dàng hơn
            </p>
            <p className="text-black_color text-sm text-center mx-10 xl:text-xl lg:text-xl md:text-sm sm:text-sm">
              Phù hợp với mọi quy mô từ một cửa hàng cho đến nhiều chuỗi cửa
              hàng và bán hàng đa kênh.
            </p>
          </div>

          <div className="col_about">
            <div className="col-span-2">
              <p className="p_title">
                MOS <br />
                PHẦN MỀM QUẢN LÝ BÁN HÀNG
              </p>
              <p className="p_about">
                Tính tiền, in hóa đơn, mã vạch, quản lý kho, khuyến mại, kế
                toán, khách hàng, nhân viên, báo cáo.
              </p>
            </div>
            <Image
              loader={imageLoader}
              src="/assets/images/ISMOS/img_1.png"
              alt=""
              quality="100"
              layout="responsive"
              width={600}
              height={200}
            />
          </div>

          <div className="col_about">
            <Image
              loader={imageLoader}
              src="/assets/images/ISMOS/img_2.png"
              alt=""
              quality="100"
              layout="responsive"
              width={600}
              height={200}
            />
            <div className="col-span-2">
              <p className="p_title">
                ECOM <br />
                BÁN HÀNG TRÊN SÀN THƯƠNG MẠI ĐIỆN TỬ
              </p>
              <p className="p_about">
                Đồng bộ sản phẩm tồn kho, đơn hàng với sàn ISLink.
              </p>
            </div>
          </div>

          <div className="col_about">
            <div className="col-span-2">
              <p className="p_title">
                SHIPPING <br />
                CỔNG VẬN CHUYỂN, THU HỘ COD TOÀN QUỐC
              </p>
              <p className="p_about">
                Tích hợp GHN, VietNam Post, EMS, Viettel Post, J&T, Best.
                <br />
                Đối soát tự động, chiết khấu cao.
              </p>
            </div>
            <Image
              loader={imageLoader}
              src="/assets/images/ISMOS/img_3.png"
              alt=""
              quality="100"
              layout="responsive"
              width={600}
              height={200}
            />
          </div>

          <div className="col_about">
            <Image
              loader={imageLoader}
              src="/assets/images/ISMOS/img_4.png"
              alt=""
              quality="100"
              layout="responsive"
              width={600}
              height={200}
            />
            <div className="col-span-2">
              <p className="p_title">
                OMNICHANNEL <br />
                QUẢN LÝ BÁN HÀNG ĐA KÊNH
              </p>
              <p className="p_about">
                Tổng hợp tất cả các dịch vụ của Nhanh.vn bao gồm POS, Website,
                Vpage, Ecom và cổng vận chuyển.
              </p>
            </div>
          </div>

          {/*ISMOS CÓ GÌ NỔI BẬT?*/}
          <div className="mt-12">
            <p className="text-blue_color_2 text-base font-medium mb-2 text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
              ISMOS có gì nổi bật?
            </p>
          </div>

          <div className="col_outstanding">
            <div className="bg-[#F2FBF5]">
              <Image
                loader={imageLoader}
                src="/assets/images/ISMOS/img_6.png"
                alt="Home"
                quality="100"
                width={200}
                height={0}
                className="img_outstanding"
              />

              <p className="p_outstanding_1">
                TRẢI NGHIỆM BÁN LẺ HOÀN TOÀN MỚI
              </p>
              <p className="p_outstanding_2">
                <br />
                Phiên bản PC: Đáp ứng đầy đủ các nghiệm vụ bán hàng, phối hợp từ
                online tới offline.
                <br />
                <br />
                Phiên bản Mobile: Giúp việc quản lý tiện lợi, nâng cao trải
                nghiệm mua bán tại cửa hàng.
              </p>
            </div>

            <div className="bg-[#F2F8FE]">
              <Image
                loader={imageLoader}
                src="/assets/images/ISMOS/img_7.png"
                alt="Home"
                quality="100"
                width={200}
                height={0}
                className="img_outstanding"
              />
              <p className="p_outstanding_1">
                ĐỒNG BỘ DỮ LIỆU TRONG THỜI GIAN THỰC
              </p>
              <p className="p_outstanding_2 text-center">
                <br />
                Dữ liệu Online và Offline được đồng bộ theo thời gian thực, về
                tồn kho, thông tin khách hàng, khuyến mãi, linh hoạt vận hành để
                mang lại trải nghiệm tuyệt vời cho khách hàng.
              </p>
            </div>

            <div className="bg-[#FFF2F2]">
              <Image
                loader={imageLoader}
                src="/assets/images/ISMOS/img_8.png"
                alt="Home"
                quality="100"
                width={200}
                height={0}
                className="img_outstanding"
              />
              <p className="p_outstanding_1">TỰ ĐỘNG BÁN LẠI KHÁCH HÀNG CŨ</p>
              <p className="p_outstanding_2">
                <br />
                ISMOS có khả năng khai thác dữ liệu, lịch sử mua hàng để tự động
                kết nối, chăm sóc và cá nhân hoá ưu đãi cho từng khách hàng qua
                các kênh SMS, FACEBOOK, EMAIL,...
              </p>
            </div>
          </div>

          {/*TƯƠNG THÍCH VỚI MỌI THIẾT BỊ*/}
          <div>
            <div className="mt-12">
              <p className="text-blue_color_2 text-base font-medium mb-2 text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                Tương thích với mọi thiết bị
              </p>
              <p className="text-black_color text-sm text-center mx-10 xl:text-xl lg:text-xl md:text-sm sm:text-sm">
                Không cần cài đặt và không yêu cầu phần cứng đặt biệt nào.
              </p>
            </div>
            <Image
              loader={imageLoader}
              src="/assets/images/ISMOS/img_9.png"
              alt="Home"
              quality="100"
              width={1920}
              height={1080}
              className="xl:px-72 lg:px-56 md:px-32 sm:px-20"
            />
          </div>

          <Bussiness_Inf />
        </div>
      </main>
    </div>
  );
}
