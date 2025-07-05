function nextPage() {
  const current = window.location.pathname;
  const match = current.match(/index(\d+)\.html/);
  let pageNum = match ?
  parseInt(match[1]) : 20;
  pageNum++;

  const next = index$
  {pageNum} html;  // use backticks ` not quotes
  window.location.href = next;
}