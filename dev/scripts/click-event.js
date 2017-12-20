export default function clickEvent() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'click touchstart';
  }
  return 'click'
}