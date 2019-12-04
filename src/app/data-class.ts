export class Pokemon{
  id: string
  nombre :string
  numero : number
}

export class PokemonesResponse{
  data:PokemonList
}

class PokemonList{
  list: Array<Pokemon>
  total: number
  offset: number
  limit: number
}


export  class AuthResponse{
  data: string
}
