const numberElement = document.getElementById("numberDisplay");
const numberValue = parseFloat(numberElement.innerText);

if (numberValue < 0) {
  numberElement.classList.add("negative");
} else {
  numberElement.classList.remove("negative");
}