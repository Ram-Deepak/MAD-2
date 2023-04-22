/*
 * calculateSimpleInterest calculates and returns the simple interest
 * (floor value) for a fixed deposit. Formula used is,

 * calculateSimpleInterest calculates and returns the simple interest
 * for a fixed deposit. Formula used is,
 * Simple Interest: P X R X T / 100
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * calculateCompoundInterest calculates and returns the compound interest
 * (floor value) for a fixed deposit. Formula used is,
 *   Compound Interest=P[(1+I/100)^N - 1]
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * extraAmountPercentage calculates and returns the extra amount percentage borrower will have to pay in case of
 * compound interest (floor value) in comparison to the simple interest for a fixed deposit.

 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - Daily interest rate.
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} percentage
*/


/*
function dayOfTheYear(day, month, year){
    let N1 = Math.floor(275 * month / 9);
    let N2 = Math.floor((month + 9) / 12);
    let N3 = (1 + Math.floor((year - 4 * Math.floor(year / 4) + 2) / 3));
    let N = N1 - (N2 * N3) + day - 30;
    return N;
}

function calculateSimpleInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {
// Add your code here
    // let endDate = dayOfTheYear(parseInt(endingDate.substring(0,4)), parseInt(endingDate.substring(5,7)), parseInt(endingDate.substring(8,10)));
    // let startDate = dayOfTheYear(parseInt(startingDate.substring(0,4)), parseInt(startingDate.substring(5,7)), parseInt(startingDate.substring(8,10)));
    // let noOfDays = endDate - startDate;
    let d1 = new Date(startingDate);
    let d2 = new Date(endingDate);
    let tdiff = d2.getTime() - d1.getTime();
    let n = tdiff / (1000 * 60 * 24 * 24);
    console.log(n)
    let interest = (principal * dailyInterest * n) / 100;
    return Math.floor(interest);
}

function calculateCompoundInterest(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {

// Add your code here
    // let endDate = dayOfTheYear(parseInt(endingDate.substring(0,4)), parseInt(endingDate.substring(5,7)), parseInt(endingDate.substring(8,10)));
    // let startDate = dayOfTheYear(parseInt(startingDate.substring(0,4)), parseInt(startingDate.substring(5,7)), parseInt(startingDate.substring(8,10)));
    // let n = endDate - startDate;
    let d1 = new Date(startingDate);
    let d2 = new Date(endingDate);
    let tdiff = d2.getTime() - d1.getTime();
    let n = tdiff / (1000 * 60 * 24 * 24);
    console.log(n)
    let interest = principal * ((Math.pow((1+ dailyInterest/100),n))-1);
    return Math.floor(interest);

}

function extraAmountPercentage(
  principal,
  dailyInterest,
  startingDate,
  endingDate
) {

// Add your code here
    
    return Math.floor(percentage);

}


const principal = 20000
const dailyInterest = 1
const startingDate = "2020-12-27"
const endingDate = "2021-08-27"
const SI = calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate)
const CI = calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate)
console.log(SI)
console.log(CI)

*/

// const obj = {
//   name: 'Rohit',
//   arrowfunction : null,
//   normalfunction : function(){
//     this.arrowfunction = () => {
//       console.log(this.name);
//     }
//   }
// }

// obj.normalfunction()
// obj.arrowfunction()

// setTimeout(() => (console.log('hello from setTimeout 1')), 0)
// console.log("Hello from main 1")
// setTimeout(() => (console.log('hello from setTimeout 2')), 0)
// console.log("Hello from main 2")

// let startNamePrinter = (name) => {
//     let x = name.split('').reverse();
//     let handler = setInterval(() => {
//         let y = x.pop();
//         console.log(y);
//     }, 1000)

//     setTimeout(() => {
//         clearInterval(handler)
//     }, (name.length+1)*1000)
// }

// startNamePrinter('orange');