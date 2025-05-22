// @ts-ignore
class Person{
    private _nombre:string;
    private _fechaNacimiento:Date;

    constructor( nombre:string, nacimiento:Date) {
        this._nombre=nombre;
        this._fechaNacimiento=nacimiento;
    }

    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(value: Date) {
        this._fechaNacimiento = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }
}

function calcularEdad(fechaNacimiento:Date):number{
    return (new Date().getFullYear() - fechaNacimiento.getFullYear());
}

function timeout(delay: number, persona: Person, callback: (nombre: string, edad: number) => void): void {
    setTimeout(() => {
        callback(persona.nombre, calcularEdad(persona.fechaNacimiento));
    }, delay);
}


let personas:Person[]=[];
personas.push(new Person('Cesar',new Date(999999999999)));
personas.push(new Person('Franco',new Date(1298889999999)));
personas.push(new Person('Eliott',new Date(1098889999999)));
personas.push(new Person('Franchesco',new Date(1198889999999)));
personas.push(new Person('Carola',new Date(1290000009999)));
personas.push(new Person('Pepe',new Date(222221111999)));

function armar(personas:Person[]) {
    console.log("Cargando");
    let respuestas:Array<object>=[];
    personas.forEach(persona => {
        timeout(2000, persona, (nombre, edad) => {
            respuestas.push({ nombre, edad });
            if (respuestas.length === personas.length) {
                console.log(respuestas);
                console.log("Listo!");
            }
        });
    });
}

armar(personas);

