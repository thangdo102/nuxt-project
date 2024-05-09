export const convertDate = (date: string) => {
  const givenDate = new Date(date);

  let day: any = givenDate.getDate();
  let month: any = givenDate.getMonth() + 1; // Adding 1 since getMonth() returns zero-based month index
  let year = givenDate.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return day + "/" + month + "/" + year;
};
