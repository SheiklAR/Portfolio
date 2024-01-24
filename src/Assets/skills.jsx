import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl';
const skillsData = [
    {
        id: 1 ,
        name: "UI Design",
        icon: (
            <FaCameraRetro className="text-5xl text-primary group-hover:text-white duration-300"/>
        ),
        link: "#",
        description: "orem ipsum dolor sit amet consettur,adipisicing elit."
    },
    {
        name: "Product Design",
        icon: (
          <GiNotebook className="text-5xl text-primary group-hover:text-white duration-300" />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
      {
        name: "Branding",
        icon: (
          <SlNote className="text-5xl text-primary group-hover:text-white duration-300" />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      },
]

export function Skills() {
  return (
      <>
      <span id="about"></span>
        <div className=" dark: bg-black dark:text-white py-14">
            <div className="container">
                <div className=" grid grid-cols-1
                  sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        skillsData.map((skill) => (
                            <div className='group space-y-3 bg-dark p-4 hover:bg-primary duration-300 text-white'>
                                <div>{skill.icon} </div>
                                <p className='text-2xl font-bold'>{skill.name}</p>
                                <p>{skill.name}</p>
                                <a href={skill.link} className='inline-block text-lg font-semibold py-3 group-hover:text-white duration-300 text-primary'>Learn More</a>
                                </div>
                        )
                        
                     )  
                    }
                </div>

                
            </div>

      </div>
      </>
    )
}