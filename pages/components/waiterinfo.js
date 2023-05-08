export default function WaiterInfo({data})   
{
    return(
        <>
      <h1 style={{color:"#330a00"}}>Name: {data.w_name}</h1>
      <h1 style={{color:"#330a00"}}>Age: {data.w_age}</h1>
      <h1 style={{color:"#330a00"}}>Gender: {data.w_gender}</h1>
      <h1 style={{color:"#330a00"}}>Address: {data.w_address}</h1>
      <h1 style={{color:"#330a00"}}>Salary: {data.w_salary}</h1>
      <h1 style={{color:"#330a00"}}>Email: {data.w_email}</h1>
      <h1 style={{color:"#330a00"}}>Contact: {data.w_contact}</h1>
        </>
    )
}