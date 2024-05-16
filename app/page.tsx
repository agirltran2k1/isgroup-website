"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";
import { Image, Button } from "@nextui-org/react";
import { imageLoader } from "@/app/utils/ImageLoader";
import NextImage from "next/image";
import { message, Steps, theme, Modal } from "antd";
import { useRouter } from "next/navigation";
import { FaCircleCheck } from "react-icons/fa6";
import {
  handleChangeObject,
  isEmail,
  isPhoneNumberVN,
  isUsername,
} from "@/app/utils";
import Api from "@/public/api";

const Account_Information = ({ data, setData }: any) => {
  return (
    <form
      className="flex flex-col mx-auto"
      method="post"
      action="#"
      id="infor_form"
    >
      <div className="">
        <label className="text-black_color">Số điện thoại</label>
        <input
          onChange={(text) =>
            handleChangeObject("phone", text.target.value, setData)
          }
          value={data?.phone}
          type="tel"
          placeholder="Nhập số điện thoại"
          required
          title="Vui lòng nhập số điện thoại"
          maxLength={10}
          autoFocus
          pattern="[0-9]{10}"
          className="w-full p-3 mt-1 block rounded-s-md bg-foreground-100 border-none focus:border-gray-500 focus:bg-white focus:ring-0"
        ></input>
      </div>

      <div className="mt-10">
        <label className="text-black_color">Họ và tên</label>
        <input
          onChange={(text) =>
            handleChangeObject("fullname", text.target.value, setData)
          }
          value={data?.fullname}
          type="text"
          placeholder="Nhập họ và tên"
          className="w-full p-3 mt-1 block rounded-s-md bg-foreground-100 border-none focus:border-gray-500 focus:bg-white focus:ring-0"
        ></input>
      </div>

      <div className="mt-10">
        <label className="text-black_color">Email</label>
        <input
          onChange={(text) =>
            handleChangeObject("email", text.target.value, setData)
          }
          value={data?.email}
          type="email"
          placeholder="Nhập email của bạn"
          className="w-full p-3 mt-1 block rounded-s-md bg-foreground-100 border-none focus:border-gray-500 focus:bg-white focus:ring-0"
        ></input>
      </div>
    </form>
  );
};

const Security_Information = ({ data, setData }: any) => {
  return (
    <form className="" method="post" action="#" id="infor_form">
      <div className="">
        <label className="text-black_color">Tên đăng nhập</label>
        <input
          onChange={(text) =>
            handleChangeObject("username", text.target.value, setData)
          }
          type="tel"
          placeholder="Nhập tên đăng nhập"
          required
          autoFocus
          className="w-full p-3 mt-1 block rounded-s-md bg-foreground-100 border-none focus:border-gray-500 focus:bg-white focus:ring-0"
        ></input>
      </div>

      <div className="mt-10">
        <label className="text-black_color">Mật khẩu</label>
        <input
          onChange={(text) =>
            handleChangeObject("password", text.target.value, setData)
          }
          type="password"
          placeholder="Nhập mật khẩu"
          className="w-full p-3 mt-1 block rounded-s-md bg-foreground-100 border-none focus:border-gray-500 focus:bg-white focus:ring-0"
        ></input>
      </div>

      <div className="mt-10">
        <label className="text-black_color">Xác nhận mật khẩu</label>
        <input
          onChange={(text) =>
            handleChangeObject("re_password", text.target.value, setData)
          }
          type="password"
          placeholder="Nhập lại mật khẩu"
          className="w-full p-3 mt-1 block rounded-s-md bg-foreground-100 border-none focus:border-gray-500 focus:bg-white focus:ring-0"
        ></input>
      </div>

      <div className="mt-14">
        <p className="text-black_color">
          Được giới thiệu bởi:{" "}
          <p className="text-success-500 font-bold">#{data.referral_code}</p>
        </p>
        <p className="text-gray_blur_color text-sm mt-2">
          Bằng việc chọn "Đăng ký", thành viên đã chấp nhận điều khoản của chúng
          tôi{" "}
        </p>
      </div>
    </form>
  );
};

