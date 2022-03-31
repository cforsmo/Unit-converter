
const lengthText = document.getElementById("length")
const volumeText = document.getElementById("volume")
const massText = document.getElementById("mass")



function calculate() {
    
    var number = document.querySelector("input").value
    const feet = Math.round((number * 3.2808) * 1000) / 1000
    const meters = Math.round((number * 0.3048) * 1000) / 1000
    const liters = Math.round((number * 3.7854) * 1000) / 1000
    const gallons = Math.round((number * 0.2641) * 1000) / 1000
    const kilograms = Math.round((number * 0.4535) * 1000) / 1000
    const pounds = Math.round((number * 2.2046) * 1000) / 1000


    lengthText.textContent = 
    number + " meters = " + feet + " feet | " + number + " feet = " + meters + " meters"
    
    volumeText.textContent = 
    number + " liters = " + gallons + " gallons | " + number + " gallons = " + liters + " liters"
    
    massText.textContent = 
    number + " kilograms = " + pounds + " pounds | " + number + " pounds = " + kilograms + " kilograms"
 
}


