import React from 'react';
import g1 from '../../assets/images/gallery/g1.webp';
import g2 from '../../assets/images/gallery/g2.webp';
import g3 from '../../assets/images/gallery/g3.webp';
import g4 from '../../assets/images/gallery/g4.webp';

const Galleri = () => {
  return (
    <section id="gallery" className="gallery_wrapper py-20 bg-[var(--bg-color)]">
      <div className="container-fluid mx-auto px-4">
        <div className="text-center mb-10">
          <h6 className="text-lg font-semibold">What I Can Do for You</h6>
          <h3 className="text-3xl font-bold">Our Gallery</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* Gallery Item 1 */}
          <div className="gallery-item group relative overflow-hidden shadow-md">
            <img src={g1} className="w-full h-auto" alt="Gallery Image 1" />
            <div className="gallery-overlay absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <a href="#" className="text-white text-2xl">
                <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="gallery-item group relative overflow-hidden shadow-md">
            <img src={g2} className="w-full h-auto" alt="Gallery Image 2" />
            <div className="gallery-overlay absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <a href="#" className="text-white text-2xl">
                <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="gallery-item group relative overflow-hidden shadow-md">
            <img src={g3} className="w-full h-auto" alt="Gallery Image 3" />
            <div className="gallery-overlay absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <a href="#" className="text-white text-2xl">
                <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>

          {/* Gallery Item 4 */}
          <div className="gallery-item group relative overflow-hidden shadow-md">
            <img src={g4} className="w-full h-auto" alt="Gallery Image 4" />
            <div className="gallery-overlay absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <a href="#" className="text-white text-2xl">
                <i className="fas fa-search-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galleri;