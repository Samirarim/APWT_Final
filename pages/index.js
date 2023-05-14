import MyLayout from "./components/layout"
import Header from "./components/header"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
  
    <MyLayout title="Home"/>
    <main>
<section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-12">
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <a class="inline-flex items-center">
        <Image src="/bibimbap.png" alt="me" width="64" height="64" />
        </a>
        <br></br>
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">Introduction</span>
        <p class="leading-relaxed mb-8"><b>The system's aim is to develop a restaurant interface that would let customers see available menus and seat capacity easily. To ensure a streamlined customer experience, the updated restaurant system also provides features such as the ability to place orders and pay for products quickly. In addition, the interface includes features to view available menus, seat availability, and order status.</b></p>
        <a
            href="/manager/signup"
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
          >
            <span>Join Us</span>
          </a>
      </div>
      <div class="p-12 md:w-1/2 flex flex-col items-start">
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <form align="center">
              <fieldset style={{position:"relative", width:"50%"}}>
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Employees</h2>
                <a
                  href="/manager/managerdb/mdashboard"
                  class="lg:inline-flex lg:w-auto w-full  px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
                >
                <span>Manager Dashboard</span>
                </a>
                <a
                  href="/waiter/waiterdb/wdashboard"
                  class="lg:inline-flex lg:w-auto w-full  px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
                >
                <span>Waiter Dashboard</span>
                </a>
                <a
                  href="/cook/cookdb/cdashboard"
                  class="lg:inline-flex lg:w-auto w-full  px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
                >
                <span>Cook Dashboard</span>
                </a>
                <a
                  href="/deliveryman/deliverymandb/dmdashboard"
                  class="lg:inline-flex lg:w-auto w-full  px-3 py-2 rounded text-#661400 items-center justify-center hover:bg-[#661400] hover:text-white"
                >
                <span>Deliveryman Dashboard</span>
                </a>
              </fieldset>
            </form>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </main>

    </>
  )
}