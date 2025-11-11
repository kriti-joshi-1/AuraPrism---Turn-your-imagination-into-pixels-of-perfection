// import React, { useState, useEffect } from 'react';
// import { User, Mail, Calendar, Image, Edit3, Save, X } from 'lucide-react';
// import MistBackground from '../components/MistBackground';
// import { localAuth } from '../auth/localAuth';

// interface ProfileProps {
//   user: any;
//   onLogin: () => void;
// }

// const Profile: React.FC<ProfileProps> = ({ user, onLogin }) => {
//   const [userImages, setUserImages] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);
//   const [displayName, setDisplayName] = useState('');
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (user) {
//       setDisplayName(user.displayName || '');
//       fetchUserImages();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   const fetchUserImages = async () => {
//     try {
//       if (!user) {
//         setLoading(false);
//         return;
//       }

//       const allImages = JSON.parse(localStorage.getItem('userImages') || '[]');
//       const userImages = allImages.filter((img: any) => img.userId === user.email);
//       setUserImages(userImages.slice(0, 6)); // Limit to 6 for recent creations
//     } catch (error) {
//       console.error('Error fetching user images:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSaveProfile = async () => {
//     if (!user || !displayName.trim()) return;

//     setSaving(true);
//     try {
//       const updatedUser = await localAuth.updateProfile({ 
//         displayName: displayName.trim() 
//       });
//       // Update the user object in the current component
//       // Note: In a real app, you'd want to update this globally via context or prop callback
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error updating profile:', error);
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleCancelEdit = () => {
//     setDisplayName(user?.displayName || '');
//     setIsEditing(false);
//   };

//   if (!user) {
//     return (
//       <div className="min-h-screen relative">        
//         <div className="relative z-10 min-h-screen pt-20 px-4 flex items-center justify-center">
//           <div className="glass rounded-xl p-8 max-w-md text-center">
//             <User className="w-16 h-16 text-accent mx-auto mb-6" />
//             <h2 className="text-2xl font-semibold text-white mb-4">
//               Profile Access Required
//             </h2>
//             <p className="text-foreground/70 mb-6">
//               Please sign in to view and manage your profile
//             </p>
//             <button
//               onClick={onLogin}
//               className="px-6 py-3 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
//             >
//               Sign In
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen relative">
        
//         <div className="relative z-10 min-h-screen pt-20 px-4 flex items-center justify-center">
//           <div className="text-center">
//             <div className="animate-pulse text-foreground/60">Loading profile...</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative">
      
//       <div className="relative z-10 min-h-screen pt-20 px-4 pb-12">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h1 className="font-racing text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4">
//               Profile
//             </h1>
//             <p className="text-foreground/80 text-lg">
//               Manage your account and view your creative journey
//             </p>
//           </div>

//           {/* Profile Card */}
//           <div className="glass rounded-2xl p-8 mb-8">
//             <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              
//               {/* Avatar */}
//               <div className="flex-shrink-0">
//                 <img
//                   src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
//                   alt="Profile Avatar"
//                   className="w-24 h-24 rounded-full border-2 border-accent/20"
//                 />
//               </div>

//               {/* User Info */}
//               <div className="flex-1 text-center md:text-left">
//                 <div className="mb-4">
//                   {isEditing ? (
//                     <div className="flex items-center space-x-3">
//                       <input
//                         type="text"
//                         value={displayName}
//                         onChange={(e) => setDisplayName(e.target.value)}
//                         className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-xl font-semibold flex-1"
//                         placeholder="Enter display name"
//                       />
//                       <div className="flex space-x-2">
//                         <button
//                           onClick={handleSaveProfile}
//                           disabled={saving || !displayName.trim()}
//                           className="p-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors disabled:opacity-50"
//                         >
//                           <Save className="w-5 h-5" />
//                         </button>
//                         <button
//                           onClick={handleCancelEdit}
//                           disabled={saving}
//                           className="p-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
//                         >
//                           <X className="w-5 h-5" />
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-center md:justify-start space-x-3">
//                       <h2 className="text-2xl font-semibold text-white">
//                         {user.displayName || user.email?.split('@')[0] || 'Anonymous User'}
//                       </h2>
//                       <button
//                         onClick={() => setIsEditing(true)}
//                         className="p-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
//                       >
//                         <Edit3 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <div className="space-y-2 text-foreground/80">
//                   <div className="flex items-center justify-center md:justify-start space-x-2">
//                     <Mail className="w-4 h-4" />
//                     <span>{user.email}</span>
//                   </div>
                  
//                   <div className="flex items-center justify-center md:justify-start space-x-2">
//                     <Calendar className="w-4 h-4" />
//                     <span>
//                       Joined {new Date(user.createdAt || Date.now()).toLocaleDateString()}
//                     </span>
//                   </div>
                  
//                   <div className="flex items-center justify-center md:justify-start space-x-2">
//                     <Image className="w-4 h-4" />
//                     <span>{userImages.length} images generated</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Recent Creations */}
//           <div className="glass rounded-2xl p-8">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-2xl font-semibold text-white">
//                 Recent Creations
//               </h3>
//               {userImages.length > 0 && (
//                 <a
//                   href="/gallery"
//                   className="text-accent hover:text-accent/80 text-sm underline"
//                 >
//                   View all →
//                 </a>
//               )}
//             </div>

//             {userImages.length === 0 ? (
//               <div className="text-center py-12">
//                 <Image className="w-16 h-16 text-foreground/40 mx-auto mb-4" />
//                 <p className="text-foreground/60 mb-4">
//                   You haven't generated any images yet
//                 </p>
//                 <a
//                   href="/generate"
//                   className="inline-block px-6 py-3 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
//                 >
//                   Create Your First Image
//                 </a>
//               </div>
//             ) : (
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {userImages.map((image) => (
//                   <div
//                     key={image.id}
//                     className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
//                   >
//                     <img
//                       src={image.imageUrl}
//                       alt={image.prompt}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Account Stats */}
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="glass rounded-xl p-6 text-center">
//               <div className="text-3xl font-bold text-accent mb-2">
//                 {userImages.length}
//               </div>
//               <div className="text-foreground/70">Images Created</div>
//             </div>
            
//             <div className="glass rounded-xl p-6 text-center">
//               <div className="text-3xl font-bold text-green-400 mb-2">
//                 {userImages.length > 0 ? Math.ceil(userImages.length / 7) : 0}
//               </div>
//               <div className="text-foreground/70">Weeks Active</div>
//             </div>
            
//             <div className="glass rounded-xl p-6 text-center">
//               <div className="text-3xl font-bold text-cyan-400 mb-2">
//                 {userImages.reduce((total, img) => total + (img.prompt?.length || 0), 0)}
//               </div>
//               <div className="text-foreground/70">Characters Written</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;