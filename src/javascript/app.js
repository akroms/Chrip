/* Toggle */

let toggle = document.querySelector(".navbar-toggle"); 
let navbarStyle = `
    /* Toggle */
    
    header .navbar .row {
        padding: 2em 0;
        justify-content: center;
    }

    header .navbar-list {
        display: block;
        text-align: center;
    }
    
    header .navbar-item {
        margin: 1em 0;
    }

    header .navbar-brand {
        display: none;
    }

    header .navbar-toggle {
        position: absolute;
        top: 2em;
        right: 0;
    }
`; 

let createStyle = document.createElement("style"); 
let addStyle = document.head.appendChild(createStyle);

toggle.addEventListener("click", () => {
    if (addStyle.textContent === navbarStyle) {
        addStyle.textContent = ""; 
    } else {
        addStyle.textContent = navbarStyle;  
    }
});
