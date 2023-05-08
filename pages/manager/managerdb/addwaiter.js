import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddWaiter() {
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
        formData.append('w_name', data.w_name);
        formData.append('w_age', data.w_age);
        formData.append('w_gender', data.w_gender);
        formData.append('w_address', data.w_address);
        formData.append('w_salary', data.w_salary);
        formData.append('w_email', data.w_email);
        formData.append('w_contact', data.w_contact);
        formData.append('m_id', data.m_id);
      
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/manager/addwaiter",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
          

            setSuccess('Waiter added successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Waiter add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <MyLayout title = "Waiters"/>
              <h1>
                  Add Waiter
                                </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
              <div>
                      <label for="w_name" >Name</label>
                        <input type="text" id="w_name" placeholder="name" required=""{...register('w_name', { required: true })}/>
                        {errors.w_name &&
                        <p id="outlined_error_help"><span >Name is required</span></p>
                        }
                </div>
                <div>
                      <label for="w_age" >Age</label>
                        <input type="number" id="w_age" placeholder="age" required=""{...register('w_age', { required: true })}/>
                        {errors.w_age &&
                        <p id="outlined_error_help"><span >Age is required</span></p>
                        }
                </div>
                <div>
                      <label for="w_gender" >Gender</label>
                        <input type="text" id="w_gender" placeholder="gender" required=""{...register('w_gender', { required: true })}/>
                        {errors.w_gender &&
                        <p id="outlined_error_help"><span >Gender is required</span></p>
                        }
                </div>
                <div>
                      <label for="w_address" >Address</label>
                      <textarea id="w_address"  rows="2" placeholder="Full Adress here...." {...register('w_address', { required: true })} />
                </div>
                <div>
                      <label for="w_salary" >Salary</label>
                        <input type="number" id="w_salary" placeholder="salary" required=""{...register('w_salary', { required: true })}/>
                        {errors.w_salary &&
                        <p id="outlined_error_help"><span >Age is required</span></p>
                        }
                </div>
                <div>
                    <label for="w_email" >Your email</label>
                        <input type="email" id="w_email" placeholder="name@company.com" required=""
                                            {...register('w_email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                                        />
                                          {errors.w_email && (
                        <p>
                            {errors.w_email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" ><span class="font-medium">Email is required</span></p>

                                                    :
                                                    <p id="outlined_error_help" ><span class="font-medium">Invalid email address</span></p>
                                                }
                        </p>
                    )}
                  </div>
                <div>
                      <label for="w_contact" >Contact</label>
                        <input type="text" id="w_contact" placeholder="contact" required=""{...register('w_contact', { required: true })}/>
                        {errors.w_contact &&
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