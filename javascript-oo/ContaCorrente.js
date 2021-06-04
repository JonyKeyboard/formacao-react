import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    _agencia;
    _cliente;
    _saldo = 0;

    set cliente(cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this._cliente = cliente;
        this._agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;

        }
        return
    }

    depositar(valor) {
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    
    }
}