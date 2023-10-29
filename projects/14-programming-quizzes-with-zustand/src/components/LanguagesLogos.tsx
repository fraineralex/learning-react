import { quizzes } from '../types'

export const JavaScriptLogo = ({ width = 48, height = 48 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 630 630'
    width={width}
    height={height}
  >
    <rect width='630' height='630' fill='#f7df1e' />
    <path d='m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z' />
  </svg>
)

export const PythonLogo = ({ width = 48, height = 48 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    width={width}
    height={height}
  >
    <defs>
      <linearGradient
        id='A'
        x1='811.527'
        y1='574.895'
        x2='665.255'
        y2='573.732'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stop-color='#366a96' />
        <stop offset='1' stop-color='#3679b0' />
      </linearGradient>
      <linearGradient
        id='B'
        x1='862.824'
        y1='642.176'
        x2='573.276'
        y2='642.176'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stop-color='#ffc836' />
        <stop offset='1' stop-color='#ffe873' />
      </linearGradient>
    </defs>
    <g transform='matrix(.1617 0 0 .158089 -107.53764 -81.66187)'>
      <path
        d='M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z'
        fill='url(#A)'
      />
      <path
        d='M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z'
        fill='url(#B)'
      />
      <path
        d='M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z'
        fill='#fff'
      />
    </g>
  </svg>
)

interface Props {
  language: quizzes
  width?: number
  height?: number
}

export const LanguageLogo: React.FC<Props> = ({ language, width = 48, height = 48 }) => {
  if (language === 'js') {
    return <JavaScriptLogo width={width} height={height} />
  }

  if (language === 'py') {
    return <PythonLogo width={width} height={height} />
  }

  return <PythonLogo width={width} height={height} />
}
