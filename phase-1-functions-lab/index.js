// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  return Math.abs(value - 42);
}

function distanceFromHqInFeet(someValue) {
  return 264 * distanceFromHqInBlocks(someValue);
}

function distanceTravelledInFeet(start, destination) {
  return 264 * Math.abs(start - destination);
}
function calculatesFarePrice(start, destination) {
  let feetDistance = distanceTravelledInFeet(start, destination);
  if (feetDistance < 401) {
    return 0;
  } else if (feetDistance > 400 && feetDistance < 2001) {
    return (feetDistance - 400) * 0.02;
  } else if (feetDistance > 2000 && feetDistance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
