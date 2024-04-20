const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: { vida: 100 },
            vilao: { vida: 100 }
        }
    },
    methods: {
        atacar(isHeroi) {
            if (isHeroi) {
                this.vilao.vida -= 10;
                console.log("O herói atacou!");
                // Adiciona uma chance de 1/3 do vilão revidar
                if (Math.random() < 1 / 3) {
                    console.log("Contra aquete do vilão!");
                    this.acaoVilao();
                }
            } else {
                this.heroi.vida -= 20;
            }
            this.verificarVida();
        },
        defender(isHeroi) {
            // Adiciona uma chance de 2/3 do heroi defender o ataque do vilão
            if (Math.random() < 2 / 3) {
                console.log("Heroi defendeu!");
            } else {
                console.log("Defesa falhou!");
                this.acaoVilao();
            }
        },
        usarPocao(isHeroi) {
            // Recupera 15 de vida do herói
            this.heroi.vida += 15;
            // Limita a vida do herói a 100
            if (this.heroi.vida > 100) {
                this.heroi.vida = 100;
            }
            console.log("Herói usou poção!");
            // Gera uma chance de 1/3 do vilão atacar e outra chance de 1/3 do vilão se curar em 10 de vida
            if (Math.random() < 1 / 3) {
                console.log("Vilão atacou!");
                this.acaoVilao();
            } else if (Math.random() < 2 / 3) {
                console.log("Vilão usou poção!");
                this.vilao.vida += 10;
                // Limita a vida do vilão a 100
                if (this.vilao.vida > 100) {
                    this.vilao.vida = 100;
                }
            }
        },
        critico(isHeroi) {
            // Ataque crítico que causa o dobro do dano do ataque normal
            if (isHeroi) {
                this.vilao.vida -= 20;
                console.log("O herói deu um golpe crítico!");
                // Adiciona uma chance de 1/3 do vilão revidar
                if (Math.random() < 1 / 3) {
                    console.log("Contra aquete do vilão!");
                    this.acaoVilao();
                }
            } else {
                this.heroi.vida -= 40;
                console.log("O vilão deu um golpe crítico!");
            }
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarPocao', 'critico'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false);
            this.verificarVida();
        },
        verificarVida() {
            // Se a vida de qual quer um chegar a 0 cria-se um pop-up alertando o vencedor!!
            if (this.heroi.vida <= 0) {
                alert("Vilão Ganhou");
                this.recomecar();
            } else if (this.vilao.vida <= 0) {
                alert("Herói Ganhou");
                this.recomecar();
            }
        },
        recomecar() {
            //Após o Alert o jogo recomeça com a vida 100% de ambos
            this.heroi.vida = 100;
            this.vilao.vida = 100;
        }
    }
}).mount("#app");