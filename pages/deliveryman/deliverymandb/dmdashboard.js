import MyLayout from '@/pages/components/layout';
import Link from "next/link"
import Image from 'next/image';


export default function Deliveryman() {
  return (
    <>
  
    <MyLayout title="Deliveryman Dashbord"/>
    <main>
    <Image src="/delivery-boy.png" alt="me" width="64" height="64" />
      <div style={{color:"#330a00"}}>
      <h1>Deliveryman Dashboard</h1>
      <Link href="/profile"> Profile </Link><br></br><br></br><br></br>
      <button><Link href="/order"> Order </Link></button><br></br><br></br>
      <br></br><br></br>
      <br></br><br></br>
      <Link href="/logout"> Logout</Link>
      </div>
     
    </main>

    </>
  )
}