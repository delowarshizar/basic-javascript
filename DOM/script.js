console.log("hello from outside");
console.log(document);
const licomp = document.getElementsByTagName("li");
console.log(licomp);
for (const li of licomp) {
  console.log(li.innerText);
}

const heading1 = document.getElementsByTagName("h1");
for (const h1 of heading1) {
  console.log(h1.innerText);
}

const foodlove = document.getElementById("food");
console.log(foodlove.innerText);

const itemslist = document.getElementsByClassName("items");
for (const li of itemslist) {
  console.log(li.innerText);
}

const fevitems = document.querySelectorAll("#food .items");
console.log(fevitems);

for (const item of fevitems) {
  console.log(item.innerText);
}

const sectionlist = document.querySelectorAll("section");
console.log(sectionlist);
for(const section of sectionlist)
{
    console.log(section)
    section.style.backgroundColor='lightblue'
    section.style.padding = '5px'
    section.style.borderRadius = '10px'
    section.style.border = '2px solid green'
    section.style.margin = '5px'
}
// for (const section of sectionlist) {
//   section.classList.add("section-card");
// }
// adding element using js
const newchild = document.createElement("li");
newchild.innerText = "Delowar Husain";
console.log(newchild.innerText);

const footballer = document.getElementById("Player");
console.log(footballer);

footballer.appendChild(newchild);

const main = document.getElementById('main') 
console.log(main)

const places = document.createElement('section')
main.appendChild(places)

const h1 = document.createElement('h1')
h1.innerText ='Name of Places'
places.appendChild(h1)

const ul = document.createElement('ul')
places.appendChild(ul)

const li1 = document.createElement('li')
li1.innerText = 'Rajshahi'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'Sylhet'
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = 'Dhaka'
ul.appendChild(li3)

const books = document.createElement('section')
books.innerHTML = `
<h1> These books are very popular </h1>
<ul>
    <li>Computer Fundamental </li>
    <li>Machine Learing</li>
</ul>
`
main.appendChild(books)

