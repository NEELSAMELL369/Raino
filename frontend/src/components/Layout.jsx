// Layout.jsx
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

const Layout = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Toast container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
export { Layout };
