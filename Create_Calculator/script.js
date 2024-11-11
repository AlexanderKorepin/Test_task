class Calculator {
    constructor() {
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        if (b === 0) {
            return "Ошибка: на ноль делить нельзя";
        }
        return a / b;
    }
}

// Создание экземпляра класса Calculator
const calculator = new Calculator();

// Примеры использования методов
console.log("Сложение: 3 + 3 =", calculator.add(3, 3)); // 6
console.log("Вычитание: 3 - 2 =", calculator.subtract(3, 2)); // 1
console.log("Умножение: 3 * 2 =", calculator.multiply(3, 2)); // 6
console.log("Деление: 6 / 3 =", calculator.divide(6, 3)); // 2
console.log("Деление на ноль: 3 / 0 =", calculator.divide(5, 0)); // Ошибка: на ноль делить нельзя