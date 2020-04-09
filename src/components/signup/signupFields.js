import React from 'react'
import { TextArea } from 'grommet'

import FormField from './FormField'
import LocationSearch from '../../components/signup/LocationSearch'
import { businessOptions } from './presets'
import Select from './Select'

// Validation rules go in ./validationRules.js
export const signupFields = {
  owner_name: (
    <FormField name="owner_name" label="Your Name" placeholder="Full Name" />
  ),
  contact_number: (
    <FormField
      name="contact_number"
      label="Phone Number"
      placeholder="Your Phone Number"
    />
  ),
  name: (
    <FormField
      name="name"
      label="Business Name"
      placeholder="Your Business Name"
    />
  ),
  business_type: (
    <FormField
      component={<Select />}
      placeholder="Select business type"
      options={businessOptions}
      name="business_type"
    />
  ),
  business_type_other: (
    <FormField
      name="business_type_other"
      placeholder="Other type of Business"
    />
  ),
  location_search: (
    <FormField
      component={<LocationSearch />}
      name="location_search"
      label="Location"
      placeholder="Suburb"
    />
  ),
  headline: (
    <FormField
      name="headline"
      label="What is your business headline?"
      placeholder="Describe your business in 25 characters or less."
    />
  ),
  product_details: (
    <FormField
      component={<TextArea />}
      name="product_details"
      label="Product/Service Details"
      placeholder="Tell us a bit about your business"
    />
  ),
  business_details: (
    <FormField
      component={<TextArea />}
      name="business_details"
      label="Business Details / Your Story"
      placeholder="Tell us a bit about your background"
    />
  ),
  offering_type_other: (
    <FormField
      name="offering_type_other"
      placeholder="Other type of offering"
    />
  ),
  website: (
    <FormField name="website" label="Your website" placeholder="Website URL" />
  ),
  website_secondary: (
    <FormField
      name="website_secondary"
      label="Link to an ordering/online store"
      placeholder="Ordering/online store URL"
    />
  ),
  business_number: (
    <FormField
      name="business_number"
      label="Phone number to display on website"
      placeholder="Business phone number"
    />
  ),
  business_email: (
    <FormField
      name="contact_email"
      label="Business email to display on website"
      placeholder="Business email"
    />
  ),
  contact_email: (
    <FormField name="email" label="Email" placeholder="Your Email" />
  ),
  new_products: (
    <FormField
      component={<TextArea />}
      name="new_products"
      label="Any extra information on new services"
      placeholder="Any extra information"
    />
  ),
}
