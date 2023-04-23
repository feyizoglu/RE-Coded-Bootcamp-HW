function superbowlWin(arr) {
  let win = arr.find((element) => element.result === "W");
  return win ? win.year : undefined;
}
