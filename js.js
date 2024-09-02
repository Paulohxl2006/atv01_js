let prev= document.getElementById('prev');
prev.addEventListener('submit',function(event){
event.preventDefault();

let poke=document.getElementById('pokemon').value;






const apiURL = `https://pokeapi.co/api/v2/pokemon/${poke}`;

fetch(apiURL).then(response=>response.json()).then(data =>{
    const dados_pok=data;
    let tipos = dados_pok.types.map(t => t.type.name).join(", ");
    let ab = dados_pok.abilities.map(a => a.ability.name).join(", ");
    let spattack = dados_pok.stats.find(s => s.stat.name === "special-attack").base_stat;
    let spdefense = dados_pok.stats.find(s => s.stat.name === "special-defense").base_stat;
    let defense = dados_pok.stats.find(s => s.stat.name === "defense").base_stat;
    let attack = dados_pok.stats.find(s => s.stat.name === "attack").base_stat;
    let speed = dados_pok.stats.find(s => s.stat.name === "speed").base_stat;
    let img = dados_pok.sprites.front_default;

    
    
    if (dados_pok) {
        document.getElementById('nome').textContent = "Nome: " + dados_pok.name;  
        document.getElementById('type').textContent = "Tipo: " + tipos;
        document.getElementById('abilidade').textContent = "Habilidades: " + ab;
        

        document.getElementById('spattack').textContent = "Especial Attack: " + spattack;
        document.getElementById('spdefense').textContent = "Especial Defesa: " + spdefense;
        document.getElementById('defense').textContent = "Defesa: " + defense;
        document.getElementById('attack').textContent = "Ataque: " + attack;
        document.getElementById('speed').textContent = "Velocidade: " + speed;
       
    
        
    document.getElementById('imgpok').innerHTML=`<img src="${img}" style="width: 350px; height: 280px;" alt="foto do ${dados_pok.name}" />`

    }else{

        alert("Pokemon nao encontrado");
    }
}).catch(error =>{
    alert("Erro de rede"+error);
})
})