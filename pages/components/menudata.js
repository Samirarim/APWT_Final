import Image from 'next/image'

export default function MenuData({data})   
{
    return(
        <>
      <h1>Menu: {data.m_name}</h1>
      <h1>Type: {data.m_type}</h1>
      <h1>Price: {data.m_price}</h1>
      <h1> Availability: {data.m_availability}</h1>
        </>
    )
}