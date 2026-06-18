import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
    icon: 'ico-error',
  });
}
