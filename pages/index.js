import MyLayout from "./components/layout"
import Header from "./components/header"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
  
    <MyLayout title="Home"/>
    <main>
    <Image src="/bibimbap.png" alt="me" width="64" height="64" />
      <form align="left" style={{position:"relative", width:"50%" ,height:"20%"}}>
      <h4><b>The system's aim is to develop a restaurant interface that would let customers see available menus and seat capacity easily. To ensure a streamlined customer experience, the updated restaurant system also provides features such as the ability to place orders and pay for products quickly. In addition, the interface includes features to view available menus, seat availability, and order status.</b></h4>
      <br></br>
      <button><Link href="/manager/signup"> Join Us</Link></button>
      </form>
      <br></br><br></br>
      <form align="center">
        <fieldset style={{position:"relative", width:"20%"}}>
          <legend align="left">Employees</legend>
      <button><Link href="/manager/managerdb/mdashboard"> Manager Dashboard</Link></button><br></br><br></br><br></br>
      <button><Link href="/waiter/waiterdb/wdashboard"> Waiter Dashboard</Link></button><br></br><br></br><br></br>
      <button><Link href="/cook/cookdb/cdashboard"> Cook Dashboard</Link></button><br></br><br></br><br></br>
      <button><Link href="/deliveryman/deliverymandb/dmdashboard"> Delivery Man Dashboard</Link></button>
        </fieldset>
      </form>
      
    </main>

    </>
  )
}