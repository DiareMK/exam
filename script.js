document.addEventListener('DOMContentLoaded', function () {
    const simpleRange = document.getElementById('simpleRange');

    // Максимальне значення для ползунка
    const maxRangeValue = 3;

    simpleRange.max = maxRangeValue;

    simpleRange.addEventListener('input', function () {
        // Забороняємо перевищення максимального значення
        if (simpleRange.value > maxRangeValue) {
            simpleRange.value = maxRangeValue;
        }
    });
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const birthdateInput = document.getElementById('birthdate');
    const rangeInput = document.getElementById('simpleRange');
    const resultList = document.getElementById('resultList');
    const birthdateTableBody = document.getElementById('birthdateTable').getElementsByTagName('tbody')[0];
    const horoscopeTableBody = document.getElementById('horoscopeTable').getElementsByTagName('tbody')[0];
    const resultTable = document.getElementById('resultTable');
    const dragonList = document.querySelector('.dragon-list ul');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Отримуємо значення полів форми
        const birthdateValue = birthdateInput.value;
        const rangeValue = rangeInput.value;

        // Ділимо дату народження, щоб отримати рік і місяць
        const birthdateParts = birthdateValue.split('-');
        const birthYear = birthdateParts[0];
        const birthMonth = birthdateParts[1];

        // Визначаємо рік тварини та місяць гороскопу
        const animalYear = determineAnimalYear(birthYear);
        const zodiacSign = determineZodiacSign(birthMonth);

        // Виводимо дані у форматі списку
        resultList.innerHTML = `
            <li>Дата народження: ${birthdateValue}</li>
            <li>Рік тварини: ${animalYear}</li>
            <li>Знак зодіаку: ${zodiacSign}</li>
        `;

        // Додаємо рядок у таблицю для дати народження
        const birthdateRow = birthdateTableBody.insertRow();
        const birthdateCell1 = birthdateRow.insertCell(0);
        const birthdateCell2 = birthdateRow.insertCell(1);
        birthdateCell1.textContent = birthdateValue;
        birthdateCell2.textContent = animalYear;

        // Додаємо рядок у таблицю для місяця гороскопу
        const horoscopeRow = horoscopeTableBody.insertRow();
        const horoscopeCell1 = horoscopeRow.insertCell(0);
        horoscopeCell1.textContent = zodiacSign;

        // Додаємо дані у таблицю результатів
        const resultTableRow = resultTable.insertRow();
        const resultTableCell1 = resultTableRow.insertCell(0);
        const resultTableCell2 = resultTableRow.insertCell(1);
        const resultTableCell3 = resultTableRow.insertCell(2);
        resultTableCell1.textContent = 'Дата народження:';
        resultTableCell2.textContent = birthdateValue;
        resultTableCell3.textContent = `Рік тварини: ${animalYear}, Знак зодіаку: ${zodiacSign}`;

        // Додаємо елемент у список "Рік дракона"
        const dragonListItem = document.createElement('li');
        dragonListItem.textContent = `${birthYear} - рік дракона. 11 місяць - знак скорпіону.`;
        dragonList.appendChild(dragonListItem);
    });

    function determineAnimalYear(year) {
        const startYear = 2008; // Рік початку циклу (рік Миші)
        const animalYears = ['Миша (Корова)', 'Тигр', 'Заєць', 'Дракон', 'Змія', 'Кінь', 'Коза', 'Мавпа', 'Півень', 'Собака', 'Свиня'];
        const index = (year - startYear) % animalYears.length;
        return animalYears[index];
    }

    function determineZodiacSign(month) {
        // Визначаємо знак зодіаку за місяцем
        switch (parseInt(month)) {
            case 1:
                return 'Козеріг';
            case 2:
                return 'Водолій';
            case 3:
                return 'Риби';
            case 4:
                return 'Овен';
            case 5:
                return 'Телець';
            case 6:
                return 'Близнюки';
            case 7:
                return 'Рак';
            case 8:
                return 'Лев';
            case 9:
                return 'Діва';
            case 10:
                return 'Терези';
            case 11:
                return 'Скорпіон';
            case 12:
                return 'Стрілець';
            default:
                return '';
        }
    }
});

