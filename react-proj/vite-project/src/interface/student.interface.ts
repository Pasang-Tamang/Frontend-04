
export interface Data{
    name: string,
    age: number,
    isMarried: boolean,
    address: Object
  }

  interface Object{
    city: string, 
    postalCode: number
  }

  export type User = {
    name: string,
    id: number
  }