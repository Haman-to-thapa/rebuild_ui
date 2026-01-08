import AutonomousAI from "./sections/AutonomousAI"
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import WallOfLove from "./sections/WallOfLove"


function App() {

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WallOfLove />
      <AutonomousAI />
      <Footer />
    </main>
  )
}

export default App
