import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useClipboard } from './useClipboard'

beforeEach(() => vi.useFakeTimers())

describe('clipboard feedback', () => {
  it('reports success and resets', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })
    const { copy, status } = useClipboard()
    await copy('hello@example.com')
    expect(status.value).toBe('success')
    vi.advanceTimersByTime(2400)
    expect(status.value).toBe('idle')
  })

  it('reports a recoverable error when writing fails', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: vi.fn().mockRejectedValue(new Error('denied')) }, configurable: true,
    })
    const { copy, status } = useClipboard()
    await copy('hello@example.com')
    expect(status.value).toBe('error')
  })

  it('reports an error when the clipboard API is unavailable', async () => {
    Object.defineProperty(navigator, 'clipboard', { value: undefined, configurable: true })
    const { copy, status } = useClipboard()
    await copy('hello@example.com')
    expect(status.value).toBe('error')
  })
})
