import Link from "next/link"
import MyLayout from "@/pages/components/layout"
import axios from "axios";


export default function GetMenu({ data }) {
  return (
      <>
       <MyLayout title="View Menu"/>
    <h1>All Menu</h1>
      <ul>
        {data.map(item => (
          <li key={item.m_id}>
      
        <Link href={"/waiter/waiterdb/menu/"+item.m_id}>{item.m_name}</Link>
            </li>
        ))}
      </ul>

    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/waiter/viewmenu');
      const data = await response.data;
    
  return { props: { data } }
  }