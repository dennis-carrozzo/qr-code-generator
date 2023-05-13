import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import QrCodeGenerator from './'

test('renders the input', () => {
  render(<QrCodeGenerator />)
  const inputElement = screen.getByLabelText(/data/i)
  expect(inputElement).toBeInTheDocument()
})

test('renders the button', () => {
  render(<QrCodeGenerator />)
  const buttonElement = screen.getByText(/create qr/i)
  expect(buttonElement).toBeInTheDocument()
})

test('correctly update input value', () => {
  render(<QrCodeGenerator />)
  const inputElement = screen.getByLabelText(/data/i)
  fireEvent.change(inputElement, { target: { value: 'test' } })
  expect(inputElement.value).toBe('test')
})
test('renders an image if button clicked', async () => {
  render(<QrCodeGenerator />)
  const inputElement = screen.getByLabelText(/data/i)
  const buttonElement = screen.getByText(/create qr/i)
  fireEvent.change(inputElement, { target: { value: 'test' } })
  fireEvent.click(buttonElement)

  await waitFor(() => {
    expect(screen.getByAltText('qr-code')).toBeInTheDocument()
  })
})

test("doesn't render an image if button clicked and input empty", async () => {
  render(<QrCodeGenerator />)
  const buttonElement = screen.getByText(/create qr/i)
  fireEvent.click(buttonElement)

  await waitFor(() => {
    expect(screen.queryByAltText('qr-code')).toBeNull()
  })
})
