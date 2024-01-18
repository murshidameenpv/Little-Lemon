import bannerImg from '../images/restauranfood.jpg'
function Header() {
  return (
      <header className="header">
          <section>
              {/* banner text */}
              <div className="banner">
                  <h2>Little Lemon</h2>
                  <h3>Chicago</h3>
                  <p>We are family owned mediterranean restaurant focused on traditional recipes served with a modern twist</p>
                  <button aria-label="On Click">
                  Reserve Table</button>
              </div>
              <div className="banner-img">
                  <img src={bannerImg} alt="banner" />
              </div>
              
          </section>
   </header>
  )
}

export default Header