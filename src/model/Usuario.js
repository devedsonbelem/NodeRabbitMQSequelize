class Usuario {

    constructor(id = 0, nome = "nome", email = "email", senha = "senha") {

        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;

    }
    toString() {
        return this.id + "," + this.nome + "," + this.email + "," + this.senha;
    }

}