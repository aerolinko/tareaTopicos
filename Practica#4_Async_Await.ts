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
    return  new Date().getFullYear() - fechaNacimiento.getFullYear();
}

async function timeout(delay: number, fechaNacimiento:Date): Promise<number>{
    return new Promise(resolve => {
                        setTimeout(()=> {
                            resolve(calcularEdad(fechaNacimiento));
                            },delay);
                        });
}

let personas:Person[]=[];
personas.push(new Person('Cesar',new Date(999999999999)));
personas.push(new Person('Franco',new Date(1298889999999)));
personas.push(new Person('Eliott',new Date(1098889999999)));
personas.push(new Person('Franchesco',new Date(1198889999999)));
personas.push(new Person('Carola',new Date(1290000009999)));
personas.push(new Person('Pepe',new Date(222221111999)));

async function armar(personas:Person[]) {
    console.log("Cargando");
    let respuestas:Array<object>=[];
    for (let i = 0; i < personas.length; i++) {
        respuestas.push({'nombre':personas[i].nombre, 'edad':await timeout(2000,personas[i].fechaNacimiento)})
    }
    console.log(respuestas);
    console.log('Listo!');
}

armar(personas);


