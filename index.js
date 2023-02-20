let countEl = document.getElementById("count-el");
let counting = 0;
function count() {
  counting += 1;
  countEl.innerText = counting;
  if (counting === 20) {
    alert("You are done, die");
  }
}
