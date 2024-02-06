import Image from "next/image";

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
        <p className="text-blue_color_2 text-base font-medium mb-2 text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
          ISMOS sẵn sàng hỗ trợ?
        </p>

        <div className="col_business">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.img && (
                <Image
                  src={item.img}
                  alt="Home"
                  quality="100"
                  layout="responsive"
                  width={500}
                  height={500}
                  className="p-5"
                />
              )}
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/*TRỰC TUYẾN HAY NGOẠI TUYẾN*/}
      <div className="col_1">
        <div className="">
          <p className="p_title_1">TRỰC TUYẾN hay NGOẠI TUYẾN</p>
          <p className="p_about_1">
            Ứng dụng MOS hoạt động tốt ngay cả khi kết nối mạng không ổn định.
            <br />
            Thiết lập cửa hàng mới nhanh chóng và dễ dàng chỉ cần có kết nối
            Internet. Sau đó sử dụng Điểm bán hàng của bạn ở mọi nơi, mọi lúc.
            <br />
            Mặc dù cần phải có kết nối Internet để khởi động Điểm bán hàng MOS,
            nhưng ứng dụng này sẽ vẫn hoạt động ngay cả khi đã ngắt kết nối hoàn
            toàn.
          </p>
        </div>
        <Image
          src="/assets/images/ISMOS/img_20.png"
          alt=""
          quality="100"
          layout="responsive"
          width={600}
          height={200}
        />
      </div>
    </div>
  );
}
