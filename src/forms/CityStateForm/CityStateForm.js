import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import PinkButton from '../../components/PinkButton/PinkButton'

import StateSelect from '../../components/StateSelect/StateSelect'
import onSubmit from './onSubmit'
import './CityStateForm.css'

const validationSchema =
    Yup.object().shape({
      city: Yup.string().required('Required field'),
      state: Yup.string()
        .required('Required field')
    })

const initialValues = { city: '', state: '' }
const CityStateForm = ({ setWeather }) => {
  const [submitError, setSubmitError] = useState('')
  const handleFormSubmit = (values) => (onSubmit({ setWeather, setSubmitError, ...values }))
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >{props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props
        return (
          <form onSubmit={handleSubmit}>
            <div className='fields'>
              <input
                name='city'
                type='text'
                placeholder='City'
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city && touched.city && (<div className='error-text field-error'>{errors.city}</div>)}
            </div>
            <div className='fields'>
              <StateSelect
                name='state'
                className='stateSelect'
                onChange={handleChange}
                value={values.state}
              />
              {errors.state && touched.state && (<div className='error-text field-error'>{errors.state}</div>)}
            </div>
            {submitError && (<div className='error-text'>{submitError}</div>)}
            <div>
              <PinkButton type='submit' disabled={isSubmitting} text='Get Weather' />
            </div>
          </form>
        )
      }}
    </Formik>)
}

export default CityStateForm
