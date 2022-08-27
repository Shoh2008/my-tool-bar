let percentage = document.querySelector('.percentage')
let percent = document.querySelector('.percent')
setInterval(() => {
    navigator.getBattery().then(function (battery) {
        percentage.style.width = battery.level * 100 + '%'
        percent.innerHTML = parseInt(battery.level * 100) + '%'
    })
}, 100)