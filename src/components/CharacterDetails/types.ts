import { PropsWithChildren } from 'react'

export interface Character {
  name: string
  id: number
  thumbnail: {
    extension: string
    path: string
  }
  description: string
  resourceURI: string
}

export interface CharacterDetailsProps extends PropsWithChildren {
  character: Character
}
