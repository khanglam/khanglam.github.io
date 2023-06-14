const AboutPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
          gap: "20px",
        }}
      >
        <h3>
          Hello! I'm a passionate Software/AI Enthusiast and currently a
          Software QA Engineer II at Mercury Insurance Company. I thrive on
          conquering bugs and forging innovative projects in the realm of
          software development. When I'm not immersed in coding, I enjoy
          connecting with friends, creating exciting projects, and diving into
          the captivating realm of video games. Let's connect!
        </h3>
        <h3>
          Resume{"  ("}
          <a
            href="./public/KhangLam.pdf"
            download="KhangLam.pdf"
            style={{ color: "lightBlue" }} // Change color to blue
          >
            Download
          </a>
          {")"}
        </h3>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
