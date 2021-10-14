let data = [
  6, 6, 9, 2, 4, 9, 6, 1, 7, 9, 1, 8, 4, 5, 0, 2, 6, 4, 9, 5, 6, 6, 6, 6, 1, 2,
  1, 9, 4, 9, 8, 7, 0, 9, 3, 1, 6, 0, 4, 6, 0, 2, 8, 1, 3, 7, 8, 0, 7, 4, 2, 1,
  6, 0, 4, 6, 8, 9, 5, 2, 4, 4, 0, 8, 5, 3, 6, 8, 5, 8, 4, 8, 5, 5, 5, 8, 0, 0,
  2, 8, 2, 5, 5, 1, 9, 0, 0, 1, 3, 6, 1, 2, 4, 1, 7, 0, 5, 6, 2, 2,
];
let verify = false;
while (!verify) {
  verify = true;
  for (let i in data) {
    if (data[i - 1] > data[i]) {
      verify = false;
      let handle = data[i - 1];
      data[i - 1] = data[i];
      data[i] = handle;
    }
  }
}
console.log(data);
