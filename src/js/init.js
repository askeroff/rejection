export default function init() {
  let state = JSON.parse(localStorage.getItem('rejectionData'));

  if (state === null) {
    state = { data: [] };

    localStorage.setItem('rejectionData', JSON.stringify(state));
  }
  return state;
}

