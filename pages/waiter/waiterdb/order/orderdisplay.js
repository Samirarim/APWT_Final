import MyLayout from '@/pages/components/layout';
import Link from "next/link"

export default function OrderDisplay() {
    return (
      <>
      <MyLayout title="Order Display"/>
      <main>
        <div>
        <button><Link href="/waiter/waiterdb/vieworder">View </Link></button>
        <button><Link href="/waiter/waiterdb/findorder">Find </Link></button>
        <button><Link href="/waiter/waiterdb/addorder">Add </Link></button>
        </div>
      </main>
      </>
    )
  }