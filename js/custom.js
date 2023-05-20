
const textArea = document.querySelector('#text');
const characterCount = document.querySelector('#character-count');

function getCharacterCount (field) {
  return field.value.length;
}

function handleInput () {
  characterCount.textContent = getCharacterCount(this);
}

textArea.addEventListener('input', handleInput);


$('.slider-main').slick({
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  });
