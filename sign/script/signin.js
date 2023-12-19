import {
  formElement,
  emailInput,
  passwordInput,
  emailErrorText,
  passwordErrorText,
  passwordVisibilityIcon,
  handleSignInEmailInputFocusout,
  handlePasswordInputFocusout,
  handlePasswordVisibilityIconClick,
} from './common.js';

// submit 에러 확인
function handleSignInFormSubmit(e) {
  e.preventDefault();

  if (emailInput.value !== 'test@codeit.com') {
    emailInput.classList.add('error-border');
    emailErrorText.textContent = '이메일을 확인해 주세요.';
    return;
  }

  if (passwordInput.value !== 'codeit101') {
    passwordInput.classList.add('error-border');
    passwordErrorText.textContent = '비밀번호를 확인해 주세요.';
    return;
  }

  if (emailInput.value === 'test@codeit.com' && passwordInput.value === 'codeit101') {
    formElement.submit();
    return;
  }

  // 에러 메세지 초기화
  emailInput.classList.remove('error-border');
  passwordInput.classList.remove('error-border');
  emailErrorText.textContent = '';
  passwordErrorText.textContent = '';
}

emailInput.addEventListener('focusout', handleSignInEmailInputFocusout);
passwordInput.addEventListener('focusout', handlePasswordInputFocusout);
formElement.addEventListener('submit', handleSignInFormSubmit);
passwordVisibilityIcon.addEventListener('click', handlePasswordVisibilityIconClick);
