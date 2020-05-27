import formatDistance from 'date-fns/formatDistance'

const a = [ 1, 3, 5, 7 ]

const b = [
  ...a,
  9,
  11
]

const c = x => x * 2

const d1 = new Date('2012-05-05')
const d2 = new Date()

console.log(formatDistance(d1, d2))

console.log(c(8))

console.log(b)
