function formatDate(date) {
  const d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  const year = d.getFullYear();

  if (month.length < 2) {
    month = `0 ${month}`;
  }
  if (day.length < 2) {
    day = `0 ${day}`;
  }

  return [year, month, day].join('-');
}

export default function renderData() {
  const state = JSON.parse(localStorage.getItem('rejectionData'));
  const resultsList = document.querySelector('.results');
  resultsList.innerHTML = '';
  const fragment = document.createDocumentFragment();

  document.querySelector('.overall-score').innerHTML = state.overAllPoints;

  state.data.forEach((item) => {
    const li = document.createElement('li');
    const whomSpan = document.createElement('span');
    const whatSpan = document.createElement('span');
    const answerSpan = document.createElement('span');
    const dateSpan = document.createElement('span');
    const deleteInput = document.createElement('input');

    whomSpan.classList.add('whom');
    whatSpan.classList.add('what');
    dateSpan.classList.add('date');
    answerSpan.classList.add('result');
    deleteInput.setAttribute('type','button');
    deleteInput.setAttribute('value','Delete');
    deleteInput.classList.add('delete');

    if (item.answer === 1) {
      answerSpan.classList.add('accepted');
      answerSpan.innerHTML = 'accepted';
    } else {
      answerSpan.classList.add('rejected');
      answerSpan.innerHTML = 'rejected';
    }

    whomSpan.innerHTML = item.askedWhom;
    whatSpan.innerHTML = item.askedWhat;
    dateSpan.innerHTML = formatDate(item.date);

    li.appendChild(whomSpan);
    li.appendChild(whatSpan);
    li.appendChild(answerSpan);
    li.appendChild(dateSpan);
    li.appendChild(deleteInput);
    fragment.appendChild(li);
  });

  resultsList.appendChild(fragment);
  return true;
}
