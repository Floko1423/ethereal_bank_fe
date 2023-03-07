/* eslint-disable react/prop-types */
import * as S from './input.styles.js'
import { useState } from 'react'
// rfc- react functional component
// eslint-disable-next-line react/prop-types
export default function Input({ label, type, validation, errorLabel = '' }) {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('')
  const [error, setError] = useState(errorLabel)

  const handleChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    validation(newValue, label)
    setError(validation(newValue, label))
  }

  return (
    <S.Container>
      <S.ContainerInput>
        <label>{label}</label>
        <span>:</span>
        <S.Input type={type} onChange={handleChange} />
      </S.ContainerInput>
      {error !== '' && (
        <S.ContainerError>
          <S.Error>{error}</S.Error>
        </S.ContainerError>
      )}
    </S.Container>
  )
}
