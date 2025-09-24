'use client'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-start w-fit border'>
        <button id='sidebarButton'>Sobre</button>
        <button id='sidebarButton'>Experiência</button>

        <button id='sidebarButton'>Projetos</button>
        <button id='sidebarButton'>Formação</button>

    </div>
  )
}

export default Sidebar