import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, User } from 'lucide-react';


interface GalleryProps {
  user: any;
}

const Gallery: React.FC<GalleryProps> = ({ user }) => {
  const [userImages, setUserImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  // Sample gallery images
  const sampleImages = [
    {
      id: 'sample-1',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/07/27/10/55/ai-generated-8925260_1280.jpg',
      prompt: 'Futuristic cityscape with neon lights',
      createdAt: new Date().toISOString()
    },
    {
      id: 'sample-2',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/04/13/10/20/peacock-8693634_1280.jpg',
      prompt: 'Majestic peacock with brilliant colors',
      createdAt: new Date().toISOString()
    },
    {
      id: 'sample-3',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/03/28/18/54/ai-generated-8661502_1280.jpg',
      prompt: 'Dreamy landscape with floating islands',
      createdAt: new Date().toISOString()
    },
    {
      id: 'sample-4',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/01/25/10/51/ai-generated-7743255_1280.jpg',
      prompt: 'Abstract art with vibrant patterns',
      createdAt: new Date().toISOString()
    },
    {
      id: 'sample-5',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/05/07/20/36/ai-generated-8746753_1280.png',
      prompt: 'Mystical forest with magical creatures',
      createdAt: new Date().toISOString()
    },
    {
      id: 'sample-6',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/05/07/12/26/ai-generated-8745720_1280.png',
      prompt: 'Cosmic space scene with nebulas',
      createdAt: new Date().toISOString()
    }
  ];

  useEffect(() => {
    const fetchUserImages = async () => {
  try {
    if (!user) {
      setLoading(false);
      return;
    }

    const allImages = JSON.parse(localStorage.getItem('userImages') || '[]');
    const userImages = allImages.filter((img: any) => img.userId === user.email);
    setUserImages(userImages);
  } catch (error) {
    console.error('Error fetching user images:', error);
  } finally {
    setLoading(false);
  }
};

    fetchUserImages();
  }, [user]);

  const handleDownload = (imageUrl: string, prompt: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `auraprism-${prompt.slice(0, 30).replace(/[^a-zA-Z0-9]/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const ImageGrid = ({ images, title }: { images: any[], title: string }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        {title}
      </h2>
      
      {images.length === 0 ? (
        <div className="glass rounded-xl p-8 text-center">
          <div className="text-foreground/60 mb-4">
            {title.includes('Your') ? 'No images generated yet' : 'Coming soon...'}
          </div>
          {title.includes('Your') && (
            <a 
              href="/generate" 
              className="text-accent hover:text-accent/80 underline"
            >
              Generate your first image →
            </a>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.prompt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <p className="text-sm text-foreground/80 mb-3 line-clamp-2">
                  {image.prompt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/60">
                    {new Date(image.createdAt).toLocaleDateString()}
                  </span>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(image.imageUrl, image.prompt);
                      }}
                      className="p-2 rounded-lg bg-green-600/20 text-green-400 hover:bg-green-600/30 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(image);
                      }}
                      className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen relative">
      
      <div className="relative z-10 min-h-screen pt-20 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-racing text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4">
              Gallery
            </h1>
            <p className="text-foreground/80 text-lg">
              Explore stunning AI-generated artwork and your personal creations
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="animate-pulse text-foreground/60">Loading gallery...</div>
            </div>
          ) : (
            <>
              {/* User Images */}
              {user && (
                <ImageGrid 
                  images={userImages} 
                  title={`Your Creations (${userImages.length})`}
                />
              )}

              {/* Sample Gallery */}
              <ImageGrid 
                images={sampleImages} 
                title="Featured Gallery" 
              />
            </>
          )}

          {/* Login Prompt for Non-Users */}
          {/* {!user && (
            <div className="mt-12 text-center">
              <div className="glass rounded-xl p-8 max-w-md mx-auto">
                <User className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  Save Your Creations
                </h3>
                <p className="text-foreground/70 mb-4">
                  Sign in to save your generated images and build your personal gallery
                </p>
                <a
                  href="/"
                  className="inline-block px-6 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary/30 transition-colors"
                >
                  Sign In to Start
                </a>
              </div>
            </div>
          )} */}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="glass rounded-xl max-w-4xl max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.prompt}
                className="w-full max-h-96 object-contain rounded-lg mb-4"
              />
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  {selectedImage.prompt}
                </h3>
                
                <div className="text-sm text-foreground/60">
                  Created: {new Date(selectedImage.createdAt).toLocaleString()}
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="px-4 py-2 bg-gray-600/20 text-gray-300 rounded-lg hover:bg-gray-600/30 transition-colors"
                  >
                    Close
                  </button>
                  
                  <button
                    onClick={() => handleDownload(selectedImage.imageUrl, selectedImage.prompt)}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;