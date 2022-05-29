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
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: formInitialValues
  })
  const [formCounter, setFormCounter] = useState(0)
  const onSubmit = (data) => console.log('✈', data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {[...Array(formCounter)].map((_, index) => {
        return (
          <div>
            <input key={index} defaultValue={`🐢hogehoge-${index}`} {...register(`example[${index}].first`)} />
          </div>
        )
      })}

      <input {...register('exampleRequired', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <div style={{ display: 'flex' }}>
        <button>出力</button>
        <button style={{ marginLeft: '12px' }} type="button" onClick={() => setFormCounter(formCounter + 1)}>
          フォーム追加
        </button>
        <button
          style={{ marginLeft: '12px' }}
          type="button"
          onClick={() => setValue(`example[2].first`, '入力したよ🐬')}
        >
          値入力
        </button>
      </div>
    </form>
  )
}

export default App
