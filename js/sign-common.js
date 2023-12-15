let emailInput = document.querySelector(".sign-email");

emailInput.addEventListener("focusout", function (e) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailValue = this.value;

  if (emailValue.trim() === "") {
    document.getElementById("email-error-message").textContent =
      "이메일을 입력해주세요.";
    this.classList.add("input-error");
  } else if (!emailPattern.test(emailValue)) {
    document.getElementById("email-error-message").textContent =
      "올바른 이메일 주소가 아닙니다.";
    this.classList.add("input-error");
  } else {
    document.getElementById("email-error-message").textContent = "";
    document.getElementById("password-error-message").textContent = "";
    document.getElementById("password-error-message-different").textContent =
      "";
    this.classList.remove("input-error");
  }
});

document.querySelectorAll(".input-container").forEach((container) => {
  const icon = container.querySelector(".eye-icon");
  const passwordInput = container.querySelector(".sign-password");

  container.addEventListener("click", function () {
    const currentType = passwordInput.type;

    if (currentType === "password") {
      passwordInput.type = "text";
      icon.style.backgroundImage = 'url("/img/ic-eye-on.png")';
    } else {
      passwordInput.type = "password";
      icon.style.backgroundImage = 'url("/img/ic-eye-off.png")';
    }
  });
  passwordInput.addEventListener("focusout", function () {
    if (passwordInput.value) {
      container.nextElementSibling.textContent = "";
      passwordInput.classList.remove("input-error");
    } else {
      container.nextElementSibling.textContent = "비밀번호를 입력해주세요.";
      passwordInput.classList.add("input-error");
    }
  });
});
