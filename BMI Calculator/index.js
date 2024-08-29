let calculate = document.querySelector("#button")
let result = document.querySelector("#bmi")
let reset = document.querySelector("#reset-button")
let heightInput = document.querySelector("#height")
let weightInput = document.querySelector("#weight")
let empirical = document.getElementById("emperical")
let impirical = document.getElementById("imperial")
alert("This is a BMI calculator program")


heightInput.addEventListener("click", function(){
    heightInput.value = " "
    heightInput.style.fontSize = larger
})
weightInput.addEventListener("click", function(){
    weightInput.value = " "
    weightInput.style.fontSize = larger
})
function calculateBmi(one, two){
    return (one / two)
}
calculate.addEventListener("click", function(){
    let height = document.querySelector("#height").value
    let weight = document.querySelector("#weight").value
    bmi = calculateBmi(parseInt(height), parseInt(weight))
    if (typeof bmi === string){
        return
    }
    result.textContent = bmi
}
)
reset.addEventListener("click", function(){
    result.textContent = ""
})
empirical.addEventListener("click", function(){
    heightInput.value = "ft"
    weightInput.value = "lb"
})
impirical.addEventListener("click", function(){
    heightInput.value = "cm"
    weightInput.value = "kg"
})

