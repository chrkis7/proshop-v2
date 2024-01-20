import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      variant='primary'
      style={{
        width: '100px',
        height: '100px',
        margin: '400px',
        display: 'middle'
      }}
    >
    </Spinner>
  )
}

export default Loader
