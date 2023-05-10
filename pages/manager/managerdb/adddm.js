import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddDM() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('dm_name', data.dm_name);
        formData.append('dm_age', data.dm_age);
        formData.append('dm_gender', data.dm_gender);
        formData.append('dm_address', data.dm_address);
        formData.append('dm_salary', data.dm_salary);
        formData.append('dm_email', data.dm_email);
        formData.append('dm_contact', data.dm_contact);
        formData.append('dm_vehicleno', data.dm_vehicleno);
        formData.append('m_id', data.m_id);
      
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/manager/add",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
          

            setSuccess('Deliveryman added successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Deliveryman add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <MyLayout title = "Deliverymen"/>
              <h1>
                  Add Deliveryman
              </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
              <div>
                      <label for="dm_name" >Name</label>
                        <input type="text" id="dm_name" placeholder="name" required=""{...register('dm_name', { required: true })}/>
                        {errors.dm_name &&
                        <p id="outlined_error_help"><span >Name is required</span></p>
                        }
                </div>
                <div>
                      <label for="dm_age" >Age</label>
                        <input type="number" id="dm_age" placeholder="age" required=""{...register('dm_age', { required: true })}/>
                        {errors.dm_age &&
                        <p id="outlined_error_help"><span >Age is required</span></p>
                        }
                </div>
                <div>
                      <label for="dm_gender" >Gender</label>
                        <input type="text" id="dm_gender" placeholder="gender" required=""{...register('dm_gender', { required: true })}/>
                        {errors.dm_gender &&
                        <p id="outlined_error_help"><span >Gender is required</span></p>
                        }
                </div>
                <div>
                      <label for="dm_address" >Address</label>
                      <textarea id="dm_address"  rows="2" placeholder="Full Adress here...." {...register('dm_address', { required: true })} />
                </div>
                <div>
                      <label for="dm_salary" >Salary</label>
                        <input type="number" id="dm_salary" placeholder="salary" required=""{...register('dm_salary', { required: true })}/>
                        {errors.dm_salary &&
                        <p id="outlined_error_help"><span >Age is required</span></p>
                        }
                </div>
                <div>
                    <label for="dm_email" >Email</label>
                        <input type="email" id="dm_email" placeholder="name@company.com" required=""
                                            {...register('dm_email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                                        />
                                          {errors.c_email && (
                        <p>
                            {errors.dm_email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" ><span class="font-medium">Email is required</span></p>

                                                    :
                                                    <p id="outlined_error_help" ><span class="font-medium">Invalid email address</span></p>
                                                }
                        </p>
                    )}
                  </div>
                <div>
                      <label for="dm_contact" >Contact</label>
                        <input type="text" id="dm_contact" placeholder="contact" required=""{...register('dm_contact', { required: true })}/>
                        {errors.dm_contact &&
                        <p id="outlined_error_help"><span >Contact is required</span></p>
                        }
                </div>
                <div>
                      <label for="dm_vehicleno" >Vehicle No</label>
                        <input type="text" id="dm_vehicleno" placeholder="vehicle no" required=""{...register('dm_vehicleno', { required: true })}/>
                        {errors.dm_vehicleno &&
                        <p id="outlined_error_help"><span >Contact is required</span></p>
                        }
                </div>
                <div>
                      <label for="m_id" >Manager</label>
                        <input type="number" id="m_id" placeholder="manager" required=""{...register('m_id', { required: true })}/>
                        {errors.m_id &&
                        <p id="outlined_error_help"><span >Manager is required</span></p>
                        }
                </div>
                                
                          <button type="submit">Submit</button>
              </form>
      </>
    )
}