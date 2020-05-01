const houseObj = [];

const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

const displayForm = () => {
  let domString = `
    <form class="mr-5 ml-5 p-4 d-flex justify-content-center">
      <div class="form-group row">
        <label class="col" for="fname">Enter First Year's Name</label>
        <div class="col">
          <small id="emailHelp" class="form-text text-muted">Student: </small>
          <input type="text" class="form-control" placeholder="i.e. Ryan Beiden" id="assignHouse">
          <button type="submit" class="btn btn-primary" onsubmit="viewHouse();">Sort</button>
        </div>
      </div>
    </form>
  `;
  printToDom('#sortingForm', domString);
}

const clickEvents = () => {
  document.querySelector('#startSorting').addEventListener('click', displayForm);
  // document.querySelector('#assignHouse').addEventListener('click', viewHouse);
}

const viewHouse = () => {
  const formValue = document.getElementById('assignHouse').value;
  houseObj.push(formValue);

  // let domString = `
  //   <div class="card" style="width: 18rem;">
  //     <div class="card-body">
  //       <h5 class="card-title">asadcacaa</h5>
  //       <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  //       <a class="btn btn-primary">Go somewhere</a>
  //     </div>
  //   </div>
  // `;
  // printToDom('#assignHouse', domString);
}

const init = () => {
  clickEvents();
  console.log(houseObj);
}

init();
