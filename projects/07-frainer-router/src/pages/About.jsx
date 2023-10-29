import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Acerca de',
    description:
      'Hola! Soy Frainer Encarnación y estoy creando un clon de React Router.',
    button: 'Ir al inicio'
  },
  en: {
    title: 'About',
    description:
      'Hi! I am Frainer Encarnación and I am creating a clone of React Router.',
    button: 'Go to home'
  }
}

const useI18n = lang => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')

  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img
          src='https://unavatar.io/fraineralex'
          alt='Frainer Encarnación photo'
        />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
