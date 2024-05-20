const toggleSwitch=document.querySelector("input[type='checkbox']");
const nav=document.getElementById("nav");
const toggleIcon=document.getElementById('toggle-icon');
const image1=document.getElementById("image1");
const image2=document.getElementById("image2");
const image3=document.getElementById("image3");
const textbox=document.getElementById("text-box");

function imageMode(color){
    image1.src=`img/undraw_proud_coder_${color}.svg`;
    image2.src=`img/undraw_feeling_proud_${color}.svg`;
    image3.src=`img/undraw_conceptual_idea_${color}.svg`;
}

function toggledarkLightMode(isDark){
    console.log(isDark);
    nav.style.backgroundColor=isDark?'rgba(0 0 0 /50%)':'rgba(255 255 255 /50%)';
    textbox.style.backgroundColor=isDark?'rgba(255 255 255 /50%)':'rgba(0 0 0 /50%)';    
    toggleIcon.children[0].textContent=isDark?'Dark Mode':'Light Mode';
    isDark?toggleIcon.children[1].classList.replace("fa-sun",'fa-moon'):toggleIcon.children[1].classList.replace("fa-moon", 'fa-sun');
    isDark?imageMode('dark'):imageMode('light');
}

// function DarkMode(){
//     nav.style.backgroundColor='rgba(0 0 0 /50%)';
//     textbox.style.backgroundColor='rgba(255 255 255 /50%)';    
//     toggleIcon.children[0].textContent='Dark Mode';
//     toggleIcon.children[1].classList.replace("fa-sun",'fa-moon');
//     imageMode('dark')
    
// }

// function LightMode(){
//     nav.style.backgroundColor='rgba(255 255 255 /50%)';
//     textbox.style.backgroundColor='rgba(0 0 0 /50%)';    
//     toggleIcon.children[0].textContent='Light Mode';
//     toggleIcon.children[1].classList.replace("fa-moon", 'fa-sun');
//     toggleIcon.children[1].classList.add('fa-sun');
//     imageMode('light');
// }
// change the theme
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute("data-theme", 'dark');
        localStorage.setItem('theme', 'dark');
        toggledarkLightMode(true);
    }else{
        document.documentElement.setAttribute("data-theme", 'light');
        localStorage.setItem('theme', 'light');
        toggledarkLightMode(false);
    }
}

//Event listener
toggleSwitch.addEventListener('change', switchTheme);

const currentTheme=localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme=='dark'){
        toggleSwitch.checked=true;
        toggledarkLightMode(true);
    }
}