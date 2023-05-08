export default function CookInfo({data})   
{
    return(
        <>
      <h1 style={{color:"#330a00"}}>Name: {data.c_name}</h1>
      <h1 style={{color:"#330a00"}}>Age: {data.c_age}</h1>
      <h1 style={{color:"#330a00"}}>Gender: {data.c_gender}</h1>
      <h1 style={{color:"#330a00"}}>Address: {data.c_address}</h1>
      <h1 style={{color:"#330a00"}}>Salary: {data.c_salary}</h1>
      <h1 style={{color:"#330a00"}}>Email: {data.c_email}</h1>
      <h1 style={{color:"#330a00"}}>Contact: {data.c_contact}</h1>
        </>
    )
}