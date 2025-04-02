import React, { useContext } from 'react'
import './sv.css'
import { cv } from '../../utils/SlidersImg'
import { LanguageContext } from '../../utils/LanguageContext';

const Sertifikat = () => {
  const { l } = useContext(LanguageContext);
  return (
    <div className='serifika-primary'>
        <div className='sv-secion'>
            <div className='sv-body'>
            <h3>{l.cvTitle}</h3>
                <div className='sv'>
                  {cv.map((item)=>(
                    <img src={item.img} alt="" />
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sertifikat