class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 99988877709;
cliente2.agencia = 2002;
cliente2.saldo = 0;

console.log(cliente1, cliente2);