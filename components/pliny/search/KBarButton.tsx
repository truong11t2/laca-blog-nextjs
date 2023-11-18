'use client'

import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { KBarProvider, useKBar } from 'kbar'
import { KBarModal } from './KBarModal'

/**
 * Button wrapper component that triggers the KBar modal on click.
 *
 * @return {*}
 */
export const KBarButton = ({
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const { query } = useKBar()

  return (
    <button {...rest} onClick={() => query.toggle()}>
      {children}
    </button>
  )
}
