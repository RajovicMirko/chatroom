export function getInitialFromName(name = "") {
  const nameArr = name.split(" ");
  let initial = "DD";
  if (name) initial = nameArr[0][0] + nameArr[nameArr.length - 1][0];
  return initial.toUpperCase();
}
