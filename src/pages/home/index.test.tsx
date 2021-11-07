import { render, screen } from '@testing-library/react'
import PageHome from './'

test('renders page - home', () => {
  render(<PageHome />)
  const linkElement = screen.getByText(/Hello World - Home!/i)
  expect(linkElement).toBeInTheDocument()
})
