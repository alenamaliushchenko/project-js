const openBtn = document.querySelector(".open");
const closeBtn = document.getElementsByClassName("close")[0];
const sidebar = document.getElementById("sidebar");

openBtn.onclick = openSidebar;
closeBtn.onclick = closeSidebar;
window.onkeydown = handleKeys;

function handleKeys(e) {
  if (e.ctrlKey && e.code == "KeyS") {
    e.preventDefault();
    toggleSidebar();
  } else if (e.key == "Escape") {
    closeSidebar();
  }
  
}

function handleClickOut(e) {
  if (!e.target.closest("#sidebar")) closeSidebar();
}

function toggleSidebar() {
  // sidebar.classList.toggle('open');
  if (sidebar.matches(".open")) closeSidebar();
  else openSidebar();
}

function openSidebar(e) {
  sidebar.classList.add("open");
  e?.stopPropagation();
  // setTimeout(() => {
  window.onclick = handleClickOut;
  // }, 1);
}

function closeSidebar() {
  sidebar.classList.remove("open");
  window.onclick = null;
}
