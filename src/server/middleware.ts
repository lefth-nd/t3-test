import { createId } from "@paralleldrive/cuid2";

let id: string;
let idIsSet: boolean;

export function initCookie(id: string) {
  window.localStorage.setItem("init", id);
}

export function cookieInit() {
  if (window.localStorage.getItem("init") !== null) {
    return true;
  } else {
    return false;
  }
}

export function setIdValue() {
  id = createId();
  idIsSet = true;
  return id;
}

export function getIdValue() {
  if (idIsSet) {
    return id;
  } else {
    return "";
  }
}

export function setCookie(id: string, value: string) {
  window.localStorage.setItem(id, value);
}

export function getCookie(new_id: string) {
  const cookie_value = window.localStorage.getItem(new_id);
  if (cookie_value) {
    return cookie_value;
  } else {
    return 0;
  }
}
