import MyLayout from '@/pages/components/layout';
import Link from "next/link"

export default function MenuDisplay() {
    return (
      <>
      <MyLayout title="Waiter Display"/>
      <main>
        <div>
        <button><Link href="/waiter/waiterdb/viewmenu">View </Link></button>
        <button><Link href="/waiter/waiterdb/findmenu">Find </Link></button>
        <button><Link href="/waiter/waiterdb/addmenu">Add </Link></button>
        </div>
      </main>
      </>
    )
  }