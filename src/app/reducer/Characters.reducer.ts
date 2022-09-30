// hero-reducer.ts
import {Action, INIT} from "@ngrx/store";
import { Character } from "../interfaces/characteres-response";
import { AddCharacterea, ADD_CHARACTERES } from "../actions/Characters.action";

const initialState : Character[] = []

export function CharacterReducer (state : Character[] = [], action: Action): Character[] {
  switch(action.type) {
    case ADD_CHARACTERES:
      return [...state, ...(action as AddCharacterea).Characteres]
    case INIT:
      return initialState
    default:
      throw Error(`The action type "${action.type}" is not implemented`)
  }
}
