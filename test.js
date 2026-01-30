alert("Hello World kk test!");

function sumOfMultiple(f, m) {
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

document.getElementById('submit').addEventListener('click', () => {
  const result = sumOfMultiple([2, 3], [4, 5, 6, 7, 8, 9]);
  document.getElementById('result').textContent = result;
})