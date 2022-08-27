const l1 = document.getElementById('l1');
const l2 = document.getElementById('l2');
const l3 = document.getElementById('l3');
const l4 = document.getElementById('l4');
const editCursor = e => {
    const { clientX: x, clientY: y } = e;
    l1.style.left = `${x}px`
    l1.style.top = `${y}px`

    l2.style.left = `${x}px`
    l2.style.top = `${y}px`

    l3.style.left = `${x}px`
    l3.style.top = `${y}px`

    l4.style.left = `${x}px`
    l4.style.top = `${y}px`

    l1.style.display = 'block'
    l2.style.display = 'block'
    l3.style.display = 'block'
    l4.style.display = 'block'
}

window.addEventListener('mousemove', editCursor)

let setting = document.getElementById('setting')      
let styleAdded = document.getElementById('styleAdded')
let colorInput = document.getElementById('colorInput')
let bgColorInput = document.getElementById('bgColorInput')
let fontInput = document.getElementById('fontInput')
let cursorColorInput = document.getElementById('cursorColorInput')
let nav = document.getElementById('nav')
let keyOpenSet = false
let keyOpenNav = false

function openSet() {
    if (keyOpenSet === false) {
        setting.style.right = '10px'
        keyOpenSet = true
    } else {
        setting.style.right = '-310px'
        keyOpenSet = false
    }
}

function openNav() {
    if (keyOpenNav === false) {
        nav.style.marginLeft = '0'
        keyOpenNav = true
    } else {
        nav.style.marginLeft = '-105%'
        keyOpenNav = false
    }
}

colorInput.addEventListener('input', () => {
    styleAdded.innerHTML = `
        *{
            background: ${bgColorInput.value};
            color: ${colorInput.value};
            font-family: ${fontInput.value};
        }
    `
})
bgColorInput.addEventListener('input', () => {
    styleAdded.innerHTML = `
        *{
            color: ${colorInput.value};
            background: ${bgColorInput.value};
            font-family: ${fontInput.value};
        }
    `
})
fontInput.addEventListener('input', () => {
    styleAdded.innerHTML = `
        *{
            color: ${colorInput.value};
            background: ${bgColorInput.value};
            font-family: ${fontInput.value};
        }                                                            
    `
})
cursorColorInput.addEventListener('input', (e) => {
    let l = [l1, l2, l3, l4]
    l.map(item => item.style.borderColor=e.target.value)
})