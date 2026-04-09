export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/80 py-10">
      <div className="container-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-semibold text-walnut">TimberShop</p>
          <p className="text-sm text-steel">A beginner woodworking content site built for practical progress.</p>
        </div>
        <p className="text-sm text-steel">Built with Next.js and ready for Vercel deployment.</p>
      </div>
    </footer>
  );
}
