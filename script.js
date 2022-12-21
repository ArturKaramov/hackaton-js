buttonList = Array.from(document.querySelectorAll('.button'));

const setActive = (evt) => {evt.target.classList.add('button_active')}
const setNonActive = (n) => {n.classList.remove('button_active')}
const arr = [];
const timer = () => {
  const animation = () => {
    buttonList.forEach((button) => {
      button.removeEventListener('click', setActive)
    });
    setNonActive(arr[0]);
    arr.shift()
    if (arr.length === 0) {
      clearInterval(interval)
      buttonList.forEach((button) => {
        button.addEventListener('click', setActive)
      });
    }
  }
  let interval = setInterval(animation, 500)
  if (arr.length === 0) {
    clearInterval(interval)
  }
} 

buttonList.forEach((button) => {
  button.addEventListener('click', setActive)
});

document.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('button') && !arr.includes(evt.target)) {
    arr.push(evt.target);
  }
  if (arr.length === buttonList.length) {
    timer()
  }
});