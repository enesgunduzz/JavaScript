// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
// for(i=(countries.length)-1 ; i>-1 ; i--){
//     console.log(countries[i].toUpperCase());

// let j = 0;
// while(j<countries.length){
//     console.log(countries[j]);
//     j++;
// }
// let k=0;
// do {console.log(countries[k].toLowerCase());
//     k++;}
// while (k<countries.length)

// for(i=0;i<7;i++){
//     console.log("#"*i);
// }


// let text = "";
// for (let i = 1; i < 8; i++)
// {
//   	text += "#";
//     console.log(text);
// }

// for(i=0;i<11;i++){
    
//     if(i<1){
//         console.log("i    i^2       i^3" )
//     }
//     console.log(`${i}    ${i*i}       ${i*i*i}`)
// }


// const size = +prompt("Enter your chest size");
// if (size < 32) {
//   console.log("Wrong Size");
// } else if (size < 35) {
//   console.log("XS");
// } else if (size < 38) {
//   console.log("S");
// } else if (size < 41) {
//   console.log("M");
// } else if (size < 44) {
//   console.log("L");
// } else if (size < 47) {
//   console.log("XL");
// } else if (size < 50) {
//   console.log("XXL");
// } else {
//   console.log("Wrong Size");
// }


const n1 = +prompt("Enter first number");
const n2 = +prompt("Enter second number");
const n3 = +prompt("Enter third number");

if(n1>n2 && n1>n3){
    console.log(`n1 is greatest`);
}
else if(n2>n3){
    console.log(`n2 is greatest`);
}
else{
    console.log(`n3 is greatest`);
}