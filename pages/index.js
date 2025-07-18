import Navbar from '@/components/Navbar'
import Scene from '@/components/Scene'

export default function Home() {
  return (
    <div className="min-h-screen bg-chemcrux-light dark:bg-chemcrux-dark">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <Scene />
        <h1 className="text-4xl font-bold text-chemcrux-primary">
          Welcome to ChemCrux
        </h1>
      </main>
    </div>
  )
}