import {css} from 'styled-components'

const sizes = {
    small: 400,
    med: 960,
    large: 1140
}

export const above = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc
  }, {})

  export const below = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
    return acc
  }, {})

