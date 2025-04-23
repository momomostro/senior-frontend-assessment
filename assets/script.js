//phone mask
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
  let cleaned = e.target.value.replace(/\D/g, '').substring(0, 10);
  let formatted = '';

  if (cleaned.length > 0) formatted += '(';
  if (cleaned.length >= 1) formatted += cleaned.substring(0, 3);
  if (cleaned.length >= 4) formatted += ') ' + cleaned.substring(3, 6);
  if (cleaned.length >= 7) formatted += '-' + cleaned.substring(6, 10);

  e.target.value = formatted;
});

//validation
const form = document.getElementById('giveaway-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let hasError = false;

  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');

  [name, phone, email].forEach(input => input.classList.remove('error'));

  if (name.value.trim().length < 2) {
    name.classList.add('error');
    hasError = true;
  }

  const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
  if (!phonePattern.test(phone.value.trim())) {
    phone.classList.add('error');
    hasError = true;
  }

  if (!email.validity.valid) {
    email.classList.add('error');
    hasError = true;
  }

  if (hasError) return;