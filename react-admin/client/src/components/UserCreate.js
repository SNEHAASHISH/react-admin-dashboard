import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const UserCreate = (props) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='username' />
        <TextInput multiline source='address' />
        <TextInput source='phoneNumber' />
        <TextInput source='email' />
        <DateInput source='dob' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
