import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props {
  loading?: boolean
  value: string
  type: SectionType
  onChange: (value: string) => void
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = (type: SectionType, loading?: boolean) => {
  if (loading === true) {
    return 'Translating...'
  }

  return type === SectionType.From
    ? 'Enter text'
    : 'Translation'
}

export const TextArea = ({ loading, value, type, onChange }: Props) => {
  const styles = type === SectionType.From
    ? {...commonStyles, border: '1px solid #ddd'}
    : { ...commonStyles, backgroundColor: '#f5f5f5'}

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      disable={type === SectionType.To}
      as='textarea'
      placeholder={getPlaceholder(type, loading)}
      style={styles}
      rows={5}
      value={value}
      onChange={handleChange}
    />
  )
}
