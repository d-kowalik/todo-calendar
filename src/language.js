export const PL =
  (navigator.languages
    ? navigator.languages[0]
    : navigator.language || navigator.userLanguage) === 'pl'

export const NEW_TODO_STRING = PL ? 'Nowe zadanie' : 'New todo'
export const SHOW_ALL_STRING = PL ? 'Pokaż wszystkie' : 'Show all'
export const SHOW_COMPLETED_STRING = PL ? 'Pokaż zakończone' : 'Show completed'
export const SHOW_NOT_COMPLETED_STRING = PL
  ? 'Pokaż niezakończone'
  : 'Show not completed'
