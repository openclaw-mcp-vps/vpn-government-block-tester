export default function Home() {
  const faqs = [
    {
      q: 'How does the VPN block tester work?',
      a: 'Our system runs automated probes against your VPN connection using known government blocking signatures — DPI fingerprinting, IP blacklists, DNS poisoning, and port blocking — then scores your connection and recommends alternatives in real time.'
    },
    {
      q: 'Which countries and blocking methods are covered?',
      a: 'We continuously monitor blocking techniques used in 40+ countries including China (GFW), Russia, Iran, UAE, and more. Our database updates every 15 minutes with fresh server and protocol data.'
    },
    {
      q: 'What do I get with the $15/mo plan?',
      a: 'Unlimited real-time tests, access to our live server recommendation feed, protocol bypass guides (obfs4, Shadowsocks, V2Ray), email alerts when your current VPN gets blocked, and priority support.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Real-Time Censorship Testing
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Test VPN Effectiveness Against{' '}
          <span className="text-[#58a6ff]">Government Censorship</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly detect if your VPN is blocked by DPI, IP blacklists, or DNS poisoning. Get live server recommendations that actually work — updated every 15 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Testing — $15/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[['40+', 'Countries Monitored'], ['15 min', 'Update Interval'], ['99.9%', 'Uptime SLA']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: '01', title: 'Connect Your VPN', desc: 'Enter your VPN server details or paste a config. We support all major protocols.' },
            { step: '02', title: 'Run Automated Tests', desc: 'Our probes simulate government blocking: DPI, IP bans, DNS hijacking, and port filtering.' },
            { step: '03', title: 'Get Recommendations', desc: 'Receive a live feed of working servers and bypass protocols ranked by reliability.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-[#58a6ff] font-mono text-sm mb-2">{step}</div>
              <div className="font-semibold text-white mb-2">{title}</div>
              <div className="text-sm text-[#8b949e]">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited real-time VPN tests',
              'Live working server feed (40+ countries)',
              'Protocol bypass guides (obfs4, Shadowsocks, V2Ray)',
              'Instant block alerts via email',
              'Priority support'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. 7-day money-back guarantee.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] py-8 border-t border-[#21262d]">
        © {new Date().getFullYear()} VPN Block Tester. For journalists, activists, and privacy-conscious users worldwide.
      </footer>
    </main>
  )
}
