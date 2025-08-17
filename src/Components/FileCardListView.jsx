import React from 'react'
import { FaRegFileAlt  } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function FileCardListView({fileName,modifiedDate,userId,parentFolder}) {
  return (
    <>
        <div className="px-3 py-2 border-b-1 border-gray-500 hover:bg-blue-100">
            <div className="flex flex-nowrap gap-2.5">
                <span className=''><FaRegFileAlt  size={20} color=''/></span>
                <div title={fileName} className='overflow-hidden'>{fileName}</div>
                <div title={modifiedDate} className='overflow-hidden'>{modifiedDate}</div>
                <div title={userId} className='overflow-hidden'>{userId}</div>
                <div title={parentFolder} className='overflow-hidden'>{parentFolder}</div>
                <span className='float-right'><BsThreeDotsVertical size={20}/></span>
            </div>
        </div>
    </>
  )
}
