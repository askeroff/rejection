export function checkInputs(first, second) {
  if(first.value.trim().length >= 3  && second.value.trim().length >= 3) {
    return true;
  }
  return false;
}

export function checkScore(elem) {
  if(elem.classList.contains('accepted-button')) {
    return 1;
  } else if(elem.classList.contains('rejected-button')) {
    return 10;
  }
  return undefined;
}

export function prepareObjectForStorage(what, whom) {
  return {};
}

function attachingEvents() {
  const addInputs = [].slice.call(document.querySelectorAll('.add'));
  addInputs.forEach((element) => {
    element.addEventListener('click', function(event) {
      console.log(`You clicked me: ${event.target}`); // eslint-disable-line no-console
      return true;
    });
  });
}

export function addEntry() {
  attachingEvents();
  return true;
}


