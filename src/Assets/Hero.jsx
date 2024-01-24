import PersonImg from './person.png'

export function Hero() {
    return (
        <> <div className='dark:bg-black dark:text-white'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2
                place-items-center">
                    {/* image section */}
                    <div>
                        <img src={PersonImg} alt="not found"/>
                    </div>  
                    {/* description section */}
                    <div className=' space-y-3'>
                        <p className=' text-primary'></p>
                    <h1 className='text- text-5xl font-semibold' >Visual engineer</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              veritatis explicabo quibusdam quae reprehenderit ab autem ducimus
              incidunt blanditiis similique.
                        </p>
                        <button className=' uppercase bg-primary text-white py-2 px-2 hover:bg-primary/80 duration-300'>Hire me</button>

                    </div>
                </div>
            </div>
          </div> 
        </>
    )
}