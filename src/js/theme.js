const themeSwitch = document.querySelector("#theme-switch")

function changeTheme(event){
  const isChecked = event.currentTarget.checked;

  if(isChecked){
    document.body.classList.add("dark")
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark")
  } else{
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light")
  }
}

function getCurrentTheme(){
  const currentTheme = localStorage.getItem("theme") || "light"
  document.body.className = currentTheme
  
  if(currentTheme === "dark"){
    themeSwitch.checked = true
  }
}

window.addEventListener("load", getCurrentTheme)
themeSwitch.addEventListener("change", changeTheme)