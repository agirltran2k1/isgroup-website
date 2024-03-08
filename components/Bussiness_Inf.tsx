import { Image } from "@nextui-org/react";
import { imageLoader } from "../app/utils/ImageLoader";

export default function Page() {
  const menuItems = [
    { id: 1, label: "Cửa hàng hoa", img: "/assets/images/ISMOS/img_10.png" },
    { id: 2, label: "Nhà thuốc", img: "/assets/images/ISMOS/img_11.png" },
    { id: 3, label: "Cửa hàng bánh", img: "/assets/images/ISMOS/img_12.png" },
    { id: 4, label: "Tạp hóa", img: "/assets/images/ISMOS/img_13.png" },
    { id: 5, label: "Ẩm thực", img: "/assets/images/ISMOS/img_14.png" },
    { id: 6, label: "Thời trang", img: "/assets/images/ISMOS/img_15.png" },
    { id: 7, label: "Văn phòng phẩm", img: "/assets/images/ISMOS/img_16.png" },
    { id: 8, label: "Mỹ phẩm", img: "/assets/images/ISMOS/img_17.png" },
    { id: 9, label: "Công nghệ", img: "/assets/images/ISMOS/img_18.png" },
    { id: 10, label: "Khác", img: "/assets/images/ISMOS/img_19.png" },
    // Add more menu items as needed
  ];

  return (
    <div className="w-full bg-white_color">
      {/*ISMOS SẴN SÀNG HỖ TRỢ*/}
      <div className="mt-20">
        <div className="-my-10">
          <p className="text-black_color text-3xl font-medium text-center pt-10 leading-loose">
            Chúng tôi thiết kế phần mềm chuyên biệt cho từng ngành hàng
          </p>
        </div>

        <section className="text-gray-600 body-font">
          <div className="px-5 py-24 justify-center w-full flex flex-wrap -m-4 gap-10 lg:gap-20">
          {menuItems.map((item) => (
            <div className="p-10" key={item.id}>
              {item.img && (
                
                <Image
                  loader={imageLoader}
                  src={item.img}
                  alt="Home"
                  width={100}
                  height={500}
                />
                
              )}
              <p className="text-center text-black_color leading-loose mt-3">{item.label}</p>
            </div>
          ))}
          </div>
        </section>
      </div>

      <div>
          <svg
            id="visual"
            viewBox="0 0 2500 150"
            width="2500"
            height="150"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <rect x="0" y="0" width="2500" height="150" fill="#FFFFFF"></rect>
            <path
              d="M0 41L139 77L278 49L417 86L556 100L694 109L833 71L972 93L1111 69L1250 63L1389 58L1528 38L1667 61L1806 85L1944 53L2083 81L2222 84L2361 82L2500 97L2500 151L2361 151L2222 151L2083 151L1944 151L1806 151L1667 151L1528 151L1389 151L1250 151L1111 151L972 151L833 151L694 151L556 151L417 151L278 151L139 151L0 151Z"
              fill="#f5f5f5"
              stroke-linecap="square"
              stroke-linejoin="bevel"
            ></path>
          </svg>
        </div>
      <section id="about" className="justify-center p-20 bg-foreground-100">
        <div className="flex flex-wrap w-full justify-center items-center p-10 gap-10">
          <div className="w-full lg:w-1/2 ">
            <p className="text-black_color text-3xl font-medium">Trực tuyến hay Ngoại tuyến?</p>

            <div className="flex gap-1 mt-2 mb-5">
              <div className="h-1 w-3 bg-danger-500" />
              <div className="h-1 w-10 bg-danger-500" />
            </div>

            <p className="text-black_color text-base leading-loose">
              Ứng dụng MOS hoạt động tốt ngay cả khi kết nối mạng không ổn định.
              <br />
              Thiết lập cửa hàng mới nhanh chóng và dễ dàng chỉ cần có kết nối
              Internet. Sau đó sử dụng Điểm bán hàng của bạn ở mọi nơi, mọi lúc.
              <br />
              Mặc dù cần phải có kết nối Internet để khởi động Điểm bán hàng
              MOS, nhưng ứng dụng này sẽ vẫn hoạt động ngay cả khi đã ngắt kết
              nối hoàn toàn.
            </p>
          </div>

          <div>
            <Image
              src="/assets/images/ISMOS/img_20.png"
              alt=""
              width={350}
              height={200}
            />
          </div>
        </div>
      </section>

    </div>
  );
}
