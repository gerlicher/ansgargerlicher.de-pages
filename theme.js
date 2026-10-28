// Apply the saved appearance before the first paint, including on direct article URLs.
(() => {
  let preference = 'system';
  try { preference = localStorage.getItem('ag-theme') || 'system'; } catch { /* Optional storage. */ }
  const dark = preference === 'dark' || (preference !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
})();
