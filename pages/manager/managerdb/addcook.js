import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddCook() {
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
        formData.append('c_name', data.c_name);
        formData.append('c_age', data.c_age);
        formData.append('c_gender', data.c_gender);
        formData.append('c_address', data.c_address);
        formData.append('c_salary', data.c_salary);
        formData.append('c_email', data.c_email);
        formData.append('c_contact', data.c_contact);
        formData.append('m_id', data.m_id);
      
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/manager/addcook",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
          

            setSuccess('Cook added successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Cook add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <MyLayout title = "Cooks"/>
              <h1>
                  Add Cook
              </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
              <div>
                      <label for="c_name" >Name</label>
                        <input type="text" id="c_name" placeholder="name" required=""{...register('c_name', { required: true })}/>
                        {errors.c_name &&
                        <p id="outlined_error_help"><span >Name is required</span></p>
                        }
                </div>
                <div>
                      <label for="c_age" >Age</label>
                        <input type="number" id="c_age" placeholder="age" required=""{...register('c_age', { required: true })}/>
                        {errors.c_age &&
                        <p id="outlined_error_help"><span >Age is required</span></p>
                        }
                </div>
                <div>
                      <label for="c_gender" >Gender</label>
                        <input type="text" id="c_gender" placeholder="gender" required=""{...register('c_gender', { required: true })}/>
                        {errors.c_gender &&
                        <p id="outlined_error_help"><span >Gender is required</span></p>
                        }
                </div>
                <div>
                      <label for="c_address" >Address</label>
                      <textarea id="c_address"  rows="2" placeholder="Full Adress here...." {...register('c_address', { required: true })} />
                </div>
                <div>
                      <label for="c_salary" >Salary</label>
                        <input type="number" id="c_salary" placeholder="salary" required=""{...register('c_salary', { required: true })}/>
                        {errors.c_salary &&
                        <p id="outlined_error_help"><span >Age is required</span></p>
                        }
                </div>
                <div>
                    <label for="c_email" >Email</label>
                        <input type="email" id="c_email" placeholder="name@company.com" required=""
                                            {...register('c_email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                                        />
                                          {errors.c_email && (
                        <p>
                            {errors.c_email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" ><span class="font-medium">Email is required</span></p>

                                                    :
                                                    <p id="outlined_error_help" ><span class="font-medium">Invalid email address</span></p>
                                                }
                        </p>
                    )}
                  </div>
                <div>
                      <label for="c_contact" >Contact</label>
                        <input type="text" id="c_contact" placeholder="contact" required=""{...register('c_contact', { required: true })}/>
                        {errors.c_contact &&
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