export class Pokemon{
  id: string
  nombre :string
  numero : number
}

export class PokemonesResponse{
  data:PokemonList
}

export class EntrenadoresResponse{
  data:EntrenadorList
}

class EntrenadorList{
  list: Array<Entrenador>
  total: number
  offset: number
  limit: number
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

export class EntrenadorResponse{
  data: Entrenador
}

export  class Entrenador{
  id: string
  nombre :string
  pokemon : number
}
