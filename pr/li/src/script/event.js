


 export function icon() {
    let iconLogo = document.querySelector(".icon_logo")
    iconLogo.addEventListener("click", () => {
        let headerLogo = document.querySelector(".header_menu")
        headerLogo.classList.toggle("active")
       
    })
}

