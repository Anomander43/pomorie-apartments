import { css } from 'styled-components'

export const media = {
  smartphones: (...args) => css`@media (max-width:320px) {${ css(...args) }}`,
  ereader: (...args) => css`@media (max-width:481px) {${ css(...args) }}`,
  ptablet: (...args) => css`@media (max-width:641px) {${ css(...args) }}`,
  tablet: (...args) => css`@media (max-width:961px) {${ css(...args) }}`,
  laptop: (...args) => css`@media (max-width:1025px) {${ css(...args) }}`,
  desktop: (...args) => css`@media (max-width:1281px) {${ css(...args) }}`,
}