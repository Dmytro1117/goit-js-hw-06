const list = document.querySelectorAll(".item");
console.log(`Number of categories:`, list.length);

const items = document.querySelectorAll(".item ul");
const title = document.querySelectorAll("h2");

console.log(`Category:`, title[0].textContent);
const Elements1 = items[0].children;
console.log(`Elements:`, Elements1.length);

console.log(`Category:`, title[1].textContent);
const Elements2 = items[1].children;
console.log(`Elements:`, Elements2.length);

console.log(`Category:`, title[2].textContent);
const Elements3 = items[2].children;
console.log(`Elements:`, Elements3.length);
