import {
  GET_DETAIL_TOKEN,
  REQUEST_DELETE_ACCOUNT,
  UPDATE_AVATAR_USER,
} from "@/public/api/endpoint/user";
import { axiosInstanceUser } from "../../config";
import {
  SIGN_IN,
  SIGN_UP,
  GET_USER_DETAIL,
  UPDATE_INFO_USER,
  CHECK_PHONE,
  GET_OTP_CODE,
  RESET_PASSWORD,
  SEND_MAIL_WELCOME,
  GET_SYSTEM_MEMBER,
  GET_WALLET_USDT,
  UPDATE_ADDRESS_USDT,
  TRANSFER_USDT,
  DEPOSIT_USDT,
  WITHDRAW_USDT,
  CHECKTXHASH_USDT,
  HISTORY_USDT,
  CHANGE_PASSWORD,
  TRANSFER_TOKEN_ISCOIN,
  SWAP_TOKEN_TO_USDT,
  SWAP_USDT_TO_TOKEN,
  ACTIVATE_WALLET,
  HISTORY_TOKEN,
  PRECHECK_USDT_TO_TOKEN,
  PRECHECK_TOKEN_TO_USDT,
  SEND_MAIL_NEW_STORE,
  GET_USER_DETAIL_BY_USERNAME,
  UPDATE_REFERER,
  CONFIG,
  PRECHECK_INVEST,
  GO_INVEST,
  GET_DAILY_CHECKIN,
  CLAIM_DAILY_CHECKIN,
  WITHDRAW_ISCOIN_DAILY,
  WITHDRAW_USDT_DAILY,
  HISTORY_INVEST,
  CLAIM_DAILY_INVITE,
  PRECHECK_ISSHARES,
  PURCHASE_ISSHARES,
  HISTORY_PURCHASE_ISSHARE,
} from "@/public/api/endpoint/user";
import { createForm } from "@/app/utils";
export default class User {
  checkPhone(phone: string) {
    return axiosInstanceUser("application/json").get(CHECK_PHONE, {
      params: { phone },
    });
  }

  signUp(data: object) {
    return axiosInstanceUser("application/json").post(SIGN_UP, data);
  }

