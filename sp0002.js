setInterval(setClock, 1000);


const secondHand = document.querySelector('[data-second-hand]')
console.log("secondHand", secondHand)
const minuteHand = document.querySelector('[data-minute-hand]')
console.log("minuteHand", minuteHand)
const hourHand = document.querySelector('[data-hour-hand]')
console.log("hourHand", hourHand)



function setClock(){
    const currentDate = new Date();
    console.log("currentDate", currentDate)
    const secondRatio = currentDate.getSeconds()/60
    const minuteRatio = (secondRatio+currentDate.getMinutes())/60
    const hourRatio = (minuteRatio + currentDate.getHours())/12
    
    console.log("secondRatio", secondRatio)
    console.log("setClock -> secondDegree", secondRatio*360)
    console.log("minuteRatio", minuteRatio)
    console.log("setClock -> minuteDegree", minuteRatio*360)
    console.log("hourRatio", hourRatio)
    console.log("setClock -> hourDegree", hourRatio*360)

    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)

}

setClock()