import React, {useState} from 'react'

function Sapa(props){
  const [name, setName] = useState('halo Bandung!')
  setTimeout(() => {
    setName('Maryono!')
  }, 2000)
  
  return(
    <div>
      Halo! {name}

    </div>
  )
}

export default Sapa