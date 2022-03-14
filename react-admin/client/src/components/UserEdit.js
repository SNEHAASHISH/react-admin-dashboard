import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const UserEdit = (props) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='name' />
        <TextInput source='username' />
        <TextInput multiline source='address' />
        <TextInput source='phoneNumber' />
        <TextInput source='email' />
        <DateInput source='dob' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
