import MyLayout from '@/pages/components/layout';
import Link from "next/link"

export default function DMDisplay() {
    return (
      <>
      <MyLayout title="Deliveryman Display"/>
      <main>
        <div>
        <button><Link href="/manager/managerdb/viewdm">View </Link></button>
        <button><Link href="/manager/managerdb/finddm">Find </Link></button>
        <button><Link href="/manager/managerdb/adddm">Add </Link></button>
        </div>
      </main>
      </>
    )
  }