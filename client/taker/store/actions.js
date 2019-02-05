export const EDIT_RANGE = "EDIT_RANGE";
export const EDIT_ORDER = "EDIT_ORDER";
export const EDIT_MULTI = "EDIT_MULTI";
export const EDIT_BOOL = "EDIT_BOOL";

export function editRange(number, question) {
  return { type: EDIT_RANGE, number, question };
}
export function editBool(bool, question) {
  return { type: EDIT_BOOL, bool, question };
}
export function editMulti(answer, question) {
  return { type: EDIT_MULTI, answer, question };
}
export function editOrder(array, question) {
  return { type: EDIT_ORDER, array, question };
}
