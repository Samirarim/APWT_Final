import Link from "next/link"
import MyLayout from "@/pages/components/layout"
import axios from "axios";


export default function GetTable({ data }) {
    
  return (
      <>
       <MyLayout title="View Table"/>
      <h1>Tables</h1>
      <ul>
        {data.map(item => (
          <li key={item.t_id}>
      
        <Link href={"/waiter/waiterdb/table/"+item.t_id}>{item.t_position}</Link>
            </li>
        ))}
      </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/waiter/viewtable');
      const data = await response.data;
    
  return { props: { data } }
  }