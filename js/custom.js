
const textArea = document.querySelector('#text');
const characterCount = document.querySelector('#character-count');

function getCharacterCount (field) {
  return field.value.length;
}

function handleInput () {
  characterCount.textContent = getCharacterCount(this);
}

textArea.addEventListener('input', handleInput);