import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings, Code, Blockquote } from './src/components/Complete'

// changes in all pages
const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
