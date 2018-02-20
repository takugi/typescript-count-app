import * as React from 'react'

type Props = {
  count: number
}

export default function Counter({ count }: Props) {
  return <span>Counter: { count }</span>
}
