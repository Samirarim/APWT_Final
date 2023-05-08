import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import DMInfo from "@/pages/components/dminfo"

export default function CookDetails({ data }) {
    const router = useRouter();
    return (
      <>
        <MyLayout title = "Deliveryman Info"/>
        <DMInfo data={data}/>
     <br></br>
            <button type="button" onClick={() => router.back()}>
            Click here to go back
            </button>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const dm_id=context.params.dm_id;
   
       const response = await axios.get('http://localhost:3000/manager/getdeliveryman/'+dm_id);
       const data = await response.data;
      
   return { props: { data } }
   }