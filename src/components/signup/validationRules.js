export const validationRules = {
  owner_name: {
    required: { value: true, message: 'Name is required' },
    maxLength: {
      value: 100,
      message: 'Name is too long',
    },
  },
}
