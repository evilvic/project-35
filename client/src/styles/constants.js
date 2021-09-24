const sizes = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
}

export const devices = {
  mobile: `(min-width: ${sizes.mobile})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
}

export const dark = {
  background: '#2f3437',
  text: '#fff',
}

export const light = {
  background: '#fff',
  text: '#2f3437',
}