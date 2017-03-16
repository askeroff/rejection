export function checkInputs(first, second) {
  if(first.value.trim().length >= 3  && second.value.trim().length >= 3) {
    return true;
  }
  return false;
}

export default function add() {
  return true;
}