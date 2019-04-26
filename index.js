const panels = document.querySelectorAll('.panel')

function toggleOpen(){
    if (this.classList.contains('open')) {
        this.classList.remove('open-active', 'open')
    } else {
        panels.forEach(panel => panel.classList.remove('open', 'open-active'))
        this.classList.add('open', 'open-active')
    }
}

// function toggleActive(e) {
//     // console.log(e.propertyName)
//     if (e.propertyName.includes('flex')) {
//         this.classList.toggle('open-active')
//     }
// }

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
