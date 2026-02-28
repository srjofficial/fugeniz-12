"use client";

const SponsorsSection = () => {
  const row1 = [
    "/images/sponors/newq_01.png",
    "/images/sponors/newq_02.png",
    "/images/sponors/newq_03.png",
    "/images/sponors/newq_04.png",
  ];

  const row2 = [
    "/images/sponors/newq_05.png",
    "/images/sponors/newq_06.png",
    "/images/sponors/newq_07.png",
    "/images/sponors/newq_08.png",
  ];

  return (
    <>
      <section className="sponsor-section">
        <h2 className="sponsor-title">Our Sponsors</h2>

        {/* Title Sponsor */}
        <div className="title-sponsor-wrapper">
          <h3 className="title-sponsor-label">Title Sponsor</h3>
          <img
            src="/images/sponors/title.png"
            alt="Title Sponsor"
            className="title-sponsor-img"
          />
        </div>

        {/* Row 1 */}
        <div className="marquee">
          <div className="track scroll-left">
            {[...row1, ...row1].map((img, index) => (
              <div className="logo" key={index}>
                <img src={img} alt="Sponsor" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="marquee">
          <div className="track scroll-right">
            {[...row2, ...row2].map((img, index) => (
              <div className="logo" key={index}>
                <img src={img} alt="Sponsor" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @font-face {
          font-family: 'Asoka';
          src: url('/fonts/asoka.ttf') format('truetype');
        }

        .sponsor-section {
          background: #000;
          padding: 120px 0;
          overflow: hidden;
          text-align: center;
        }

        .sponsor-title {
          font-family: 'Asoka', serif;
          color: #b30000;
          font-size: 50px;
          margin-bottom: 40px;
          letter-spacing: 3px;
        }

        .title-sponsor-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
        }

        .title-sponsor-label {
          font-family: var(--font-cinzel), 'Cinzel', serif;
          color: #ffffff;
          font-size: 28px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .title-sponsor-img {
          max-width: 320px;
          width: 80%;
          object-fit: contain;
        }

        .marquee {
          overflow: hidden;
          width: 100%;
          position: relative;
          margin-bottom: 60px;
        }

        .track {
          display: flex;
          width: max-content;
          min-width: 200%;
          gap: 80px;
        }

        .logo {
          flex: 0 0 auto;
        }

        .logo img {
          height: 100px;
          object-fit: contain;
          transition: 0.3s ease;
        }

        .logo img:hover {
          transform: scale(1.1);
        }

        /* TRUE CONTINUOUS ANIMATION */
        .scroll-left {
          animation: marqueeLeft 25s linear infinite;
        }

        .scroll-right {
          animation: marqueeRight 25s linear infinite;
        }

        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        /* Slow Down on Hover */
        .marquee:hover .scroll-left,
        .marquee:hover .scroll-right {
          animation-duration: 60s;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .sponsor-title {
            font-size: 32px;
          }

          .logo img {
            height: 70px;
          }

          .track {
            gap: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default SponsorsSection;