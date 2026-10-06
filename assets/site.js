document.querySelectorAll('.copy-citation').forEach(button => {
  button.addEventListener('click', async () => {
    const citation = button.closest('.citation-content').querySelector('code').textContent;
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(citation);
      button.textContent = 'Copied';
      status.textContent = 'BibTeX citation copied to clipboard.';
      setTimeout(() => { button.textContent = 'Copy BibTeX'; }, 2500);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(button.closest('.citation-content').querySelector('code'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Select and copy the highlighted BibTeX citation.';
      button.textContent = 'Selected — copy manually';
    }
  });
});
