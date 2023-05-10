import MyLayout from "@/pages/components/layout"
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'

export default function AddOrder() {
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
        formData.append('o_name', data.o_name);
        formData.append('o_type', data.o_type);
        formData.append('o_price', data.o_price);
        formData.append('o_quantity', data.o_quantity);
        formData.append('o_status', data.m_availability);
        formData.append('w_id', data.w_id);
      
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/waiter/addorder",
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
      
      <MyLayout title = "Order"/>
              <h1>
                  Add Order
              </h1>
       <p id="filled_success_help"><span > {success}</span></p>
      
            <form onSubmit={handleSubmit(onSubmit)} encType="application/json" action="#">
              <div>
                      <label for="o_name" >Order</label>
                        <input type="text" id="o_name" placeholder="name" required=""{...register('o_name', { required: true })}/>
                        {errors.o_name &&
                        <p id="outlined_error_help"><span >Order is required</span></p>
                        }
                </div>
                <div>
                      <label for="o_type" >Type</label>
                        <input type="text" id="o_type" placeholder="type" required=""{...register('o_type', { required: true })}/>
                        {errors.o_type &&
                        <p id="outlined_error_help"><span >Type is required</span></p>
                        }
                </div>
                <div>
                      <label for="o_price" >Price</label>
                        <input type="number" id="o_price" placeholder="price" required=""{...register('o_price', { required: true })}/>
                        {errors.o_price &&
                        <p id="outlined_error_help"><span >Price is required</span></p>
                        }
                </div>
                <div>
                      <label for="o_quantity" >Quantity</label>
                        <input type="number" id="o_quantity" placeholder="quantity" required=""{...register('o_quantity', { required: true })}/>
                        {errors.o_quantity &&
                        <p id="outlined_error_help"><span >Quantity is required</span></p>
                        }
                </div>
                <div>
                      <label for="o_status" >Status</label>
                        <input type="text" id="o_status" placeholder="status" required=""{...register('o_status', { required: true })}/>
                        {errors.o_status &&
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