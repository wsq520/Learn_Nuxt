// export default function() {
//   return useState('counter', () => 100)
// }

export const useCounter = () => {
  return useState('counter', () => 100)
}