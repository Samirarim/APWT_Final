import Link from "next/link"
import MyLayout from "@/pages/components/layout"
import axios from "axios";


export default function GetOrder({ data }) {
    
  return (
      <>
       <MyLayout title="View Order"/>
      <h1>All Order</h1>
      <ul>
        {data.map(item => (
          <li key={item.m_id}>
      
        <Link href={"/waiter/waiterdb/order/"+item.o_id}>{item.o_name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/waiter/vieworder');
      const data = await response.data;
    
  return { props: { data } }
  }