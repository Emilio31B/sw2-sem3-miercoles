var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.getInstance = function () {
        if (Persona.instance == null) {
            Persona.instance = new Persona();
        }
        return Persona.instance;
    };
    Persona.instance = null; // Propiedad de instancia
    return Persona;
}());
var mainSingleton = function () {
    /*let p1 : Persona = new Persona();
    let p2 : Persona = new Persona();
    p1.nombre = "Pepito";
    p2.nombre = "Juanito";*/
    var p3 = Persona.getInstance();
    var p4 = Persona.getInstance();
    p3.nombre = "Luisito";
    p4.nombre = "Claudita";
    console.log("p3: " + p3.nombre + " y p4: " + p4.nombre);
};
mainSingleton();
