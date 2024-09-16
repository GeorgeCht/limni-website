export type Locale = 'en' | 'el'

export type LocalizedString = {
  [locale in Locale]: string | undefined
}
