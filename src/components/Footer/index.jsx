import "../../assets/styles/components.css";

// Footer Component
function Footer() {
  const starCount = 5; // Number of stars to display

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push(
        <i key={i} className="fa-solid fa-star yellow-star"></i>
      );
    }

    return stars;
  };

  return (
    <div>
      <footer className="footer">
        <div>Licence No: LI22_005083 {renderStars()}</div>
        <div>
          Made with ❤️️ by Alana &copy;{" "}
          <a href="https://github.com/AlanaBF">
            <i className="fa navbarIcons fa-github"></i>
          </a>{" "}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
