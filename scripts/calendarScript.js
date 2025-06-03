document.addEventListener("DOMContentLoaded", function () {
    const monthNames = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];
    let currentDate = new Date();
    const imgLeft = document.querySelector(".leftArrow");
    const imgRight = document.querySelector(".rightArrow");

    function renderCalendar() {
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        const firstDayWeekday = (firstDayOfMonth.getDay() + 6) % 7; // Делаем понедельник первым днём недели
        const lastDate = lastDayOfMonth.getDate();

        const daysContainer = document.getElementById("daysContainer");
        const monthYear = document.getElementById("monthYear");

        daysContainer.innerHTML = "";

        const allMonths = document.getElementById("allMonths");
        allMonths.innerHTML = "";
        for (let i = 0; i <= 11; i++) {
            const monthLi = document.createElement("li");
            const monthA = document.createElement("a");
            monthLi.classList.add("month-panel");
            monthA.classList.add("month-panel-href");
            monthA.href = "#";
            monthA.textContent = monthNames[i];
            
            monthA.addEventListener("click", function (event) {
                event.preventDefault();
                currentDate.setMonth(i);
                renderCalendar();
            });

            const today = new Date();
            if (i === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
                monthLi.classList.add("this-month");
            }
            
            allMonths.appendChild(monthLi);
            monthLi.appendChild(monthA);
        }

        monthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

        for (let i = 0; i < firstDayWeekday; i++) {
            const emptyLi = document.createElement("li");
            emptyLi.classList.add("calendar-item", "empty");
            daysContainer.appendChild(emptyLi);
        }

        for (let i = 1; i <= lastDate; i++) {
            const dayLi = document.createElement("li");
            const dayA = document.createElement("a");
            dayLi.classList.add("calendar-item");
            dayA.classList.add("calendar-href");
            dayA.href = "#";
            dayA.textContent = i;
            
            const currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            if (currentDay.getDay() === 0) {
                dayLi.classList.add("sunday");
            }

            const today = new Date();
            if (i === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
                dayLi.classList.add("this-day");
            }

            daysContainer.appendChild(dayLi);
            dayLi.appendChild(dayA);
        }
    }

    document.getElementById("prevMonth").addEventListener("click", (event) => {
        event.preventDefault();
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById("nextMonth").addEventListener("click", (event) => {
        event.preventDefault();
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    document.getElementById("prevYear").addEventListener("click", (event) => {
        event.preventDefault();
        currentDate.setFullYear(currentDate.getFullYear() - 1);
        document.querySelector(".selected-year").textContent--;
        renderCalendar();
    });

    document.getElementById("nextYear").addEventListener("click", (event) => {
        event.preventDefault();
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        document.querySelector(".selected-year").textContent++;
        renderCalendar();
    });

    document.getElementById("nextMonth").addEventListener("mousedown", (event) => {
        event.preventDefault();
        imgRight.src = "images/ArightHover.png"
        imgRight.style.opacity = "0.5"
    });

    document.getElementById("nextMonth").addEventListener("mouseup", (event) => {
        event.preventDefault();
        imgRight.src = "images/rightArrow.png"
        imgRight.style.opacity = "1"
    });

    document.getElementById("nextMonth").addEventListener("mouseover", (event) => {
        event.preventDefault();
        imgRight.src = "images/ArightHover.png"
    });

    document.getElementById("nextMonth").addEventListener("mouseout", (event) => {
        event.preventDefault();
        imgRight.src = "images/rightArrow.png"
    });

    //Стили для левой стрелки

    document.getElementById("prevMonth").addEventListener("mousedown", (event) => {
        event.preventDefault();
        imgLeft.src = "images/AleftHover.png"
        imgLeft.style.opacity = "0.5"
    });

    document.getElementById("prevMonth").addEventListener("mouseup", (event) => {
        event.preventDefault();
        imgLeft.src = "images/leftArrow.png"
        imgLeft.style.opacity = "1"
    });

    document.getElementById("prevMonth").addEventListener("mouseover", (event) => {
        event.preventDefault();
        imgLeft.src = "images/AleftHover.png"
    });

    document.getElementById("prevMonth").addEventListener("mouseout", (event) => {
        event.preventDefault();
        imgLeft.src = "images/leftArrow.png"
    });

    renderCalendar();
});


let arrow = document.querySelector(".show-months");
let monthPanel = document.querySelector(".per-month")
monthPanel.classList.add("invise");
arrow.addEventListener("click", (event) => {
    event.preventDefault();
    if (monthPanel.classList.contains("invise")) {
        monthPanel.classList.remove("invise");
        arrow.style.transform = " rotate(540deg) translate(0, 5px)"
    }
    else {
        monthPanel.classList.add("invise");
        arrow.style.transform = "none"
    }
});

document.querySelector('.mero-info').addEventListener('click', function () {
    this.querySelector('.mero-inner').classList.toggle('is-flipped');
  });

let darkPage = document.querySelector(".overlay");
let infoButtons = document.querySelectorAll(".open-info");
let card = document.querySelector(".mero-info");
for (infoButton of infoButtons) {
infoButton.addEventListener("click", (event) => {
    event.preventDefault();
    card.classList.remove("card-none");
    darkPage.classList.remove("overlay-none");
    
});
}

darkPage.addEventListener("click", (event) => {
    card.classList.add("card-none");
    darkPage.classList.add("overlay-none");
});
