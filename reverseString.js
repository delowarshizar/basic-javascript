const demo = "i am delowar husain";
 
let reverse =" ";
for (const letter of demo)
{
    reverse = letter + reverse;
}
//another way 
console.log(reverse);

const notun = demo.split('').reverse().join('')
console.log(notun)