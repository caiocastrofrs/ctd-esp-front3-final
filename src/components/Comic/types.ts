import { Character } from '../Character/types'

export interface Comic {
  id: number
  title: string
  thumbnail: {
    extension: string
    path: string
  }
  price: number
  stock: number
  description: string
  characters: {
    available: number
    collectionURI: string
    items: Character[]
  }
}
