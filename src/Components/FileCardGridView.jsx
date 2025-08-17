import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function FileCardGridView({ fileInfo }) {
  return (
    <>
      <div className={`w-[200px] h-[50px] rounded-2xl light-folder-card flex items-center px-4`}>
        <span className='float-left'><FaRegFileAlt size={20} color='#056fda' /></span>
        <span className='inline-block w-[125px] px-2' title={fileInfo.Name}>{fileInfo.Name}</span>
        <span className='float-right'><BsThreeDotsVertical size={20} /></span>
      </div>
    </>
  )
}
