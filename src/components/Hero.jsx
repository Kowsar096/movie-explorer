import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')] bg-cover bg-center" />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-[#050505]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#D6B36A]">
          Movie Explorer
        </p>

        <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Discover Movies
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
          Explore and discover your favorite movies from around the world.
        </p>

        <Link
          to="/movies"
          className="mt-8 inline-flex rounded-full bg-[#D6B36A] px-7 py-3 font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#E5C98A]"
        >
          Explore Now
        </Link>
      </div>
    </section>
  );
}

export default Hero;
