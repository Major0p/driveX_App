import React, { useEffect, useRef, useState, useContext } from 'react'
import { THEME_LIGHT } from '../../Common/Constants'
import { ThemeContext } from '../../Common/FilePaths'

export default function CreateNewFolderDlg({ isOpen, ok, cancel }) {

  if (!isOpen)
    return null;

  const [inptVal, setInptVal] = useState('Untitled folder');
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isOpen]);

  return (
    <div className='h-screen w-screen fixed top-0 left-0 z-10 bg-black opacity-50 flex justify-center items-center'>
      <div className={`h-[200px] w-[400px] absolute rounded-3xl p-5 opacity-100 ${(theme == THEME_LIGHT) ? 'light-dlg' : 'dark-dlg'}`}>
        <h1 className='text-2xl font-bold'>New Folder</h1>
        <input ref={inputRef} type="text" value={inptVal} onChange={(e) => setInptVal(e.target.value)} className='w-full text-xl my-5 p-3 rounded-2xl border border-solid border-blue-900 hover:border-blue-500' placeholder='Folder Name' />
        <button type='button' onClick={() => ok(inptVal)} className='p-2 hover:text-blue-700 float-right'>Create</button>
        <button type='button' onClick={()=>cancel()} className='p-2 hover:text-blue-700 float-right mr-3'>Cancel</button>
      </div>
    </div>
  )
}
