import {Notify} from "notiflix/build/notiflix-notify-aio";

export function successNotify(totalQuantity, page) {
  if (page === 1) {
    Notify.success(`Hooray! We found ${totalQuantity} images.`);
  }
}

export function failureNotify(text) {
  Notify.failure(text);
}
