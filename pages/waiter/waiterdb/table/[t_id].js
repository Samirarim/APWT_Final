import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import TableData from "@/pages/components/tabledata"


export default function OrderDetails({ data }) {
    const router = useRouter();
    return (
      <>
        <MyLayout title = "Table Details"/>
        <TableData data={data}/>
     <br></br>
            <button type="button" onClick={() => router.back()}>
            Click here to go back
            </button>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const t_id=context.params.t_id;
   
       const response = await axios.get('http://localhost:3000/waiter/gettable/'+t_id);
       const data = await response.data;
      
   return { props: { data } }
   }