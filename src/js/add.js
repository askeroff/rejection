export function checkInputs(first, second) {
  if(first.value === '' && second.value === '') {
    return false;
  }
  return true;
}

export default function add() {
  return true;
}