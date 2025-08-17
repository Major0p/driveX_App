import React from 'react'
import { FolderCard } from '../Common/FilePaths'

export default function FoldersContainer({ folderList }) {

    if(!folderList && folderList.length)
        return null;

    return (
        <>
            <div className="m-5 mb-7">
                <h3 className="light w-[110px] text-xl font-semibold px-3 py-2 mb-5 rounded-2xl">Folders</h3>
                <div className='flex flex-wrap gap-4'>
                    {
                        folderList.map((el, i) => {
                            return <FolderCard key={i} folderInfo={el} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
