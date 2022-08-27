let input = document.getElementById('input')

let values = []

function drawed(val) {
    values += val
    input.value = [...values].join('')
}

function clearAll() {
    values = ''
    input.value = ''
}

function clearOne() {
}

function end() {
    let val = eval(input.value)
    input.value = val
    values = val
    return val
}