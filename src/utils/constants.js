export const API_HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://carrythroughcovid.herokuapp.com/'
    : 'http://localhost:3000/'

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
