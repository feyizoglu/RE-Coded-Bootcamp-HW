// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  const newArr = [];
  for (let i = 0; i < 2; i++) {
    newArr.push(drivers[i]);
  }
  return newArr;
};
const returnLastTwoDrivers = (drivers) => {
  const newArr = [];
  for (let i = drivers.length - 2; i < drivers.length; i++) {
    newArr.push(drivers[i]);
  }
  return newArr;
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return (fareMultiplier = () => int * int);
}

const fareDoubler = (int) => int * 2;
const fareTripler = (int) => int * 3;

const selectDifferentDrivers = (drivers, func) => {
  return func(drivers);
};
