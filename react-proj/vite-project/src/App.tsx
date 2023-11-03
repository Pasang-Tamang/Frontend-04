
import './App.css'
import { Data, User } from './interface/student.interface'

function App() {
  let num: number = 1
  let str: string = "hello"


  let data: Data = {
    name: "Ram",
    age: 21,
    isMarried: false,
    address : {
      city: "Kathmandu",
      postalCode: 12345
    }
  }

  console.log(data)

  const user: User = {
    name: "user1",
    id: 1
  }

  console.log(user)


  const numbers: number[] = [1, 2,3,4,5]
  const users: User[] = [{name: "test1", id:2}, {name: "test2", id:3}]
  console.log(numbers, users)
  return (
    <> 

    {
      num + str + data.name + user.name
    }
    
    
    </>
  )
}

export default App
