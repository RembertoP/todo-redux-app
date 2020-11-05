import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as Actions from './todo.actions';
 
export const estadoInicial: Todo[] = [
    new Todo('Salvar la tierra'),
    new Todo('Salvar marte'),
    new Todo('Salvar pluton'),
    new Todo('Salvar el sol')
];
 
// no olvidar principio ede reducer, no e debe alterar el estado, se debe retornar uno nuevo
const _todoReducer = createReducer(
    estadoInicial,
  on(Actions.crear, (state, {texto}) => [...state, new Todo(texto)]) ,/// adiciona una nueva tarea al arreglo
  on(Actions.toggle, (state, {id}) => {
    return state.map(todo => {
      // se aplica esta logica para no modificar el estado
      if(todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(Actions.editar, (state, {id, texto}) => {
    return state.map(todo => {
      // se aplica esta logica para no modificar el estado
      if(todo.id === id) {
        return {
          ...todo,
          texto: texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(Actions.borrar, (state, {id}) => {
    return state.filter(todo => todo.id !== id);
  })
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}