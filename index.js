class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
  }

  toString() {
    return `(${this.ddd}) ${this.numero}`
  }
}

class Endereco {
  constructor(rua, numero, cidade, estado) {
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado
  }

  toString() {
    return `${this.rua}, ${this.numero} - ${this.cidade} - ${this.estado}`
  }
}

class Cliente {
  #cpf
  constructor(nome, cpf, endereco) {
    this.nome = nome
    this.endereco = endereco
    this.telefones = new Set()
    this.#cpf = cpf
  }

  getCpf() {
    return this.#cpf
  }

  adicionarTelefone(telefone) {
    this.telefones.add(telefone)
  }

  removerTelefone(telefone) {
    this.telefones.delete(telefone)
  }

  descricao() {
    let telefonesStr = ""
    for (const tel of this.telefones) {
      telefonesStr += tel.toString() + ", "
    }

    return `
Nome: ${this.nome}
CPF: ${this.getCpf()}
Endereço: ${this.endereco.toString()}
Telefones: ${telefonesStr}
    `
  }
}

class Empresa {
  #cnpj
  constructor(razaoSocial, nomeFantasia, cnpj) {
    this.razaoSocial = razaoSocial
    this.nomeFantasia = nomeFantasia
    this.#cnpj = cnpj
    this.clientes = []
  }

  getCnpj() {
    return this.#cnpj
  }

  getCnpjUpper() {
    return this.#cnpj.toUpperCase()
  }

  getCnpjLower() {
    return this.#cnpj.toLowerCase()
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente)
  }

  detalhes() {
    let resultado = `
Razão Social: ${this.razaoSocial}
Nome Fantasia: ${this.nomeFantasia}
CNPJ: ${this.getCnpj()}
-------------------------
`
    for (const cliente of this.clientes) {
      resultado += cliente.descricao() + "\n"
    }
    return resultado
  }
}

const empresa = new Empresa("ABC LTDA", "Mercado Online", "12845678090199")

const Joseane = new Cliente("Joseane", "7657905643", new Endereco("Bosque das Laranjeiras", "987", "Rio Verde", "GO"))
Joseane.adicionarTelefone(new Telefone("64", "99999-9999"))
Joseane.adicionarTelefone(new Telefone("64", "3232-1111"))

const Fernanda = new Cliente("Fernanda", "987654337852", new Endereco("Parque Morada do Sol", "412", "Rio Verde", "GO"))
Fernanda.adicionarTelefone(new Telefone("64", "88888-8888"))
Fernanda.adicionarTelefone(new Telefone("64", "3232-2222"))

const Letícia = new Cliente("Letícia", "33567839133", new Endereco("Córrego do Sapo", "789", "Rio Verde", "GO"))
Letícia.adicionarTelefone(new Telefone("64", "77777-7777"))
Letícia.adicionarTelefone(new Telefone("64", "3232-3333"))

const Sara = new Cliente("Sara", "459444093844", new Endereco("Avenida Campestre", "452", "Rio Verde", "GO"))
Sara.adicionarTelefone(new Telefone("64", "66666-6666"))
Sara.adicionarTelefone(new Telefone("64", "3232-4444"))

const Bianca = new Cliente("Bianca", "098776423574", new Endereco("Recanto dos Bosques", "673", "Rio Verde", "GO"))
Bianca.adicionarTelefone(new Telefone("64", "55555-5555"))
Bianca.adicionarTelefone(new Telefone("64", "3232-5555"))

empresa.adicionarCliente(Sara)
empresa.adicionarCliente(Fernanda)
empresa.adicionarCliente(Joseane)
empresa.adicionarCliente(Letícia)
empresa.adicionarCliente(Bianca)

console.log(empresa.detalhes())
