import Image from 'next/image'
import { useRouter } from 'next/router';

export default function MenuData({data})   
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
              for="m_name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Menu
            </label>
            <input
              type="text"
              name="m_name"
              id="m_value"
              value={data.m_name}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="m_type"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Type
            </label>
            <input
              type="text"
              name="m_type"
              id="m_type"
              value={data.m_type}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="mb-5">
        <label
          for="m_price"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Price
        </label>
        <input
          type="number"
          name="m_price"
          id="m_price"
          value={data.m_price}
          class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="m_availability"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Availability
            </label>
            <input
              type="text"
              name="m_availability"
              id="m_value"
              value={data.m_availability}
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
      <button align="center" class="flex mx-auto mt-5 text-white bg-[#BD442A] border-0 py-2 px-8 focus:outline-none hover:[#892A16] rounded text-lg" type="button" onClick={() => router.back()}>
          Back
      </button>
      </div>
    </form>
  </div>
</div>
        </>
    )
}