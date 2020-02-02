const form = document.querySelector(".contact-form");
const inputs = document.querySelectorAll("input.input, textarea.input");

function validateInputs() {
  var errors = 0;

  inputs.forEach(input => {
    let error = input.value.length === 0 ? 1 : 0;
    if (error) input.classList.add("error");
    else if (input.classList.contains("error")) input.classList.remove("error");
    errors += error;
  });

  return errors === 0;
}

function preventEmptyFields(e) {
  if (!validateInputs()) e.preventDefault();
}

function handleInputs(e) {
  console.log(`${e.target.nombre} : ${e.target.value}`);
}

inputs.forEach(input => (input.oninput = handleInputs));

// form.onsubmit = preventEmptyFields;