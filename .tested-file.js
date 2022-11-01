// /* eslint-disable no-unused-vars */

// let x = randomNumber(2,12)
// console.log("Seu número da sorte é: " + x);
// let time = randomNumber(1,6)

// function jogar(){
//     console.log("Jogando dados")
// }
// function sortear(){
//   console.log(randomNumber(1,6));
// }

// setInterval(jogar,2000,sortear);

// // setTimeout(console.log(time),2000);
// eslint-disable-next-line no-unused-vars
const lucknumber = randomNumber(2,12);
// eslint-disable-next-line no-unused-vars
const firstNumber = randomNumber(1,6);
const secondNumber = randomNumber(1,6);
console.log(`Seu número da sorte é ${lucknumber}`);
console.log("Jogando dados");
setTimeout(() => {
  console.log(`Você tirou ${firstNumber}`);
},2000)
setTimeout(() => {
  console.log(`Você tirou ${secondNumber}`);
},4000)
setTimeout(() => {
  const sum = firstNumber + secondNumber;
  if(firstNumber === secondNumber || sum === lucknumber){
    console.log("Você ganhou");
  } else{
    console.log("Você perdeu")
  }
},6000)

function randomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// const os = require("os");
// console.log(os.platform());
// console.log(os.totalmem() / 1024 / 1024 / 1024);