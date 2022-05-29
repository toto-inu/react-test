import './App.css'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const formInitialValues = {
  example: [],
  exampleRequired: '🦊hogehoge'
}

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: formInitialValues
  })
  const [formCounter, setFormCounter] = useState(0)
  const onSubmit = (data) => console.log('✈', data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {[...Array(formCounter)].map((_, index) => {
        return <input key={index} defaultValue={`🐢hogehoge-${index}`} {...register(`example[${index}].first`)} />
      })}
      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <div style={{ display: 'flex' }}>
        <button>出力</button>
        <button style={{ marginLeft: '12px' }} type="button" onClick={() => setFormCounter(formCounter + 1)}>
          フォーム追加
        </button>
      </div>
    </form>
  )
}

export default App
