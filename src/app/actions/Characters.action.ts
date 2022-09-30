import {Action} from "@ngrx/store";
import { Character } from "../interfaces/characteres-response";

export const ADD_CHARACTERES = 'ADD_CHARACTERES';

export class AddCharacterea implements Action {
  type: string = ADD_CHARACTERES

  constructor(public Characteres: Character[]) {
  }
}

