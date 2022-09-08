import React from 'react';
import { AiFillGift, AiFillCloseSquare } from "react-icons/ai";

const ModalSave = () => {
    return ( 
       <>
        {/* <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
          Toggle modal
        </button>
       
        <div id="defaultModal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
               
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  
                    <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Terms of Service
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                  
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                    </div>
                </div>
            </div>
        </div> */}

        <div className='flex flex-col border-4 w-96 p-8 gap-4'>
            <div className='flex w-full justify-between items-center'>
                <p className='text-amber-400 text-2xl'>افزودن و ویرایش کالا</p>
                <p className='hover:cursor-pointer text-xl'><AiFillCloseSquare/></p>
            </div>
            <div className='flex flex-row items-center justify-between w-full gap-x-4'>
                <label htmlFor="">تصویر کالا</label>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <button className='border-2 p-2'>Browse</button>
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <label htmlFor="" className='w-full text-right'>نام کالا</label>
                <div className='w-full'>
                   <input type="text" className='border-2 w-full'/>
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <label htmlFor="" className='text-right w-full'>دسته بندی</label>
                <div className='w-full'>
                <select name="" id="" className='border-2 w-full'>
                    <option value="دکوری ساعت">دکوری ساعت </option>
                    <option value="دکوری لامپ">دکوری لامپ</option>
                    <option value="دکوری مبلی"> دکوری مبلی </option>
                    <option value="دکور صندلی"> دکور صندلی </option>
                </select>
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <label htmlFor="" className='text-right w-full '>توضیحات </label>
                <div className='w-full'>
                <textarea className='h-16 border-2 w-full'></textarea>
                </div>
            </div>
            <div className='flex flex-col items-center w-full'>
                <button className='bg-amber-400 w-1/2 p-1'>ذخیره</button>
            </div>
        </div>
       
       </>
        
        
     );
}
 
export default ModalSave;