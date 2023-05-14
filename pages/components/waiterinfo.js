import { useRouter } from "next/router";

export default function WaiterInfo({data})   
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
              for="w_name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              type="text"
              name="w_name"
              id="w_name"
              value={data.w_name}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="w_age"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Age
            </label>
            <input
              type="number"
              name="w_age"
              id="w_age"
              value={data.w_age}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
            <label
              for="w_gender"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Gender
            </label>
            <input
              type="text"
              name="w_gender"
              id="w_gender"
              value={data.w_gender}
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="w_address"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Address
            </label>
            <input
              type="text"
              name="w_address"
              id="w_address"
              value={data.w_address}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="w_salary"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Salary
            </label>
            <input
              type="number"
              name="w_salary"
              id="w_salary"
              value={data.w_salary}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="w_contact"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Contact
            </label>
            <input
              type="text"
              name="w_contact"
              id="w_contact"
              value={data.w_contact}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="w_email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="text"
              name="w_email"
              id="w_email"
              value={data.w_email}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="m_id"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Manager
            </label>
            <input
              type="text"
              name="m_id"
              id="m_id"
              value={data.m_id}
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