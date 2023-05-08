import MyLayout from "./components/layout"
import Header from "./components/header"
import Link from "next/link"

export default function signup() {
  return (
    <>
  
    <MyLayout title="SignUp"/>

    <main>
    <form align="center">
    <fieldset align="center" style={{position:"relative",color:"#330a00"}}> <legend>Sign Up</legend>
        <label>Name</label>
        <input type="text" placeholder="Enter the Username" name="user_name"></input><br></br>
        <label>Age</label>
        <input type="number" placeholder="Enter the Age" name="user_age"></input><br></br>
        <label>Gender</label>
            <input type="radio" id="male" name="gender" value="Male"></input>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female"></input>
            <label for="female">Female</label><br></br>
        <label>Address</label>
        <input type="text" placeholder="Enter the Address" name="user_ad"></input><br></br>
        <label>Salary</label>
        <input type="number" placeholder="Enter the amount" name="user_sal"></input><br></br>
        <label>Email</label>
        <input type="email" placeholder="Enter the Email" name="user_email"></input><br></br>
        <label>Contact</label>
        <input type="text" placeholder="Enter the Contact" name="user_no"></input><br></br>
        <label>Password</label>
        <input type="password" placeholder="Enter the Password" name="user_pass"></input><br></br>
        <button>Submit </button>
        <p>Already have account?</p> <Link href="/login"> Login</Link>
        </fieldset> 
        </form>
    </main>

    </>
  )
}