const loginBtn = document.getElementById('loginBtn');
const errorBox = document.getElementById('errorBox');
const successBox = document.getElementById('successBox');
const helperLink = document.getElementById('helperLink');
const userId = document.getElementById('userId');
const userPw = document.getElementById('userPw');

// 메시지 초기화 함수
// 로그인 시도 전에 기존 메시지를 모두 숨기고 초기화
function resetMessages() {
  // 메시지 영역 숨기기
  errorBox.classList.add('hidden');
  successBox.classList.add('hidden');
  helperLink.classList.add('hidden');

  // 메시지 내용 초기화
  errorBox.textContent = '';
  successBox.textContent = '';
}

loginBtn.addEventListener('click', () => {
  resetMessages();

  if (userId.value == 'khj' && userPw.value == '1234') {
    successBox.textContent = '로그인 성공했습니다.';
    successBox.classList.remove('hidden');
    loginBtn.classList.add('hidden');
  } else {
    errorBox.textContent = '오류가 발생했습니다.';
    errorBox.classList.remove('hidden');
    helperLink.classList.remove('hidden');
  }
});
