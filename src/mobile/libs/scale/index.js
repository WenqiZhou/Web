!(() => {
  const dl = document.documentElement;

  const sheet = (() => {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`html { font-size:${dl.clientWidth / 10}px !important}`));
    document.head.appendChild(style);
    return style.sheet;
  })();

  window.addEventListener('resize', () => {
    sheet.insertRule(`html { font-size:${dl.clientWidth / 10}px !important}`, sheet.rules.length);
    sheet.deleteRule(0);
  });
})();
