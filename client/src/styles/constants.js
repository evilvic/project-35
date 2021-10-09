const sizes = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
}

export const devices = {
  mobile: `(min-width: ${ sizes.mobile })`,
  tablet: `(min-width: ${ sizes.tablet })`,
  laptop: `(min-width: ${ sizes.laptop })`,
  desktop: `(min-width: ${ sizes.desktop })`,
}

const baseTheme = {
  purple: '#8786b3',
  blue: '#0ABAB5',
  red: '#FF6584',
  rgb_p: '135, 134, 179'
}

export const darkTheme = {
  background: '#2F3437',
  text: '#FFFFFF',
  void: '255, 255, 255',
  ...baseTheme
}

export const lightTheme = {
  background: '#FFFFFF',
  text: '#2F3437',
  void: '47, 52, 55',
  ...baseTheme
}