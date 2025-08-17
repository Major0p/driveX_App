import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext,AuthContext,FoldersContainer,FilesContainer } from '../Common/FilePaths'
import { } from '../Common/Constants'
import { GetFilesFoldersByParentId } from '../API/CommonRequests'

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { userId } = useContext(AuthContext);
  const [folderList, setFolderList] = useState([]);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await GetFilesFoldersByParentId(userId, "HOME");
      if (result) {
        let resultArr = Array.from(result);
        let files = [];
        let folders = [];
        resultArr.map(item => {
          if (item) {
            if (item.IsFile)
              files.push(item);
            else
              folders.push(item);
          }
        });
        setFileList([...files]);
        setFolderList([...folders]);
      }
    })();
  }, []);

  return (
    <>
      {/* toolbar */}
      {/* folder section */}
      <FoldersContainer folderList={folderList}/>
      {/* file section */}
      <FilesContainer fileList={fileList}/>
    </>
  )
}

