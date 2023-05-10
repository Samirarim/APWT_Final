import MyLayout from '@/pages/components/layout';
import Link from "next/link"

export default function CookDisplay() {
    return (
      <>
      <MyLayout title="Waiter Display"/>
      <main>
        <div>
        <button><Link href="/manager/managerdb/viewcook">View </Link></button>
        <button><Link href="/manager/managerdb/findcook">Find </Link></button>
        <button><Link href="/manager/managerdb/addcook">Add </Link></button>
        </div>
      </main>
      </>
    )
  }