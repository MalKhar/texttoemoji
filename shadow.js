const input = document.querySelector(".input");
console.log(input);

input.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;
  const array = inputValue.split("");

  const newArray = array.map((letter) => {
    let output = ":regional_indicator_" + letter + ": ";
    return letter === " "
      ? (letter = "&nbsp;&nbsp;&nbsp;&nbsp;")
      : output.toLowerCase();
  });

  const p = document.querySelector(".output");

  p.innerHTML = newArray.join("");
});

const p = document.querySelector(".output");

console.log(newArray);
