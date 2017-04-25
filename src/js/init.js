export default function init() {
  let state = JSON.parse(localStorage.getItem('rejectionData'));

  if (state === null) {
    state = {
      data: [],
      overAllPoints: 0,
    };

    localStorage.setItem('rejectionData', JSON.stringify(state));
  }
  return state;
}

