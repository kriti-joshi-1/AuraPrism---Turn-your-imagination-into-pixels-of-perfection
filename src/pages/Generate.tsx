// import React, { useState } from 'react';
// import { Download, RefreshCw, Wand2, Loader2 } from 'lucide-react';
// import MistBackground from '../components/MistBackground';
// import PyramidLogo from '../components/PyramidLogo';

// interface GenerateProps {
//   user: any;
// }

// const Generate: React.FC<GenerateProps> = ({ user }) => {
//   const [prompt, setPrompt] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [generatedImage, setGeneratedImage] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [lastPrompt, setLastPrompt] = useState('');

//   const showMessage = (message: string) => {
//     setError(message);
//     setTimeout(() => setError(null), 4000);
//   };

//   const handleGenerate = async (useLastPrompt: boolean = false) => {
//     const currentPrompt = useLastPrompt ? lastPrompt : prompt.trim();
    
//     if (!currentPrompt) {
//       showMessage('Please enter an image description!');
//       return;
//     }

//     setLastPrompt(currentPrompt);
//     setIsGenerating(true);
//     setError(null);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/generate-image', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt: currentPrompt })
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || 'Failed to generate image');
//       }

//       const data = await response.json();
//       const imageUrl = `data:image/png;base64,${data.image}`;
//       setGeneratedImage(imageUrl);
      
//       // Save to localStorage instead of database
//       if (user) {
//         const savedImages = JSON.parse(localStorage.getItem('userImages') || '[]');
//         const newImage = {
//           id: Date.now().toString(),
//           userId: user.email,
//           prompt: currentPrompt,
//           imageUrl: imageUrl,
//           createdAt: new Date().toISOString()
//         };
//         savedImages.unshift(newImage);
//         localStorage.setItem('userImages', JSON.stringify(savedImages));
//       }
//     } catch (error: any) {
//       console.error('Error generating image:', error);
//       showMessage(error.message || 'Failed to generate image');
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleDownload = () => {
//     if (!generatedImage) {
//       showMessage('No image to download!');
//       return;
//     }

//     const link = document.createElement('a');
//     link.href = generatedImage;
//     link.download = `auraprism-${Date.now()}.png`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="min-h-screen relative">
      
//       <div className="relative z-10 min-h-screen pt-20 px-4">
//         <div className="max-w-4xl mx-auto">
          
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <PyramidLogo />
//             </div>
//             <h1 className="font-racing text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2">
//               AuraPrism
//             </h1>
//             <p className="font-chicle text-xl md:text-2xl text-accent">
//               Turn your imagination into pixels of perfection
//             </p>
//           </div>

//           {/* Input Section */}
//           <div className="mb-8">
//             <div className="glass rounded-2xl p-6">
//               <textarea
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 placeholder="Describe your imagination here... (e.g., 'A magical forest with glowing mushrooms and fairy lights')"
//                 className="w-full h-24 bg-transparent border-none outline-none text-foreground placeholder-foreground/50 text-lg resize-none"
//                 disabled={isGenerating}
//               />
              
//               <div className="flex items-center justify-between mt-4">
//                 <div className="flex-1">
//                   {error && (
//                     <div className="text-red-400 text-sm bg-red-400/10 px-3 py-2 rounded-lg">
//                       {error}
//                     </div>
//                   )}
//                 </div>
                
//                 <button
//                   onClick={() => handleGenerate(false)}
//                   disabled={isGenerating || !prompt.trim()}
//                   className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-purple-900 font-semibold rounded-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//                 >
//                   {isGenerating ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       <span>Generating...</span>
//                     </>
//                   ) : (
//                     <>
//                       <Wand2 className="w-5 h-5" />
//                       <span>Generate Image</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Loading State */}
//           {isGenerating && (
//             <div className="glass rounded-2xl p-12 text-center mb-8">
//               <div className="flex justify-center mb-4">
//                 <div className="animate-spin">
//                   <PyramidLogo />
//                 </div>
//               </div>
//               <div className="text-xl font-chicle text-accent mb-2">
//                 Crafting pixels...
//               </div>
//               <div className="text-sm text-foreground/70">
//                 This might take a moment...
//               </div>
//             </div>
//           )}

//           {/* Generated Image */}
//           {generatedImage && !isGenerating && (
//             <div className="glass rounded-2xl p-6">
//               <div className="text-center mb-4">
//                 <img
//                   src={generatedImage}
//                   alt="Generated"
//                   className="max-w-full max-h-96 mx-auto rounded-xl shadow-2xl"
//                 />
//               </div>
              
//               <div className="flex justify-center space-x-4">
//                 <button
//                   onClick={() => handleGenerate(true)}
//                   className="flex items-center space-x-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
//                 >
//                   <RefreshCw className="w-4 h-4" />
//                   <span>Regenerate</span>
//                 </button>
                
//                 <button
//                   onClick={handleDownload}
//                   className="flex items-center space-x-2 px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors"
//                 >
//                   <Download className="w-4 h-4" />
//                   <span>Download</span>
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* User Info */}
//           {user && (
//             <div className="mt-8 text-center">
//               <p className="text-sm text-foreground/60">
//                 ✨ Your images are automatically saved to your gallery!
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Generate;






