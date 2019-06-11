const language = navigator.languages
  ? navigator.languages[0]
  : navigator.language || navigator.userLanguage

export const PL = language === 'pl' || language.toLowerCase() === 'pl-pl'

export const NEW_TODO_STRING = PL ? 'Nowe zadanie' : 'New todo'
export const SHOW_ALL_STRING = PL ? 'Pokaż wszystkie' : 'Show all'
export const SHOW_COMPLETED_STRING = PL ? 'Pokaż zakończone' : 'Show completed'
export const SHOW_NOT_COMPLETED_STRING = PL
  ? 'Pokaż niezakończone'
  : 'Show not completed'
