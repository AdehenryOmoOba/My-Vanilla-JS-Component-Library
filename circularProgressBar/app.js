const indicatorCircle = document.querySelector('.indicator-circle')
const indicatorText = document.querySelector('.indicator-text')

console.dir(indicatorText)

let taskPercent = 0
let intervalID;

window.addEventListener('load', () => {
 animateCard()
})

function animateCard() {
    indicatorText.innerHTML = `${taskPercent}<span>%</span>`
    indicatorCircle.style.strokeDashoffset = 440 - (440 * taskPercent) / 100
}

intervalID =  setInterval(() => {
    animateCard()
    if(taskPercent === 75) clearInterval(intervalID)
    taskPercent++
}, 10);