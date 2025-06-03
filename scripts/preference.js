let categoryItems = document.querySelectorAll(".category-item");

for (let categoryItem of categoryItems) {
    categoryItem.addEventListener("click", function () {
        if (!this.classList.contains("selected-category")) {
            this.classList.add("selected-category");

            let exitImage = document.createElement("img");
            exitImage.src = "../images/exit.svg";
            exitImage.classList.add("exit-icon");
            this.appendChild(exitImage);
        } else {
            this.classList.remove("selected-category");
            let img = this.querySelector("img");
            if (img) this.removeChild(img);
        }
    });
}

window.addEventListener("scroll", function () {
    let upButton = document.querySelector(".up-button");
    if (window.scrollY > 940) {
        upButton.style.opacity = "1";
        upButton.style.cursor = "pointer";
    } else {
        upButton.style.opacity = "0";
        upButton.style.cursor = "inherit";
    }
});

let upButton = document.querySelector(".up-button");
upButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const events = [
    {
        title: "Время Карьеры",
        address: "Ул. Мира 19",
        date: "18 апреля",
        image: "images/mero-img.jpg",
        count: "... записались",
        descriptionShort: "Время карьеры уже близко",
        descriptionLong: `Совсем скоро пройдет масштабное мероприятие с участием ведущих работодателей страны.
Также ты сможешь получить мерч от компаний-партнеров или выиграть крутые подарки.
Если ты давно задумываешься над тем, как начать свой профессиональный путь, то обязательно приходи 18 апреля 
в главный учебный корпус!`,
        telegram: "#",
        vk: "#"
    },
    {
        title: "Время Карьеры",
        address: "Ул. Мира 19",
        date: "18 мая",
        image: "images/mero-img.jpg",
        count: "... записались",
        descriptionShort: "Готовься к новой карьере!",
        descriptionLong: `Следующее событие на горизонте, и ты можешь стать частью масштабного мероприятия! 
Не упусти шанс найти работу своей мечты.`,
        telegram: "#",
        vk: "#"
    },
    {
        title: "Техно-Фестиваль",
        address: "Ул. Академика 10",
        date: "25 мая",
        image: "images/mero-img.jpg",
        count: "... записались",
        descriptionShort: "Новый взгляд на технологии",
        descriptionLong: `Уже 25 мая будет проходить фестиваль новейших технологий и стартапов.
Приходи узнать о самых последних достижениях в сфере технологий!`,
        telegram: "#",
        vk: "#"
    },
    {
        title: "Интервью с экспертами",
        address: "Ул. Ленина 33",
        date: "1 июня",
        image: "images/mero-img.jpg",
        count: "... записались",
        descriptionShort: "Будь готов к интервью!",
        descriptionLong: `Мастер-класс от топовых экспертов по подготовке к собеседованиям и личностному росту. 
Не пропусти шанс прокачать свои навыки общения.`,
        telegram: "#",
        vk: "#"
    },
    {
        title: "Карьера и Старт-апы",
        address: "Ул. Станислава 5",
        date: "15 июня",
        image: "images/mero-img.jpg",
        count: "... записались",
        descriptionShort: "Как создать успешный стартап",
        descriptionLong: `Узнай, как начать и развить успешный стартап, с опытом от профессионалов. 
Не упусти шанс научиться у лучших!`,
        telegram: "#",
        vk: "#"
    },
    {
        title: "Кодеры и Роботы",
        address: "Ул. Горького 20",
        date: "5 июля",
        image: "images/mero-img.jpg",
        count: "... записались",
        descriptionShort: "Робототехника и программирование",
        descriptionLong: `Для любителей робототехники и программирования! Присоединяйся к нашему мероприятию и погружайся в мир инноваций.`,
        telegram: "#",
        vk: "#"
    },
    {
        title: "Разработка ПО",
        address: "Ул. Маяковского 12",
        date: "10 июля",
        image: "images/mero-img.jpg",
        count: "... записались",
        descriptionShort: "Как стать успешным разработчиком ПО",
        descriptionLong: `Узнай секреты успеха от разработчиков ПО. Получи ценные знания для своей карьеры в сфере IT.`,
        telegram: "#",
        vk: "#"
    },
    {
        title: "Международная Карьера",
        address: "Ул. Преображенская 8",
        date: "20 июля",
        image: "images/mero-img.jpg",
        count: "... записались",
        descriptionShort: "Как начать карьеру за рубежом",
        descriptionLong: `Хотите работать за рубежом? Присоединяйтесь к нам на мастер-классе и узнайте, как построить успешную международную карьеру!`,
        telegram: "#",
        vk: "#"
    }
];

events.forEach((event, index) => {
    const card = document.createElement("div");
    card.className = "mero-info";
    let cardList = document.querySelector(".card-list");

    card.innerHTML = `
        <div class="mero-inner">
            <div class="mero-info-face">
                <img src="${event.image}">
                <h1 class="name-of-event-face">${event.title}</h1>
                <div class="count-of-students">
                    <p class="count-users">${event.count}</p>
                    <div class="use-card">
                        <p class="add-to-calendar">Добавить в календарь</p>
                        <img src="images/trash-pref.svg" class="trash-pref">
                    </div>
                </div>
            </div>
            <div class="mero-info-back">
                <div class="flex-container">
                    <h1 class="name-of-event-back">${event.title}</h1>
                    <ul class="location-time">
                        <li class="address">${event.address}</li>
                        <li class="time">${event.date}</li>
                    </ul>
                </div>
                <p class="description">${event.descriptionShort}</p>
                <p class="description">${event.descriptionLong}</p>
                <ul class="social-links">
                    <li class="more-info">Подробнее:</li>
                    <li class="tg"><a href="${event.telegram}" target="_blank">Телеграмм-канал</a></li>
                    <li class="vk"><a href="${event.vk}" target="_blank">Группа ВК</a></li>
                </ul>
            </div>
        </div>
    `;

    // === Обработчики кнопок внутри карточки ===
    const addToCalendar = card.querySelector(".add-to-calendar");
    const trashPref = card.querySelector(".trash-pref");

    addToCalendar.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("Добавлено в календарь");
    });

    trashPref.addEventListener("click", function (event) {
        event.stopPropagation();
        const thisCard = trashPref.closest(".mero-info");
        if (thisCard) {
            thisCard.remove();
        }
    });

    // === Добавляем карточку в список ===
    cardList.appendChild(card);
});

const cards = document.querySelectorAll(".mero-info");
const overlay = document.querySelector(".overlay");
const positionClasses = ['left-card', 'center-card', 'right-card'];
let activeCard = null;

cards.forEach((card, index) => {
    card.addEventListener('click', function () {
        const hasPositionClass = positionClasses.some(cls => this.classList.contains(cls));

        if (!hasPositionClass) {
            const positionClass = positionClasses[index % 3];
            this.classList.add(positionClass);
            activeCard = this;

            this.scrollIntoView({ behavior: "smooth" });
            overlay.style.display = "block";
            upButton.style.display = "none";
        } else {
            const inner = this.querySelector('.mero-inner');
            if (inner) inner.classList.toggle('is-flipped');
        }
    });
});

overlay.addEventListener("click", function () {
    if (activeCard) {
        activeCard.classList.remove("left-card", "center-card", "right-card");
        activeCard.querySelector('.mero-inner')?.classList.remove('is-flipped');
        upButton.style.display = "block";
        activeCard = null;
    }
    overlay.style.display = "none";
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".mero-info");

    cards.forEach(card => {
        const title = card.querySelector(".name-of-event-face").textContent.toLowerCase();
        if (title.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
