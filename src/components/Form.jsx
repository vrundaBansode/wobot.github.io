import React from 'react'
import logo from "../assets/logo2.png"

const Form = () => {
  return (
    <div className='py-4 px-8 bg-white opacity-100 border-[1px] border-gray-400 rounded-[6px]'>
        <div className='text-center'>
            <img src={logo} alt="Logo of Wobot.ai" className='m-auto w-[60px]'/>
            <h2 className='text-2xl max-w-[250px] mx-auto my-3 font-bold'>It's a delight to have you onboard</h2>
            <p className='my-3 text-sm font-semibold'>Help us know you better.</p>
            <p className='mt-7 mb-2 text-sm font-medium max-w-[250px] mx-auto'>(This is how we optimize Wobot as per your business needs)</p>
        </div>

        <div className='py-4 block px-3 text-base font-bold'>
            <form>
                <label className='mb-3'>Your Name</label><br/>
                <input type="text" placeholder="e.g. John Smith" className='input-style font-light w-[97%] mb-8' /><br/>

                <label className='mb-3'>Company Name</label><br/>
                <input type="text" placeholder="e.g. Aplha Inc." className='input-style font-light  w-[97%] mb-8' /><br/>

                <label className='mb-4' for="industry">Industry</label><br/>
                    <select className='input-style w-[97%] mb-8 font-light cursor-pointer' name="industries">
                        <option value="" disabled selected hidden >Select</option>
                        <option value="select" >Select</option>
                    </select>

                <p className='mb-2'>Number of locations</p>
                <div className='flex justify-between'>
                    <span className='span-style'>1-20</span>
                    <span className='span-style'>21-50</span>
                    <span className='span-style'>51-200</span>
                    <span className='span-style'>201-500</span>
                    <span className='span-style'>500+</span>
                </div>

            </form>

            <button type='button' className='w-[100%] py-2 mt-5 rounded-lg bg-blue-700 text-white cursor-pointer font-light'>Get Started</button>

        </div>
    </div>
  )
}

export default Form