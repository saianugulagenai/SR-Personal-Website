import { Hero } from '@/components/Hero'
import { Industries } from '@/components/Industries'
import { About } from '@/components/About'
import { Expertise } from '@/components/Expertise'
import { Frameworks } from '@/components/Frameworks'
import { Impact } from '@/components/Impact'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Industries />
      <About />
      <Expertise />
      <Frameworks />
      <Impact />
      <Contact />
    </>
  )
}
