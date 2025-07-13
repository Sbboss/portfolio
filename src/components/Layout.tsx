import Navigation from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Navigation />
    {children}
  </div>
);

export default Layout;