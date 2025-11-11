// import React, { useState, useRef, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { ImageIcon, Sparkles, Palette, Zap } from 'lucide-react';
// import PyramidLogo from '../components/PyramidLogo';

// const Home: React.FC = () => {
//     const [isHoveringLeft, setIsHoveringLeft] = useState(false);
//     const [isHoveringRight, setIsHoveringRight] = useState(false);


//     // Dummy data for carousel slides
//     const LeftcarouselSlides = [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbnmoEBqHUDEbNhGOFhDfZzHY4MgDs2gYQQ&s",
//         "https://cdn.pixabay.com/photo/2024/07/27/10/55/ai-generated-8925260_1280.jpg",
//         "https://img.freepik.com/premium-photo/creative-light-bulb-think-different-creative-idea-concept_1161461-5299.jpg",
//         "https://thumbs.dreamstime.com/b/ai-generated-illustration-abstract-portrait-person-bold-geometric-pattern-ai-generated-illustration-abstract-319902514.jpg",
//         "https://cdn.pixabay.com/photo/2024/04/13/10/20/peacock-8693634_1280.jpg",
//         "https://cdn.pixabay.com/photo/2024/03/28/18/54/ai-generated-8661502_1280.jpg",
//         "https://cdn.pixabay.com/photo/2023/01/25/10/51/ai-generated-7743255_1280.jpg",
//         "https://cdn.pixabay.com/photo/2024/05/07/20/36/ai-generated-8746753_1280.png",
//         "https://cdn.pixabay.com/photo/2024/05/07/12/26/ai-generated-8745720_1280.png",
//         "https://cdn.pixabay.com/photo/2024/02/19/16/05/ai-generated-8583679_1280.jpg",
//         "https://cdn.pixabay.com/photo/2024/06/01/06/58/soldier-8801680_1280.jpg",
//         "https://cdn.pixabay.com/photo/2023/09/21/13/32/ai-generated-8266687_1280.jpg"


//         // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbnmoEBqHUDEbNhGOFhDfZzHY4MgDs2gYQQ&s",
//         // "https://cdn.pixabay.com/photo/2024/07/27/10/55/ai-generated-8925260_1280.jpg",
//         // "https://img.freepik.com/premium-photo/creative-light-bulb-think-different-creative-idea-concept_1161461-5299.jpg",
//         // "https://thumbs.dreamstime.com/b/ai-generated-illustration-abstract-portrait-person-bold-geometric-pattern-ai-generated-illustration-abstract-319902514.jpg",
//         // "https://cdn.pixabay.com/photo/2024/04/13/10/20/peacock-8693634_1280.jpg",
//         // "https://cdn.pixabay.com/photo/2024/03/28/18/54/ai-generated-8661502_1280.jpg",
//         // "https://cdn.pixabay.com/photo/2023/01/25/10/51/ai-generated-7743255_1280.jpg",
//         // "https://cdn.pixabay.com/photo/2024/05/07/20/36/ai-generated-8746753_1280.png",
//         // "https://cdn.pixabay.com/photo/2024/05/07/12/26/ai-generated-8745720_1280.png",
//         // "https://cdn.pixabay.com/photo/2024/02/19/16/05/ai-generated-8583679_1280.jpg",
//         // "https://cdn.pixabay.com/photo/2024/06/01/06/58/soldier-8801680_1280.jpg",
//         // "https://cdn.pixabay.com/photo/2023/09/21/13/32/ai-generated-8266687_1280.jpg"
//     ];

//     const RightcarouselSlides = [
//         "https://img.freepik.com/premium-photo/futuristic-city-with-bridge-full-moon-sky-generative-ai_974521-28979.jpg",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPSgbTBBxI4mo5mWMM20C6Pez2w84RYPmh17uRl6AJj1_gb15kljouEe2-xVB0m4vFfk&usqp=CAU",
//         "https://img.freepik.com/premium-photo/painting-sunset-river-with-sky-clouds-generative-ai_955925-29342.jpg",
//         "https://previews.123rf.com/images/yuriyvlasenko/yuriyvlasenko2306/yuriyvlasenko230600014/205854848-close-up-rose-flowers-ai-generated-illustration.jpg",
//         "https://cdn.pixabay.com/photo/2024/10/06/15/29/ai-generated-9100383_1280.jpg",
//         "https://cdn.pixabay.com/photo/2024/03/17/18/13/ai-generated-8639524_1280.png",
//         "https://cdn.pixabay.com/photo/2024/04/20/22/02/ai-generated-8709510_1280.png",
//         "https://cdn.pixabay.com/photo/2024/03/09/12/48/water-8622588_1280.png",
//         "https://cdn.pixabay.com/photo/2024/05/14/23/40/ai-generated-8762318_1280.png",
//         "https://cdn.pixabay.com/photo/2024/12/13/22/26/ai-generated-9266243_1280.png",
//         "https://cdn.pixabay.com/photo/2024/02/27/01/12/ai-generated-8599163_1280.png",
//         "https://cdn.pixabay.com/photo/2024/05/15/04/51/ai-generated-8762644_1280.jpg"


