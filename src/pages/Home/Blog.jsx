import React from 'react';
import blog1 from "../../assets/images/blog/blog1.webp";
import blog2 from "../../assets/images/blog/blog2.webp";

const Blog = () => {
    return (
        <section id="blog" className="blog_wrapper py-20 bg-[var(--bg-color)]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h6 className="text-lg font-semibold">Explore valuable tips, guides</h6>
                    <h3 className="text-3xl font-bold">Our Blog</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Blog Post 1 */}
                    <div className="blog-item shadow-md rounded-lg overflow-hidden">
                        <img src={blog1} className="w-full h-auto" alt="Blog Post 1" />
                        <div className="blog-content bg-white p-6 -mt-16 ml-6 w-4/5">
                            <h5 className="text-xl font-semibold mb-4">Blog Post Title 1</h5>
                            <p className="text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi, asperiores autem deserunt dolorem.</p>
                            <a href="#" className="main-btn mt-4 inline-block bg-[var(--primary-color)] text-white py-2 px-4 rounded-md hover:bg-[var(--secondary-color)] transition-colors duration-300">
                                Read More
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 2 */}
                    <div className="blog-item shadow-md rounded-lg overflow-hidden">
                        <img src={blog1} className="w-full h-auto" alt="Blog Post 2" />
                        <div className="blog-content bg-white p-6 -mt-16 ml-6 w-4/5">
                            <h5 className="text-xl font-semibold mb-4">Blog Post Title 2</h5>
                            <p className="text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi, asperiores autem deserunt dolorem.</p>
                            <a href="#" className="main-btn mt-4 inline-block bg-[var(--primary-color)] text-white py-2 px-4 rounded-md hover:bg-[var(--secondary-color)] transition-colors duration-300">
                                Read More
                            </a>
                        </div>
                    </div>

                    {/* Blog Post 3 */}
                    <div className="blog-item shadow-md rounded-lg overflow-hidden">
                        <img src={blog2} className="w-full h-auto" alt="Blog Post 3" />
                        <div className="blog-content bg-white p-6 -mt-16 ml-6 w-4/5">
                            <h5 className="text-xl font-semibold mb-4">Blog Post Title 3</h5>
                            <p className="text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi, asperiores autem deserunt dolorem.</p>
                            <a href="#" className="main-btn mt-4 inline-block bg-[var(--primary-color)] text-white py-2 px-4 rounded-md hover:bg-[var(--secondary-color)] transition-colors duration-300">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
