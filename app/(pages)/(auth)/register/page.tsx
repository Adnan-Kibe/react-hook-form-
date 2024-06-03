import { Metadata } from 'next'
import RegisterForm from './RegisterForm'

export const metadata : Metadata = {
    title: "Register Form"
}

const page = () => {
  return (
    <div>
        <RegisterForm />
    </div>
  )
}

export default page