//navbar
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
})

//copyright
var year = new Date().getFullYear();

document.getElementById("year").innerHTML = year;

//Dark mode
const lightTheme = "mysite/light.css";
const darkTheme = "mysite/dark.css";
const sunIcon = "images/SunIcon.svg";
const MoonIcon = "images/MoonIcon.svg";
const themeIcon = document.getElementById('themeIcon')

function changeTheme(){
    let theme = document.getElementById('theme');
    if(theme.getAttribute("href") === lightTheme){
        theme.setAttribute("href", darkTheme);
        themeIcon.setAttribute("src", sunIcon);
    }else{
        theme.setAttribute("href", lightTheme);
        themeIcon.setAttribute("src", MoonIcon);
    }
}