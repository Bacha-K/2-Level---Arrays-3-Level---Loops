/* 1 */
/*
/*const testArray = [];
*/
/*================================*/

/* 2 */
/*
//const testArray = [22, 17, 44, 57, 77];
*/
/*================================*/

/* 3 */

/*
const testArray = [22, 17, 44, 57, 77];

const arrayLength = testArray.length; 

console.log(arrayLength);
*/
/*================================*/

/* 4 */
/*
const testArray = [22, 17, 44, 57, 77];

console.log(testArray[0]);
console.log(testArray[2]);
console.log(testArray[4]);
*/
/*================================*/

/* 5 */
/*
const mixedDataTypes = ['Hello', 67, 'false', 99, [1, 2, 4], 47, 'Zero']

const arrayLength = mixedDataTypes.length
console.log(arrayLength);
console.log(mixedDataTypes);
*/
/*================================*/

/* 6 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
*/
/*================================*/

/* 7 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
*/
/*================================*/

/* 8 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const companyNumber = itCompanies.length

console.log(companyNumber);
*/
/*================================*/

/* 9 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);
*/
/*================================*/

/* 10 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

itCompanies.forEach(company => {
    console.log(company);
});
*/
/*================================*/

/* 11 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

itCompanies.forEach(company => {
    const upperCase = company.toUpperCase();
    console.log(upperCase);
});
*/
/*================================*/

/* 12 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const sentence = itCompanies.join(', ') + ' are big IT companies.';
console.log(sentence);
*/
/*================================*/

/* 13 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

function findCompany(companyName) {
    if (itCompanies.includes(companyName)) {
    return `${companyName} exists in the array.`;
} else {
    return `${companyName} is not found in the array.`;
}
}

let userinput = 'Google';
let search = findCompany(userinput);
console.log(search);
*/
/*================================*/

/* 14 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let ooCompanies = [];

for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j].toLowerCase() === 'o') {
            count++;
        }
    }
    if (count > 1) {
        ooCompanies.push(itCompanies[i]);
    }
}

console.log(ooCompanies);
*/
/*================================*/

/* 15 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const sortedCompanies = itCompanies.sort();

console.log("Sorted Companies:", sortedCompanies);
*/
/*================================*/

/* 16 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
const reverseCompanies = itCompanies.reverse();

console.log(reverseCompanies);
*/
/*================================*/

/* 17 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const threeCompanys = itCompanies.slice(0,3);

console.log(threeCompanys);
*/
/*================================*/

/* 18 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const threeCompanys = itCompanies.slice(4,7);

console.log(threeCompanys);
*/
/*================================*/

/* 19 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const middleIndex = Math.floor(itCompanies.length / 2);

const middleCompany = itCompanies.slice(middleIndex, middleIndex + 1);

console.log(middleCompany);
*/
/*================================*/

/* 20 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const removedCompany = itCompanies.shift(1);

console.log(itCompanies);
*/
/*================================*/

/* 21 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const updatedCompanies = itCompanies.filter((company, index) => index !== 3);
console.log(updatedCompanies);
*/
/*================================*/

/* 22 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

const updatedCompanies = itCompanies.filter((company, index) => index !== 6);
console.log(updatedCompanies);
*/
/*================================*/

/* 23 */
/*
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

itCompanies.splice(0);

console.log("Updated IT Companies Array:", itCompanies);
*/
/*================================*/

/* 24 */
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');

console.log(shoppingCart);
*/
/*================================*/

/* 25 */
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

const sentence = shoppingCart.join(', ') + ', Sugar.';
console.log(sentence);
*/
/*================================*/

/* 26 */
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

const allergicToHoney = true;

if (allergicToHoney) {
    const indexOfHoney = shoppingCart.indexOf('Honey');

if (indexOfHoney !== -1) {
    shoppingCart.splice (indexOfHoney, 1);
    console.log('Removed Honey due to allergy.');
} else {
    console.log('Honey not found in the shopping cart.');
}
}
console.log('Updated Shopping Cart:', shoppingCart);
*/
/*================================*/

/* 27 */
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

const indexOfTea = shoppingCart.indexOf('Tea');

shoppingCart[indexOfTea] = 'Green Tea';

console.log('Updated Shopping Cart:', shoppingCart);
*/
/*================================*/

/* 28 */
/*
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const addCheck = countries.includes('Ethiopia'); 

    if (addCheck === true) {
        console.log('Ethiopia')
    } else {
countries.push('Ethiopia');
console.log(countries);
    }
    */
/*================================*/

/* 29 */
/*
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  webTechs.push('Sass');

console.log("Updated Web Techs Array:", webTechs);
*/
/*================================*/