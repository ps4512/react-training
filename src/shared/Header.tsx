import React from 'react'

import styled from 'styled-components'

// import './Header.css' //  global CSS :(
import HeaderStyles from './Header.module.css' //  CSS Modules :)
// import UtilityStyles from './Utility.module.css'

// type HeaderProps = {
  // label: string
  // children: React.ReactNode
// }

// export const Header = ({ label, children }: HeaderProps) =>
//   <h1>{ label }</h1>

export const _Header: React.FC<HeaderProps> = ({ children }) =>
  <h1 className={HeaderStyles['underline']}>{ children }</h1>

/*
<div> children:
  some inner <span>content</span>
</div>
*/

type HeaderProps = {
  color: string
}

export const Header = styled.h1<HeaderProps>`
   text-decoration: underline;
   color: ${ props => props.color };
`
