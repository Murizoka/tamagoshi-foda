const pet = document.querySelector('#pet')
const pontosdisplay = document.querySelector('#pontos')

const alimentarBtn = document.querySelector('#alimentarBtn')
const brincarBtn = document.querySelector('#brincarBtn')
const dormirBtn = document.querySelector('#dormirBtn')

const historicoLista = document.querySelector('#historico')

function addHistorico(texto){
    const li = document.createElement('li')
    li.textContent = texto;
    historicoLista.appendChild(li)
}

let pontos = 0;

alimentarBtn.addEventListener('click', function(){
    pet.innerHTML = '😻'
    pontos +=1
    pontosdisplay.textContent = pontos
    addHistorico('Comeu!')
});

brincarBtn.addEventListener('click', function(){
    pet.innerHTML = '🤩'
    pontos +=1
    pontosdisplay.textContent = pontos
    addHistorico('brincou!')
});

dormirBtn.addEventListener('click', function(){
    pet.innerHTML = '😴'
    pontos +=3
    pontosdisplay.textContent = pontos
    addHistorico('dormiu')
});
function addHistorico(texto, tipo){
    const li = document.createElement('li')
    const horario = new Date().toLocaleDateString()
    li.textContent = {$horario} - {$texto}
    historicoLista.appendChild(li)

    if(historicoLista.children.length > 10){
        historicoLista.removeChild(historicoLista.firstChild)
    }

    if(tipo == 'triste'){
        li.classlist.add('triste');
    }
}
setInterval(function(){
    tempoinativo += 1;
    
    if (tempoinativo >=10) {
        pontos -=1;
        if(pontos < 0) pontos = 0;
        pontosdisplay.textContent = pontos;
        pet.textContent ='😿';
        addHistorico( 'esta tristinho', 'triste');
    }
}
)
function resetartempoinativo(){
    tempoinativo = 0;
}