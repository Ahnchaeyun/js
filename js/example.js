const nameH1Elemnent = document.querySelector('h1.inline');
const connectNameElemnent = document.querySelector('span.red');

const localName = localStorage.getItem('name');
if (localName) {
  nameH1Elemnent.textContent = localName;
  connectNameElemnent.textContent = localName;
}

nameH1Elemnent.onclick = () => {
  alert('클릭되었습니다.');
  const inputName = prompt('이름을 입력해 주세요.');
  if (inputName) {
    localStorage.setItem('name', inputName);

    nameH1Elemnent.textContent = inputName;
    connectNameElemnent.textContent = inputName;
  } else {
    alert('이름이 입력되지 않았습니다.');
    alert('테스트');
  }
};
/***/
