const emojis = ['😀', '😂', '😍', '😎', '😜', '🤔', '😇', '🤩', '😊', '🥳', '😻', '👍', '👏', '🙌', '💪', '🌟', '✨', '🎉', '🎈', '🍕'];

const gallery = document.getElementById('gallery');

emojis.forEach(emoji => {
  const box = document.createElement('div');
  box.classList.add('box');
  box.textContent = emoji;
  gallery.appendChild(box);
});
