/* DOM */
const form = document.querySelector("form");
const titleInput = document.querySelector(".titleInput");
const descriptionInput = document.querySelector(".descriptionInput");
let msg = document.querySelector(".message");
const listEl = document.querySelector(".lists_area");

let LISTS = JSON.parse(localStorage.getItem("entry-list")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let item = {
    title: titleInput.value,
    description: descriptionInput.value,
  };

  LISTS.push(item);

  localStorage.setItem("entry-list", JSON.stringify(LISTS));

  location.reload();
});

const showDisplay = () => {
  LISTS.map((list, index) => {
    let ui = `
    <ul class="item list-none mb-3 p-2 border-b-2 grid grid-cols-12 gap-2">
      <p class="title col-span-3">${list.title}</p>
      <p class="description col-span-7">${list.description}</p>
      <p class="edit col-span-1" onClick= "edi(${index})">
        <img src="./icon/edit.svg" class="max-h-[20px]" />
        </p>
        <p class="trash col-span-1" onClick= 'del(${index})'>
        <img src="./icon/trash.svg" class="max-h-[20px]" />
        </p>
        </ul>`;
    listEl.insertAdjacentHTML("afterbegin", ui);
  });
};

showDisplay();

function del(e) {
  let DelLISTS = LISTS.filter((data, index) => {
    return e !== index;
  });

  localStorage.setItem("entry-list", JSON.stringify(DelLISTS));

  location.reload();
}

function edi(e) {
  let EdiLISTS = LISTS.filter((data, index) => {
    data.title = titleInput;
    console.log(data, index);
  });

  return EdiLISTS;
}

// Message Function
const message = (txt) => {
  msg.innerText = txt;
};

// Clear Input Field
const clearField = () => {
  [titleInput.value, descriptionInput.value] = ["", ""];
};
