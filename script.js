const cr7 = document.getElementById('cr7');
const cris = document.getElementById('cris');

cr7.addEventListener('mouseenter' , ()=> {
    cris.classList.toggle("ativo")
})

cr7.addEventListener('mouseout',  ()=> {
    cris.classList.toggle("ativo")
})




const ney = document.getElementById('neymar');
const neymar = document.getElementById('ney');

ney.addEventListener('mouseenter' , ()=> {
    neymar.classList.toggle("ativo")
})

ney.addEventListener('mouseout',  ()=> {
    neymar.classList.toggle("ativo")
})
