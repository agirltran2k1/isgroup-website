import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full bg-white_color">
        {/*Banner*/}
        <div>
          <Image
            src="/assets/images/banner-isgroup.png"
            alt="Home"
            quality="100"
            layout="responsive"
            width={1920}
            height={1080}
          />

          <div className="text_banner">
            <p className="p_1">
              CÔNG TY <br /> CỔ PHẦN ISGROUP
            </p>

            <p className="p_2">
              ISGROUP - khởi nghiệp nổi bật trong lĩnh vực phần mềm, được thành
              lập với tầm nhìn đột phá và đầy tham vọng.
              <br />
              Chúng tôi là đơn vị tiên phong trong việc xây dựng một ứng dụng đa
              nhiệm.
              <br />
              Mục tiêu chính là phục vụ cộng đồng.
            </p>
          </div>
        </div>
    </div>
  );
}
