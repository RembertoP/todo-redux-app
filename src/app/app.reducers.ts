import { filtrosValidos } from './filtros/filtros.actions';
import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtroReducer } from './filtros/filtros.reducer';

export interface AppState {
    // listado de estados
    todos: Todo[];
    filtro: filtrosValidos;
}


export const appReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}