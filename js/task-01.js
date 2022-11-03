// const list = document.querySelectorAll(".item");
// console.log(`Number of categories:`, list.length);

// const items = document.querySelectorAll(".item ul");
// const title = document.querySelectorAll("h2");
 
 
// for (let tit of title) { 
//   console.log(`Category:`,  tit.textContent); 
// }

// for (let item of items) { 
//     console.log(`Elements:`, item.children.length); 
// }



const list = document.querySelectorAll('.item'); 
 
console.log(`Number of categories:`, list.length); 
 
for (let li of list) { 
  console.log(`Category: ${li.firstElementChild.textContent}`); 
  console.log(`Elements: ${li.lastElementChild.children.length}`); 
}