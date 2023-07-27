const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});
function signin() {
  document.getElementById("sign-div").style.display = "block";
}
function signup() {
  document.getElementById("sign-div").style.display = "none";
}
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
function sherlock() {
  document.getElementById("change").src = "images.jpeg";
}
function last() {
  document.getElementById("change").src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFrnKGXGTmcusfWp8W42ZosoTU0155pl2CKsMw3ZiYEY74uKNt";
}
function squid() {
  document.getElementById("change").src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-IzQZViMaCt9Ufe97-6mRCmPs3T6GYEcFFNIytkzTWUpHCbht";
}
function boys() {
  document.getElementById("change").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVABchoPCIw6ZtMRgd2x7yqT-B81Nm5GO6iIn515DZX_wZ6eb";
}
function fake() {
  document.getElementById("change").src =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVggrIKCwdDG9gb34v5S_GXDa_UDuk1Uv7s5kiwZsv6ZyjnPPT";
}
function nurse() {
  document.getElementById("change").src =
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR54sumiM6Z5d-jrz_RvZBazndMFseA7_jAIv3VNX69FYdkrrvv";
}
function obsession() {
  document.getElementById("change").src =
    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDu_c5hehCnMo5V5YUROvYVe7WP4KsZcQ-ZrTbkEUwpq8dHJdu";
}
function more() {
  document.getElementById("change").src =
    "https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg";
}
function love() {
  document.getElementById("change").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3C1MkE7WqYMzY6LLA_e48XHCM-tiOoF8vOGp1-b5wyRYJeLZ";
}
function strange() {
  document.getElementById("change").src =
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg";
}
function blackm() {
  document.getElementById("change").src =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwOrCHCq0RMKU7gRax7yLsjvwEm8acbc-ofiCQOqIQl6DDm2mc";
}
function peaky() {
  document.getElementById("change").src =
    "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg";
}
function crown() {
  document.getElementById("change").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPIjEs8ExVQZCLJQxHwIdsm53CobGd-e1vMsH6isgJxoxuR6q";
}
function warrior() {
  document.getElementById("change").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwbmmHqkIH62cl2newpoPq9bineKOK_efgVuvhfNUbGwpCYiK";
}
function from() {
  document.getElementById("change").src =
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8_iy_Zk-LtboxMURlxpPYe7ogHJAuvoJEHg3yv3wU83M6Dmld";
}
function breakb() {
  document.getElementById("change").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx";
}
function black() {
  document.getElementById("change").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNC4YyniyVENznL1U4q6r7_DAtBcIWhvkf0wv9iw6rrKx8kIUh";
}
function sky() {
  document.getElementById("change").src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4IgpOdOWcll79peR47YzbrlydB-ykZgn0PYTJ1k3n33rVOI5";
}
