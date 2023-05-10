import MyLayout from '@/pages/components/layout';
import Link from "next/link"
import Image from 'next/image';


export default function WaiterDashbord() {
  return (
    <>
  
    <MyLayout title="Waiter Dashbord"/>
    <main>
    <Image src="/waiter.png" alt="me" width="64" height="64" />
      <div>
      <h1>Waiter Dashboard</h1>
      <Link href="/profile"> Profile </Link><br></br><br></br><br></br>
      <button><Link href="/waiter/waiterdb/menu/menudisplay"> Menu </Link></button>
      <br></br><br></br>
      <button><Link href="/waiter/waiterdb/order/orderdisplay"> Order </Link></button>
      <br></br><br></br>
      <button><Link href="/waiter/waiterdb/table/tabledisplay"> Table</Link></button>
      <br></br><br></br><br></br><br></br>
      <Link href="/logout"> Logout</Link>
      </div>
     
    </main>

    </>
  )
}