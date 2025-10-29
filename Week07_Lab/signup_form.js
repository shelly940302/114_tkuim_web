document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#signupForm");
  const interestsContainer = document.querySelector("#interests");
  const submitBtn = form.querySelector("button[type='submit']");

  function showError(input, message) {
    input.setCustomValidity(message);
    input.classList.add("invalid");
    const errorEl = document.querySelector(`#${input.id}-error`);
    if (errorEl) errorEl.textContent = message;
  }

  function clearError(input) {
    input.setCustomValidity("");
    input.classList.remove("invalid");
    const errorEl = document.querySelector(`#${input.id}-error`);
    if (errorEl) errorEl.textContent = "";
  }

  function validateName(input) {
    if (!input.value.trim()) showError(input, "請輸入姓名");
    else clearError(input);
  }

  function validateEmail(input) {
    const value = input.value.trim();
    if (!value) showError(input, "請輸入 Email");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      showError(input, "Email 格式不正確");
    else clearError(input);
  }

  function validatePhone(input) {
    const value = input.value.trim();
    if (!value) showError(input, "請輸入手機號碼");
    else if (!/^09\d{8}$/.test(value))
      showError(input, "手機號碼需為 09 開頭且共 10 位數字");
    else clearError(input);
  }

  function validatePassword(input) {
    const value = input.value;
    if (!value) showError(input, "請輸入密碼");
    else if (value.length < 8)
      showError(input, "密碼至少需 8 碼");
    else if (!/[A-Za-z]/.test(value) || !/\d/.test(value))
      showError(input, "密碼需包含英文字母與數字");
    else clearError(input);
  }

  function validateConfirmPassword(confirmInput, passwordInput) {
    if (!confirmInput.value) showError(confirmInput, "請再次輸入密碼");
    else if (confirmInput.value !== passwordInput.value)
      showError(confirmInput, "兩次密碼不一致");
    else clearError(confirmInput);
  }

  function validateInterests() {
    const checkedCount = interestsContainer.querySelectorAll("input:checked").length;
    const errorEl = document.querySelector("#interests-error");
    if (checkedCount === 0) {
      errorEl.textContent = "請至少選擇一項興趣";
      return false;
    } else {
      errorEl.textContent = "";
      return true;
    }
  }

  function validateTerms(input) {
    if (!input.checked) showError(input, "請勾選同意服務條款");
    else clearError(input);
  }

  form.addEventListener("blur", (e) => {
    const input = e.target;
    if (input.tagName !== "INPUT") return;

    switch (input.id) {
      case "name": validateName(input); break;
      case "email": validateEmail(input); break;
      case "phone": validatePhone(input); break;
      case "password": validatePassword(input); break;
      case "confirmPassword": validateConfirmPassword(input, form.querySelector("#password")); break;
      case "terms": validateTerms(input); break;
    }
  }, true);

  form.addEventListener("input", (e) => {
    const input = e.target;
    if (input.tagName !== "INPUT") return;
    clearError(input);
    if (input.id === "confirmPassword") {
      validateConfirmPassword(input, form.querySelector("#password"));
    }
  });

  interestsContainer.addEventListener("change", () => validateInterests());

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const phone = form.querySelector("#phone");
    const password = form.querySelector("#password");
    const confirmPassword = form.querySelector("#confirmPassword");
    const terms = form.querySelector("#terms");

    validateName(name);
    validateEmail(email);
    validatePhone(phone);
    validatePassword(password);
    validateConfirmPassword(confirmPassword, password);
    validateTerms(terms);
    const interestsValid = validateInterests();

    const firstInvalid = form.querySelector(":invalid");
    if (firstInvalid || !interestsValid) {
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "送出中...";

    setTimeout(() => {
      alert("註冊成功！");
      form.reset();
      form.querySelectorAll(".error").forEach(el => el.textContent = "");
      submitBtn.disabled = false;
      submitBtn.textContent = "送出";
    }, 1000);
  });
});
