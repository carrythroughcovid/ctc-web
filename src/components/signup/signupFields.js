import React from 'react'
import {
  Grommet,
  Form as GrommetForm,
  Select,
  CheckBox,
  TextArea,
} from 'grommet'

import TextFormField from './TextFormField'
import { businessOptions } from './presets'

export const signupFields = {
  owner_name: (
    <TextFormField
      name="owner_name"
      label="Your Name"
      placeholder="Full Name"
    />
  ),
  email: <TextFormField name="email" label="Email" placeholder="Your Email" />,
  contact_number: (
    <TextFormField
      name="contact_number"
      label="Phone Number"
      placeholder="Your Phone Number"
    />
  ),
  name: (
    <TextFormField
      name="name"
      label="Business Name"
      placeholder="Your Business Name"
    />
  ),
  business_type: (
    <Select
      placeholder="Select business type"
      options={businessOptions}
      name="business_type"
    />
  ),
  business_type_other: (
    <TextFormField
      name="business_type_other"
      placeholder="Other type of Business"
    />
  ),
}
