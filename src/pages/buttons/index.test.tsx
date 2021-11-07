import { render, screen } from '@testing-library/react'
import PageButtons from './'

test('renders page - buttons', () => {
  render(<PageButtons />)
  const linkElement = screen.getByText(/Hello World - Buttons!/i)
  expect(linkElement).toBeInTheDocument()
})
