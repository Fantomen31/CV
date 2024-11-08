'use client'

import { useState, useEffect, ReactNode } from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { MailIcon, ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => (
  <button 
    {...props} 
    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
  >
    {children}
  </button>
)

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen p-8">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <header className="flex items-center justify-center mb-12">
          <div className="mr-8">
            <Image
              src="/profile-photo.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Kit Walker Johansson</h1>
            <p className="text-xl  mb-4"> Location: Stockholm</p>
            <p className="text-xl text-gray-400">Full Stack Developer</p>
          </div>
        </header>

        <nav className="flex justify-center space-x-4 mb-12">
          <Button onClick={() => window.open('https://github.com/Fantomen31', '_blank')}>
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button onClick={() => window.open('https://www.linkedin.com/in/kitt-johansson-256769b8/', '_blank')}>
            <LinkedInLogoIcon className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button onClick={() => window.location.href = 'mailto:Neocoinkitt@gmail.com'}>
            <MailIcon className="mr-2 h-4 w-4" />
            Email
          </Button>
        </nav>

        <main className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300">
            I&apos;m a newly educated, versatile and ambitious Full Stack Developer with a unique background that combines the creativity of professional acting with the discipline of competitive sports. My journey in the cutthroat acting industry, where I thrive among the 2% who make a living from it, to the tech world demonstrates my adaptability and determination.
            My achievements include winning the Swedish Championship in rowing and placing 118th out of 62,000 participants in the Gothenburg Half Marathon, among others, showcasing my dedication and ability to excel in challenging environments. These experiences have honed my patience, curiosity, courage, and unwavering resolve - qualities that I now bring to the world of software development.
            Technically, I specialize in DRF, React.js, and Node.js, with a growing expertise in TypeScript, React Native, and Tailwind CSS. I hold a Full Stack Development diploma from Code Institute, and I&apos;m adept at leveraging cutting-edge AI tools to enhance productivity and innovation.
            My leadership skills, cultivated through sports and my self-driven acting career in Los Angeles, translate seamlessly into the tech world. I&apos;m not afraid to aim high, make mistakes, learn from them and eager to contribute to projects that push the boundaries of what&apos;s possible in software development and my growth.
            I&apos;m seeking a role that will challenge me to learn and grow as a coder, where I can apply my unique blend of creative problem-solving, technical skills, and relentless drive to create impactful solutions - or simply code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'HTML', 'CSS', 'React.js', 'ReactBootstrap', 'Node.js', 'Python', 'SQL', 'PostgreSQL',
               'Git', 'Django', 'Django Rest Framework', ].map((skill) => (
                <span key={skill} className="bg-green-700 text--200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Future Skills</h2>
            <p className="mt-2 text-gray-300">
              I&apos;m actively working on or/and planning to expand my skill set in these areas to stay at the forefront of technology.
            </p>
            <br></br>
            <div className="flex flex-wrap gap-2">
              {['React Native', 'Swift', 'TypeScript', 'Scala', ' Go', 'Tailwind CSS', 'SCSS', 'Next.js' ].map((skill) => (
                <span key={skill} className="bg-yellow-600 text-gray-200 px-3 py-1 rounded-full text-sm ">
                  {skill}
                </span>
              ))}
            </div>
            
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Full Stack Deploma - Code Institute</h3>
                <p className="text-gray-400">2024 May - 2024 December</p>
                <p className="text-gray-300">Newly educated FullStack Developer from Code Institutes Intensive course </p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Epona: The Runners Hub - Founder </h3>
                <p className="text-gray-400">2024 November - Present</p>
                <p className="text-gray-300">My first fullstack project, building a working Global Runners Hub.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Other work experience:</h3>
                <p className="text-gray-400">2013 - Present </p>
                <p className="text-gray-300">Please ask for previous work experience outside the Tech indsutry if interested.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-12 text-center">
          <p className="text-gray-400">© 2024 Kit Walker Johansson</p>
        </footer>
      </div>
      
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="h-6 w-6 text-gray-400" />
      </div>
    </div>
  )
}