  signIn(email: string, phone: string, password: string) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      SIGN_IN,
      {
        email,
        phone,
        password,
      }
    );
  }

  updateInfoUser(phone: string, data: object) {
    return axiosInstanceUser("application/json").put(UPDATE_INFO_USER, data, {
      params: { phone },
    });
  }

  getUserDetail(phone: string) {
    return axiosInstanceUser("application/json").get(GET_USER_DETAIL, {
      params: { phone },
    });
  }

  getUserDetailByUsername(username: string) {
    return axiosInstanceUser("application/json").get(
      GET_USER_DETAIL_BY_USERNAME.replace("${username}", username)
    );
  }

  getOTP(phone: string, type: string) {
    return axiosInstanceUser("application/json").get(GET_OTP_CODE, {
      params: { phone, type },
    });
  }

  resetPassword(phone: string, otp: string, new_password: string) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      RESET_PASSWORD,
      {
        phone,
        otp,
        new_password,
      }
    );
  }

  changePassword(phone: string, old_password: string, new_password: string) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      CHANGE_PASSWORD,
      {
        phone,
        old_password,
        new_password,
      }
    );
  }

  sendMailWelcome(phone: string) {
    return axiosInstanceUser("application/json").get(SEND_MAIL_WELCOME, {
      params: { phone },
    });
  }

  getSystemMember(phone: string) {
    return axiosInstanceUser("application/json").get(GET_SYSTEM_MEMBER, {
      params: { phone },
    });
  }

  activateWallet(phone: string) {
    return axiosInstanceUser("application/json").put(
      ACTIVATE_WALLET.replace("${phone}", phone)
    );
  }

  sendMailNewStore(data: object) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      SEND_MAIL_NEW_STORE,
      data
    );
  }

  updateReferer(phone: string, referral_code: string) {
    return axiosInstanceUser("application/x-www-form-urlencoded").put(
      UPDATE_REFERER,
      { phone, referral_code }
    );
  }

  getConfig() {
    return axiosInstanceUser("application/x-www-form-urlencoded").get(CONFIG);
  }

  //USDT
  getDetailUSDT(phone: string) {
    return axiosInstanceUser("application/json").get(GET_WALLET_USDT, {
      params: { phone },
    });
  }

  getDetailToken() {
    return axiosInstanceUser("application/json").get(GET_DETAIL_TOKEN);
  }

  updateAdressUSDT(phone: string, wallet_address: string) {
    return axiosInstanceUser("application/x-www-form-urlencoded").put(
      UPDATE_ADDRESS_USDT,
      {
        phone,
        wallet_address,
      }
    );
  }

  transferUSDT(phone_source: string, phone_target: string, usdt_value: number) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      TRANSFER_USDT,
      {
        phone_source,
        phone_target,
        usdt_value,
      }
    );
  }

  depositUSDT(
    phone: string,
    wallet_address: string,
    usdt_value: number,
    content: string,
    txhash: string
  ) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      DEPOSIT_USDT,
      {
        phone,
        wallet_address,
        usdt_value,
        content,
        txhash,
      }
    );
  }

  withdrawUSDT(phone: string, wallet_address: string, usdt_value: number) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      WITHDRAW_USDT,
      {
        phone,
        wallet_address,
        usdt_value,
      }
    );
  }

  checkTXHashUSDT(txhash: string) {
    return axiosInstanceUser("application/json").get(CHECKTXHASH_USDT, {
      params: { txhash },
    });
  }

  getHistoryUSDT(phone: string) {
    return axiosInstanceUser("application/json").get(HISTORY_USDT, {
      params: { phone },
    });
  }

  preCheckUSDTToToken(usdt_value: number) {
    return axiosInstanceUser("application/json").get(PRECHECK_USDT_TO_TOKEN, {
      params: { usdt_value },
    });
  }

  swapUSDTToToken(phone: string, usdt_value: number) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      SWAP_USDT_TO_TOKEN,
      {
        phone,
        usdt_value,
      }
    );
  }

  preCheckInvest(usdt_value: number) {
    return axiosInstanceUser("application/json").get(PRECHECK_INVEST, {
      params: { usdt_value },
    });
  }

  goInvest(phone: string, usdt_value: number, content: string) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      GO_INVEST,
      {
        phone,
        usdt_value,
        content,
      }
    );
  }

  //TOKEN ISCOIN
  transferTokenISCoin(
    phone_source: string,
    phone_target: string,
    token_value: number
  ) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      TRANSFER_TOKEN_ISCOIN,
      {
        phone_source,
        phone_target,
        token_value,
      }
    );
  }

  swapTokenToUSDT(phone: string, token_value: number) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      SWAP_TOKEN_TO_USDT,
      {
        phone,
        token_value,
      }
    );
  }

  getHistoryToken(phone: string) {
    return axiosInstanceUser("application/json").get(HISTORY_TOKEN, {
      params: { phone },
    });
  }
  preCheckTokenToUSDT(token_value: number) {
    return axiosInstanceUser("application/json").get(PRECHECK_TOKEN_TO_USDT, {
      params: { token_value },
    });
  }

  getDailyCheckin(phone: string) {
    return axiosInstanceUser("application/json").get(GET_DAILY_CHECKIN, {
      params: { phone },
    });
  }

  claimDailyCheckin(phone: string) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      CLAIM_DAILY_CHECKIN,
      {
        phone,
      }
    );
  }

  withdrawISCoinDaily(phone: string, token_value: number) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      WITHDRAW_ISCOIN_DAILY,
      {
        phone,
        token_value,
      }
    );
  }

  withdrawUSDTDaily(phone: string, btc_value: number) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      WITHDRAW_USDT_DAILY,
      {
        phone,
        btc_value,
      }
    );
  }

  getHistoryInvest(phone: string) {
    return axiosInstanceUser("application/json").get(HISTORY_INVEST, {
      params: { phone },
    });
  }

  claimDailyInvite(phone: string) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      CLAIM_DAILY_INVITE,
      {
        phone,
      }
    );
  }

  //ISSHARE
  preCheckISShare(usdt_value: number) {
    return axiosInstanceUser("application/json").get(PRECHECK_ISSHARES, {
      params: { usdt_value },
    });
  }

  purchaseISShare(phone: string, usdt_value: number) {
    return axiosInstanceUser("application/x-www-form-urlencoded").post(
      PURCHASE_ISSHARES,
      {
        phone,
        usdt_value,
      }
    );
  }

  getHistoryPurchaseISShare(phone: string) {
    return axiosInstanceUser("application/json").get(HISTORY_PURCHASE_ISSHARE, {
      params: { phone },
    });
  }

  requestDeleteAccount(phone: string) {
    return axiosInstanceUser("application/json").delete(
      REQUEST_DELETE_ACCOUNT.replace("{phone}", phone)
    );
  }
  updateAvatar(data: any) {
    const newForm = createForm(data);

    return axiosInstanceUser("multipart/form-data").post(
      UPDATE_AVATAR_USER,
      newForm
    );
  }
}
