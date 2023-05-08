import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import CookInfo from "@/pages/components/cookinfo"

export default function CookDetails({ data }) {
    const router = useRouter();
    return (
      <>
        <MyLayout title = "Cook Info"/>
        <CookInfo data={data}/>
     <br></br>
            <button type="button" onClick={() => router.back()}>
            Click here to go back
            </button>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const c_id=context.params.c_id;
   
       const response = await axios.get('http://localhost:3000/manager/getcook/'+c_id);
       const data = await response.data;
      
   return { props: { data } }
   }