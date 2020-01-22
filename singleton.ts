class Persona {

    private static instance : Persona | null = null // Propiedad de instancia
    nombre : string // Props de instancia
    edad : number // Props de instancia


    private constructor(){

    }

    static getInstance(){
        if (Persona.instance == null){
            Persona.instance = new Persona();
        }
        return Persona.instance;
    }

}

let mainSingleton = () => {
    /*let p1 : Persona = new Persona();
    let p2 : Persona = new Persona();
    p1.nombre = "Pepito";
    p2.nombre = "Juanito";*/
    let p3 = Persona.getInstance();
    let p4 = Persona.getInstance();

    p3.nombre = "Luisito";
    p4.nombre = "Claudita";

    console.log(`p3: ${p3.nombre} y p4: ${p4.nombre}`);
    
};

mainSingleton();