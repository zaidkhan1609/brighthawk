export default function Footer() {
  return (
    <footer className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:flex justify-between">
        
        <div>
          <h3 className="text-2xl font-bold text-blue-700">BrightHawk</h3>
          <p className="text-slate-500 mt-3">© 2023 BrightHawk. All rights reserved.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 md:mt-0">
          
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Services</h4>
            <ul className="space-y-2 text-slate-600">
              <li>DevOps</li>
              <li>Big Data</li>
              <li>Software Dev</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Industries</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Healthcare</li>
              <li>Finance</li>
              <li>E-Commerce</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Support</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Contact</li>
              <li>Disclaimer</li>
              <li>Newsletter</li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}
