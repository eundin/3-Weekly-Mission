import {
  loginElement,
  emailInputElement,
  passwdInputElement,
  emailErrorMentionElement,
  checkEmailValidity,
  checkPasswdValidity,
  formElement,
  setErrorMentionElement,
} from "./signcommon.js";

const passwdCheckInputElement = document.querySelector("#passwd-check");
const passwdCheckErrorMentionElement = document.createElement("div");

// 에러 메시지 요소 추가
passwdCheckErrorMentionElement.classList.add("error-mention");
passwdCheckInputElement.parentElement.append(passwdCheckErrorMentionElement);

// password 두개 같은지 검사 후 결과 반환
function checkPasswdIsEqual() {
  if (passwdInputElement.value !== passwdCheckInputElement.value) {
    setErrorMentionElement(
      true,
      passwdCheckInputElement,
      passwdCheckErrorMentionElement,
      "비밀번호가 일치하지 않아요."
    );
    return false;
  } else {
    setErrorMentionElement(
      false,
      passwdCheckInputElement,
      passwdCheckErrorMentionElement
    );
    return true;
  }
}

// password input 이벤트 추가
passwdCheckInputElement.addEventListener("blur", checkPasswdIsEqual);

// 이미 계정이 존재하는지 검사후 존재하지 않는다면 email 검사 후 결과 반환
async function checkEmail() {
  const email = emailInputElement.value;

  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/check-email",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  // 계정 중복여부 체크 후 결과 반환
  if(response.status === 409){
    setErrorMentionElement(
      true,
      emailInputElement,
      emailErrorMentionElement,
      "이미 사용중인 이메일입니다."
    )
    return false;
  } else {
    return checkEmailValidity();
  }
}

// email input 이벤트 추가
emailInputElement.addEventListener("blur", checkEmail);

// 계정 존재 유무, input 유효성 검사, password 일치 검사 후 모두 true라면 사이트 연결
async function signup() {
  const email = emailInputElement.value;
  const password = passwdInputElement.value;

  const emailInputOk = await checkEmail();
  const passwdInputOk = checkPasswdValidity();
  const equalOk = checkPasswdIsEqual();

  // 세 조건이 모두 true라면 회원가입 진행
  if (emailInputOk && passwdInputOk && equalOk) {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    localStorage.setItem("accessToken", result.data.accessToken);
    location.href = "/folder";
  }
}

// 클릭 및 엔터시 signup
loginElement.addEventListener("click", signup);
formElement.addEventListener("keypress", ({ key }) =>
  key === "Enter" ? signup() : ""
);