const App: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (!data?.phone || !data?.fullname || !data?.email) {
      message.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (!isPhoneNumberVN(data?.phone)) {
      message.error("Vui lòng nhập đúng định dạng số điện thoại!");
      return;
    }
    if (!isEmail(data?.email)) {
      message.error("Vui lòng nhập đúng định dạng email!");
      return;
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const getRef = () => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window?.location?.href.split("?")[1]);
      return params.get("ref");
    }
  };

  const refCode = getRef();
  const [data, setData] = useState<any>({ referral_code: refCode });

  const steps = [
    {
      title: "Thông tin cá nhân",
      content: <Account_Information data={data} setData={setData} />,
    },
    {
      title: "Thông tin bảo mật",
      content: <Security_Information data={data} setData={setData} />,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  const [open, setOpen] = useState(false);
  const router = useRouter();

  const register = async () => {
    if (!data?.username || !data?.password || !data?.re_password) {
      message.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    if (!isUsername(data?.username)) {
      message.error("Vui lòng nhập đúng định dạng username!");
      return;
    }
    if (data?.password != data?.re_password) {
      message.error("Mật khẩu không khớp, vui lòng kiểm tra!");
      return;
    }
    try {
      const res = await Api.user.signUp(data);
      if (res.data.is_correct) {
        setOpen(true);
      } else {
        message.error("Vui lòng thử lại sau!");
      }
    } catch (error) {}
  };

  return (
    <div className="w-full bg-white_color py-10 flex flex-col justify-center items-center">
      <p className="text-black_color text-3xl font-bold py-10">
        ĐĂNG KÝ TÀI KHOẢN ISGROUP
      </p>

      <div className="lg:w-2/4 w-2/3 mx-auto">
        <Steps
          className="mx-auto container justify-center"
          current={current}
          items={items}
        />

        <div className="mx-auto my-14 w-full">{steps[current].content}</div>

        <div className="mx-auto justify-around flex">
          {current < steps.length - 1 && (
            <div className="flex flex-row items-center">
              <Button
                radius="sm"
                size="lg"
                disableRipple={true}
                onClick={() => next()}
                className="font-medium text-base text-blue_color_2  bg-white_color hover:bg-blue_color_2 hover:text-white_color"
              >
                Tiếp theo
              </Button>
            </div>
          )}
          {current > 0 && (
            <Button
              radius="sm"
              size="lg"
              disableRipple={true}
              onClick={() => prev()}
              className="font-medium text-base text-foreground-500  bg-white_color hover:bg-foreground-700 hover:text-white_color"
            >
              Quay lại
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              radius="sm"
              size="lg"
              disableRipple={true}
              onClick={() => register()}
              className="font-medium text-base text-blue_color_2  bg-white_color hover:bg-blue_color_2 hover:text-white_color"
            >
              Đăng ký
            </Button>
          )}
        </div>
      </div>

      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => router.push("/")}
        width={1000}
        footer={null}
      >
        <div className="flex flex-col mx-auto justify-center items-center">
          <FaCircleCheck size={"70"} color="#028F5C" className="my-10" />

          <p className="text-black_color text-base text-center">
            Chúc mừng bạn đã đăng ký thành công!{" "}
          </p>
          <p className="text-black_color text-base text-center">
            Vui lòng tải ứng dụng ISGroup và trải nghiệm cùng cộng đồng{" "}
          </p>

          <div className="mt-3 justify-center items-center flex flex-col">
            <p className="text-black_color text-base">Tải ứng dụng tại đây</p>
            <div className="w-full flex flex-wrap items-center gap-3">
              {/*<Image
                loader={imageLoader}
                as={NextImage}
                src="/assets/images/ic_download_googleplay.png"
                alt=""
                width={160}
                height={400}
                className="hover: cursor-pointer"
  />*/}
              <Link href="https://play.google.com/store/apps/details?id=com.islink">
                <Image
                  src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                  width="150"
                  height="110"
                  alt=""
                  className="hover: cursor-pointer -top-8"
                />
              </Link>

              <Link href="https://apps.apple.com/vn/app/is-2020/id6472865637">
                <Image
                  src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                  width="150"
                  height="110"
                  alt=""
                  className="hover: cursor-pointer -top-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
