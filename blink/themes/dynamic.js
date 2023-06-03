// Define Light Theme Colors
var lightTheme_black = '#DCE0E8'
var lightTheme_red = '#D20F39'
var lightTheme_green = '#40A02B'
var lightTheme_yellow = '#df8e1d'
var lightTheme_blue = '#275DCF'
var lightTheme_magenta = '#8839EF'
var lightTheme_cyan = '#04A5E5'
var lightTheme_white = '#4C4F69'
var lightTheme_lightBlack = '#DCE0E8'
var lightTheme_lightRed = '#D20F39'
var lightTheme_lightGreen = '#40A02B'
var lightTheme_lightYellow = '#df8e1d'
var lightTheme_lightBlue = '#275DCF'
var lightTheme_lightMagenta = '#8839EF'
var lightTheme_lightCyan = '#04A5E5'
var lightTheme_lightWhite = '#4C4F69'

var lightTheme_foregroundColor = lightTheme_white
var lightTheme_backgroundColor = '#FFD7AF'

var lightTheme = [
  lightTheme_black,
  lightTheme_red,
  lightTheme_green,
  lightTheme_yellow,
  lightTheme_blue,
  lightTheme_magenta,
  lightTheme_cyan,
  lightTheme_white,
  lightTheme_lightBlack,
  lightTheme_lightRed,
  lightTheme_lightGreen,
  lightTheme_lightYellow,
  lightTheme_lightBlue,
  lightTheme_lightMagenta,
  lightTheme_lightCyan,
  lightTheme_lightWhite,
]

// Define Dark Theme Colors
var darkTheme_black = '#1E1E2E'
var darkTheme_red = '#F38BA8'
var darkTheme_green = '#A6E3A1'
var darkTheme_yellow = '#F9E2AF'
var darkTheme_blue = '#92B3F4'
var darkTheme_magenta = '#CBA6F7'
var darkTheme_cyan = '#74C7EC'
var darkTheme_white = '#CDD6F4'
var darkTheme_lightBlack = '#262626'
var darkTheme_lightRed = '#FAB387'
var darkTheme_lightGreen = '#A6E3A1'
var darkTheme_lightYellow = '#F9E2AF'
var darkTheme_lightBlue = '#92B3F4'
var darkTheme_lightMagenta = '#CBA6F7'
var darkTheme_lightCyan = '#74C7EC'
var darkTheme_lightWhite = '#CDD6F4'
var darkTheme_foregroundColor = darkTheme_white
var darkTheme_backgroundColor = '#1C1C1C'

var darkTheme = [
  darkTheme_black,
  darkTheme_red,
  darkTheme_green,
  darkTheme_yellow,
  darkTheme_blue,
  darkTheme_magenta,
  darkTheme_cyan,
  darkTheme_white,
  darkTheme_lightBlack,
  darkTheme_lightRed,
  darkTheme_lightGreen,
  darkTheme_lightYellow,
  darkTheme_lightBlue,
  darkTheme_lightMagenta,
  darkTheme_lightCyan,
  darkTheme_lightWhite,
]

// Select default themes
var defaultTheme = lightTheme
var defaultForeground = lightTheme_foregroundColor
var defaultBackground = lightTheme_backgroundColor
var defaultCursor = lightTheme_magenta

// Set preferred theme
function setPreferredTheme() {
  var preferredTheme = defaultTheme
  var preferredForeground = defaultForeground
  var preferredBackground = defaultBackground
  var preferredCursor = defaultCursor
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      preferredTheme = darkTheme
      preferredForeground = darkTheme_foregroundColor
      preferredBackground = darkTheme_backgroundColor
      preferredCursor = darkTheme_magenta
    } else {
      preferredTheme = lightTheme
      preferredForeground = lightTheme_foregroundColor
      preferredBackground = darkTheme_backgroundColor
      preferredCursor = lightTheme_magenta
    }
  }

  t.prefs_.set('color-palette-overrides', preferredTheme)
  t.prefs_.set('foreground-color', preferredForeground)
  t.prefs_.set('background-color', preferredBackground)
  t.prefs_.set('cursor-color', preferredCursor)
}

// Listen to the preferred color scheme
if (window.matchMedia) {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', setPreferredTheme)
}

// Initialize
setPreferredTheme()
