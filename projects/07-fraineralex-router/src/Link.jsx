import { EVENTS, BUTTON } from './consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // create a new custom event
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = event => {
    const isMainEvent = event.button === BUTTON.primary // primary click
    const isModifiedEvent =
      event.metaKey || event.ctrlKey || event.altKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // navigation with SPA
    }
    navigate(to)
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
