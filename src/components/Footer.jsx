function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Application Info */}
        <div>
          <h2 className="text-lg font-semibold">MovieExplorer</h2>

          <p className="mt-2 text-sm text-gray-500">© 2026 MovieExplorer</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
