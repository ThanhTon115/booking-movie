import React from 'react'
import { Tilt } from 'react-tilt'
import { Variants, motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../HOC'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

export type CartProps = {
  variants?: Variants | undefined
  slots?: any
  useMotion?: Boolean
  mouseTransition?: Boolean
  tiltOptions?: {
    max: number
    scale: number
    speed: number
  }
  className?: string
  childrent?: React.ReactElement
}
export const defaultVariants: Variants = fadeIn('up', 'spring', 0, 0)
export const defaultTiltOptions = {
  max: 45,
  scale: 1,
  speed: 450
}
export const cartPropsDefault: CartProps = {
  variants: defaultVariants,
  useMotion: true,
  mouseTransition: true,
  tiltOptions: defaultTiltOptions,
  className: '',
  slots: null
}

const XCard = (props: CartProps) => {
  const { useMotion, variants, className, mouseTransition, tiltOptions, ...otherProps } = props
  return (
    <motion.div
      variants={!useMotion ? defaultVariants : !variants ? variants : defaultVariants}
      className={className || ''}
    >
      {mouseTransition ? (
        <Tilt options={!tiltOptions ? tiltOptions : defaultTiltOptions} className='x-card'>
          {props.childrent}
        </Tilt>
      ) : (
        <div className='x-card'>{props.childrent}</div>
      )}
    </motion.div>
  )
}

export default XCard
