let kirish = document.getElementById('kirish'),
    registr = document.getElementById('registr'),
    blok1 = document.getElementById('blok1'),
    blok2 = document.getElementById('blok2');


let loginbtn = document.getElementById('loginbtn'),
    loginPage = document.getElementById('loginPage');

kirish.addEventListener('click', ()=>{
    kirish.classList.add('active')
    registr.classList.remove('active')
    blok1.classList.add('active-blok')
    blok2.classList.remove('active-blok')

})

registr.addEventListener('click', ()=>{
    registr.classList.add('active')
    kirish.classList.remove('active')
    blok2.classList.add('active-blok')
    blok1.classList.remove('active-blok')
})

function loginbutton(){
    loginPage.classList.toggle('active-login-page')
    console.log('class');
}


