import MyLayout from '@/pages/components/layout';
import Link from "next/link"

export default function TableDisplay() {
    return (
      <>
      <MyLayout title="Table Display"/>
      <main>
        <div>
        <button><Link href="/waiter/waiterdb/viewtable">View </Link></button>
        <button><Link href="/waiter/waiterdb/findtable">Find </Link></button>
        <button><Link href="/waiter/waiterdb/addtable">Add </Link></button>
        </div>
      </main>
      </>
    )
  }