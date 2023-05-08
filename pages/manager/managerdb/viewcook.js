import Link from "next/link"
import MyLayout from "@/pages/components/layout"
import axios from "axios";


export default function GetChef({ data }) {
  return (
      <>
       <MyLayout title="Chefs"/>
    <h1>Chefs</h1>
      <ul>
        {data.map(item => (
          <li key={item.c_id}>
      
        <Link href={"/manager/managerdb/cook/"+item.c_id}>{item.c_name}</Link>
            </li>
        ))}
      </ul>

    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/manager/viewcook');
      const data = await response.data;
    
  return { props: { data } }
  }