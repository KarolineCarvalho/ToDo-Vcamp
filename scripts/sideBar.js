const sideBar = document.getElementById("sideBar");
const closeSideBarBtn = document.getElementById("closeSideBarBtn");
const burger = document.getElementById("burger");
const checkbox = document.getElementById("checkbox");
console.log(checkbox.checked);

//Listeners
burger.addEventListener("click", () => {
  sideBar.style.display = "block";
  burger.style.display = "none";
});
closeSideBarBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
  burger.style.display = "flex";
});
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    document.body.style.setProperty("--darkGrey", "#96C1FC");
    document.body.style.setProperty("--greyBlue", "#F4F4F4");
    document.body.style.setProperty("--lighterShadow", "#D5E7FF");
    document.body.style.setProperty("--darkerShadow", "#C3D3E8");
    document.body.style.setProperty("--lightGreyBlue", "#5F7798");
  } else {
    document.body.style.setProperty("--greyBlue", "#94adcf");
    document.body.style.setProperty("--darkGrey", "#38404b");
    document.body.style.setProperty("--lighterShadow", "#424b58");
    document.body.style.setProperty("--darkerShadow", "#2e353e");
    document.body.style.setProperty(
      "--lightGreyBlue",
      "rgba(148, 173, 207, 0.7)"
    );
  }
});
