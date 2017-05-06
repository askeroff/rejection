import renderData from './view';

export default function deleteFromArray(arr, i) {
  const state = JSON.parse(localStorage.getItem('rejectionData'));
  state.data = arr.filter((item, index) => index !== i);
  const newObj = Object.assign({}, state);
  localStorage.setItem('rejectionData', JSON.stringify(newObj));
  renderData();
}
