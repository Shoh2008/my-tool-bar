let minute = document.getElementById('minute')
let secunde = document.getElementById('secunde')
let milisecunde = document.getElementById('milisecunde')
let secundInput = document.getElementById('secundInput')
let minuteInput = document.getElementById('minuteInput')
let key = ''
let m = 0
let s = 0
let ms = 0
function secundomer(param) {
    if (param === 'start') {
        key = setInterval(() => {
            ms++
            if (ms === 59) {
                s++
                ms = 0
            }
            if (s === 59) {
                m++
                s = 0
            }
            if (ms < 10) {
                milisecunde.innerText = `0${ms}`
            } else {
                milisecunde.innerText = ms
            }
            if (s < 10) {
                secunde.innerHTML = `0${s}`
            } else {
                secunde.innerHTML = s
            }
            if (m < 10) {
                minute.innerHTML = `0${m}`
            } else {
                minute.innerHTML = m
            }
            if (JSON.parse(minuteInput.value) === m && JSON.parse(secundInput.value) === s) {
                clearTimeout(key)
            }
        }, 10)
    }
    if (param === 'stop') {
        clearTimeout(key)
    }
    if (param === 'reset') {
        m = 0
        s = 0
        m = 0
        minute.innerHTML = '00'
        secunde.innerHTML = '00'
        milisecunde.innerHTML = '00'
    }
}