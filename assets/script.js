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