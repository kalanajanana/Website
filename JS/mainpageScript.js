const allstars = document.querySelectorAll('.star');
let current_rating = document.querySelector('.current_rating');
const rateInput = document.querySelector('textarea[name="comment"]');
const form = document.querySelector('form');
const thankyou = document.querySelector('.thankyou');
let isFormValid = false;

const validateInputs = () => {
    rateInput.classList.remove("invalid");
    rateInput.nextElementSibling.classList.add('hidden');
    isFormValid = true;
    if (!rateInput.value) {
        rateInput.classList.add("invalid")
        rateInput.nextElementSibling.classList.remove('hidden');
        isFormValid = false;
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankyou.classList.remove("hidden");
    }
});

allstars.forEach((star, i) => {
    star.onclick = function() {
        let current_star_level = i + 1;
        current_rating.innerText = `${current_star_level} of 5`;
        allstars.forEach((star, j) => {
            if (current_star_level >= j + 1) {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';
            }
        })
    }
});