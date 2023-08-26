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
    <div className='bg-blue-600 '>
        <h1>Jogo Bonito </h1>
        <div>
            {data.map(({gameweek,manager,image,points}, index) => {
                return(
                    <div className="mx-5 my-7 grid ">
                        <div className="">{image}</div>
                        <p className="text-italic ">{manager}</p>
                        <p className="absolute right-1 ">{gameweek}({points})</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Winner