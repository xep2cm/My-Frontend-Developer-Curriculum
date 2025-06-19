
function saveCheckboxState(id, checked) {
  localStorage.setItem(id, JSON.stringify({ checked }));
}

function loadCheckboxState(id) {
  const saved = localStorage.getItem(id);
  return saved ? JSON.parse(saved).checked : false;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    const id = checkbox.id;
    if (!id) return;

    checkbox.checked = loadCheckboxState(id);

    if (checkbox.checked && checkbox.nextElementSibling) {
      checkbox.nextElementSibling.classList.add('completed');
    }

    checkbox.addEventListener('change', () => {
      saveCheckboxState(id, checkbox.checked);
      if (checkbox.nextElementSibling) {
        checkbox.nextElementSibling.classList.toggle('completed', checkbox.checked);
      }

      // Если это месячный чекбокс — отметить все дочерние
      if (checkbox.classList.contains('section-toggle')) {
        const section = checkbox.closest('.section');
        if (section) {
          const innerCheckboxes = section.querySelectorAll('.lesson__list input[type="checkbox"]');
          innerCheckboxes.forEach(cb => {
            cb.checked = checkbox.checked;
            saveCheckboxState(cb.id, checkbox.checked);
            if (cb.nextElementSibling) {
              cb.nextElementSibling.classList.toggle('completed', checkbox.checked);
            }
          });
        }
      }
    });
  });
});
