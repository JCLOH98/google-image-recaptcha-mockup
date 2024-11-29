
// make the checkbox div focusable
const captchaCheckbox = document.getElementById("captcha-checkbox")
const checkboxSpinner = document.getElementById("captcha-checkbox-spinner")
captchaCheckbox.addEventListener("mousedown",()=> {
    // console.log("focused")
    captchaCheckbox.classList.add("focused")
    captchaCheckbox.classList.remove("blurred")

})

captchaCheckbox.addEventListener("mouseup",()=> {
    // console.log("blurred")
    captchaCheckbox.classList.add("blurred")
    captchaCheckbox.classList.remove("focused")
})

captchaCheckbox.addEventListener("click",()=> {
    checkboxSpinner.style.display = "block"
    captchaCheckbox.style.display = "none"
    captchaCheckbox.style.visibility = "false"
    setTimeout(()=>{
        captchaCheckbox.style.display = "block"
        checkboxSpinner.style.display = "none"

        // show the solve box
        const solveBox = document.getElementById("solve-box")
        if (solveBox.style.display == "block") {
            solveBox.style.display = "none"
        }
        else {
            solveBox.style.display = "block"
        }
    },Math.floor(Math.random()*1000)+200)
})

// show error if submit button is click without checking the checkbox
document.getElementById("submit").addEventListener("click",()=>{
    // console.log("clicked")
    document.getElementById("captcha-main-div").classList.add("error")
    document.getElementById("captcha-error-msg").style.display = "block"
})

// fill up the solve-image-container
const imageCount = 15
const solveImageContainer = document.getElementById("solve-image-main-container")
for (let i=0; i<3; i++) {
    for (let j=0; j<3; j++) {
        const imageContainer = document.createElement("div")
        imageContainer.classList.add("solve-image-container")

        const image = document.createElement("img")
        image.setAttribute("src",`./images/img${((i*3)+j)+1}.jpg`)
        image.classList.add("solve-image")
        image.addEventListener("click",()=>{
            refreshImage(image)
        })
        imageContainer.appendChild(image)
        solveImageContainer.appendChild(imageContainer)
    }
}

// image on click will refresh new image
const refreshImage = (image) => {
    image.classList.add("fade-out") //fade out animation
    image.style.pointerEvents = "none"; //make it unclickable
    setTimeout(()=>{
        image.setAttribute("src","")
        image.setAttribute("src",`./images/img${Math.floor(Math.random()*imageCount)+1}.jpg`)
        image.classList.remove("fade-out")
        image.style.pointerEvents = "auto"; //make it clickable again
    },1000)
}

// show try again when verify is click
document.getElementById("verify").addEventListener("click",()=> {
    document.getElementById("solve-image-error-msg").style.display = "block"
})

// refresh everything when refresh is clicked
const refreshButton = document.getElementById("refresh")
refreshButton.addEventListener("click",()=>{
    refreshButton.style.pointerEvents = "none"
    solveImageContainer.classList.add("fade-out")
    document.getElementById("solve-image-error-msg").style.display = "none"
    setTimeout(()=> {
        solveImageContainer.classList.remove("fade-out")
        solveImageContainer.innerHTML = ""
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                const imageContainer = document.createElement("div")
                imageContainer.classList.add("solve-image-container")
        
                const image = document.createElement("img")
                image.setAttribute("src",`./images/img${Math.floor(Math.random()*imageCount)+1}.jpg`)
                image.classList.add("solve-image")
                image.addEventListener("click",()=>{
                    refreshImage(image)
                })
                
                imageContainer.appendChild(image)
                solveImageContainer.appendChild(imageContainer)
            }
        }
        refreshButton.style.pointerEvents = "auto"
    },1000)
   
})


// toggle information
document.getElementById("information").addEventListener("click",() =>{
    const information = document.getElementById("information-text")
    if (information.style.display == "block") {
        information.style.display = "none"
    }
    else {
        information.style.display = "block"
    }
})

// show audio div 
document.getElementById("audio").addEventListener("click",()=> {
    document.getElementById("solve-image-div").style.display = "none"
    document.getElementById("solve-audio-div").style.display = "block"
})