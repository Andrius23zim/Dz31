// 1. Виведення результату проміса
let promise = new Promise(function(resolve, reject) {
    resolve(1);
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);
  
  
  // 2. Альтернатива функції setTimeout на базі промісів
  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  delay(3000).then(() => alert('виконалось через 3 секунди'));
  
  
  // 3. Функція, яка повертає об'єкт Promise з числом після затримки 2 секунди
  function getNumber() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(42), 2000);
    });
  }
  
  getNumber().then((number) => console.log(number));
  
  
  // 4. Функція, що повертає Promise, який виконується після знаходження максимального числа в масиві
  function findMax(numbers) {
    return new Promise((resolve) => {
      const max = Math.max(...numbers);
      setTimeout(() => resolve(max), 2000);
    });
  }
  
  const numbers = [1, 5, 3, 8, 2];
  findMax(numbers).then((max) => console.log(max));
  