import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full bg-white_color">
      {/*Banner*/}
      <div>
        <Image
          src="/assets/images/banner-ismos.png"
          alt="Home"
          quality="100"
          layout="responsive"
          width={500}
          height={500}
        />

        <div className="text_banner_1">
          <p className="p_3">
            GIẢI PHÁP HÀNG ĐẦU <br /> TRONG QUẢN LÝ BÁN HÀNG
          </p>

          <p className="p_4">
            Một giải pháp quản trị bán lẻ mạnh mẽ, giúp khách hàng cũ từ đa kênh
            quay lại mua hàng.
            <br />
            Hướng đến trải nghiệm mua sắm tuyệt vời và gắn kết.
          </p>

        </div>
      </div>
    </div>
  );
}
