import React from 'react'
import {
  Grommet,
  Form as GrommetForm,
  Select,
  CheckBox,
  TextArea,
} from 'grommet'

import TextFormField from './TextFormField'
import LocationSearch from '../../components/signup/LocationSearch'
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
  location_search: <LocationSearch />,
  headline: (
    <TextFormField
      name="headline"
      label="What is your business headline?"
      placeholder="Describe your business in 25 characters or less."
    />
  ),
  product_details: (
    <TextFormField
      component={<TextArea />}
      name="product_details"
      label="Product/Service Details"
      placeholder="Tell us a bit about your business"
    />
  ),
  business_details: (
    <TextFormField
      component={<TextArea />}
      name="business_details"
      label="Business Details / Your Story"
      placeholder="Tell us a bit about your background"
    />
  ),
  offering_type_other: (
    <TextFormField
      name="offering_type_other"
      placeholder="Other type of offering"
    />
  ),
  website: (
    <TextFormField
      name="website"
      label="Your website"
      placeholder="Website URL"
    />
  ),
  website_secondary: (
    <TextFormField
      name="website_secondary"
      label="Link to an ordering/online store"
      placeholder="Ordering/online store URL"
    />
  ),
  business_number: (
    <TextFormField
      name="business_number"
      label="Phone number to display on website"
      placeholder="Business phone number"
    />
  ),
}
