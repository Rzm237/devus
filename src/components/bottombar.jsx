import React from "react";

function Bottombar() {
  return (
    <div className="bg-[var(--greenhome-color)] 2xl:text-2xl xl:text-xl lg:text-lg border grid gap-y-8 py-8 sm:px-8">
      <div className="sm:grid-cols-2 grid gap-y-4">
        <div className="grid gap-y-4">
          <p className="font-bold">DevUs Lion</p>
          <p className="font-semibold opacity-50">
            We help you find your dream plant
          </p>
          <div className="flex gap-x-4">
            <div className="border h-8 w-8 rounded-full flex items-center justify-center">
              <a href="https://wa.me/237652924279">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div className="border h-8 w-8 rounded-full flex items-center justify-center">
              <a href="https://x.com/SamyBodio1">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <div className="border h-8 w-8 rounded-full flex items-center justify-center">
              <a href="https://www.linkedin.com/in/samy-bodio/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:grid lg:gap-y-2">
            <p className="font-bold">Information</p>
            <p className="opacity-50">About</p>
            <p className="opacity-50">Product</p>
            <p className="opacity-50">Blog</p>
          </div>
          <div className="lg:grid lg:gap-y-2">
            <p className="font-bold">Company</p>
            <p className="opacity-50">Community</p>
            <p className="opacity-50">Career</p>
            <p className="opacity-50">Our Story</p>
          </div>
          <div className="lg:grid lg:gap-y-2">
            <p className="font-bold">Contact</p>
            <p className="opacity-50">Getting Started</p>
            <p className="opacity-50">Pricing</p>
            <p className="opacity-50">Resources</p>
          </div>
        </div>
      </div>
      <p className="font-semibold opacity-50">
        2025 all Right Reserved Term of use DevUs Lion
      </p>
    </div>
  );
}

export default Bottombar;
