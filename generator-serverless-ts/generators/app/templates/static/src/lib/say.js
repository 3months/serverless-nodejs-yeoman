export const waitThenSay = (say = 'Hello World', wait = 5) => new Promise((
  resolve,
  reject
) => {
  setTimeout(
    () => {
      resolve(say)
    },
    wait
  )
})

export const makeSaythings = ({ sayFunction = waitThenSay } = {}) =>
  async function saythings () {
    const msg1 = await sayFunction('one', 100)
    const msg2 = await sayFunction('two', 200)
    const msg3 = await sayFunction('three', 300)

    return `Computer says: ${msg1} ${msg2} ${msg3}`
  }

export const saythings = makeSaythings()
