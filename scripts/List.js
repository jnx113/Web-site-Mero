let categoryItems = document.querySelectorAll(".category-item");

function createReviewButtons() {
    const container = document.createElement("div");
    container.className = "review-buttons";

    const dislike = document.createElement("div");
    dislike.className = "dislike-button";
    dislike.id = "dislike";
    dislike.innerHTML = `<img src="../images/dislike.svg"><p>Не нравится</p>`;
    dislike.addEventListener("click", (event) => {
        event.stopPropagation();

    });

    const like = document.createElement("div");
    like.className = "like-button";
    like.id = "like";
    like.innerHTML = `<img src="../images/like.svg"><p>Нравится</p>`;
    like.addEventListener("click", (event) => {
        event.stopPropagation();

    });

    container.appendChild(dislike);
    container.appendChild(like);

    return container;
}


for(let categoryItem of categoryItems){
    categoryItem.addEventListener("click", function() {
        if(!this.classList.contains("selected-category")){
            this.classList.add("selected-category");

            // Создаём новый img элемент каждый раз
            let exitImage = document.createElement("img");
            exitImage.src = "../images/exit.svg";
            exitImage.classList.add("exit-icon"); // можно добавить класс для стилизации
            this.appendChild(exitImage);
        } 
        
        else {
            this.classList.remove("selected-category");
            let img = this.querySelector("img");
            if(img) this.removeChild(img);
        }
    });
}

window.addEventListener("scroll", function(){
    let upButton = document.querySelector(".up-button");
    if(window.scrollY > 940){
        upButton.style.opacity = "1";
        upButton.style.cursor = "pointer";
    }
    else{
        upButton.style.opacity = "0";
        upButton.style.cursor = "inherit";
    }
});

let upButton = document.querySelector(".up-button");
upButton.addEventListener("click", function(){
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
                <p class="count-users">${event.count}</p>
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

            // Добавляем кнопки, если их ещё нет
            if (!this.querySelector(".review-buttons")) {
                const buttons = createReviewButtons();
                this.appendChild(buttons);
            }

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

        const cardButtons = activeCard.querySelector(".review-buttons");
        if (cardButtons) cardButtons.remove();
        upButton.style.display = "block";

        activeCard = null;
    }

    overlay.style.display = "none";
});

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    cards.forEach(card => {
        let startX = 0;

        card.addEventListener("touchstart", function (e) {
            startX = e.touches[0].clientX;
        });

        card.addEventListener("touchend", function (e) {
            const endX = e.changedTouches[0].clientX;
            const diffX = endX - startX;

            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Свайп вправо (Нравится)
                    console.log("Свайп вправо – Нравится");
                    card.classList.add("swiped-right");
                } else {
                    // Свайп влево (Не нравится)
                    console.log("Свайп влево – Не нравится");
                    card.classList.add("swiped-left");
                }

                // Дополнительно можно скрывать карточку после свайпа
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });
    });
}


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
