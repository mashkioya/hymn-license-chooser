document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-reveal]');
  if (!btn) return;

  const targetId = btn.dataset.reveal;
  const panel = document.getElementById(targetId);

  panel.classList.add('open');
});
