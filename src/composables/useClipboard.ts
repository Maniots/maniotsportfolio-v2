import { readonly, ref } from 'vue'

type ClipboardStatus = 'idle' | 'success' | 'error'

export function useClipboard() {
  const status = ref<ClipboardStatus>('idle')
  let resetTimer: number | undefined

  const copy = async (value: string) => {
    if (resetTimer) window.clearTimeout(resetTimer)
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(value)
      status.value = 'success'
    } catch {
      status.value = 'error'
    }
    resetTimer = window.setTimeout(() => { status.value = 'idle' }, 2400)
  }

  return { copy, status: readonly(status) }
}
