import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { SectionContact } from './index'

describe('SectionContact', () => {
  it('should render all form fields', () => {
    render(<SectionContact />)

    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Assunto/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument()
  })

  it('should show validation errors if fields are empty', async () => {
    render(<SectionContact />)
    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))

    await waitFor(() => {
      expect(screen.getAllByText(/obrigatório/i).length).toBeGreaterThan(0)
    })
  })

  it('should submit the form with valid data', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

    render(<SectionContact />)

    fireEvent.change(screen.getByPlaceholderText(/Seu Nome/i), {
      target: { value: 'John Doe' }
    })
    fireEvent.change(screen.getByPlaceholderText(/Assunto/i), {
      target: { value: 'Teste' }
    })
    fireEvent.change(screen.getByPlaceholderText(/Seu e-mail/i), {
      target: { value: 'john@example.com' }
    })
    fireEvent.change(
      screen.getByPlaceholderText(/Escreva sua mensagem aqui/i),
      {
        target: { value: 'Olá, tudo bem?' }
      }
    )

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))
    fireEvent.click(screen.getByRole('button', { name: /limpar/i }))

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith({
        name: 'John Doe',
        subject: 'Teste',
        email: 'john@example.com',
        body: 'Olá, tudo bem?'
      })
    })

    consoleSpy.mockRestore()
  })
})
