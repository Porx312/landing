//DOM home
const typed = new Typed(".games", {
    strings: ['Sea of Thieves',
                'FIFA 22',
                'For Honor',
                'Forza Horizon',
                'Gears All Saga',
                'Halo All Saga',
                'Minecraft Launcher'],
    typeSpeed: 75,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '▋',
    contentType: 'html',
})

const poster = document.getElementById('poster')
const heigth = poster.clientHeight
const widht = poster.clientWidth

poster.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt

    const yRotation = (
        (layerX - widht / 2) / widht
    ) * 20

    const xRotation = (
        (layerY - widht / 2) / heigth
    ) * 20

    const string = `
    perspective(500px)
    scale(1.1)
    rotateX(${xRotation}deg)
    rotateY(${yRotation}deg)`

    poster.style.transform = string
})

poster.addEventListener('mouseout', () =>{
    poster.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})

//DOM carrusel
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

