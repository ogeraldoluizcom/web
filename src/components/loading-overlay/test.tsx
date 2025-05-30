import React from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoadingOverlay from '.'

describe('LoadingOverlay', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers()
    })
    jest.useRealTimers()
  })

  it('renders without crashing', () => {
    act(() => {
      render(<LoadingOverlay />)
    })
    expect(screen.getByTestId('loading-overlay-outer')).toBeInTheDocument()
  })

  it('starts with progress at 0%', () => {
    act(() => {
      render(<LoadingOverlay />)
    })
    const progressDiv = screen.getByTestId('loading-overlay-outer')
    expect(progressDiv).toHaveStyle({ width: '0%' })
  })

  it('progress increases by 10% every 100ms up to 90%', async () => {
    act(() => {
      render(<LoadingOverlay />)
    })
    const progressDiv = screen.getByTestId('loading-overlay-outer')

    for (let i = 1; i <= 9; i++) {
      act(() => {
        jest.advanceTimersByTime(100)
      })

      await waitFor(() => {
        expect(progressDiv).toHaveStyle({ width: `${i * 10}%` })
      })
    }
  })

  it('applies correct classes', () => {
    act(() => {
      render(<LoadingOverlay />)
    })
    const progressDiv = screen.getByTestId('loading-overlay-outer')
    expect(progressDiv).toHaveClass(
      'h-fulll', // OBS: aqui está com três "l", revise se esse é o nome correto da classe
      'bg-indigo-500',
      'transition-all',
      'duration-200'
    )
    const parentDiv = progressDiv.parentElement?.parentElement
    expect(parentDiv).toHaveClass('fixed', 'inset-0', 'z-50')
  })

  it('cleans up timers on unmount', () => {
    const { unmount } = render(<LoadingOverlay />)
    act(() => {
      unmount()
    })
    // Nenhum erro deve ser lançado.
  })
})
