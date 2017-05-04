import renderData from './view';

const state = JSON.parse(localStorage.getItem('rejectionData'));

export default function deleteFromArray(arr, i) {
  state.data = arr.filter((item, index) => index !== i);
  const newObj = Object.assign({}, state);
  localStorage.setItem('rejectionData', JSON.stringify(newObj));
  renderData();
}
