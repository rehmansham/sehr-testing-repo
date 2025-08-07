function appendToDisplay(value) {
  document.getElementById("display").value += value;
}
function clearOutput() {
  document.getElementById("display").value = "";
}
function calculate() {
  let expression = document.getElementById("display").value;
  try {
    const result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