//         // "https://img.freepik.com/premium-photo/futuristic-city-with-bridge-full-moon-sky-generative-ai_974521-28979.jpg",
//         // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPSgbTBBxI4mo5mWMM20C6Pez2w84RYPmh17uRl6AJj1_gb15kljouEe2-xVB0m4vFfk&usqp=CAU",
//         // "https://img.freepik.com/premium-photo/painting-sunset-river-with-sky-clouds-generative-ai_955925-29342.jpg",
//         // "https://previews.123rf.com/images/yuriyvlasenko/yuriyvlasenko2306/yuriyvlasenko230600014/205854848-close-up-rose-flowers-ai-generated-illustration.jpg",
//         // "https://cdn.pixabay.com/photo/2024/10/06/15/29/ai-generated-9100383_1280.jpg",
//         // "https://cdn.pixabay.com/photo/2024/03/17/18/13/ai-generated-8639524_1280.png",
//         // "https://cdn.pixabay.com/photo/2024/04/20/22/02/ai-generated-8709510_1280.png",
//         // "https://cdn.pixabay.com/photo/2024/03/09/12/48/water-8622588_1280.png",
//         // "https://cdn.pixabay.com/photo/2024/05/14/23/40/ai-generated-8762318_1280.png",
//         // "https://cdn.pixabay.com/photo/2024/12/13/22/26/ai-generated-9266243_1280.png",
//         // "https://cdn.pixabay.com/photo/2024/02/27/01/12/ai-generated-8599163_1280.png",
//         // "https://cdn.pixabay.com/photo/2024/05/15/04/51/ai-generated-8762644_1280.jpg"
//     ];
  
//     // Double the slides for the seamless looping animation
//     const LeftloopedSlides = [...LeftcarouselSlides, ...LeftcarouselSlides];
//     const RightloopedSlides = [...RightcarouselSlides, ...RightcarouselSlides];

//     return (
//         <div className="min-h-screen relative">
//             <div className="relative z-10 flex flex-col">
                
//                 {/* Left Vertical Carousel */}
//                 <div 
//                     className={`left-carousel w-1/6 flex items-center justify-center fixed top-0 left-0 ml-[30px] h-screen`}
//                     onMouseEnter={() => setIsHoveringLeft(true)}
//                     onMouseLeave={() => setIsHoveringLeft(false)}
//                 >
//                     <div className="carousel-container">
//                         <div
//                           className="carousel-track"
//                           style={{
//                             '--slide-height': '316px',
//                             '--slide-count': LeftcarouselSlides.length,
//                             animation: 'scrollDown 75s linear infinite',
//                           } as React.CSSProperties}
// >
//                           {LeftloopedSlides.map((src, index) => (
//                               <div key={index} className="carousel-slide">
//                               <img src={src} alt={`Slide ${index}`} />
//                           </div>
//                           ))}
//                           </div>
//                     </div>
//                 </div>
//         {/* Hero Section */}
//         <div className="flex-1 flex items-center justify-center px-4 py-20">
//           <div className="max-w-4xl mx-auto text-center">
            
//             {/* Logo and Title */}
//             <div className="flex flex-col items-center mb-8">
//               <div className="mb-6">
//                 <PyramidLogo />
//               </div>
//               <h1 className="font-racing text-6xl md:text-8xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
//                 AuraPrism
//               </h1>
//               <p className="font-chicle text-2xl md:text-4xl text-accent mb-8">
//                 Turn your imagination into pixels of perfection
//               </p>
//             </div>

//             {/* CTA Button */}
//             <Link
//               to="/generate"
//               className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-purple-900 font-chicle text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
//             >
//               <ImageIcon className="w-6 h-6" />
//               <span>Generate Image</span>
//             </Link>

