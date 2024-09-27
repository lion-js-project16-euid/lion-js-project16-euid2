export function endScroll(target) {
  target.scrollTop = target.scrollHeight;
  return target.scrollHeight; // 나중에 어디 쓸 수도 있으니 return
}
