export const transformHttps = (url) => {
  return (url && url.includes('http') && !url.includes('https')) ? url.replace(/^http:\/\//i, 'https://') : url 
}