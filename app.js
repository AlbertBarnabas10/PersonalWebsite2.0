const navScroll = document.querySelector('.header');

window.onscroll = () => {
    if (window.scrollY > 50) {
        navScroll.classList.add('nav-scroll');
    } else {
        navScroll.classList.remove('nav-scroll');
    }
}

const navMenu = document.getElementById('navMenu'),
    navToggle = document.getElementById('toggle'),
    navClose = document.getElementById('close');

if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('menu__clicked');
    })
}

if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('menu__clicked');
    })
}

const navLinks = document.querySelectorAll('.nav__link');

function linkClicked() {
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('menu__clicked')
}

navLinks.forEach(n => n.addEventListener('click', linkClicked));

// Dark Mode
const darkMode = document.querySelector('#darkmode');

darkMode.onclick = () => {
    if(darkMode.classList.contains('bx-sun')){
        darkMode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.add('dark');
    }else{
        darkMode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.remove('dark');
    }
}

// AOS Animation Initialize
AOS.init();

// FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyBBNiz1FftsMrogMoJe7V2X-pxkjLHs0RQ",
    authDomain: "portfolioalbert-5b86c.firebaseapp.com",
    projectId: "portfolioalbert-5b86c",
    storageBucket: "portfolioalbert-5b86c.appspot.com",
    messagingSenderId: "998590543131",
    appId: "1:998590543131:web:ae45f66fd7fdacbe5e4fbe",
    measurementId: "G-4JDPQ6K51V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const btn = document.getElementById('contact__btn');

btn.addEventListener('click', function () {
    const name = document.getElementById('username');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    var regex = /^[^]+@[^]+\.[A-Z]{2,3}$/;
   
    var isValid = true;
    console.log(isValid);
    if (name.value.length <= 0) {
        alert('Name must be at least one character');
        isValid = false;
    }
    if (email.value.match(regex) == false || email.value <= 0) {
        alert('Email must not be empty');
        isValid = false;
    }
    if (message.value.length <= 0) {
        alert('Dont Forget to put your message');
        isValid = false;
    }

    if (isValid === true) {
        db.collection("users").add({
            first: name.value,
            email: email.value,
            message: message.value
        })
        .then((docRef) => {
            // console.log("Document written with ID: ", docRef.id);
            name.value = '';
            email.value = '';
            message.value = '';
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        // location.reload();
    }
})


// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
