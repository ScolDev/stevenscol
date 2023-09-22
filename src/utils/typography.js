import Typography from 'typography'
import alton from 'typography-theme-alton'

alton.baseFontSize = '23px'
alton.scaleRatio = 2.2
alton.headerFontFamily = ['Exo', 'sans-serif']
alton.bodyFontFamily = ['Popins']

const typography = new Typography({
  ...alton,
  googleFonts: [
    { name: 'Exo', styles: ['700'] },
    { name: 'Popins', styles: ['400', '500', '700'] }
  ]
})

export default typography
