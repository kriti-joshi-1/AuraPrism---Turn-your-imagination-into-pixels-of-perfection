// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// interface LoginModalProps {
//   onClose: () => void;
//   onSubmit: (email: string, displayName: string) => void;
// }

// const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSubmit }) => {
//   const [email, setEmail] = useState('');
//   const [displayName, setDisplayName] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email.trim() && displayName.trim()) {
//       onSubmit(email.trim(), displayName.trim());
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//       <div className="glass rounded-xl max-w-md w-full p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-semibold text-white">Sign In</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-white/10 rounded-lg transition-colors"
//           >
//             <X className="w-5 h-5 text-foreground/60" />
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-foreground/80 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-foreground/80 mb-2">
//               Display Name
//             </label>
//             <input
//               type="text"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//               className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
//               placeholder="Enter your display name"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-purple-900 font-semibold rounded-lg hover:scale-105 transition-all duration-200"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;