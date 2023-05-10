import MyLayout from '@/pages/components/layout';
import Link from "next/link"

export default function WaiterDisplay() {
    return (
      <>
      <MyLayout title="Waiter Display"/>
      <main>
        <div>
        <button><Link href="/manager/managerdb/viewwaiter">View </Link></button>
        <button><Link href="/manager/managerdb/findwaiter">Find </Link></button>
        <button><Link href="/manager/managerdb/addwaiter">Add </Link></button>
        </div>
      </main>
      </>
    )
  }