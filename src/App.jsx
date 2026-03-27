const highlights = [
  {
    title: 'Stargazing domes',
    text: 'Sleep under a glass canopy with heated floors, cedar walls, and an uninterrupted view of the night sky.',
  },
  {
    title: 'Forest thermal baths',
    text: 'A quiet circuit of mineral pools, steam rooms, and cold plunges tucked into a ring of pine trees.',
  },
  {
    title: 'Slow adventure trails',
    text: 'Sunrise ridge walks, picnic lookouts, and e-bike routes designed for a full day of wandering.',
  },
]

const schedule = [
  'Arrive for golden hour tea on the cliff deck',
  'Settle into your private dome suite',
  'Spend the evening in the moonlit baths',
  'Wake up to a chef-made breakfast basket',
]

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#fdf2d0_0%,#f6c27a_28%,#1d3557_70%,#0b1320_100%)] text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8 lg:px-10">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/80">
              Random Tailwind Demo
            </p>
            <h1 className="mt-2 font-serif text-2xl tracking-tight text-white sm:text-3xl">
              Ember Ridge Retreat
            </h1>
          </div>
          <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
            Book a stay
          </button>
        </header>

        <section className="grid flex-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-amber-200/30 bg-amber-100/10 px-4 py-1 text-sm text-amber-100 backdrop-blur">
              Weekend escapes, reimagined
            </p>
            <h2 className="max-w-3xl font-serif text-5xl leading-tight tracking-tight text-white sm:text-6xl">
              A warm, cinematic hideaway between the mountains and the stars.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/90">
              This page is intentionally random: a fictional boutique retreat
              with glowing colors, oversized typography, and a polished layout
              built with React and Tailwind CSS.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-200">
                Explore cabins
              </button>
              <button className="rounded-full border border-white/20 bg-slate-950/20 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-slate-950/35">
                View gallery
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200/85">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-amber-300/30 blur-3xl" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/40 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/20 via-white/5 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-100/70">
                      Sample itinerary
                    </p>
                    <h3 className="mt-2 font-serif text-3xl text-white">
                      48 hours at Ember Ridge
                    </h3>
                  </div>
                  <div className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-slate-950">
                    Open
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {schedule.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-900/30 p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-slate-950">
                        0{index + 1}
                      </div>
                      <p className="pt-1 text-sm leading-6 text-slate-100/90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-300">From</p>
                    <p className="mt-2 text-3xl font-semibold text-white">
                      $420
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      per night, breakfast included
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <p className="text-sm text-slate-300">Best for</p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      Couples and solo resets
                    </p>
                    <p className="mt-1 text-sm text-slate-300">
                      Quiet weekends with strong design energy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
