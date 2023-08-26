import React from 'react'

const data = [
    {
        gameweek: 1,
        manager: '',
        image: '',
        points: 67
    },
    {
        gameweek: 2,
        manager: '',
        image: '',
        points: 80
    }
]

const Winner = () => {
  return (
    <div className='bg-5E8OD7 '>
        <h1>Jogo Bonito Gameweek Winners</h1>
        <div>
            {data.map(({gameweek,manager,image,points}, index) => {
                return(
                    <div className="mx-5 my-7"></div>
                )
            })}
        </div>
    </div>
  )
}

export default Winner