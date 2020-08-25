let alunos = ["João", "Pedro", "Marcos", "Vitória", "Bruno", "Maria", "Natália", "Camila", "André", "Leonardo", "Jonas", "Fernanda", "Michel", "Luísa", "Isabela"]
let alunosInput = document.querySelectorAll(".aluno")
let bimestre1 = document.querySelectorAll(".bimestre1")
let bimestre2 = document.querySelectorAll(".bimestre2")
let bimestre3 = document.querySelectorAll(".bimestre3")
let media = document.querySelectorAll(".media")
let condicao = document.querySelectorAll(".condicao")
let secaoDestaque = document.getElementById("secaodestaque")
let alunoDestaque = document.getElementById("alunodestaque")
let maiorMedia = 0

alunosInput.forEach((item, index) => {
    item.value = alunos[index]
})

function calcMedia() {
    secaoDestaque.classList.remove("esconde")
    media.forEach((item, index) => {
        item.value = ((Number(bimestre1[index].value) + Number(bimestre2[index].value) + Number(bimestre3[index].value))/3).toFixed(2)
        if (item.value >= 7) {
            condicao[index].value = 'Aprovado'
        } else {
            condicao[index].value = 'Reprovado'
        } 
        if (Number(item.value) > maiorMedia) {
            maiorMedia = Number(item.value)
            alunoDestaque.innerHTML = ` A maior média é ${maiorMedia.toFixed(2)}, do(a) aluno(a) ${alunos[index]}`
        }    
    })
    
}

//Eventos
function execMedia(event){
    if(event.key== 'Enter'){
        calcMedia()
    }
}
window.addEventListener('keydown', execMedia)

////////////////////////////////////////////

function telaPequena(){
    if(window.innerHeight < 400 || window.innerWidth<600){
        alert("A tela está muito pequena!")
    }
}
window.addEventListener('resize', telaPequena)

////////////////////////////////////////////////

const topicos = document.querySelectorAll(".topico")
const arr = [alunosInput, bimestre1, bimestre2, bimestre3, media, condicao]
function someAparece(index){
    topicos[index].classList.toggle('seta')
    arr[index].forEach((item)=>{
        item.classList.toggle('ativo')
    })
}
topicos.forEach((topico,index)=>{
    topico.addEventListener('click', function(){
        someAparece(index)
    })
})

////////////////////////////////////////

const btnsobe = document.querySelector('.btnsobe')
const notasbg = document.querySelector('.notas')
function botaosobe() {
    let distanciatopo = notasbg.getBoundingClientRect().top
    if(distanciatopo<0){
        btnsobe.classList.add("ativo")
    } else {
        btnsobe.classList.remove("ativo")
    }

}
window.addEventListener('scroll', botaosobe)

////////////////////////////////////////////

function sobe(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
btnsobe.addEventListener('click', sobe)

//////////////////////////////////////////

