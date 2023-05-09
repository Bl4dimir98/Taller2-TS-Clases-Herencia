document.write('Chicaiza-Bladimir-DS-3A-Mat');

class Persona {
  public nombre: string | undefined;
  protected identificacion: number | undefined;
  public edad: number | undefined;
  public direccion: string | undefined;

  constructor(nombre: string | undefined, identificacion: number, edad: number, direccion: string) {
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.edad = edad;
    this.direccion = direccion;
  }

  saludar() {
    console.log("Mi nombre es " + this.nombre + " mi No. de identificacion es " + this.identificacion
      + ", tengo " + this.edad + " años de edad" + " y mi dirección es " + this.direccion);
  }

}

class Estudiante extends Persona {  //Se utiliza la palabra extends para heredar de la clase Padre
  public numeroMatricula: number;
  public nivel: string;
  constructor(nombre: string, identificacion: number, edad: number, direccion: string,
    matricula: number, nivel: string) {
    super(nombre, identificacion, edad, direccion); //super() para heredar de atributos clase Padre
    this.numeroMatricula = matricula;
    this.nivel = nivel;
  }
  saludar() {
    console.log("Mi nombre es " + this.nombre + " mi No. de identificacion es " + this.identificacion
      + ", tengo " + this.edad + " años de edad, mi dirección es " + this.direccion + ", Cursando el " + this.nivel
      + " nivel. mi número de matrícula es el " + this.numeroMatricula);
    console.log("Soy estudiante de la carrera de Desarrollo de Software");
  }
}

class Docente extends Persona {
  public contrato: string;
  public titulo: string;
  public salario: number;
  public horasExtras: number;
  public valorHora: number;
  constructor(nombre: string, identificacion: number, edad: number, direccion: string, contrato: string,
    titulo: string, salario: number, horasExtras: number, valorHora: number) {
    super(nombre, identificacion, edad, direccion); //Se llama a super() para heredar de la Clase Padre
    this.contrato = contrato;
    this.titulo = titulo;
    this.salario = salario;
    this.horasExtras = horasExtras;
    this.valorHora = valorHora;
  }
  saludo() {
    console.log("Mi nombre es " + this.nombre + ", vivo en " + this.direccion + ", tengo un titulo de "
      + this.titulo + ". Soy docente en el instituto Yavirac, donde tengo un contrato " + this.contrato);
  }
  sueldo() {
    console.log('Sueldo del docente = ' + this.salario + ' (+) Horas Extras = ' + this.valorHora * this.horasExtras);
    console.log('Total a recibir: $ ' + (this.valorHora * this.horasExtras + this.salario));
    console.log("Soy Docente de Educacion Superior");
  }
}

// INSTACIAR EL OBJETO PERSONA DE LA CLASE PERSONA
// let persona = new Persona("Bladimir Chicaiza", 1753018983, 24, "San Carlos");
// console.log(persona.nombre);
// console.log(persona.saludar());

// INSTACIAR EL OBJETO ESTUDIANTE DE LA CLASE ESTUDIANTE
// let estudiante = new Estudiante('Bladimir', 1753018983, 24, 'San Carlos', 100, 'tercer');
// console.log(estudiante.nombre, estudiante.edad);
// console.log(estudiante.numeroMatricula, estudiante.nivel);
// console.log(estudiante.saludar());

// INSTACIAR EL OBJETO DOCENTE DE LA CLASE DOCENTE
// let docente = new Docente('Andrew Kinkgman', 1204215865, 45, 'Quitumbe', 'con nombramiento', 'Licenciatura');
// console.log(docente.contrato, docente.titulo);
// console.log(docente.saludo());

// INSTACIAR EL OBJETO ESTUDIANTE DE LA CLASE ESTUDIANTE Y ACCEDER A LOS ATRIBUTOS DE LA CLASE PADRE
// let estudiante2 = new Estudiante("Bladimir Chicaiza", 1753018983, 24, "San Carlos", 65, "Primero");
// console.log(estudiante2.numeroMatricula, estudiante2.nivel, estudiante2.saludar());

let docente2 = new Docente("Alexander Yanez", 1501875660, 14, "Quitumbe", "Con Nombramiento", "Ingenieria", 425, 8, 8);
console.log(docente2.saludo());
console.log(docente2.contrato, docente2.titulo);
console.log('Salario: $ ' + docente2.salario);
console.log('Horas Extras: ' + docente2.horasExtras);
console.log('Valor por hora: ' + docente2.valorHora);
console.log(docente2.sueldo());

