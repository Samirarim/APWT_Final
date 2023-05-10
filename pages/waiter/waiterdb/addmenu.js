import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddMenu() {
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
        formData.append('m_name', data.m_name);
        formData.append('m_type', data.m_type);
        formData.append('m_price', data.m_price);
        formData.append('m_availability', data.m_availability);
        formData.append('w_id', data.w_id);
      
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/waiter/addmenu",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setSuccess('Menu added successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Menu add unsuccessfull ' + error.response.data.message);
        }
    };
    return (
      <>
      
      <MyLayout title = "Menu"/>
              <h1>
                  Add Menu
              </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
              <div>
                      <label for="m_name" >Menu</label>
                        <input type="text" id="m_name" placeholder="name" required=""{...register('m_name', { required: true })}/>
                        {errors.m_name &&
                        <p id="outlined_error_help"><span >Name is required</span></p>
                        }
                </div>
                <div>
                      <label for="m_type" >Type</label>
                        <input type="text" id="m_type" placeholder="type" required=""{...register('m_type', { required: true })}/>
                        {errors.m_type &&
                        <p id="outlined_error_help"><span >Type is required</span></p>
                        }
                </div>
                <div>
                      <label for="m_price" >Price</label>
                        <input type="number" id="m_price" placeholder="price" required=""{...register('m_price', { required: true })}/>
                        {errors.m_price &&
                        <p id="outlined_error_help"><span >Price is required</span></p>
                        }
                </div>
                <div>
                      <label for="m_availability" >Availability</label>
                        <input type="text" id="m_availability" placeholder="availability" required=""{...register('m_availability', { required: true })}/>
                        {errors.m_availability &&
                        <p id="outlined_error_help"><span >Availability is required</span></p>
                        }
                </div>
                <div>
                      <label for="w_id" >Waiter</label>
                        <input type="number" id="w_id" placeholder="waiter" required=""{...register('w_id', { required: true })}/>
                        {errors.w_id &&
                        <p id="outlined_error_help"><span >Waiter is required</span></p>
                        }
                </div>
                                
                          <button type="submit">Submit</button>
              </form>
      </>
    )
}