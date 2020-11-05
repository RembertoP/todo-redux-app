import { AppState } from './../../app.reducers';
import { Todo } from './../models/todo.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as Actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  chkCompletado: FormControl;
  txtInput: FormControl;

  editando = false; // manejo del modo edicion

  @Input() public todo: Todo;

  @ViewChild('inputFisico' , {static: false})  inputFisico: ElementRef;

  constructor(private store: Store<AppState> ) { }

  ngOnInit() {
    this.chkCompletado =  new FormControl(this.todo.completado);
    this.txtInput =  new FormControl(this.todo.texto , Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => {
      console.log(valor);
      this.store.dispatch(Actions.toggle({id: this.todo.id}));
    });
  }

  editarItem() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.inputFisico.nativeElement.select(); ///  si utilizo .focus , coloco el foco en el texto
    }, 1);

  }
  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) { return ; }
    if (this.txtInput.value === this.todo.texto) { return ; }

    this.store.dispatch(Actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value}
    ));
  }

  borrar() {
    this.store.dispatch(Actions.borrar({
      id: this.todo.id}
    ));
  }

}
