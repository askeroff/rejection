const inputWhat = document.querySelector('.what');
const inputWhom = document.querySelector('.whom');

export function checkInputs(first, second) {
  if (first.value.trim().length >= 3 && second.value.trim().length >= 3) {
    return true;
  }
  return false;
}

export function checkScore(elem) {
  if (elem.classList.contains('accepted-button')) {
    return 1;
  } else if (elem.classList.contains('rejected-button')) {
    return 10;
  }
  return undefined;
}

export function prepareObjectForStorage(what, whom, answer) {
  const objItem = {
    askedWhat: undefined,
    askedWhom: undefined,
    answer: undefined,
    date: undefined,
  };

  objItem.askedWhat = what;
  objItem.askedWhom = whom;
  objItem.answer = answer;
  objItem.date = new Date();

  return objItem;
}

function attachingEvents() {
  const addInputs = [].slice.call(document.querySelectorAll('.add'));
  addInputs.forEach((element) => {
    element.addEventListener('click', (event) => {
      const score = checkScore(event.target);
      prepareObjectForStorage(inputWhat.value, inputWhom.value, score);
      return true;
    });
  });
}


export function addEntry() {
  attachingEvents();
  return true;
}
