const arr = document.querySelectorAll("#counter button");
// console.log(arr);
const incrementEl = arr[1];
// console.log(incrementEl);
const decrementEl = arr[0];
// console.log(decrementEl);
const total = document.querySelector("#value");
console.log(total);

let counterValue = 0;

incrementEl.addEventListener("click", () => {
    counterValue += 1;
    total.textContent = counterValue;
});

decrementEl.addEventListener("click", () => {
    counterValue -= 1;
   total.textContent = counterValue;
});
