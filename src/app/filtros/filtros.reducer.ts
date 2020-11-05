import { createReducer, on, props } from '@ngrx/store';
import * as Actions from './filtros.actions';
 
export const initialState: Actions.filtrosValidos = 'todos';
 
const _filtroReducer = createReducer(
  initialState,
  on(Actions.setFiltro, (state, {filtro}) => filtro)
);

export function filtroReducer(state, action) {
  return _filtroReducer(state, action);
}