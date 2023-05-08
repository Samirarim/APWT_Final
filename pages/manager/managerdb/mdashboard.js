import MyLayout from '@/pages/components/layout';
import Link from "next/link"
import Image from 'next/image';


export default function Manager() {
  return (
    <>
  
    <MyLayout title="Manager Dashbord"/>
    <main>
    <Image src="/man.png" alt="me" width="64" height="64" />
      <div>
      <h1>Manager Dashboard</h1>
      <Link href="/profile"> Profile </Link><br></br><br></br><br></br>
      <button><Link href="/waitercrud"> Waiter </Link></button>
      <Link href="/manager/managerdb/viewwaiter">View </Link>
      <Link href="/manager/managerdb/addwaiter">Add </Link>
      <br></br><br></br>
      <button><Link href="/cookcrud"> Cook </Link></button>
      <Link href="/manager/managerdb/viewcook">View </Link>
      <br></br><br></br>
      <button><Link href="/deliverymancrud"> Delivery Man</Link></button>
      <Link href="/manager/managerdb/viewdm">View </Link>
      <br></br><br></br><br></br><br></br>
      <Link href="/logout"> Logout</Link>
      </div>
     
    </main>

    </>
  )
}