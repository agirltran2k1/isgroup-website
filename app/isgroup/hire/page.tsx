"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import NavBar from "@/components/NavBarISGroup";

export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full bg-white_color">
      <header>
        <NavBar />
      </header>

      <main className="relative p-10 bg-foreground-100">
        <div className="justify-center flex">
          <Image
            isBlurred
            width={600}
            src="/assets/images/hiring.png"
            alt=""
            className="m-10"
          />
        </div>

        {/*Box tuyển dụng*/}
        {/*<div className="justify-center flex flex-wrap gap-10">
          <Card className="py-4">
            <CardHeader classNameName="pb-0 pt-2 px-4 flex-col items-start">
              <p classNameName="text-tiny uppercase font-bold">Tuyển dụng</p>
              <small classNameName="text-default-500">1 Nhân viên chính thức</small>
              <h4 classNameName="font-bold text-large">Lập trình viên</h4>
            </CardHeader>
            <CardBody classNameName="overflow-visible py-2">
              <Button
                onPress={onOpen}
                color="primary"
                variant="light"
                classNameName="mx-16 my-5"
              >
                Xem chi tiết
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader classNameName="flex flex-col gap-1">
                        Thông tin tuyển dụng
                      </ModalHeader>
                      <ModalBody>
                        <p>Đang cập nhật</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button variant="light" onPress={onClose}>
                          Đóng
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Ứng tuyển
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardBody>
          </Card>

          <Card className="py-4">
            <CardHeader classNameName="pb-0 pt-2 px-4 flex-col items-start">
              <p classNameName="text-tiny uppercase font-bold">Tuyển dụng</p>
              <small classNameName="text-default-500">1 Nhân viên chính thức</small>
              <h4 classNameName="font-bold text-large">Content & Marketing</h4>
            </CardHeader>
            <CardBody classNameName="overflow-visible py-2">
              <Button
                onPress={onOpen}
                color="primary"
                variant="light"
                classNameName="mx-16 my-5"
              >
                Xem chi tiết
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader classNameName="flex flex-col gap-1">
                        Thông tin tuyển dụng
                      </ModalHeader>
                      <ModalBody>
                        <p>Đang cập nhật</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button variant="light" onPress={onClose}>
                          Đóng
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Ứng tuyển
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardBody>
          </Card>

          <Card className="py-4">
            <CardHeader classNameName="pb-0 pt-2 px-4 flex-col items-start">
              <p classNameName="text-tiny uppercase font-bold">Tuyển dụng</p>
              <small classNameName="text-default-500">1 Nhân viên chính thức</small>
              <h4 classNameName="font-bold text-large">Vị trí khác</h4>
            </CardHeader>
            <CardBody classNameName="overflow-visible py-2">
              <Button
                onPress={onOpen}
                color="primary"
                variant="light"
                classNameName="mx-16 my-5"
              >
                Xem chi tiết
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader classNameName="flex flex-col gap-1">
                        Thông tin tuyển dụng
                      </ModalHeader>
                      <ModalBody>
                        <p>Đang cập nhật</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button variant="light" onPress={onClose}>
                          Đóng
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Ứng tuyển
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardBody>
          </Card>

                  </div>*/}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="p-4 w-full lg:w-1/3">
                <div className="h-full bg-white_color px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative text-black_color">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    NHÂN VIÊN CHÍNH THỨC
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Lập Trình Viên
                  </h1>
                  <p className="leading-relaxed mb-3">Đang cập nhật</p>
                  <a className="text-blue_color_2 inline-flex items-center">
                    Xem chi tiết
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      0
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      0
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 w-full lg:w-1/3">
                <div className="h-full bg-white_color px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative text-black_color">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    NHÂN VIÊN CHÍNH THỨC
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Marketing & Content
                  </h1>
                  <p className="leading-relaxed mb-3">Đang cập nhật</p>
                  <a className="text-blue_color_2 inline-flex items-center">
                    Xem chi tiết
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      0
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      0
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 w-full lg:w-1/3">
                <div className="h-full bg-white_color px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative text-black_color">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    THỰC TẬP SINH - INTERN
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Vị trí khác
                  </h1>
                  <p className="leading-relaxed mb-3">Đang cập nhật</p>
                  <a className="text-blue_color_2 inline-flex items-center">
                    Xem chi tiết
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      0
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
