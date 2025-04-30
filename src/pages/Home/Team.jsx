import React from 'react';
import team1 from '../../assets/images/team/team1.webp';
import team2 from '../../assets/images/team/team2.webp';
import team3 from '../../assets/images/team/team3.webp';

const Team = () => {
  return (
    <section id="team" className="team_wrapper py-20 bg-[var(--bg-color)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h6 className="text-lg font-semibold">Our Exellent Team</h6>
          <h3 className="text-3xl font-bold">Our Team</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="team-item relative overflow-hidden">
            <img src={team1} className="w-full h-auto object-cover" alt="Team Member 1" />
            <div className="team-info absolute w-full bottom-0 text-center py-5 px-6 bg-[var(--secondary-color)] text-white transition-all duration-300 ease-in-out translate-y-[4.6875rem]">
              <h5 className="text-xl font-semibold">John Doe</h5>
              <p className="mb-4">Manager</p>
              <ul className="social-network flex items-center justify-center space-x-4 py-5 px-6 bg-[var(--primary-color)] -mx-6 -mb-6 transition-all duration-300 ease-in-out">
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-item relative overflow-hidden">
            <img src={team2} className="w-full h-auto object-cover" alt="Team Member 2" />
            <div className="team-info absolute w-full bottom-0 text-center py-5 px-6 bg-[var(--secondary-color)] text-white transition-all duration-300 ease-in-out translate-y-[4.6875rem]">
              <h5 className="text-xl font-semibold">Jane Smith</h5>
              <p className="mb-4">Receptionist</p>
              <ul className="social-network flex items-center justify-center space-x-4 py-5 px-6 bg-[var(--primary-color)] -mx-6 -mb-6 transition-all duration-300 ease-in-out">
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-item relative overflow-hidden">
            <img src={team3} className="w-full h-auto object-cover" alt="Team Member 3" />
            <div className="team-info absolute w-full bottom-0 text-center py-5 px-6 bg-[var(--secondary-color)] text-white transition-all duration-300 ease-in-out translate-y-[4.6875rem]">
              <h5 className="text-xl font-semibold">Emily Brown</h5>
              <p className="mb-4">Chef</p>
              <ul className="social-network flex items-center justify-center space-x-4 py-5 px-6 bg-[var(--primary-color)] -mx-6 -mb-6 transition-all duration-300 ease-in-out">
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="w-8 h-8 inline-block rounded-full text-white border border-[var(--bg-white)] line-h-8 text-sm">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
