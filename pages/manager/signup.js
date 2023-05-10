import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
export default function SignUp() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    // const validateFile = (value) => {
    //     const file = value[0];
    //     const allowedtypes = ["image/jpg", "image/png"];

    //     if (!allowedtypes.includes(file.type)){
    //         return false;
    //     }
    // }

    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {
        console.log(data); 
        const formData = new FormData();
        formData.append('m_name', data.m_name);
        formData.append('m_age', data.m_age);
        formData.append('m_gender', data.m_gender);
        formData.append('m_address', data.m_address);
        formData.append('m_salary', data.m_salary);
        formData.append('m_email', data.m_email);
        formData.append('m_contact', data.m_contact);
        formData.append('m_password', data.m_password);
        console.log(formData);  
    
        try {
            const response = await axios.post("http://localhost:3000/manager/signup",
            formData, {
             headers: {
                "Content-Type": "application/json"
                }
             });
    
            setSuccess('SignUp successfully');
            reset();
    
        } catch (error) {
            console.log(error);
    
            if (error.response) {
                console.log(error.response.data.message);
                setSuccess('SignUp unsuccessfull ' + error.response.data.message);
            } else {
                setSuccess('SignUp unsuccessfull. Please try again later.');
            }
        }
    };
    return (
      <>
      
      <MyLayout title = "Sign Up"/>
              <h1>
                  Sign Up
                                </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
              <div>
                      <label>Name</label>
                        <input type="text" id="m_name" placeholder="name" required=""{...register("m_name", { required: true })}/>
                        {errors.m_name &&
                        <p id="outlined_error_help"><span >Name is required</span></p>
                        }
                </div>
                <div>
                      <label>Age</label>
                        <input type="number" id="m_age" placeholder="age" required=""{...register("m_age", { required: true })}/>
                        {errors.m_age &&
                        <p id="outlined_error_help"><span >Age is required</span></p>
                        }
                </div>
                <div>
                      <label>Gender</label>
                        <input type="text" id="m_gender" placeholder="gender" required=""{...register("m_gender", { required: true })}/>
                        {errors.m_gender &&
                        <p id="outlined_error_help"><span >Gender is required</span></p>
                        }
                </div>
                <div>
                 
                    <label>Address</label>
                    <textarea id="m_address"  rows="2" placeholder="Full Adress here...." {...register("m_address", { required: true })} />
                </div>
                <div>
                      <label>Salary</label>
                        <input type="number" id="m_salary" required=""{...register("m_salary", { required: true })}/>
                        {errors.m_gender &&
                        <p id="outlined_error_help"><span >Salary is required</span></p>
                        }
                </div>
                <div>
                    <label>Your email</label>
                        <input type="email" id="m_email" placeholder="name@company.com" required=""
                                            {...register("m_email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                                        />
                                          {errors.m_email && (
                        <p>
                            {errors.m_email.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" ><span class="font-medium">Email is required</span></p>

                                                    :
                                                    <p id="outlined_error_help" ><span class="font-medium">Invalid email address</span></p>
                                                }
                        </p>
                    )}
                  </div>
                  <div>
                      <label>Contact</label>
                        <input
                        type="text"
                        id="m_contact" placeholder="Contact" required=""
                        {...register('m_contact', { required: true})}
                        />
                        {errors.m_contact && (
                        <p>
                            {errors.m_contact.type === 'required'
                                    ?
                                    <p id="outlined_error_help" ><span>conatct is required</span></p>
                                :
                                <p id="outlined_error_help" ><span>Invalid contact pattern</span></p>

                                }
                        </p>
                    )}
                  </div>
                  <div>
                      <label >Password</label>
                        <input
                        type="password"
                        id="m_password" placeholder="••••••••" required=""
                        {...register('m_password', { required: true })}
                        />
                                        {errors.m_password && (
                        <p>
                            {errors.m_password.type === 'required'
                                                    ?
                                                    <p id="outlined_error_help" ><span>password is required</span></p>
                                                :
                                                <p id="outlined_error_help" ><span>Invalid password pattern</span></p>

                                }
                        </p>
                    )}
                  </div>

                  
                {/* <div>
                   
                    <label for="file">Upload file</label>
                    <input type="file" id="file"
                    {...register('file', { required: true, validate: validateFile })}
                    />
                    {errors.myfile && 
                                        <p>
                                        {errors.myfile.type === 'required'
                                                                        ?
                    <p id="outlined_error_help" ><span>file is required</span></p>
                                                                        :
                                                                        
                    <p id="outlined_error_help" ><span>invalid file</span></p>
                            }
                                    </p>}      
                </div> */}
                          <button type="submit">Submit</button>
              </form>
      </>
    )
}