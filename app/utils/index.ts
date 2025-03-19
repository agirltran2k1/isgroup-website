export const handleChangeObject = (key: string, value: any, setData: any) => {
  setData((pre: any) => ({ ...pre, [key]: value }));
};

export const isPhoneNumberVN = (str: string) => {
  const regex = /^(0|\+84)([1-9])\d{8}$/;
  return regex.test(str);
};

export const isEmail = (str: string) => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(str);
};

export const isUsername = (str: string) => {
  const regex = /^[a-zA-Z0-9_-]{3,16}$/;
  return regex.test(str);
};

export const createForm = (data: any) => {
  const form = new FormData();
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key].forEach((item: any) => {
        form.append(key, item);
      });
    } else {
      form.append(key, data[key]);
    }
  }

  return form;
};

export const getLinkDownLoadApp = () => {
  const getOS = () => {
    let uA = navigator.userAgent || navigator.vendor;
    if (
      /iPad|iPhone|iPod/.test(uA) ||
      (uA.includes("Mac") && "ontouchend" in document)
    )
      return "iOS";
    let i,
      os = ["Windows", "Android", "Unix", "Mac", "Linux", "BlackBerry"];
    for (i = 0; i < os.length; i++)
      if (new RegExp(os[i], "i").test(uA)) return os[i];
  };

  const linkDownLoadApp =
    getOS() == "iOS"
      ? "https://apps.apple.com/us/app/id6472865637"
      : "https://play.google.com/store/apps/details?id=com.islink&pli=1";

  return linkDownLoadApp;
};
