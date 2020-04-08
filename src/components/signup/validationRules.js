import { EMAIL_REGEX } from '../../utils/constants'

export const validationRules = {
  owner_name: {
    required: { value: true, message: 'Name is required' },
    maxLength: {
      value: 100,
      message: 'Name is too long',
    },
  },
  business_email: {
    pattern: {
      value: EMAIL_REGEX,
      message: 'Please enter a valid email',
    },
    maxLength: { value: 200, message: 'Email is too long' },
  },
  contact_number: {
    required: {
      value: true,
      message: 'Contact number is required.',
    },
    maxLength: {
      value: 15,
      message: 'Contact Number is too long',
    },
  },
  name: {
    required: {
      value: true,
      message: 'Business name is required',
    },
    maxLength: {
      value: 200,
      message: 'Business name is too long',
    },
  },
  business_type: {
    required: {
      value: true,
      message: 'Please select a business type',
    },
  },
  business_type_other: {
    maxLength: {
      value: 200,
      message: 'Business type is too long',
    },
  },
  location_search: {},
  headline: {
    required: { value: true, message: 'Headline is required' },
    maxLength: { value: 200, message: 'Headline is too long' },
  },
  product_details: {
    required: {
      value: true,
      message: 'These details are required',
    },
    maxLength: {
      value: 700,
      message: 'Product details is too long',
    },
  },
  business_details: {
    required: {
      value: true,
      message: 'These details are required',
    },
    maxLength: {
      value: 700,
      message: 'Business details is too long',
    },
  },
  offering_type_other: {
    maxLength: {
      value: 200,
      message: 'Offering type is too long',
    },
  },
  website: {
    maxLength: { value: 500, message: 'Website is too long' },
  },
  website_secondary: {
    maxLength: {
      value: 500,
      message: 'Ordering URL is too long',
    },
  },
  business_number: {
    maxLength: { value: 15, message: 'Phone is too long' },
  },
  contact_email: {
    required: {
      value: true,
      message: 'Contact email is required.',
    },
    maxLength: {
      value: 50,
      message: 'Email is too long',
    },
  },
  new_products: {
    maxLength: {
      value: 300,
      message: 'Product description is limited to 300 characters.',
    },
  },
}