//             {/* About Section */}
//             <div className="mt-16 glass rounded-2xl p-8 max-w-3xl mx-auto">
//               <h3 className="text-2xl font-bold text-white mb-4">About AuraPrism</h3>
//               <p className="text-foreground/80 text-lg leading-relaxed">
//                 AuraPrism is an innovative image generation platform that turns your imagination into stunning visuals. 
//                 Simply describe the world you envision, and our AI will create beautiful, unique images. 
//                 Explore a gallery of AI-generated art, and bring your most creative ideas to life with just a click.
//               </p>
//             </div>

//             {/* Features */}
//             <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//               <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
//                 <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
//                 <h4 className="text-lg font-semibold text-white mb-2">AI Powered</h4>
//                 <p className="text-foreground/70 text-sm">
//                   Advanced AI technology transforms your words into stunning visual art
//                 </p>
//               </div>
              
//               <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
//                 <Palette className="w-8 h-8 text-accent mx-auto mb-4" />
//                 <h4 className="text-lg font-semibold text-white mb-2">Personal Gallery</h4>
//                 <p className="text-foreground/70 text-sm">
//                   Save and organize your creations in your personal gallery
//                 </p>
//               </div>
              
//               <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
//                 <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
//                 <h4 className="text-lg font-semibold text-white mb-2">Instant Results</h4>
//                 <p className="text-foreground/70 text-sm">
//                   Generate high-quality images in seconds with our fast processing
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//           {/* Right Vertical Carousel */}
//                 <div 
//                     className={`right-carousel w-1/6 flex items-center justify-center fixed top-0 right-0 mr-[30px] h-screen`}
//                     onMouseEnter={() => setIsHoveringRight(true)}
//                     onMouseLeave={() => setIsHoveringRight(false)}
//                 >
//                     <div className="carousel-container">
//                         <div className="carousel-track"
//                         style={{
//                             '--slide-height': '316px',
//                             '--slide-count': RightcarouselSlides.length,
//                             animation: 'scrollUp 75s linear infinite',
//                         } as React.CSSProperties}
// >
//                         {RightloopedSlides.map((src, index) => (
//                             <div key={index} className="carousel-slide">
//                             <img src={src} alt={`Slide ${index}`} />
//                               </div>
//                           ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   );
// };

// export default Home;



// src/pages/Home.tsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageIcon, Sparkles, Palette, Zap } from "lucide-react";
import PyramidLogo from "../components/PyramidLogo";

