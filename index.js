window.addEventListener('scroll', function (){
    let navigation =document.querySelector('nav');
    navigation.classList.toggle('scrolling-active', window.scrollY > 0);
})

let backBtn = document.querySelector('.back__btn');
let Menu = document.querySelector('.menu__links');


function openMenu(){
    document.body.classList += " menu--open";
    backBtn.classList += " display-none";
  }
  
  function closeMenu(){
    document.body.classList.remove('menu--open')
    backBtn.classList.remove('display-none')
  }

function openServiceSubMenu(){
  Menu.style.display = "none";
  document.querySelector('.service-menu').style.display = "block";
}

function openHomeSubMenu(){
  Menu.style.display = "none";
  document.querySelector('.home-menu').style.display = "block";
}

function openBlogSubMenu(){
  Menu.style.display = "none";
  document.querySelector('.blog-menu').style.display = "block";
}

function closeSubMenu(){
  Menu.style.display = "flex";
  document.querySelector('.home-menu').style.display = "none";
  document.querySelector('.blog-menu').style.display = "none";
  document.querySelector('.service-menu').style.display = "none";
}