export const ageCounter = petsBirthdate => {
  let birthDate = new Date(petsBirthdate.split('.').reverse().join('-'));

  // current date
  let today = new Date();

  // count difference in ms
  let diff = today.getTime() - birthDate.getTime();

  // how many ms in a year and in a month
  let yearInMs = 1000 * 60 * 60 * 24 * 365.25;
  let monthInMs = yearInMs / 12;

  // count age
  let ageInYears = Math.floor(diff / yearInMs);
  let ageInMonths = Math.floor((diff - ageInYears * yearInMs) / monthInMs);

  return `${ageInYears}y ${ageInMonths}m`;
};
