var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

//================= begin tab==========================

var tabs = $$(".tab-item");
var panes = $$(".tab-pane");
console.log(tabs);

//================= begin line=========

var tabActive = $(".tab-item.active");
var line = $(".tabs .line");
// lay khaong cach trai and do dai line = tab
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

//================ end line===========

// su dung  for earch duyet cac phan tu trng mang tabs(co the dung for thg ) roi gan onclick vao cac element(la cac nut ban )
// khi onclick no se xoa  cac class active trc roi  thuc hien cac lenh sau roi add class active vao index tuong ung
// vi du khi click vao form thi no  la tabs[1] khi do no add active vao form ok nhe!

// ve for earch thi doc tren mozila developer search array.porotype
// tham so o for earch thi no co liet ke
// co nhieu phuong thuc tien loi di maf hoc;

tabs.forEach((tab, index) => {
  var pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// begin slideShow

var slidemain = $(".slide-items").children;
// tại sao dùng children vì khi select all phân tử thì nó là mảng chưa định nghĩa kiểu chưa có tên ý
// nhưng khi dùng chdren thì nó sẽ lấy các phần tử con  trong slide-items lúc đấy các phần tử con nằm trong slidemain
// nếu dùng query all thì lúc đấy slidemain là các phân tử con rồi

console.log(slidemain);
var nextBtn = $(".next");
var prewBtn = $(".prew");
//text hien thi so anh
var count = $(".count");
var num = $(".textlength");
var index = 0;
var slidelenght = slidemain.length;
console.log(slidelenght);

num.innerHTML = slidelenght;

nextBtn.onclick = function () {
  console.log("next");
  handlechangeImg(1);
};
prewBtn.onclick = function () {
  console.log("prew");
  handlechangeImg(-1);
};

function handlechangeImg(direction) {
  if (direction == 1) {
    console.log("next img");
    index++;
    if (index == slidelenght) {
      index = 0;
    }
    count.textContent = index + 1;
  } else {
    console.log("prew img");
    index--;
    if (index < 0) {
      index = slidelenght - 1;
    }
    count.textContent = index + 1;
  }
  for (var i = 0; i < slidelenght; i++) {
    slidemain[i].classList.remove("active");
  }
  slidemain[index].classList.add("active");
}
