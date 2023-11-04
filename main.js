const images = document.querySelectorAll('#project-slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");
let currentIndex = 0;

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}

initializeSlider();
previousImage.addEventListener('click', function () {
  slideLeft();
});
nextImage.addEventListener('click', function () {
  slideRight();
});

document.addEventListener("DOMContentLoaded", function () {
  // Select header element and trigger fade-in animation
  const header = document.querySelector(".head1");
  header.classList.add("fadeIn");
  // Remove the fade-in class after the animation completes
  setTimeout(() => {
    header.classList.remove("fadeIn");
  }, 2500);

  const firstname = document.getElementById('fname');
  const lastname = document.getElementById('lname');
  const email = document.getElementById('email');

  function validateInput(input) {
    if (input.value.trim() === '') {
      input.classList.add('error');
      input.classList.remove('success');
    } else {
      input.classList.remove('error');
      input.classList.add('success');
    }
  }

  firstname.addEventListener('input', function () {
    validateInput(firstname);
  });

  lastname.addEventListener('input', function () {
    validateInput(lastname);
  });

  email.addEventListener('input', function () {
    validateInput(email);
  });

  const form = document.getElementById('cForm');
  const submitButton = document.getElementById('submitB');
  const successMessage = document.getElementById('form-submitted');

  form.addEventListener('submitB', e => {
    e.preventDefault();
    validateInputs();
  });

  const validateInputs = () => {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;

    if (firstnameValue === "") {
      firstname.classList.add('error');
    } else {
      firstname.classList.add('success');
    }

    if (lastnameValue === "") {
      lastname.classList.add('error');
    } else {
      lastname.classList.add('success');
    }

    if (emailValue === "") {
      email.classList.add('error');
    } else {
      email.classList.add('success');
    }

    handleSubmit(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allInputsValid()) {
      successMessage.style.display = 'block';
      form.reset();
    }
  };

  function allInputsValid() {
    return (
      firstname.classList.contains('success') &&
      lastname.classList.contains('success') &&
      email.classList.contains('success')
    );
  }
});
