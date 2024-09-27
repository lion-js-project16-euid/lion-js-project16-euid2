export function clearContents(target) {
  if (target.nodeName === 'INPUT' || target.nodeName === 'TRXTAREA') {
    target.value = '';
    return;
  }
  target.textContent = '';
}
