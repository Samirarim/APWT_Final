import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import OrderData from "@/pages/components/orderdata"

export default function OrderDetails({ data }) {
    const router = useRouter();
    return (
      <>
        <MyLayout title = "Menu Details"/>
        <OrderData data={data}/>
     <br></br>
            <button type="button" onClick={() => router.back()}>
            Click here to go back
            </button>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const o_id=context.params.o_id;
   
       const response = await axios.get('http://localhost:3000/waiter/getorder/'+o_id);
       const data = await response.data;
      
   return { props: { data } }
   }