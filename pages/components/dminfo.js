export default function DMInfo({data})   
{
    return(
        <>
      <h1 style={{color:"#330a00"}}>Name: {data.dm_name}</h1>
      <h1 style={{color:"#330a00"}}>Age: {data.dm_age}</h1>
      <h1 style={{color:"#330a00"}}>Gender: {data.dm_gender}</h1>
      <h1 style={{color:"#330a00"}}>Address: {data.dm_address}</h1>
      <h1 style={{color:"#330a00"}}>Salary: {data.dm_salary}</h1>
      <h1 style={{color:"#330a00"}}>Email: {data.dm_email}</h1>
      <h1 style={{color:"#330a00"}}>Contact: {data.dm_contact}</h1>
      <h1 style={{color:"#330a00"}}>Vehicle No: {data.dm_vehicleno}</h1>
        </>
    )
}