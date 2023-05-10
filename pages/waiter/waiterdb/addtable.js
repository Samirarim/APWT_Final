import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddTable() {
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
        formData.append('t_position', data.o_name);
        formData.append('seatcapacity', data.o_quantity);
        formData.append('t_status', data.m_availability);
        formData.append('w_id', data.w_id);
      
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/waiter/addtable",
                formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setSuccess('Order placed successfully');
            reset();

        }
        catch (error) {
            console.log(error.response.data.message);
            
            setSuccess('Order placed unsuccessfull (Each waiter can place an order)' + error.response.data.message);
        }
    };
    return (
      <>
      
      <MyLayout title = "Table"/>
              <h1>
                  Add Table
              </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
              <div>
                      <label for="t_position" >Position</label>
                        <input type="text" id="t_position" placeholder="position" required=""{...register('t_position', { required: true })}/>
                        {errors.t_position &&
                        <p id="outlined_error_help"><span >Position is required</span></p>
                        }
                </div>
                <div>
                      <label for="seatcapacity" >Seat Capacity</label>
                        <input type="number" id="seatcapacity" placeholder="capacity" required=""{...register('seatcapacity', { required: true })}/>
                        {errors.seatcapacity &&
                        <p id="outlined_error_help"><span >Seat Capacity is required</span></p>
                        }
                </div>
                <div>
                      <label for="t_status" >Status</label>
                        <input type="text" id="t_sataus" placeholder="status" required=""{...register('t_sataus', { required: true })}/>
                        {errors.t_sataus &&
                        <p id="outlined_error_help"><span >Status is required</span></p>
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