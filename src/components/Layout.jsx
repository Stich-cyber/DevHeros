import React from "react";

function Layout({ children }) {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-gray-50 text-gray-800"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {children}
      </div>
    </div>
  );
}

export default Layout;
