// Validación visual Bootstrap (snippet mínimo)
(() => {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      const alertError = document.getElementById('alert-error');
      if (alertError) alertError.classList.remove('d-none');
    }
    form.classList.add('was-validated');
  }, false);
})();

// Mostrar / ocultar contraseña
(() => {
  const pass = document.getElementById('password');
  const toggle = document.getElementById('togglePass');
  if (!pass || !toggle) return;

  toggle.addEventListener('click', () => {
    const show = pass.type === 'password';
    pass.type = show ? 'text' : 'password';
    toggle.innerHTML = show
      ? '<i class="bi bi-eye-slash"></i>'
      : '<i class="bi bi-eye"></i>';
  });
})();
