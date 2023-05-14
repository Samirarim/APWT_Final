import { useRouter } from "next/router";

export default function TableData({data})   
{
  const router = useRouter(); 
  return(
      <>
<div class="flex items-center justify-center p-12">
<div class="mx-auto w-full max-w-[550px]">
  <form>
    <div class="-mx-3 flex flex-wrap">
      <div class="w-full px-3 sm:w-1/2">
        <div class="mb-5">
          <label
            for="t_position"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Position
          </label>
          <input
            type="text"
            name="t_position"
            id="m_value"
            value={data.t_position}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div class="w-full px-3 sm:w-1/2">
        <div class="mb-5">
          <label
            for="seatcapacity"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Seatcapacity
          </label>
          <input
            type="number"
            name="seatcapacity"
            id="seatcapacity"
            min="2"
            max="6"
            value={data.seatcapacity}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
    </div>
    <div class="-mx-3 flex flex-wrap">
      <div class="w-full px-3 sm:w-1/2">
        <div class="mb-5">
          <label
            for="t_status"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Status
          </label>
          <input
            type="text"
            name="t_status"
            id="m_value"
            value={data.t_status}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
      <div class="w-full px-3 sm:w-1/2">
        <div class="mb-5">
          <label
            for="w_id"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Waiter
          </label>
          <input
            type="number"
            name="w_id"
            id="w_id"
            value={data.w_id}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
      </div>
    </div>

   

    <div>
    <button align="center" class="flex mx-auto mt-16 text-white bg-[#BD442A] border-0 py-2 px-8 focus:outline-none hover:[#892A16] rounded text-lg" type="button" onClick={() => router.back()}>
        Back
    </button>
    </div>
  </form>
</div>
</div>
      </>
  )
}