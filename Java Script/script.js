alert("Welcome Class Rep")
let count = 0
let current_count = document.getElementById("number")
let savedCount = document.getElementById("entries")

function increment() {
    count++
    current_count.textContent = count
    //return count
}

function save() {
    savedCount.textContent += "  " + count + " - "
    current_count.textContent = 0
    count = 0
}






 