// import React, { useState } from 'react';
// import { Download, RefreshCw, Wand2, Loader2 } from 'lucide-react';
// import MistBackground from '../components/MistBackground';
// import PyramidLogo from '../components/PyramidLogo';
// import { toast } from 'react-hot-toast';

// interface GenerateProps {
//   user: any;
// }

// const Generate: React.FC<GenerateProps> = ({ user }) => {
//   const [prompt, setPrompt] = useState('');
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [generatedImage, setGeneratedImage] = useState<string | null>(null);
//   const [lastPrompt, setLastPrompt] = useState('');

//   const handleGenerate = async (useLastPrompt: boolean = false) => {
//     const currentPrompt = useLastPrompt ? lastPrompt : prompt.trim();
    
//     if (!currentPrompt) {
//       toast.error('Please enter an image description!');
//       return;
//     }

//     setLastPrompt(currentPrompt);
//     setIsGenerating(true);
//     setGeneratedImage(null); // Clear previous image

//     try {
//       const response = await fetch('http://127.0.0.1:5000/generate-image', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ prompt: currentPrompt }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to generate image. Please try again.');
//       }

//       const data = await response.json();
//       setGeneratedImage(`data:image/png;base64,${data.image}`);
//       toast.success('Image generated successfully!');
      
//       // Save image to local storage if user is logged in
//       if (user) {
//         const newImage = {
//           id: Date.now().toString(),
//           prompt: currentPrompt,
//           imageUrl: `data:image/png;base64,${data.image}`,
//           createdAt: new Date().toISOString(),
//           userId: user.email,
//         };
//         const allImages = JSON.parse(localStorage.getItem('userImages') || '[]');
//         localStorage.setItem('userImages', JSON.stringify([newImage, ...allImages]));
//       }

