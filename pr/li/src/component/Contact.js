import React from 'react'
import Spiner from './Spiner'
import { useForm } from 'react-hook-form'
import { useHttp } from '../script/hook/http.hook'

export default function Contact() {
  let { register, formState: { errors }, reset, handleSubmit } = useForm({ mode: "onBlur" })
  let { request, process, clearError } = useHttp()
  function onSubmit(data) {
    request("http://localhost:3000/contact", "POST", JSON.stringify(data))
    reset()
    setTimeout(() => {
      clearError()
    }, 5000)
  }
  let setContent = (process) => {
    switch (process) {
      case "loading":
        return <Spiner />
      case 'error':
        return <p style={{ color: '#ff3333', fontSize: 20 }}>Ինչ-որ սխալ է տեղի ունեցել</p>
      case 'idle':
        return <p style={{ color: '#198754', fontSize: 20 }}>Մենք շուտով կկապնվենք ձեզ հետ</p>
      default: return;
    }
  }
  return (
    <div className='container contact'>
      <div className='formblock'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='inp_block'>
            <div className='inp'>
               <input {...register("name", {
              required: "Դաշտը դատարկ չպետք է լինի",
              minLength: {
                value: 2,
                message: "Նվազագույնը 2 նիշ"
              }
            })} placeholder="Անուն" type="text" />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className='inp'>

              <input {...register("surName", {
                required: "Դաշտը դատարկ չպետք է լինի",
                minLength: {
                  value: 2,
                  message: "Նվազագույնը 2 նիշ"
                }
              })} placeholder="Ազգանուն" type="text" />
              {errors.surName && <p>{errors.surName.message}</p>}
            </div>
            <div className='inp'>

              <input {...register("email", {
                required: "Դաշտը դատարկ չպետք է լինի",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Չի համապատասխանում"
                }
              })} placeholder="Էլ. հասցե" type="text" />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className='inp'>

              <input {...register("tel", {
                required: "Դաշտը դատարկ չպետք է լինի",
                minLength: {
                  value: 9,
                  message: 'Ամենաքիչը 9 նիշ'
                },
                pattern:{
                    value: Number(/^\[0-9]+$/),
                    message: 'Միայն թվեր'
                },
              }

              )} placeholder="Հեռախոսահամար" type="text" />
              {errors.tel && <p>{errors.tel.message}</p>}</div>
          </div>
        

            <textarea {...register("mes", {
              required: "Դաշտը դատարկ չպետք է լինի",
              maxLength: {
                value: 600,
                message: "Բառերի բավարար քանակի սպառում"
              }
            })}></textarea>
            {errors.mes && <p>{errors.mes.message}</p>}
          
          {setContent(process)}
          <input value={"Ուղարկել"} type="submit" />
        </form>
      </div>


    </div>
  )
}
