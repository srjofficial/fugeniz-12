"use client";

import { FaInstagram } from "react-icons/fa";

const TeamSection = () => {
  return (
    <>
      <section className="team-section">

        {/* Background Image */}
        <img
          src="/images/home/teambg.png"
          alt="Theyyam"
          className="team-bg-image"
        />

        <div className="team-container">

          {/* Column 1 */}
          <div className="team-column">
            <h2 className="team-title">Website</h2>
            <a href="https://www.instagram.com/anandubiny_?igsh=MWN3eXVtNm5ud2pmag==" target="_blank">
              <FaInstagram /> Anandu Biny
            </a>
            <a href="https://www.instagram.com/a.l.e.x__.__?igsh=NnAyZWFtNXI2a2E2" target="_blank">
              <FaInstagram /> Alex Benny
            </a>
            <a href="https://www.instagram.com/_.abyn?igsh=dDBlemE5cTJvMXlj" target="_blank">
              <FaInstagram /> Abin Regi Kurian
            </a>
            <a href="https://www.instagram.com/_cyriac___?igsh=am9lbDZzZHc2aW10" target="_blank">
              <FaInstagram /> Cyriac Paul Pullan
            </a>
          </div>

          <div className="team-column">
            <h2 className="team-title">Designers</h2>
            <a href="https://www.instagram.com/ar_windx/" target="_blank">
              <FaInstagram /> Aravind R
            </a>
            <a href="https://www.instagram.com/__giribhaskar__?igsh=MTluOXJyb3J6N3RzcQ==" target="_blank">
              <FaInstagram /> M S Giribhaskar
            </a>
            <a href="https://www.instagram.com/joachimpittappillil?igsh=NTF5aWE2YWt1bjFy" target="_blank">
              <FaInstagram /> Joachim Pittappillil
            </a>
          </div>

          {/* Column 2 */}
          <div className="team-column">
            <h2 className="team-title">Creative Leads</h2>
            <a href="https://www.instagram.com/_akshay__roy?igsh=MTUzem9nbThrcXkxaw==" target="_blank">
              <FaInstagram /> Akshay Roy
            </a>
            <a href="https://www.instagram.com/dvod_46?igsh=MW52dm5pbjhiZHQwZQ==" target="_blank">
              <FaInstagram /> Davood Jamal
            </a>
          </div>

          {/* Column 3 */}
          <div className="team-column">
            <h2 className="team-title">Students Council</h2>
            <a href="https://www.instagram.com/alby_augustine_?igsh=b2F5Z2VpdWQyYnZp" target="_blank"><FaInstagram /> Alby Augustine</a>
            <a href="https://www.instagram.com/_.acsa._?igsh=MTh5b3hlYmxsd2Vueg==" target="_blank"><FaInstagram /> Acsa John</a>
            <a href="https://www.instagram.com/_a_b_y_y?igsh=Ym1rbjAzNnl6bWE3" target="_blank"><FaInstagram /> Aby Shajan</a>
            <a href="https://www.instagram.com/_juewel_?igsh=MXN5czU5djV6ZGtmaQ==" target="_blank"><FaInstagram /> Juewel John</a>
            <a href="https://www.instagram.com/mhd._.ihsan_?igsh=MXZqcDk0dmZkcHl3MA==" target="_blank"><FaInstagram /> A Muhammed Ihsan</a>
            <a href="https://www.instagram.com/m__art___in_?igsh=dGNxYWczbGJjMGly" target="_blank"><FaInstagram /> Martin P Joseph</a>
            <a href="https://www.instagram.com/regal_exe?igsh=MWg3ajB1czlxc2hzYw==" target="_blank"><FaInstagram /> Regal Teresa Boby</a>
            <a href="https://www.instagram.com/anagha_devi?igsh=MTQ1em0xc2sxY2psbg==" target="_blank"><FaInstagram /> Anagha Devi T S</a>
          </div>



        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');

        .team-section {
          position: relative;
          background: #000;
          padding: 120px 5%;
          overflow: hidden;
        }

        /* Background Image */
        .team-bg-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 550px;
          opacity: 0.08;
          pointer-events: none;
          z-index: 0;
        }

        .team-container {
          position: relative;
          display: flex;
          justify-content: space-between;
          gap: 40px;
          max-width: 1400px;
          margin: auto;
          z-index: 2;
        }

        .team-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .team-title {
          font-family: 'Cinzel', serif;
          color: #b30000;
          font-size: 24px;
          margin-bottom: 20px;
          letter-spacing: 2px;
        }

        .team-column a {
          font-family: 'Cinzel', serif;
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: 0.3s ease;
        }

        .team-column a:hover {
          color: #b30000;
          transform: translateX(5px);
        }

        /* Mobile */
        @media (max-width: 768px) {

          .team-container {
            flex-direction: column;
            text-align: center;
          }

          .team-column a {
            justify-content: center;
          }

          /* Move image downward on mobile */
          .team-bg-image {
            top: 75%;
            width: 400px;
            opacity: 0.06;
          }
        }
      `}</style>
    </>
  );
};

export default TeamSection;