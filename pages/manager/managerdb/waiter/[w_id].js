import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import WaiterInfo from "@/pages/components/waiterinfo"

export default function WaiterDetails({ data }) {
    const router = useRouter();
    return (
      <>
        <MyLayout title = "Waiter Info"/>
        <WaiterInfo data={data}/>
     <br></br>
            <button type="button" onClick={() => router.back()}>
            Click here to go back
            </button>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const w_id=context.params.w_id;
   
       const response = await axios.get('http://localhost:3000/manager/getwaiter/'+w_id);
       const data = await response.data;
      
   return { props: { data } }
   }