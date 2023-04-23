// code your solution here
function saturdayFun(fun = "roller-skate") {
  return `This Saturday, I want to ${fun}!`;
}
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
function wrapAdjective(adj = "*") {
  let result = function (bla = "special") {
    return `You are ${adj}${bla}${adj}!`;
  };
  return result;
}
