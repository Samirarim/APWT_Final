import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useRouter } from 'next/router'
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Waiter({ data }) {
  const [cart, setWaiter] = useState([]);

  // console.log("asdasd", data[0].orderedItems);

  useEffect(() => {
    async function fetchData() {
      console.log("Waiter: ", data);
      setWaiter(data);
    }
    fetchData();
  }, []);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // alert("are you sure?")
//         const response = await axios.get(`http://localhost:3000/api/coupons`);
//         const data = await response.data;

//         setCoupons(data);
//       } catch (error) {
//         console.log("Error fetching coupons data:", error);
//       }
//     }
//     fetchData();
//   }, []);

  // console.log("the thing is that: ", coupons);

  const handleRemove = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to remove the item?");
      console.log(id);

      if (confirmed) {
        const res = await fetch(`http://localhost:3000/manager/removewaiter/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        // handle successful delete
        console.log("Item deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("cart with menu: ",cart);
  return (
    <>
      <MyLayout title="Waiter" />
      <h1>Waiter</h1>
      
      {cart.map((data) => (
        <fieldset key={data.w_id}>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </fieldset>
      ))}
      <br />
      <input type="submit" value={"Checkout"} />
    </>
  );
}

export async function getServerSideProps(context) {
    const w_id=context.params.w_id;
   
       const response = await axios.get('http://localhost:3000/manager/getwaiter/'+w_id);
       const data = await response.data;
      
   return { props: { data } }
}