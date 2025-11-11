// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ImageIcon, User, Info, Grid3X3, LogIn, LogOut } from 'lucide-react';
// import PyramidLogo from './PyramidLogo';


// interface NavbarProps {
//   user: any;
//   onLogin: () => void;
//   onLogout: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ user, onLogin, onLogout }) => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo and Brand */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div className="scale-50">
//               <PyramidLogo />
//             </div>
//             <div className="text-2xl font-racing bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
//               AuraPrism
//             </div>
//           </Link>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link
//               to="/generate"
//               className="flex items-center space-x-2 text-foreground/80 hover:text-accent hover:scale-105 transition-all duration-200"
//             >
//               <ImageIcon className="w-4 h-4" />
//               <span>Generate</span>
//             </Link>
            
//             <Link
//               to="/gallery"
//               className="flex items-center space-x-2 text-foreground/80 hover:text-accent hover:scale-105 transition-all duration-200"
//             >
//               <Grid3X3 className="w-4 h-4" />
//               <span>Gallery</span>
//             </Link>
            
//             <Link
//               to="/about"
//               className="flex items-center space-x-2 text-foreground/80 hover:text-accent hover:scale-105 transition-all duration-200"
//             >
//               <Info className="w-4 h-4" />
//               <span>About</span>
//             </Link>

//             {user && (
//               <Link
//                 to="/profile"
//                 className="flex items-center space-x-2 text-foreground/80 hover:text-accent hover:scale-105 transition-all duration-200"
//               >
//                 <User className="w-4 h-4" />
//                 <span>Profile</span>
//               </Link>
//             )}
//           </div>

//           {/* Auth Button */}
//           <div className="flex items-center">
//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <div className="hidden sm:flex items-center space-x-2 text-sm">
//                   <img
//                     src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
//                     alt="Avatar"
//                     className="w-6 h-6 rounded-full"
//                   />
//                   <span className="text-foreground/80">
//                     {user.displayName || user.email?.split('@')[0]}
//                   </span>
//                 </div>
//                 <button
//                   onClick={onLogout}
//                   className="flex items-center space-x-2 px-4 py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   <span>Logout</span>
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={onLogin}
//                 className="flex items-center space-x-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
//               >
//                 <LogIn className="w-4 h-4" />
//                 <span>Login</span>
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden pb-4">
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               to="/generate"
//               className="flex items-center space-x-2 px-3 py-2 text-sm text-foreground/80 hover:text-accent rounded-lg hover:bg-white/5 transition-all"
//             >
//               <ImageIcon className="w-4 h-4" />
//               <span>Generate</span>
//             </Link>
            
//             <Link
//               to="/gallery"
//               className="flex items-center space-x-2 px-3 py-2 text-sm text-foreground/80 hover:text-accent rounded-lg hover:bg-white/5 transition-all"
//             >
//               <Grid3X3 className="w-4 h-4" />
//               <span>Gallery</span>
//             </Link>
            
//             <Link
//               to="/about"
//               className="flex items-center space-x-2 px-3 py-2 text-sm text-foreground/80 hover:text-accent rounded-lg hover:bg-white/5 transition-all"
//             >
//               <Info className="w-4 h-4" />
//               <span>About</span>
//             </Link>

//             {user && (
//               <Link
//                 to="/profile"
//                 className="flex items-center space-x-2 px-3 py-2 text-sm text-foreground/80 hover:text-accent rounded-lg hover:bg-white/5 transition-all"
//               >
//                 <User className="w-4 h-4" />
//                 <span>Profile</span>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React from 'react';
import { Link } from 'react-router-dom';
import { ImageIcon, Grid3X3, Info } from 'lucide-react';
import PyramidLogo from './PyramidLogo';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="scale-50">
              <PyramidLogo />
            </div>
            <div className="text-2xl font-racing bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              AuraPrism
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/generate"
              className="flex items-center space-x-2 text-foreground/80 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Generate</span>
            </Link>

            <Link
              to="/gallery"
              className="flex items-center space-x-2 text-foreground/80 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Gallery</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center space-x-2 text-foreground/80 hover:text-accent hover:scale-105 transition-all duration-200"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/generate"
              className="flex items-center space-x-2 px-3 py-2 text-sm text-foreground/80 hover:text-accent rounded-lg hover:bg-white/5 transition-all"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Generate</span>
            </Link>

            <Link
              to="/gallery"
              className="flex items-center space-x-2 px-3 py-2 text-sm text-foreground/80 hover:text-accent rounded-lg hover:bg-white/5 transition-all"
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Gallery</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center space-x-2 px-3 py-2 text-sm text-foreground/80 hover:text-accent rounded-lg hover:bg-white/5 transition-all"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;