import { generateReturnsArray } from "./src/investmentGoals";

const form = document.getElementById("investment-form");

function renderProgression(evt) {
  evt.preventDefault();
  if (document.querySelector(".error")) {
    return;
  }
  const startingAmount = Number(
    document.getElementById("starting-amount").value.replace(",", ".")
  );
  const addtionalContribution = Number(
    document.getElementById("additional-contribution").value.replace(",", ".")
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRate = Number(
    document.getElementById("return-rate").value.replace(",", ".")
  );
  const returnRatePeriod = document.getElementById("evaluation-period").value;
  const taxRate = Number(
    document.getElementById("tax-rate").value.replace(",", ".")
  );

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    addtionalContribution,
    returnRate,
    returnRatePeriod
  );

  console.log(returnsArray);
}

function validateInput(evt) {
  if (evt.target.value === "") {
    return;
  }

  const { parentElement } = evt.target;
  const grandParentElement = parentElement.parentElement;
  const inputValue = evt.target.value.replace(",", ".");

  // Verifica se já existe um elemento de erro
  const existingError = grandParentElement.querySelector(".text-red-500");

  if (isNaN(inputValue) || Number(inputValue) <= 0) {
    if (!existingError) {
      const errorTextElement = document.createElement("p");
      errorTextElement.classList.add("text-red-500");
      errorTextElement.innerText = "Insira um valor numérico e maior que zero.";

      parentElement.classList.add("error");
      grandParentElement.appendChild(errorTextElement);
    }
  } else {
    // Remove o erro existente se o valor for válido
    if (existingError) {
      existingError.remove();
      parentElement.classList.remove("error");
    }
  }
}

for (const formElement of form) {
  if (formElement.tagName === "INPUT" && formElement.hasAttribute("name")) {
    formElement.addEventListener("blur", validateInput);
  }
}

form.addEventListener("submit", renderProgression);
