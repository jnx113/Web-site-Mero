document.addEventListener('DOMContentLoaded', function() {
    const singIn = document.querySelector(".sign");
    const logIn = document.querySelector(".log");
    const inputForm = document.querySelector("form");
    const switchBox = document.querySelector(".switch-container");
    
    // Создаем элементы формы
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.placeholder = "Почта";
    emailInput.className = "form-input";
    
    const phoneInput = document.createElement('input');
    phoneInput.type = "tel";
    phoneInput.placeholder = "Телефон";
    phoneInput.className = "form-input";
    phoneInput.style.backgroundImage = "url('../images/phone.svg')";
    
    const passwordInput = document.createElement('input');
    passwordInput.type = "password";
    passwordInput.placeholder = "Пароль";
    passwordInput.className = "form-input";
    
    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.type = "password";
    confirmPasswordInput.placeholder = "Подтвердите пароль";
    confirmPasswordInput.className = "form-input";
    
    const loginSubmit = document.createElement('input');
    loginSubmit.type = "submit";
    loginSubmit.value = "Войти";
    loginSubmit.className = "submit-btn login-btn";
    
    const registerSubmit = document.createElement('input');
    registerSubmit.type = "submit";
    registerSubmit.value = "Зарегистрироваться";
    registerSubmit.className = "submit-btn register-btn";
    
    const email = document.querySelector(".email");
    const phone = document.querySelector(".phone");
    
    function updateForm(isLogin) {
        const isEmailSelected = email.classList.contains("selected-contact");
        
        inputForm.innerHTML = '';
        
        // Добавляем email или phone
        inputForm.appendChild(isEmailSelected ? emailInput.cloneNode(true) : phoneInput.cloneNode(true));
        inputForm.appendChild(passwordInput.cloneNode(true));
        
        // Добавляем подтверждение пароля только для регистрации
        if(!isLogin) {
            inputForm.appendChild(confirmPasswordInput.cloneNode(true));
        }
        
        // Добавляем соответствующую кнопку
        inputForm.appendChild(isLogin ? loginSubmit.cloneNode(true) : registerSubmit.cloneNode(true));
    }
    
    function setupContactButtons() {
        email.addEventListener("click", function() {
            this.classList.add("selected-contact");
            phone.classList.remove("selected-contact");
            updateForm(!singIn.classList.contains("select-in")); // Обновляем форму
        });
        
        phone.addEventListener("click", function() {
            this.classList.add("selected-contact");
            email.classList.remove("selected-contact");
            updateForm(!singIn.classList.contains("select-in")); // Обновляем форму
        });
    }
    
    // Инициализация - регистрация выбрана по умолчанию
    email.classList.add("selected-contact");
    singIn.classList.add("select-in"); // Выбираем "Регистрацию"
    switchBox.style.transform = "translateX(0)"; // Позиция для регистрации
    
    setupContactButtons();
    updateForm(false); // Начальное состояние - регистрация
    
    // Обработчики для входа/регистрации
    logIn.addEventListener("click", function() {
        switchBox.style.transform = "translateX(163px)"; 
        logIn.classList.add("select-in");
        singIn.classList.remove("select-in");
        updateForm(true); // Переключаем на вход
    });
    
    singIn.addEventListener("click", function() {
        switchBox.style.transform = "translateX(0)";
        logIn.classList.remove("select-in");
        singIn.classList.add("select-in");
        updateForm(false); // Переключаем на регистрацию
    });
});