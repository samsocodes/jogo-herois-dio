#  Jogo de Heróis - Sistema de Classes

**Projeto prático do bootcamp da DIO - JavaScript e TypeScript.**

Sistema de criação de heróis implementando Programação Orientada a Objetos (POO) em JavaScript. Cada herói possui ataques específicos conforme sua classe.

## Como Executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/jogo-herois-dio.git

# Acesse a pasta do projeto
cd jogo-herois-dio

# Execute o código
node jogo-herois.js
```

## Saída do Programa

===== INFORMAÇÕES DOS HERÓIS =====
Gandalf (mago) tem 150 anos - EXPERIENTE
Aragorn (guerreiro) tem 35 anos - EXPERIENTE
Liu Kang (monge) tem 40 anos - EXPERIENTE
Hanzo (ninja) tem 28 anos - NOVATO
Legolas (arqueiro) tem 25 anos - NOVATO

===== ATAQUES DOS HERÓIS =====
1. o mago atacou usando usou magia
2. o guerreiro atacou usando usou espada
3. o monge atacou usando usou artes marciais
4. o ninja atacou usando usou shuriken
5. o arqueiro atacou usando usou um ataque desconhecido

Meu herói favorito: Gandalf
Seu ataque: o mago atacou usando usou magia

## Lógica do Sistema

1. Classe do herói
```bash
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
```
- Classe: Molde para criar objetos
- Objetos: Instâncias da classe (ex: new Heroi())
- Propriedades: nome, idade, tipo

2. Sistema de ataques

```bash
atacar() {
    let ataque;
    
    switch(this.tipo.toLowerCase()) {
        case 'mago': ataque = 'usou magia'; break;
        case 'guerreiro': ataque = 'usou espada'; break;
        case 'monge': ataque = 'usou artes marciais'; break;
        case 'ninja': ataque = 'usou shuriken'; break;
        default: ataque = 'usou um ataque desconhecido';
    }
    
    return `o ${this.tipo} atacou usando ${ataque}`;
}
```
Fluxo: Verifica o tipo → Seleciona ataque correspondente → Retorna mensagem

3. Estruturas de Controle
- switch-case: Decide qual ataque usar baseado no tipo
- for loop: Percorre array de heróis para exibir ataques
- if-else: Classifica heróis como EXPERIENTE ou NOVATO
- forEach: Alternativa para percorrer arrays

4. Array de objetos

```bash
const herois = [
    new Heroi('Gandalf', 150, 'mago'),
    new Heroi('Aragorn', 35, 'guerreiro'),
    new Heroi('Liu Kang', 40, 'monge'),
    new Heroi('Hanzo', 28, 'ninja'),
    new Heroi('Legolas', 25, 'arqueiro')
];
```
- Array armazenando múltiplos objetos Heroi
- Cada elemento é independente com suas propriedades
