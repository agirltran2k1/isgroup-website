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
