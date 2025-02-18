document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.querySelector('.days');
    const overlay = document.querySelector('.overlay');
    const overlayDate = document.querySelector('.overlay-date');
    const overlayText = document.querySelector('.overlay-text');

    const events = {
        1: "1 марта 2025 года - событие 1",
        2: "2 марта 2025 года - событие 2",
        3: "3 марта 2025 года - событие 3",
        // Добавьте события для каждого дня месяца
        31: "31 марта 2025 года - событие 31"
    };

    const firstDayOfMonth = new Date(2025, 2, 1).getDay();
    const daysInMonth = new Date(2025, 3, 0).getDate();

    let dayCounter = 1;

    for (let i = 0; i < 42; i++) {
        const dayElement = document.createElement('div');
        if (i >= firstDayOfMonth - 1 && dayCounter <= daysInMonth) {
            dayElement.textContent = dayCounter;
            dayElement.dataset.day = dayCounter;
            if (i % 7 === 5 || i % 7 === 6) {
                dayElement.classList.add('weekend');
            }
            dayCounter++;
        }
        daysContainer.appendChild(dayElement);
    }

    daysContainer.addEventListener('click', function(event) {
        if (event.target.dataset.day) {
            const day = event.target.dataset.day;
            overlayDate.textContent = `${day} марта 2025 года`;
            overlayText.textContent = events[day] || "Нет информации о событиях в этот день.";
            overlay.style.display = 'flex';
        }
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none'; // Закрываем плашку при клике в любую её часть
    });
});