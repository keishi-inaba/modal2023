const buttonOpen = document.getElementById("modalOpen");
const buttonClose = document.querySelector(".modalClose");
const modal =document.getElementById("modal");

buttonOpen.addEventListener("click", () => {
  //モーダルを開く
  modal.style.display = "block";
});

buttonClose.addEventListener("click", () => {
  //モーダルを閉じる
  modal.style.display = "none";
});

document.addEventListener("click", (e) => {
  // console.log(e.target);
  if(e.target == modal) {
    modal.style.display = "none";
  }
});
