export default function TableData({data})   
{
    return(
        <>
      <h1 style={{color:"#330a00"}}>Position: {data.t_position}</h1>
      <h1 style={{color:"#330a00"}}>Capacity: {data.seatcapacity}</h1>
      <h1 style={{color:"#330a00"}}>Status: {data.t_status}</h1>
        </>
    )
}