import Link from "next/link"
import MyLayout from "@/pages/components/layout"
import axios from "axios";


export default function GetWaiter({ data }) {
  return (
      <>
       <MyLayout title="Waiters"/>
    <h1>Waiters</h1>
      <ul>
        {data.map(item => (
          <li key={item.w_id}>
      
        <Link href={"/manager/managerdb/waiter/"+item.w_id}>{item.w_name}</Link>
            </li>
        ))}
      </ul>

    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/manager/viewwaiter');
      const data = await response.data;
    
  return { props: { data } }
  }