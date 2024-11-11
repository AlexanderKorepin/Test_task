// 1. Проверка на палиндром
// Напишите функцию, которая проверяет, является ли строка палиндромом. Палиндром
// —это слово, фраза, число или другая последовательность символов, которая
// читается одинаково слева направо и справа налево (игнорируя пробелы, знаки
// препинания и регистр).
// function isPalindrome(str) {
//     // Ваш код здесь
//     }
//Пример:
//  isPalindrome("А роза упала на лапу Азора"); // true
//  isPalindrome("Привет"); // false

function isPalindrome(str) {

    // Приведение всех символов к нижнему регистру
    // Удаление всех символов, кроме букв и цифр
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-я0-9]/g, ''); 

    // Проверка на палиндром
    return cleanedStr === cleanedStr.split('').reverse().join('');

}

// Примеры использования
console.log(isPalindrome("А роза упала на лапу Азора")); // true
console.log(isPalindrome("А роза упала на лапу Азора!")); // true
console.log(isPalindrome("Привет")); // false
console.log(isPalindrome("Привет!")); // false


