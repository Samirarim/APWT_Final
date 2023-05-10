export default function WaiterInfo({data})   
{
    return(
        <>
      <h1>Name: {data.w_name}</h1>
      <h1>Age: {data.w_age}</h1>
      <h1>Gender: {data.w_gender}</h1>
      <h1>Address: {data.w_address}</h1>
      <h1>Salary: {data.w_salary}</h1>
      <h1>Email: {data.w_email}</h1>
      <h1>Contact: {data.w_contact}</h1>
        </>
    )
}