console.log("hello from outside")
console.log(document)
const licomp = document.getElementsByTagName('li')
console.log(licomp)
for(const li of licomp){
    console.log(li.innerText)
}

const heading1 = document.getElementsByTagName('h1')
for(const h1 of heading1){
    console.log(h1.innerText)
}