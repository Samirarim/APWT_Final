import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { useRouter } from "next/router"
import MyLayout from "@/pages/components/layout"
import MenuData from "@/pages/components/menudata"

export default function MenuDetails({ data }) {
    const router = useRouter();
    return (
      <>
        <MyLayout title = "Menu Details"/>
        <MenuData data={data}/>
     <br></br>
            <button type="button" onClick={() => router.back()}>
            Click here to go back
            </button>
        
      </>
    )
  }

  export async function getServerSideProps(context) {
    const m_id=context.params.m_id;
   
       const response = await axios.get('http://localhost:3000/waiter/getmenu/'+m_id);
       const data = await response.data;
      
   return { props: { data } }
   }