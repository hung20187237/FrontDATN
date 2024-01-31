import { listClasses } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { CatologyData } from './CatologyData'
import "./Catology.css"

export default function Catology() {
  let navigate = useNavigate()
  const handleDetailClick = (kv, value) => {
    navigate(`/searchpage/${kv}/${value}`);
  };
  return (
    <div className='bodyCatology'>
        <span className='titleslider'>Danh Mục</span>
        <hr className="sidebarHr" />
        <div className='bodycardCatology'>
          {CatologyData.map((list) => {
            return(
                <div className='cardCatology' onClick={() => handleDetailClick('dm', list.value)}>
                    <img src={list.image} alt={list.title} />
                    <span>- {list.title} -</span>
                </div>
            );
        })}
        </div>
    
    </div>
  )
}
