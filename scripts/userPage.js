document.addEventListener('DOMContentLoaded', function() {
    const addSubjectButtons = document.querySelectorAll('.add-subject');
    const editSubjectContainer = document.querySelector('.edit-subject');
    const subjectForm = editSubjectContainer.querySelector('form');
    const imageButton = document.querySelector(".user-image-button");
    const imageContainer = document.querySelector(".input-image");
    const showTimetable = document.querySelector(".show-timetable");
    const timetable = document.querySelector(".timetable");

    showTimetable.addEventListener("click", function(){
        if(timetable.style.visibility == "hidden"){
            timetable.style.visibility = "visible";
        }
        else{
            timetable.style.visibility = "hidden"
        }
        
    });

    imageButton.addEventListener("click", function(){
        if(imageContainer.style.display == "none"){
            imageContainer.style.display = "flex";
            editSubjectContainer.style.display = "none";       
        }
        else{
            imageContainer.style.display = "none";
        }
    });

    editSubjectContainer.style.display = 'none';
    let currentDayIndex = 0;
    
    addSubjectButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            imageContainer.style.display = "none";
            if(editSubjectContainer.style.display == "none"){
                editSubjectContainer.style.display = 'block';
                currentDayIndex = index;
            }
            else{
                editSubjectContainer.style.display = "none";
            }
        });
    });
    
    subjectForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const subjectName = this.querySelector('input[placeholder="Название предмета"]').value;
        const startTime = this.querySelector('input[placeholder="Начало"]').value;
        const endTime = this.querySelector('input[placeholder="Конец"]').value;
        
        if (!subjectName || !startTime || !endTime) {
            alert('Пожалуйста, заполните все поля');
            return;
        }
        
        const subjectContainers = document.querySelectorAll('.subject-container ul');
        const targetContainer = subjectContainers[currentDayIndex];
        
        const subjectElement = document.createElement('li');
        subjectElement.className = 'subject';
        subjectElement.innerHTML = `
            <time class="time-of-subject">${startTime} - ${endTime}</time>
            <p class="name-of-subject">${subjectName}</p>
        `;
        
        // Добавляем обработчик клика для удаления
        subjectElement.addEventListener('click', function() {
            if (confirm('Удалить этот предмет?')) {
                this.remove();
            }
        });
        
        const addButton = targetContainer.querySelector('.add-subject');
        targetContainer.insertBefore(subjectElement, addButton.nextSibling);
        
        this.reset();
        editSubjectContainer.style.display = 'none';
    });
    
    // Добавляем обработчики для существующих предметов (если они есть)
    document.querySelectorAll('.subject').forEach(subject => {
        subject.addEventListener('click', function() {
            if (confirm('Удалить этот предмет?')) {
                this.remove();
            }
        });
    });
});
