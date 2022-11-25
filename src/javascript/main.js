console.log("hello world");

let open = false;

function toggleNavBar() {
  const navBar = document.getElementById("navbar");
  if (open === false) {
    navBar.classList.toggle("open");
    open = true;
  } else {
    navBar.classList.remove("open");
    open = false;
  }
}
