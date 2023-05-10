export default function CookInfo({data})   
{
    return(
        <>
      <h1>Name: {data.c_name}</h1>
      <h1>Age: {data.c_age}</h1>
      <h1>Gender: {data.c_gender}</h1>
      <h1>Address: {data.c_address}</h1>
      <h1>Salary: {data.c_salary}</h1>
      <h1>Email: {data.c_email}</h1>
      <h1>Contact: {data.c_contact}</h1>
        </>
    )
}