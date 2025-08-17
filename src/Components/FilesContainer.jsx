import React, { useState } from 'react'
import { FaList } from "react-icons/fa6";
import { MdGridView } from "react-icons/md";
import { FileCardListView, FileCardGridView } from '../Common/FilePaths'

export default function FilesContainer({ fileList }) {
    const [isListView, setisListView] = useState(false);

    if(!fileList || !fileList.length)
        return null;

    return (
        <>
            <div className="m-5">
                <div className='flex justify-between'>
                    <div className="light w-[80px] text-xl font-semibold px-3 py-2 rounded-2xl">Files</div>
                    <div className='hidden'>
                        {
                            (isListView) ?
                                <span title='Grid View' onClick={() => { setisListView(false) }}><MdGridView size={20} /></span>
                                :
                                <span title='List View' onClick={() => { setisListView(true) }}><FaList size={20} /></span>
                        }
                    </div>
                </div>
                <div className="mt-5 ml-2">
                    {
                        (isListView) ?
                            <div>
                                {
                                    fileList.map((obj, i) => {
                                        return <FileCardListView key={i} fileInfo={obj} />
                                    })
                                }
                            </div>
                            :
                            <div className='flex flex-wrap gap-4'>
                                {
                                    fileList.map((obj, i) => {
                                        return <FileCardGridView key={i} fileInfo={obj} />
                                    })
                                }
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
