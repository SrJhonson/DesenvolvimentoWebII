const { createApp } = Vue;

createApp ({
    data(){
        return{
            display: '',
            numeroAnterior: null,
            operador: null,
            operadorClicado: false,
        }
    },
    methods:{
        LidarBotao(valor){
            switch (valor){
                case '*':
                    this.LidarMulti(valor);
                    break;
                case '/':
                    this.LidarDivi(valor);
                    break;
                case '-':
                    this.LidarSub(valor);
                    break;
                case '+':
                    this.LidarAdição(valor);
                    break;

                case '.':
                    this.LidarDecimal();
                    break;
                
                case 'C':
                    this.Limpar();
                    break;

                case '=':
                    this.Igual();

                default:
                    this.LidarNumero(valor);
            }
        },
        LidarDivi(valor){
            console.log("Operador Selecionado: ",valor);
            this.operador = (num1, num2) => num1 / num2;
            this.setarValor();
        },
        LidarMulti(valor){
            console.log("Operador Selecionado: ",valor);
            this.operador = (num1, num2) => num1 * num2;
            this.setarValor();
        },

        LidarAdição(valor){
            console.log("Operador Selecionado: ",valor);
            this.operador = (num1, num2) => num1 + num2;
            this.setarValor();
        },
        LidarSub(valor){
            console.log("Operador Selecionado: ",valor);
            this.operador = (num1, num2) => num1 - num2;
            this.setarValor();
        },
        LidarDecimal(){
            console.log("Entrou no decimal");
            if (this.display.indexOf('.') === -1 ) {
                this.LidarNumero('.')
            }
        },
        Limpar(){
            console.log("Limpou a Conta");
            this.display = '';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        Igual(){
            console.log("Entrou no igual");
            this.display = `${this.operador(
                parseFloat(this.numeroAnterior),
                parseFloat(this.display),
            )}`;
            this.numeroAnterior = null;
        },
        LidarNumero(valor){
            console.log("O Botão digitado foi: ",valor);
            if(this.operadorClicado) {
                this.display = '';
                this.operadorClicado = false;
            }
            this.display = `${this.display}${valor}`;
        },
        setarValor(){
            this.numeroAnterior = this.display;
            this.operadorClicado = true;
        },
    }
}).mount("#app")