export type Locale = 'en' | 'el'

export type LocalizedString = {
  [locale in Locale]: string | undefined
}

export type LocalizedObject<T> = {
  [locale in Locale]: Array<T | undefined> | undefined
}
