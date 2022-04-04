'export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const GAME_TITLE = 'Mae''s Birthday'!
export const WIN_MESSAGES = ['You really know Mae!', 'Awesome, you must know Mae!', 'Mae-hey-hey!!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough letters'
export const WORD_NOT_FOUND_MESSAGE = 'Word not found'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Mae Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Mae Guess Distribution'
export const NEW_WORD_TEXT = 'New Mae word in'
export const SHARE_TEXT = 'Share-Mae'
export const TOTAL_TRIES_TEXT = 'Total Mae tries'
export const SUCCESS_RATE_TEXT = 'Mae Success rate'
export const CURRENT_STREAK_TEXT = 'Current Mae streak'
export const BEST_STREAK_TEXT = 'Best Mae streak'
