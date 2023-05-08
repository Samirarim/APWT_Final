import Image from 'next/image'

export default function OrderData({data})   
{
    return(
        <>
      <h1 style={{color:"#330a00"}}>Order: {data.o_name}</h1>
      <h1 style={{color:"#330a00"}}>Type: {data.o_type}</h1>
      <h1 style={{color:"#330a00"}}>Price: {data.o_price}</h1>
      <h1 style={{color:"#330a00"}}>Quantity: {data.o_quantity}</h1>
      <h1 style={{color:"#330a00"}}>Status: {data.o_status}</h1>
        </>
    )
}