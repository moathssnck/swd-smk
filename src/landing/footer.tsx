import { Facebook, Instagram, Twitter } from "lucide-react";


export function SiteFooter() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} National Fish Company. All rights reserved.
          </p>
          <div className="space-x-4 mt-1">
            <a href="/terms" className="text-xs text-gray-500 hover:text-blue-600">
              Terms and Conditions
            </a>
            <a href="/privacy" className="text-xs text-gray-500 hover:text-blue-600">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-600">
<Instagram/>
          </a>
          {/* Assuming similar icons exist for other social media */}
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-600">
<Facebook/>
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-600">
           <Twitter/>
          </a>
        </div>
      </div>
    </footer>
  )
}
