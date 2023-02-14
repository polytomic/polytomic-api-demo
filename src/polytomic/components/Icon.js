import * as Icons from '../icons'

const Icon = ({ name, fallback = 'generic'}) => {
  return (
    Icons[name] || Icons[fallback]
  )
}

export default Icon