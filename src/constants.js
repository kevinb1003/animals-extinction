import mammals from "./assets/json/mammals.json"
import birds from "./assets/json/birds.json"
import fish from "./assets/json/fish.json"

export const ANIMAL_CODE = {
  BIRD: 'EN.BIR.THRD.NO',
  MAMMAL: 'EN.MAM.THRD.NO',
  FISH: 'EN.FSH.THRD.NO'
}

export const ANIMAL_COLOR = {
  BIRD: '#19c416',
  MAMMAL: '#f54d4b',
  FISH: '#1771e4',
}

export const JSON_LIST = [mammals, fish, birds]

export const MAXMIUM_ENDAGERED_SPECIES = 400

export const MAP_DEFAULT_ZOOM = 1.5
