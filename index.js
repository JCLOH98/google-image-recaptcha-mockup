
// make the checkbox div focusable
const captchaCheckbox = document.getElementById("captcha-checkbox")
const checkboxSpinner = document.getElementById("captcha-checkbox-spinner")
captchaCheckbox.addEventListener("mousedown",()=> {
    console.log("focused")
    captchaCheckbox.classList.add("focused")
    captchaCheckbox.classList.remove("blurred")

})

captchaCheckbox.addEventListener("mouseup",()=> {
    console.log("blurred")
    captchaCheckbox.classList.add("blurred")
    captchaCheckbox.classList.remove("focused")
})

captchaCheckbox.addEventListener("click",()=> {
    console.log("click")
    checkboxSpinner.style.display = "block"
    captchaCheckbox.style.display = "none"
    captchaCheckbox.style.visibility = "false"
})

// show error if submit button is click without checking the checkbox
document.getElementById("submit").addEventListener("click",()=>{
    console.log("clicked")
    document.getElementById("captcha-main-div").classList.add("error")
    document.getElementById("captcha-error-msg").style.display = "block"
})

// fill up the solve-image-container
const solveImageContainer = document.getElementById("solve-image-container")
for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
        const image = document.createElement("div")
        image.classList.add("solve-image")
        solveImageContainer.appendChild(image)
    }
}