import Image from 'next/image'

export default function MenuData({data})   
{
    return(
        <>
      <h1 style={{color:"#330a00"}}>Menu: {data.m_name}</h1>
      <h1 style={{color:"#330a00"}}>Type: {data.m_type}</h1>
      <h1 style={{color:"#330a00"}}>Price: {data.m_price}</h1>
      <h1 style={{color:"#330a00"}}> Availability: {data.m_availability}</h1>
        </>
    )
}