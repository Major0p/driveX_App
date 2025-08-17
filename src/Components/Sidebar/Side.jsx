import React, { useContext, useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { MdOutlineStarBorder, MdOutlinePeopleAlt, MdOutlineCloud } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { THEME_LIGHT } from '../../Common/Constants'
import { ThemeContext, NewBtn } from '../../Common/FilePaths'

export default function Side() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`h-full w-full ${(theme == THEME_LIGHT) ? 'light' : 'dark'} p-5 select-none`}>
            <NewBtn/>
            <Link to='/'>
                <div className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} mt-5 rounded-xl p-2 `}>
                    <span><IoMdHome size={20} className='inline' /></span>
                    <span className='font-semibold ml-4'>Home</span>
                </div>
            </Link>
            <div className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} mt-2 rounded-xl p-2`}>
                <span><MdOutlinePeopleAlt size={20} className='inline' /></span>
                <span className='font-semibold ml-4'>Shared with me</span>
            </div>
            <div className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} mt-2 rounded-xl p-2`}>
                <span><GoClock size={20} className='inline' /></span>
                <span className='font-semibold ml-4'>Recent</span>
            </div>
            <div className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} mt-2 rounded-xl p-2`}>
                <span><MdOutlineStarBorder size={20} className='inline' /></span>
                <span className='font-semibold ml-4'>Starred</span>
            </div>
            <div className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} mt-2 rounded-xl p-2`}>
                <span><IoTrashOutline size={20} className='inline' /></span>
                <span className='font-semibold ml-4'>Trash</span>
            </div>
            <div className={`${(theme == THEME_LIGHT) ? ' hover:bg-gray-200' : 'dark-dlg-item'} mt-2 rounded-xl p-2`}>
                <span><MdOutlineCloud size={20} className='inline' /></span>
                <span className='font-semibold ml-4'>Storage</span>
            </div>
            <div className='mt-2 rounded-xl p-2 cursor-default'>
                <div className='h-1 bg-gray-400 rounded-3xl relative'>
                    <span className='absolute top-0 left-0 h-1 bg-blue-500 inline-block w-[50%] rounded-3xl' />
                </div>
                <div className='mt-2'>{'85.25'} GB of 15 GB used</div>
            </div>
        </div>
    )
}
