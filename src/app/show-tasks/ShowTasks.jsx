"use client";

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { showTask } from '@/services/taskService';

export default function showTasks() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const tasks = await showTask();
        toast.success("Task added successfully !!", { position: 'top-center' });
        console.log("tasks :: " + tasks);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
    loadData();
  }, [])

  return (
    <div className='mx-10 flex flex-wrap justify-around items-center sm:mx-20 md:mx-32'>
      {/* {projects.map((val) => ( */}
      <div className='p-8 my-5 bg-slate-800 mx-5 h-min shadow-2xl hover:shadow-lg rounded-md flex flex-col items-center'>
        <div className='py-3'>
          <img className='rounded-md w-52 h-32 sm:w-64 sm:h-52 md:w-80 md:h-64' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDTKV4IUyFOpFh5_we4BJxAbFl9GaHYL5SRLfovXmuG0DpGXUPglO6d7CQwCE0X4tDRA&usqp=CAU'
            // {val.img}
            alt="" />
        </div>
        <div className='text-white w-52 h-30 py-3 sm:w-64 sm:h-32 md:w-80 md:h-38'>
          <div className='flex flex-col sm:flex-row sm:justify-between'>
            <big className='text-xl font-bold font-Roboto md:text-2xl'>
              {/* {val.name} */}
              asdf</big>
            {/* <div className='flex justify-end  py-2 px-2 sm:py-0'>
                {val.githubLink &&
                  <a href={val.githubLink} target='_blank' rel="noreferrer"><img className='w-6 h-6 mx-1 rounded-full hover:border-4 border-sky-600 transition-all duration-100 md:w-8 md:h-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDTKV4IUyFOpFh5_we4BJxAbFl9GaHYL5SRLfovXmuG0DpGXUPglO6d7CQwCE0X4tDRA&usqp=CAU" alt="" /></a>
                }
                {val.siteLink &&
                  <a href={val.siteLink} target='_blank' rel="noreferrer"><img className='w-6 h-6 to-white rounded-lg hover:border-4 border-sky-600 transition-all duration-100 md:w-8 md:h-8 ' src={linkImg} alt="" /></a>
                }
              </div> */}
          </div>
          <p className='py-0.5 text-sm md:text-md md:py-2'>
            {/* {val.description} */}
            sadf</p>
        </div>
      </div>
      {/* ))} */}
    </div>
  )
}
