const nameH1Elemnent = document.querySelector('h1.inline');
const connectNameElemnent = document.querySelector('span.red');

const inputModalElement = document.querySelector('#inputModal');


const setUserName = (name) => {
  nameH1Elemnent.textContent = name;
  connectNameElemnent.textContent = name;
};

const localName = localStorage.getItem('name');
if (localName) setUserName(localName);

nameH1Elemnent.onclick = () => {
  inputModalElement.showModal();
};

const modalSubmitBtn = document.querySelector('button,modalSubmit');
modalSubmitBtn.onclick = () => {
  const modalFormElement = document.querySelector('.modalForm');
  const formData = new FormData(modalFormElement);

  for (const [key, value] of formData) {
    localStorage.setItem(key, value);
    if (key==='user_name') setUserName(value);
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

