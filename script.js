document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.querySelector('.days');
    const overlay = document.querySelector('.overlay');
    const overlayText = document.querySelector('.overlay-text');

    const events = {
        1: "Верь в себя! - Так в тебя хоть кто-то будет верить",
        2: "Каждый день - новый шанс быть лучше",
        3: "Не бойся ошибок, они тебя узнают",
        4: "Жизнь это 10% того, что с нами происходит, - и 90% нашей реакции",
        5: "Улыбка - твоё секретное оружие",
        6: "Не бойся провала, бойся бездействия",
        7: "Пусть каждый следующий шаг - будет правильным",
        8: "Не бойся - быть уникальной",
        9: "Жизнь коротка - пей больше винишка",
        10: "Вкусно готовь чтобы друзья приходили на готовенькое",
        11: "Вдохни, улыбнись, помойся и домой",
        12: "Каждый день - новый шанс",
        13: "Не бойся падать, бойся лежать",
        14: "Жизнь это 1% вдохновения  и 99% пота",
        15: "Будь сегодня лучше, чем вчера",
        16: "Быть глупым лучше, чем злым",
        17: "Все возможно - пока не доказано обратное",
        18: "Не бойся идти своим путем",
        19: "Жизнь это игра, но сохраняться нельзя",
        20: "Успех это умение падать и вставать",
        21: "Не бойся быть собой",
        22: "Всегда ищи положительное в жизни и свежее в мусорке",
        23: "Жизнь коротка, делай её яркой, хватайся за провода",
        24: "Не бойся одиночества - это бесплатно",
        25: "Будь ярче и выше, чем ядерный гриб",
        26: "Завтра будет лучше чем послезавтра",
        27: "Быть первым - это как быть вторым, но первым",
        28: "Жизнь это приключение, наслаждайся",
        29: "Всегда делай то, что тебе нравится",
        30: "Если не ты, то кто выпьет этого прекрасного пива",
        31: "Жизнь это игра, но без правил и насмерть"
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
            overlayText.textContent = events[day] || "Нет информации о событиях в этот день.";
            overlay.style.display = 'flex';
        }
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
