export default function DMInfo({data})   
{
    return(
        <>
      <h1>Name: {data.dm_name}</h1>
      <h1>Age: {data.dm_age}</h1>
      <h1>Gender: {data.dm_gender}</h1>
      <h1>Address: {data.dm_address}</h1>
      <h1>Salary: {data.dm_salary}</h1>
      <h1>Email: {data.dm_email}</h1>
      <h1>Contact: {data.dm_contact}</h1>
      <h1>Vehicle No: {data.dm_vehicleno}</h1>
        </>
    )
}