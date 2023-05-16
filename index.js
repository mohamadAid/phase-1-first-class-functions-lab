// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
    return [arrayOfDrivers[0], arrayOfDrivers[1]];
  };

  const returnLastTwoDrivers = (arrayOfDrivers) => {
    return [arrayOfDrivers[arrayOfDrivers.length - 2], arrayOfDrivers[arrayOfDrivers.length - 1]];
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = (num1) => {
    return (fare) => fare * num1 ;
  };

  const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, fun) => fun(arrayOfDrivers); 