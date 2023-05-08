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
      <button><Link href="/menu"> Menu </Link></button>
      <Link href="/waiter/waiterdb/viewmenu">View </Link>
      <Link href="/waiter/waiterdb/findmenu">Find </Link>
      <br></br><br></br>
      <button><Link href="/order"> Order </Link></button>
      <Link href="/waiter/waiterdb/vieworder">View </Link>
      <br></br><br></br>
      <button><Link href="/table"> Table</Link></button>
      <Link href="/waiter/waiterdb/viewtable">View </Link>
      <br></br><br></br><br></br><br></br>
      <Link href="/logout"> Logout</Link>
      </div>
     
    </main>

    </>
  )
}