// src/app/app.state.ts
import { Character } from "./interfaces/characteres-response";

export interface AppState {
  readonly characters: Character[];
}
