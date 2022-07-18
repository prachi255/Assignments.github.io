let prev = document.getElementById("prev");
let next = document.getElementById("next");

let total = 4;
var count = 0;

prev.addEventListener("click", previous);
next.addEventListener("click", next1);

function previous(e) {
  document.getElementById(`${count}`).classList.add("not-active");
  count = (count + total - 1) % total;
  document.getElementById(`${count}`).classList.remove("not-active");
}

function next1(e) {
  document.getElementById(`${count}`).classList.add("not-active");
  count = (count + 1) % total;
  document.getElementById(`${count}`).classList.remove("not-active");
}

// jquery
$("#prev").mouseenter(function () {
  $("#prev").animate({ left: "50px" });
});
