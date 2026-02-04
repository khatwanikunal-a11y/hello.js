alert("Hello World kk test!");

// Convert comma-separated input into a number array
function parseInputToArray(input) {
  let k = input.split(',');
  let numbers = [];

  for (let i = 0; i < k.length; i++) {
    let value = parseInt(k[i].trim(), 10);

    // Check if the value is a valid number
    if (!isNaN(value)) {
      numbers.push(value);
    }
  }

  return numbers;
}

// Sum of multiples
function sumOfMultiples(f, m) {
  let sum = 0;

  for (let i = 0; i < m.length; i++) {
    let x = m[i];

    for (let j = 0; j < f.length; j++) {
      let d = f[j];

      if (d !== 0 && x % d === 0) {
        sum += x;
        break;
      }
    }
  }

  return sum;
}

// Button click
document.getElementById("calculate").addEventListener("click", function () {

  let fText = document.getElementById("fInput").value;
  let mText = document.getElementById("mInput").value;

  let fArray = parseInputToArray(fText);
  let mArray = parseInputToArray(mText);

  if (fArray.length === 0 || mArray.length === 0) {
    document.getElementById("output").textContent =
      "Please enter valid numbers in both fields.";
    return;
  }

  let result = sumOfMultiples(fArray, mArray);

  document.getElementById("output").textContent =
    "Sum of multiples: " + result;
});