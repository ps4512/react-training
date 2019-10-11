import { useState } from 'react'

export const useToggle = (initial: boolean) => {
  const [value, setValue] = useState(initial)
  const toggleValue = () => setValue(!value)
  return [value, toggleValue] as [typeof value, typeof toggleValue]
}

// default:
// const useToggle: (initial: boolean) => (boolean | (() => void))[]
// after:
// const useToggle: (initial: boolean) => [boolean, () => void]
