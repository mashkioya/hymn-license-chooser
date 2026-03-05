document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-reveal]');
  if (!btn) return;

  const targetId = btn.dataset.reveal;
  const panel = document.getElementById(targetId);

  panel.classList.add('open');
  
  // pérate tantito
  setTimeout(() => { 
    // disable clicked link
    btn.classList.add('disabled'); 
  }, 500);

  // hide sibling buttons
  const siblings = btn.parentElement.querySelectorAll('a');

  siblings.forEach(a => {
    if(a !== btn) {
      a.classList.add('hidden');
    }
  });
});
