import { AppState } from './../../app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './../../filtros/filtros.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = [ 'todos', 'completados', 'pendientes' ];

  constructor(private store: Store<AppState>) {
    this.store.select('filtro').subscribe(filtro => {
      console.log(filtro);
      this.filtroActual = filtro;
    });
   }

   ngOnInit() {
   }

   cambiarFiltro(filtro: filtrosValidos){
    this.store.dispatch(setFiltro({filtro: filtro}));
   }

}
