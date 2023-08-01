import Image from 'next/image'
import NavBar from './components/Nav/NavBar/NavBar'
import About from './(pages)/about'
import Experience from './(pages)/experience'
import Divider from './components/Divider'
import Contact from './(pages)/contact'
import Projects from './(pages)/projects'
import Intro from './(pages)/intro'

export default function Home() {
  return (
    <NavBar>
      <main className='py-16 bg-custom-dark-gray md:px-20 lg:px-40 xl:px-60 px-11 text-gray-100 text-lg font-nunito font-light'>

        <Intro />
        <Divider />

        <About />
        <Divider />

        <Experience />
        <Divider />

        <Projects />
        <Divider />

        <Contact />
      </main>


    </NavBar>
  )
}
