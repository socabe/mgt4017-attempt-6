const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const formMessage = document.getElementById('form-message');
const demoForm = document.getElementById('demo-form');

function openModal(type) {
  const isSignup = type === 'signup';
  modalTitle.textContent = isSignup ? 'Create Your Account' : 'Welcome Back';
  modalDescription.textContent = isSignup
    ? 'Sign up and start your wellness journey.'
    : 'Log in to access your membership.';
  formMessage.textContent = '';
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('email').focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-modal]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openModal(link.dataset.modal);
  });
});

document.querySelector('.close').addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});

demoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent =
    'This is a demo website. Registration and login are not connected yet.';
});
