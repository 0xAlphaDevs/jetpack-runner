import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Coins, Trophy, Gamepad2, Zap, Shield } from "lucide-react"

export default function JetpackRunnerLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-magenta-500/10" />
        <div className="grid-background" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 border-b border-cyan-500/30">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold retro-text text-cyan-400">JETPACK RUNNER</span>
          </div>
          <Button className="retro-button">PLAY NOW</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 retro-text">
              <span className="block bg-gradient-to-r from-cyan-400 via-magenta-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                JETPACK
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-cyan-400 to-magenta-400 bg-clip-text text-transparent animate-pulse">
                RUNNER
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 retro-text">RETRO STYLE 2-D ONCHAIN RUNNER GAME</p>
            <div className="retro-glow-box p-6 mb-8">
              <p className="text-lg text-gray-300">
                Complete missions, climb the leaderboard, and explore City, Forest, and Mars
                <br />
                <span className="text-cyan-400">Built with Phaser.js • Built on Etherlink Testnet</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="retro-button-primary text-xl px-8 py-4">
              <Gamepad2 className="w-6 h-6 mr-2" />
              START PLAYING
            </Button>
            {/* <Button size="lg" className="retro-button-secondary text-xl px-8 py-4">
              <Trophy className="w-6 h-6 mr-2" />
              VIEW LEADERBOARD
            </Button> */}
          </div>

          {/* Game Preview Placeholder */}
          <div className="retro-screen mx-auto max-w-4xl">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black border-4 border-cyan-500 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <Rocket className="w-24 h-24 text-cyan-400 mx-auto mb-4 animate-bounce" />
                <p className="text-cyan-300 text-xl retro-text">GAME PREVIEW</p>
                <p className="text-gray-400">HTML5 • Phaser.js • Fully Onchain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 retro-text text-cyan-400">GAME FEATURES</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="retro-card">
              <CardContent className="p-8 text-center">
                <Gamepad2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-cyan-300 retro-text">GAMEPLAY</h3>
                <p className="text-gray-300 leading-relaxed">
                  Complete missions, climb the leaderboard, and explore City, Forest, and Mars environments. Built using
                  Phaser.js HTML5 game mechanics for smooth, responsive gameplay.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card">
              <CardContent className="p-8 text-center">
                <Coins className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-yellow-300 retro-text">TOKENOMICS</h3>
                <p className="text-gray-300 leading-relaxed">
                  Jetpack Runner Token (JRT) powers the economy. Earn tokens through gameplay, buy upgrades, and trade
                  fully onchain assets with other players.
                </p>
              </CardContent>
            </Card>

            <Card className="retro-card">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-magenta-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-magenta-300 retro-text">ONCHAIN ASSETS</h3>
                <p className="text-gray-300 leading-relaxed">
                  Own everything you earn! From coins collected to skins & jetpacks, all assets are stored securely and
                  transparently on the Etherlink Testnet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="retro-glow-box p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2 retro-text">100%</div>
                <div className="text-gray-300">ONCHAIN</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-magenta-400 mb-2 retro-text">3</div>
                <div className="text-gray-300">WORLDS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2 retro-text">∞</div>
                <div className="text-gray-300">MISSIONS</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2 retro-text">JRT</div>
                <div className="text-gray-300">TOKEN</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 retro-text text-cyan-400">READY TO FLY?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the onchain gaming revolution. Start your jetpack adventure today!
          </p>
          <Button size="lg" className="retro-button-primary text-2xl px-12 py-6">
            <Zap className="w-8 h-8 mr-3" />
            LAUNCH GAME
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/30 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold retro-text text-cyan-400">JETPACK RUNNER</span>
          </div>
          <p className="text-gray-400 mb-4">Built on Etherlink Testnet • Built with Phaser.js</p>
          <p className="text-sm text-gray-500">© 2025 Jetpack Runner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
