import { createApi } from 'unsplash-js'

let unsplashInstance: ReturnType<typeof createApi> | null = null

export function getUnsplash() {
  if (!unsplashInstance) {
    const key =
      (typeof window !== 'undefined' && (window as any).__UNSPLASH_KEY) ||
      process.env.NEXT_PUBLIC_API_ACCESS_KEY ||
      ''

    if (!key) {
      throw new Error('NEXT_PUBLIC_API_ACCESS_KEY is not defined')
    }

    unsplashInstance = createApi({ accessKey: key })
  }
  return unsplashInstance
}

export function getIconifyHost(): string {
  return (
    (typeof window !== 'undefined' && (window as any).__ICONIFY_URL) ||
    process.env.NEXT_PUBLIC_API_ICONIFY_URL ||
    'https://api.iconify.design'
  )
}
