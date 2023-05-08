import Link from "next/link"
import MyLayout from "@/pages/components/layout"
import axios from "axios";


export default function GetDM({ data }) {
  return (
      <>
       <MyLayout title="Delivery Mans"/>
    <h1>Delivery Mans</h1>
      <ul>
        {data.map(item => (
          <li key={item.dm_id}>
      
        <Link href={"/manager/managerdb/deliveryman/"+item.dm_id}>{item.dm_name}</Link>
            </li>
        ))}
      </ul>

    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/manager/viewdeliveryman');
      const data = await response.data;
    
  return { props: { data } }
  }