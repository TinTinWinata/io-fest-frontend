import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';

type ContentLayout = {
  children: JSX.Element;
};

export default function MainLayout({ children }: ContentLayout) {
  return (
    <div
      className="text-secondary bg-blue-50 text-gray-700 dark:bg-gray-900 dark:text-gray-100
    transition-all
    "
    >
      <div className="center w-full relative min-h-screen overflow-hidden">
        <Navbar></Navbar>
        {/* Navigation Bar VVV */}
        <Sidebar />

        {/* ---------------------------------- */}

        {/* All Content will be inside this div (chidren) VVV */}

        <div className="content">{children}</div>

        {/* ----------------------------------- */}
      </div>
      <Footer />
    </div>
  );
}
