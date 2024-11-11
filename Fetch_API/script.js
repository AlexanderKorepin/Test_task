async function fetchRandomUsers() {
    const loadingMessage = document.getElementById("loading");
    const userList = document.getElementById("user-list");
    const errorMessage = document.getElementById("error-message");

    // Прятать предыдущее сообщение об ошибке и показывать сообщение о загрузке
    errorMessage.classList.add('hidden');
    loadingMessage.classList.remove('hidden');

    // Очищаем предыдущий список пользователей
    userList.innerHTML = '';

    try {
        // Загрузка случайных пользователей с помощью API
        const response = await fetch('https://randomuser.me/api/?results=10');

        // Проверка статуса ответа
        if (!response.ok) {
            throw new Error('Ошибка подключения');
        }

        const data = await response.json();
        const users = data.results;

        // Отображение пользователей
        users.forEach(user => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${user.picture.thumbnail}" alt="Profile Picture">
                <strong>${user.name.first} ${user.name.last}</strong> - ${user.email}
            `;
            userList.appendChild(li);
        });

    } catch (error) {
        // Если произошла ошибка, скрываем сообщение о загрузке и показываем сообщение об ошибке
        console.error('Ошибка:', error);
        errorMessage.classList.remove('hidden');
    } finally {
        loadingMessage.classList.add('hidden');
    }
}

// Обработчик события для кнопки
document.getElementById('fetch-users-btn').addEventListener('click', fetchRandomUsers);