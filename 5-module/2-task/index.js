function toggleText() {
  // ваш код...
  const btnHide = document.querySelector('.toggle-text-button');
  const text = document.getElementById('text');
  btnHide.addEventListener('click', () => { 
    text.toggleAttribute('hidden')});
}
