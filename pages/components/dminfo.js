import { useRouter } from "next/router";
export default function DMInfo({data})   
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
              for="dm_name"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              type="text"
              name="dm_name"
              id="dm_name"
              value={data.dm_name}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="dm_age"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Age
            </label>
            <input
              type="number"
              name="dm_age"
              id="dm_age"
              value={data.dm_age}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
            <label
              for="dm_gender"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Gender
            </label>
            <input
              type="text"
              name="dm_gender"
              id="dm_gender"
              value={data.dm_gender}
              class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="dm_address"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Address
            </label>
            <input
              type="text"
              name="dm_address"
              id="dm_address"
              value={data.dm_address}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="dm_salary"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Salary
            </label>
            <input
              type="number"
              name="dm_salary"
              id="dm_salary"
              value={data.dm_salary}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="dm_contact"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Contact
            </label>
            <input
              type="text"
              name="dm_contact"
              id="dm_contact"
              value={data.dm_contact}
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div class="mb-5">
        <label
          for="dm_vehicleno"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Vehicle No
        </label>
        <input
          type="text"
          name="dm_vehicleno"
          id="dm_vehicleno"
          value={data.dm_vehicleno}
          class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="dm_email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="text"
              name="dm_email"
              id="dm_email"
              value={data.dm_email}
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