import { useState } from 'react'

import logoMobile from './assets/online-mobile.svg'
import patternMobile from './assets/pattern-mobile.svg'
import arrowDown from './assets/icon-arrow-down.svg'
import logoDesktop from './assets/logo-desktop.svg'
import patternDesktop from './assets/bg-pattern-desktop.svg'
import boxLogo from './assets/illustration-box-desktop.svg'


import {data} from './data'


import './index.css'

function App() {

  const [showAnswer, setShowAnswer] = useState(data)

  console.log(showAnswer)

  function toggle(id) {
    setShowAnswer((prevState => {
      return prevState.map((item) => {
        return item.id === id ? {...item, show: !item.show} : item
      })
    }))
  }


  return (
    <main className='background  min-h-screen flex flex-col items-center justify-center  px-14 py-[6.5em]'>
      
      <section className='flex flex-col lg:flex-row lg:justify-end lg:p-14
       lg:w-[70%] xl:max-w-[60%] flex-1 relative bg-white w-[21em] mt-[4.1em]  pt-[7.5em] rounded-3xl  border items-center'>
        <div className='lg:basis-[50%]'><h1 className='text-[2.3rem] text-center lg:text-left mb-11 text-slate-900 font-bold self-center'>FAQ</h1>
        {showAnswer.map((item) => {
          return (
            <div key={item.id} className='flex flex-col  border-b mb-3 text-left'>
              <div onClick={() => toggle(item.id)} 
              className={`flex ${item.show && 'font-bold '} text-left  justify-between cursor-pointer mb-2`}>
                <p className='mr-6 text-gray-700 hover:text-red-600 text-[.85rem]'>{item.question}</p>
                <img className={`inline ${item.show && 'rotate-180'}  mt-1 w-3 h-2`} src={arrowDown} alt='arow down icon' />
              </div>
              {item.show && <div className='text-left'>
                <p className='text-[.8rem] max-w-[20em] text-zinc-500'>{item.answer}</p>
                </div>}
                
            </div>

          )
        })}</div>
         <img className='absolute lg:hidden -top-[22%] z-10  w-[15em]' src={logoMobile} />
       <img className='absolute lg:hidden top-[1%]  w-[15em]' src={patternMobile} />

       <img className='absolute hidden lg:flex -left-[16%] z-10  w-[25em]' src={logoDesktop} />
       <img className='absolute hidden lg:flex -left-[14%]  w-[25em]' src={patternDesktop} />
      </section>
     
    </main>
  )
}

export default App
