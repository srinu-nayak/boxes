const Box = props => {
  const {className, text} = props

  return <p className={className}>{text}</p>
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='card'>
      <Box className='box1' text='Small' />
      <Box className='box2' text='Medium' />
      <Box className='box3' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
