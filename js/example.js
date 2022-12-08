/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
const nameH1Elemnent = document.querySelector('h1.inline');
const connectNameElemnent = document.querySelector('span.red');
const studentNoElemnent = document.querySelector('span.studentNo');
const emailElemnent = document.querySelector('span.email');

const inputModalElement = document.querySelector('#inputModal');


const setUserName = (name) => {
  nameH1Elemnent.textContent = name;
  connectNameElemnent.textContent = name;
};

const setUserNo = (no) => {
  studentNoElemnent.textContent = no;
};

const setUserEmail = (email) => {
  emailElemnent.textContent = email;
};

const localName = localStorage.getItem('user');
if (localName) setUserName(localName);

const localNo = localStorage.getItem('studentNo');
if (localNo) setUserNo(localNo);

const localEmail = localStorage.getItem('email');
if (localEmail) setUserEmail(localEmail);


nameH1Elemnent.onclick = () => {
  inputModalElement.showModal();
};

const modalSubmitBtn = document.querySelector('button,modalSubmit');
modalSubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);

  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key==='user') setUserName(value);
    else if (key==='studentNo'&&setUserNo.length==9) {
      setUserNo(value);
      if (setUserNo.value.length!=9) {
        alert('학번형식이 올바르지 않습니다.');
      }
    // eslint-disable-next-line brace-style
    }
    // eslint-disable-next-line no-undef
    else if (key==='email'&& emailCheck.test(email)==true) {
      setUserEmail(value);
      // eslint-disable-next-line no-undef
      if (emailCheck.test(email)==false) {
        alert('이메일형식이 올바르지 않습니다.');
      }
    }
  }

  inputModalElement.close();
};


inputModalElement.onclick = (event) => {
  if (event.target.nodeName ==='DIALOG') inputModalElement.close();
};

/**
 * function setUserName(name){
  nameH1Elemnent.textContent = localName;
  connectNameElemnent.textContent = localName;
};

const setUserName = (name) => {
  nameH1Elemnent.textContent =`[*${name}]`;
  connectNameElemnent.textContent = `[*${name}]`;
};

위에랑 같은 기능으로 사용
1. 누르면 이름 변경되는 코드
nameH1Elemnent.onclick = () => {
  alert('클릭되었습니다.');
  const inputName = prompt('이름을 입력해 주세요.');
  if (inputName) {
    localStorage.setItem('name', inputName);

    setUserName(inputName);
  } else {
    alert('이름이 입력되지 않았습니다.');
  }
};
2. 누르면 다이얼로그 뜨는 코드
nameH1Elemnent.onclick = () => {
  inputModalElement.showModal();
};
*/

