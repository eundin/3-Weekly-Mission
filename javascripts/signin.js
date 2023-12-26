import {
  loginElement,
  emailInputElement,
  passwdInputElement,
  emailErrorMentionElement,
  passwdErrorMentionElement,
  formElement,
  setErrorMentionElement,
} from "./signcommon.js";

function setLoginErrorMention() {
  setErrorMentionElement(
    true,
    emailInputElement,
    emailErrorMentionElement,
    "이메일을 확인해주세요."
  );
  setErrorMentionElement(
    true,
    passwdInputElement,
    passwdErrorMentionElement,
    "비밀번호를 확인해주세요."
  );
}

// 계정이 맞다면 사이트 연결 아니라면 오류메시지 출력
async function signin() {
  const email = emailInputElement.value;
  const password = passwdInputElement.value;

  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password}),
  });

  // 이메일과 비밀번호가 존재한다면 로그인
  if (response.status === 200) {
    const result = await response.json();
    localStorage.setItem("accessToken", result.data.accessToken);
    location.href = "/folder";
  } else setLoginErrorMention();
}

// 클릭 및 엔터 시 signin
loginElement.addEventListener("click", signin);
formElement.addEventListener("keydown", ({ key }) =>
  key === "Enter" ? signin() : ""
);