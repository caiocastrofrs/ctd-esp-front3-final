import md5 from 'md5'

export const generateAuthenticationString = () => {
  const ts = new Date().getTime()
  const hash = md5(
    `${ts}${process.env.PUBLIC_NEXT_PRIVATE_KEY}${process.env.PUBLIC_NEXT_PUBLIC_KEY}`
  )
  return `ts=${ts}&apikey=${process.env.PUBLIC_NEXT_PUBLIC_KEY}&hash=${hash}`
}
