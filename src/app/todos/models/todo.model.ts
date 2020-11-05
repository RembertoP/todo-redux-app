
export class Todo {
public id: number;
public texto: string;
public completado: boolean;

constructor( texto: string) {
     this.id =  Math.random(); // new Date().getTime();
     this.texto = texto;
     this.completado =  false;
}
}
