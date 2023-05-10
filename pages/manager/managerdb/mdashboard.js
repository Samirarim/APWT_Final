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
      <button><Link href="/manager/managerdb/waiter/waiterdisplay"> Waiter </Link></button>
      <br></br><br></br>
      <button><Link href="/manager/managerdb/cook/cookdisplay"> Cook </Link></button>
      <br></br><br></br>
      <button><Link href="/manager/managerdb/deliveryman/dmdisplay"> Delivery Man</Link></button>
      <br></br><br></br>
      <button><Link href="/manager/managerdb/mail">Send Mail</Link></button>
      <br></br><br></br><br></br><br></br>
      <Link href="/logout"> Logout</Link>
      </div>
    </main>
    </>
  )
}