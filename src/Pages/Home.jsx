import React, { useContext, useEffect, useState } from 'react'
import {ThemeContext,FolderCard} from '../Common/FilePaths'
import {} from '../Common/Constants'
import {API_URLS} from '../API/URLs'

export default function Home() {
  const [folderList,setFolderList] = useState([]);
  const [fileList,setFileList] = useState([]);
  const {theme} = useContext(ThemeContext);

  return (
    <>
      {/* toolbar */}
      {/* folder section */}
      <div className="mt-5">
        <h3 className="light w-[110px] text-xl font-semibold px-3 py-2 m-5 rounded-2xl">Folders</h3>
        <div className='flex gap-4'>
        
        </div>
      </div>
      {/* file section */}
      <div className="mt-5">
        <h3 className="light w-[80px] text-xl font-semibold px-3 py-2 m-5 rounded-2xl">Files</h3>
        <div>
         
        </div>
      </div>
    </>
  )
}


async function GetFilesFolders(userId,parentId) {
  let rul = encodeURIComponent();
  await fetch(url,reqObj);
}

