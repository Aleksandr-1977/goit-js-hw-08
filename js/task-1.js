// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
const categories = document.querySelector('#categories');
const itemNumber = categories.querySelectorAll('.item');
console.log(`Number of categories: ${itemNumber.length}`);
itemNumber.forEach(elem => {
  const textTitle = elem.querySelector('h2').textContent;
  const itemNumber = elem.querySelectorAll('ul li');
  console.log(`Category: ${textTitle}`);
  console.log(`Elements: ${itemNumber.length}`);
});
