class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        switch(this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }
        
        return `o ${this.tipo} atacou usando ${ataque}`;
    }
}

const herois = [
    new Heroi('Gandalf', 150, 'mago'),
    new Heroi('Aragorn', 35, 'guerreiro'),
    new Heroi('Liu Kang', 40, 'monge'),
    new Heroi('Hanzo', 28, 'ninja'),
    new Heroi('Legolas', 25, 'arqueiro')
];

function exibirAtaques(listaHerois) {
    console.log("===== ATAQUES DOS HERÓIS =====");
    
    for(let i = 0; i < listaHerois.length; i++) {
        console.log(`${i + 1}. ${listaHerois[i].atacar()}`);
    }
    
    console.log("==============================");
}

console.log("\n===== INFORMAÇÕES DOS HERÓIS =====");
herois.forEach(function(heroi, index) {
    if(heroi.idade > 30) {
        console.log(`${heroi.nome} (${heroi.tipo}) tem ${heroi.idade} anos - EXPERIENTE`);
    } else {
        console.log(`${heroi.nome} (${heroi.tipo}) tem ${heroi.idade} anos - NOVATO`);
    }
});

exibirAtaques(herois);

const meuHeroiFavorito = herois[0];
console.log(`\nMeu herói favorito: ${meuHeroiFavorito.nome}`);
console.log(`Seu ataque: ${meuHeroiFavorito.atacar()}`);
