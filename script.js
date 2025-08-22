const phone = document.getElementById("phone");
const errorMsg = document.querySelector(".error-msg");

phone.addEventListener("input", () => {
  const regex = /\+\(\d{3}\)\s\d{3}-\d{4}/g;

  phone.value = formatPhone(phone.value.replace(/\D/g, ""));

  if (phone.value.replace(/\D/g, "").length < 10) {
    phone.classList.add("wrong");
    setTimeout(() => {
      phone.classList.remove("wrong");
    }, 500);
    phone.classList.add("red");
    errorMsg.innerText = "Please enter a valid 10-digit phone number";
    console.log("re");
  } else {
    phone.classList.remove("red");
    phone.classList.add("green");
    errorMsg.innerText = "";
  }
});

const formatPhone = (num) => {
  const first = num.slice(0, 3);
  const second = num.slice(3, 6);
  const third = num.slice(6, 10);
  if (num.length === 0) {
    return "";
  }
  if (num.length <= 3) {
    return num;
  } else if (num.length <= 6) {
    return `+(${first}) ${num.slice(3)}`;
  } else {
    return `+(${first}) ${second}-${third}`;
  }
};
