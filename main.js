const studentArr = [];
let expelledArr = [];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

const enterKey = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('addStudent').click();
   }
}

const randomHouse = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const displayForm = () => {
  let x = document.getElementById('showHide');
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.justifyContent = "center";
  } else {
    x.style.display = "none";
  }
}

const showStudent = () => {
  let domString = `
    <div class="d-flex justify-content-center flex-wrap">
    `;
  for (let i = 0; i < studentArr.length; i++) {
    domString += `
      <div class="card mt-5 mr-5 ml-5 p-2" style="width: 18rem;">
        <div class="card-body">
          <h3 class="card-title">${studentArr[i].name}</h3>
          <h5 class="card-text pt-2 pb-3">${studentArr[i].house}</h5>
          <a class="btn btn-primary ${studentArr[i].id}" onclick="expelStudent(${[i]});">Expel</a>
        </div>
      </div>
  `;
  }
  domString += `</div>`
  printToDom('#showValue', domString);
}

const createStudent = () => {
  const validateForm = document.getElementById('createStudent').value;
  if (validateForm === "") {
    return alert("Nope! Try again.");
  } else {
      const formValue = document.getElementById('createStudent').value;
      const randomId = Date.now() - 1588448000000;
      let chooseHouse = randomHouse(1, 5);
      if (chooseHouse === 1) {
        chooseHouse = 'Gryffindor';
      } else if (chooseHouse === 2) {
        chooseHouse = 'Hufflepuff';
      } else if (chooseHouse === 3) {
        chooseHouse = 'Ravenclaw';
      } else if (chooseHouse === 4) {
        chooseHouse = 'Slytherin';
      }
      studentArr.push({
        name: formValue,
        house: chooseHouse,
        id: randomId
      });
      showStudent();
      console.log(studentArr);
      return document.getElementById('createStudent').value = '';
  }
}

const expelStudent = (studentToExpel) => {
  expelledArr.push(studentArr.splice(studentToExpel, 1));
  console.log(expelledArr);
  showStudent();
}

const clickEvents = () => {
  document.querySelector('#startSorting').addEventListener('click', displayForm);
  document.querySelector('#addStudent').addEventListener('click', createStudent);
  document.querySelector('#createStudent').addEventListener("keyup", enterKey);
}

const init = () => {
  clickEvents();
}

init();
