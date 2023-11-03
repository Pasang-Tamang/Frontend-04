
import './App.css'
import { Data, User } from './interface/student.interface'
import{ Formik, ErrorMessage }from 'formik';
import {Card} from 'react-bootstrap';
import {object, string, number} from "yup"
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
  console.log(num + str + data.name + user.name)


  let productSchema = object({
    productName: string().required("Product Name is Required field").min(5, "min length is 5").max(15, "max length is 15"),
    price: number().required("price is required"),
    description: string().notRequired().min(5, "min length is 5").max(15, "max length is 15"),
    email:string().email().required("Enter valid email")
  })
  return (
    <> 

   <Card>
   <Formik validationSchema={productSchema} initialValues={{productName: "", price: "", description: "", email: ""}} 
   onSubmit = {(values) => {
    console.log(values)
   }}>
    
      {({handleChange, handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <input className='form-control mb-2' onChange={handleChange} type="text" name='productName' placeholder='Enter Product Name' />
          <ErrorMessage component="span" name='productName' className='text-danger'></ErrorMessage>
        <input className="form-control mb-2" onChange={handleChange} type="text" name='price' placeholder='Enter Product Price' />
        <ErrorMessage component="span" name='price' className='text-danger'></ErrorMessage>
        <input className='form-control mb-2'onChange={handleChange} type="text" name='description' placeholder='Enter Product Description' />
        <ErrorMessage name='description'></ErrorMessage>
        <input className='form-control mb-2' type="email" name='email' placeholder='Enter email' onChange={handleChange} />
        <ErrorMessage name='email' className='text-danger' component="span" ></ErrorMessage>
        <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      )}

    </Formik>
   </Card>
    
    </>
  )
}

export default App
