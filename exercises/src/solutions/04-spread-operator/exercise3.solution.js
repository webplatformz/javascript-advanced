export function toArray(...args) {
  return [...args].filter(each => each != undefined);
}