const Home: React.FC = () => {
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);

  const leftTrackRef = useRef<HTMLDivElement>(null);
  const rightTrackRef = useRef<HTMLDivElement>(null);

  const [leftDistance, setLeftDistance] = useState(0);
  const [rightDistance, setRightDistance] = useState(0);

  useEffect(() => {
    if (leftTrackRef.current) {
      setLeftDistance(leftTrackRef.current.scrollHeight / 2); // one set of slides
    }
    if (rightTrackRef.current) {
      setRightDistance(rightTrackRef.current.scrollHeight / 2);
    }
  }, []);

  // Dummy data for carousel slides
  const LeftcarouselSlides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbnmoEBqHUDEbNhGOFhDfZzHY4MgDs2gYQQ&s",
    "https://cdn.pixabay.com/photo/2024/07/27/10/55/ai-generated-8925260_1280.jpg",
    "https://img.freepik.com/premium-photo/creative-light-bulb-think-different-creative-idea-concept_1161461-5299.jpg",
    "https://thumbs.dreamstime.com/b/ai-generated-illustration-abstract-portrait-person-bold-geometric-pattern-ai-generated-illustration-abstract-319902514.jpg",
    "https://cdn.pixabay.com/photo/2024/04/13/10/20/peacock-8693634_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/28/18/54/ai-generated-8661502_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/25/10/51/ai-generated-7743255_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/05/07/20/36/ai-generated-8746753_1280.png",
    "https://cdn.pixabay.com/photo/2024/05/07/12/26/ai-generated-8745720_1280.png",
    "https://cdn.pixabay.com/photo/2024/02/19/16/05/ai-generated-8583679_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/06/01/06/58/soldier-8801680_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/21/13/32/ai-generated-8266687_1280.jpg",
  ];

  const RightcarouselSlides = [
    "https://img.freepik.com/premium-photo/futuristic-city-with-bridge-full-moon-sky-generative-ai_974521-28979.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPSgbTBBxI4mo5mWMM20C6Pez2w84RYPmh17uRl6AJj1_gb15kljouEe2-xVB0m4vFfk&usqp=CAU",
    "https://img.freepik.com/premium-photo/painting-sunset-river-with-sky-clouds-generative-ai_955925-29342.jpg",
    "https://previews.123rf.com/images/yuriyvlasenko/yuriyvlasenko2306/yuriyvlasenko230600014/205854848-close-up-rose-flowers-ai-generated-illustration.jpg",
    "https://cdn.pixabay.com/photo/2024/10/06/15/29/ai-generated-9100383_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/17/18/13/ai-generated-8639524_1280.png",
    "https://cdn.pixabay.com/photo/2024/04/20/22/02/ai-generated-8709510_1280.png",
    "https://cdn.pixabay.com/photo/2024/03/09/12/48/water-8622588_1280.png",
    "https://cdn.pixabay.com/photo/2024/05/14/23/40/ai-generated-8762318_1280.png",
    "https://cdn.pixabay.com/photo/2024/12/13/22/26/ai-generated-9266243_1280.png",
    "https://cdn.pixabay.com/photo/2024/02/27/01/12/ai-generated-8599163_1280.png",
    "https://cdn.pixabay.com/photo/2024/05/15/04/51/ai-generated-8762644_1280.jpg",
  ];

  // Duplicate slides for seamless animation
  const LeftloopedSlides = [...LeftcarouselSlides, ...LeftcarouselSlides];
  const RightloopedSlides = [...RightcarouselSlides, ...RightcarouselSlides];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 flex flex-col">
        {/* Left Vertical Carousel */}
        <div
          className={`left-carousel w-1/6 flex items-center justify-center fixed top-0 left-0 ml-[40px] h-screen`}
          onMouseEnter={() => setIsHoveringLeft(true)}
          onMouseLeave={() => setIsHoveringLeft(false)}
        >
          <div className="carousel-container">
            <div
              ref={leftTrackRef}
              className="carousel-track"
              style={
                {
                  animation: "scrollDown 75s linear infinite",
                  "--distance": `${leftDistance}px`,
                } as React.CSSProperties
              }
            >
              {LeftloopedSlides.map((src, index) => (
                <div key={index} className="carousel-slide">
                  <img src={src} alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo and Title */}
            <div className="flex flex-col items-center mb-8">
              <div className="mb-6">
                <PyramidLogo />
              </div>
              <h1 className="font-racing text-6xl md:text-8xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-4">
                AuraPrism
              </h1>
              <p className="font-chicle text-2xl md:text-4xl text-accent mb-8">
                Turn your imagination into pixels of perfection
              </p>
            </div>

            {/* CTA Button */}
            <Link
              to="/generate"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-purple-900 font-chicle text-2xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
            >
              <ImageIcon className="w-6 h-6" />
              <span>Generate Image</span>
            </Link>

            {/* About Section */}
            <div className="mt-16 glass rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                About AuraPrism
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed">
                AuraPrism is an innovative image generation platform that turns
                your imagination into stunning visuals. Simply describe the
                world you envision, and our AI will create beautiful, unique
                images. Explore a gallery of AI-generated art, and bring your
                most creative ideas to life with just a click.
              </p>
            </div>

            {/* Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
              <div className="glass rounded-xl py-6 px-4.5 hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  AI Powered
                </h4>
                <p className="text-foreground/70 text-sm">
                  Advanced AI technology transforms your words into stunning
                  visual art
                </p>
              </div>

              <div className="glass rounded-xl py-6 px-4.5 hover:bg-white/10 transition-all duration-300">
                <Palette className="w-8 h-8 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Personal Gallery
                </h4>
                <p className="text-foreground/70 text-sm">
                  Save and organize your creations in your personal gallery
                </p>
              </div>

              <div className="glass rounded-xl py-6 px-4.5 hover:bg-white/10 transition-all duration-300">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Instant Results
                </h4>
                <p className="text-foreground/70 text-sm">
                  Generate high-quality images in seconds with our fast
                  processing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Vertical Carousel */}
        <div
          className={`right-carousel w-1/6 flex items-center justify-center fixed top-0 right-0 mr-[40px] h-screen`}
          onMouseEnter={() => setIsHoveringRight(true)}
          onMouseLeave={() => setIsHoveringRight(false)}
        >
          <div className="carousel-container z-0">
            <div
              ref={rightTrackRef}
              className="carousel-track"
              style={
                {
                  animation: "scrollUp 75s linear infinite",
                  "--distance": `${rightDistance}px`,
                } as React.CSSProperties
              }
            >
              {RightloopedSlides.map((src, index) => (
                <div key={index} className="carousel-slide">
                  <img src={src} alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
