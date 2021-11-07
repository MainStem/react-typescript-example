import { render, screen } from '@testing-library/react'
import PageCards from './'

test('renders page - cards', () => {
  render(<PageCards />)
  const textElement = screen.getByText(/Hello World - Cards!/i)
  expect(textElement).toBeInTheDocument()
})
