class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {

        let attack = ""

        if (this.type === "mago") {
            attack = "magia"
        }
        else if (this.type === "guerreiro") {
            attack = "espada"
        }
        else if (this.type === "monge") {
            attack = "artes marciais"
        }
        else if (this.type === "ninja") {
            attack = "shuriken"
        }
        else {
            console.log("Herói desconhecido")
            return
        }

        console.log(`O ${this.type} ${this.name} com idade de ${this.age} atacou usando ${attack}.`)
    }

}
const hero1 = new hero("willian", 36, "guerreiro")
hero1.attack()