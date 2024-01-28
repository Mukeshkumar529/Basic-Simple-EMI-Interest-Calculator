let p_ammout = document.querySelector("#main_ammount");
let interest_ammount = document.querySelector("#interest_Rate");
let duration = document.querySelector("#time_Duration");
let resultValue = document.querySelector("#resultValue");
let totalAmmount = document.querySelector("#totalValue");
let monthlyInterest_Ammount = document.querySelector("#monthly_Interest_Value");
let Emi_Ammount = document.querySelector("#EMI_Ammount");
let calcBtn = document.querySelector("#Calc_Btn");
let ResetBtn = document.querySelector("#Clear_Btn");

let interestValue = document.querySelector(".totalInterest");
let totalResult = document.querySelector(".totalAmmount");

let montlyInterest = document.querySelector(".MonthlyInterest");
let emi_section = document.querySelector(".EMI");

calcBtn.addEventListener("click", () => {
  const p = parseInt(p_ammout.value);
  const i = parseInt(interest_ammount.value);
  const t = parseInt(duration.value);

  // validate input
  if (isNaN(p) || isNaN(i) || isNaN(t) || p <= 0 || i <= 0 || t <= 0) {
    alert(
      "Please Enter Valid Values for All Fields ? (Principle Ammount , Rate of Interest In (%) , Duration(In Month))"
    );
    return;
  } else {
    const result = parseFloat(p * i * t) / 100;
    const totalAmmountValue = parseFloat(result + p);

    const monthlyInterestRate = parseFloat(i / (100 * 12));

    const emi =
      (p * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, t)) /
      (Math.pow(1 + monthlyInterestRate, t) - 1);

    interestValue.style.display = "block";
    totalResult.style.display = "block";
    montlyInterest.style.display = "block";
    emi_section.style.display = "block";

    monthlyInterest_Ammount.value = parseInt(result / (i * t));

    Emi_Ammount.value = emi;

    resultValue.value = result;
    totalAmmount.value = totalAmmountValue;
  }
});

ResetBtn.addEventListener("click", () => {
  interestValue.style.display = "none";
  totalResult.style.display = "none";
  montlyInterest.style.display = "none";
  emi_section.style.display = "none";

  p_ammout.value = "";
  interest_ammount.value = "";
  duration.value = "";
});