//     } catch (err) {
//       console.error(err);
//       toast.error('An error occurred. Check the server logs.');
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   const handleDownload = () => {
//     if (generatedImage) {
//       const link = document.createElement('a');
//       link.href = generatedImage;
//       link.download = `AuraPrism_${lastPrompt.substring(0, 20).replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   };

//   return (
//     <div className="min-h-screen relative">
//       <MistBackground />
//       <div className="relative z-10 pt-20 px-4 pb-12">
//         <div className="max-w-4xl mx-auto text-center">
          
//           <div className="flex flex-col items-center mb-8">
//             <div className="mb-6">
//               <PyramidLogo />
//             </div>
//             <h1 className="font-racing text-6xl md:text-8xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
//               Generate
//             </h1>
//             <p className="font-chicle text-2xl md:text-4xl text-accent mb-8">
//               Transform your words into visual art
//             </p>
//           </div>

//           <div className="w-full max-w-2xl mx-auto glass rounded-3xl p-6 md:p-10 mb-8 shadow-xl">
//             <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//               <input
//                 type="text"
//                 placeholder="A magical forest at night, glowing mushrooms..."
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
//                 className="w-full flex-1 px-5 py-3 text-lg rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 border border-white/20"
//                 disabled={isGenerating}
//               />
//               <button
//                 onClick={() => handleGenerate()}
//                 className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-purple-900 font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 disabled:opacity-50 disabled:scale-100"
//                 disabled={isGenerating}
//               >
//                 {isGenerating ? (
//                   <>
//                     <Loader2 className="w-6 h-6 animate-spin" />
//                     <span>Generating...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Wand2 className="w-6 h-6" />
//                     <span>Generate</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
          
//           {/* Main output section */}
//           <div className="relative w-full max-w-3xl mx-auto p-4 md:p-8 bg-black/20 rounded-3xl shadow-lg border border-white/10 min-h-[400px] flex items-center justify-center">
//             {isGenerating && (
//               <div className="loader-container">
//                 <div className="loader">
//                   <div className="prism"></div>
//                   <div className="prism"></div>
//                   <div className="prism"></div>
//                   <div className="prism"></div>
//                   <div className="prism"></div>
//                   <div className="prism"></div>
//                   <div className="prism"></div>
//                   <div className="prism"></div>
//                   <div className="prism"></div>
//                   <div className="loader-msg">
//                     <div className="loader-text">Crafting pixels...</div>
//                     <div className="loader-text2">This might take a moment ...</div>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             {!isGenerating && generatedImage && (
//               <div className="w-full">
//                 <div className="text-center mb-4">
//                   <img
//                     src={generatedImage}
//                     alt="Generated"
//                     className="max-w-full max-h-[500px] mx-auto rounded-xl shadow-2xl transition-opacity duration-500 opacity-100"
//                   />
//                 </div>
                
//                 <div className="flex justify-center space-x-4">
//                   <button
//                     onClick={() => handleGenerate(true)}
//                     className="flex items-center space-x-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
//                   >
//                     <RefreshCw className="w-4 h-4" />
//                     <span>Regenerate</span>
//                   </button>
                  
//                   <button
//                     onClick={handleDownload}
//                     className="flex items-center space-x-2 px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors"
//                   >
//                     <Download className="w-4 h-4" />
//                     <span>Download</span>
//                   </button>
//                 </div>
//               </div>
//             )}
            
//             {!isGenerating && !generatedImage && (
//               <div className="flex flex-col items-center text-center text-foreground/50">
//                 <img 
//                     src="https://cdn.pixabay.com/photo/2024/07/20/12/32/ai-generated-8908332_1280.jpg"
//                     alt=""
//                     className="max-w-full max-h-[400px] mx-auto rounded-xl shadow-2xl opacity-40"
//                 />
//               </div>
//             )}
//           </div>
          
//           {user && (
//             <div className="mt-8 text-center">
//               <p className="text-sm text-foreground/60">
//                 ✨ Your images are automatically saved to your gallery!
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Generate;







import React, { useState } from 'react';
import { Download, RefreshCw, Wand2, Loader2 } from 'lucide-react';
import MistBackground from '../components/MistBackground';
import PyramidLogo from '../components/PyramidLogo';
import { toast } from 'react-hot-toast';

interface GenerateProps {
  user: any;
}

const Generate: React.FC<GenerateProps> = ({ user }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [lastPrompt, setLastPrompt] = useState('');

  const handleGenerate = async (useLastPrompt: boolean = false) => {
    const currentPrompt = useLastPrompt ? lastPrompt : prompt.trim();
    
    if (!currentPrompt) {
      toast.error('Please enter an image description!');
      return;
    }

    setLastPrompt(currentPrompt);
    setIsGenerating(true);
    setGeneratedImage(null); // Clear previous image

    try {
      const response = await fetch('http://127.0.0.1:5000/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: currentPrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image. Please try again.');
      }

      const data = await response.json();
      setGeneratedImage(`data:image/png;base64,${data.image}`);
      toast.success('Image generated successfully!');
      
      // Save image to local storage if user is logged in
      if (user) {
        const newImage = {
          id: Date.now().toString(),
          prompt: currentPrompt,
          imageUrl: `data:image/png;base64,${data.image}`,
          createdAt: new Date().toISOString(),
          userId: user.email,
        };
        const allImages = JSON.parse(localStorage.getItem('userImages') || '[]');
        localStorage.setItem('userImages', JSON.stringify([newImage, ...allImages]));
      }

    } catch (err) {
      console.error(err);
      toast.error('An error occurred. Check the server logs.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `AuraPrism_${lastPrompt.substring(0, 20).replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen relative">
      
      <div className="relative z-10 min-h-screen pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <PyramidLogo />
            </div>
            <h1 className="font-racing text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-2">
              AuraPrism
            </h1>
            <p className="font-chicle text-xl md:text-2xl text-accent">
              Turn your imagination into pixels of perfection
            </p>
          </div>

          {/* Input Section */}
          <div className="mb-8">
            <div className="glass rounded-2xl p-6">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your imagination here... (e.g., 'A magical forest with glowing mushrooms and fairy lights')"
                className="w-full h-24 bg-transparent border-none outline-none text-foreground placeholder-foreground/50 text-lg resize-none prompt-box"
                disabled={isGenerating}
              />
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex-1">
                  {/* The toast messages from Code 2 will handle errors and success messages */}
                </div>
                
                <button
                  onClick={() => handleGenerate(false)}
                  disabled={isGenerating || !prompt.trim()}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-purple-900 font-semibold rounded-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      <span>Generate Image</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Main output section */}
          <div className="relative w-full max-w-3xl mx-auto p-4 md:p-8 bg-black/20 rounded-3xl shadow-lg border border-white/10 min-h-[400px] flex items-center justify-center">
            
            {isGenerating && (
              <div className="loader-container">
                <div className="loader">
                  <div className="prism"></div>
                  <div className="prism"></div>
                  <div className="prism"></div>
                  <div className="prism"></div>
                  <div className="prism"></div>
                  <div className="prism"></div>
                  <div className="prism"></div>
                  <div className="prism"></div>
                  <div className="prism"></div>
                  <div className="loader-msg">
                    <div className="loader-text">Crafting pixels...</div>
                    <div className="loader-text2">This might take a moment ...</div>
                  </div>
                </div>
              </div>
            )}
            
            {!isGenerating && generatedImage && (
              <div className="w-full">
                <div className="text-center mb-4">
                  <img
                    src={generatedImage}
                    alt="Generated"
                    className="max-w-full max-h-[500px] mx-auto rounded-xl shadow-2xl transition-opacity duration-500 opacity-100"
                  />
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => handleGenerate(true)}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Regenerate</span>
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {user && (
            <div className="mt-8 text-center">
              <p className="text-sm text-foreground/60">
                ✨ Your images are automatically saved to your gallery!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Generate;