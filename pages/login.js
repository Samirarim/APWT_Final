import MyLayout from "./components/layout"
import Header from "./components/header"
import Link from "next/link"

export default function Login() {
  return (
    <>
  
    <MyLayout title="Login"/>
    <main>
    <form align="center">
    <fieldset style={{position:"relative",color:"#330a00"}}>
        <legend>Login</legend>
        <label>Email</label>
        <input type="email" placeholder="Enter the Email" name="user_email"></input><br></br>
        <label>Password</label>
        <input type="password" placeholder="Enter the Password" name="user_pass"></input><br></br>
        <button>Submit</button>
        <p>Create an Account</p> <Link href="/signup"> Signup</Link>
    </fieldset>   
        </form>
    </main>

    </>
  )
}