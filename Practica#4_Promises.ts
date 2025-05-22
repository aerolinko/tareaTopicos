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

function timeout(delay: number, fechaNacimiento:Date): Promise<number>{
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if(Math.random()>0.1)
            resolve(calcularEdad(fechaNacimiento));
            else
                reject('ocurrio un error');
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
function armar(personas:Person[]) {
    console.log("Cargando");
    let respuestas:Array<object>=[];
    personas.forEach(persona => {
        timeout(2000, persona.fechaNacimiento)
            .then(data => {
                respuestas.push({'nombre': persona.nombre, 'edad': data});
                if (respuestas.length==personas.length){
                    console.log(respuestas)
                    console.log('Listo!')
                }
            })
            .catch(error => {
                respuestas.push({'error': error})
                if (respuestas.length==personas.length){
                    console.log(respuestas)
                    console.log('Listo!')
                }
            })

    });

}

armar(personas);

