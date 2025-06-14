window.onload = function() {
    // Функция для обработки изменения состояния чекбокса отдельной задачи
    document.querySelectorAll('.lesson__list input').forEach(input => {
        input.addEventListener('change', function() {
            const task = this.nextElementSibling; // Следующий элемент (текст)
            if (this.checked) {
                task.classList.add('completed'); // Добавляем класс 'completed' при выборе
            } else {
                task.classList.remove('completed'); // Удаляем класс 'completed'
            }
        });
    });

    // Функция для обработки изменения состояния чекбокса целого раздела
    document.querySelectorAll('.section-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const sectionContent = this.closest('.section-label').nextElementSibling; // Получаем ближайший родительский блок (.section-label), затем получаем следующего брата
            if (this.checked) {
                sectionContent.classList.add('completed');
            } else {
                sectionContent.classList.remove('completed');
            }
        });
    });
};