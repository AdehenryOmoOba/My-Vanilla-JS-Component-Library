const toast = document.querySelector('.toast')
const showNotificationBtn = document.querySelector('button')
const progress = document.querySelector('.progress')
const closeNotificationIcon = document.querySelector('.fa-xmark')

let setTimeoutID

showNotificationBtn.addEventListener('click', () => {
    toast.classList.add('active')
    progress.classList.add('active')

    setTimeoutID = setTimeout(() => {
    toast.classList.remove('active')
    progress.classList.remove('active')
    }, 5000);
})

closeNotificationIcon.addEventListener('click', () => {
    toast.classList.remove('active')
    progress.classList.remove('active')
    clearTimeout(setTimeoutID)

})
