import logo from '../images/Logo .svg'
function Footer() {
  return (
      <footer>
          <section>
              <div className="company-info">
               <img src={logo} alt="" />
               <p>
                 We are family owned mediterranean restaurant,focused on traditional recipes served with modern twist
               </p> 
              </div>
              <div>
                  <h3>Imoprtant Links</h3>
                  <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/">About</a></li>
                      <li><a href="/">Menu</a></li>
                      <li><a href="/">Reservations</a></li>
                  </ul>
              </div>
              <div>
                  <h3>Contact Us</h3>
                  <ul>
                      <li>Address:<br/>123 Twin city,New york</li>
                      <li>Phone:<br/>+1 (744)37374</li>
                      <li>Email:<br/>contact@littlelemon.com</li>

                  </ul>
              </div>
              <div>
                  <h3>Social Media Links</h3>
                  <ul>
                      <li><a href="/">Facebook</a></li>
                      <li><a href="/">Instagram</a></li>
                      <li><a href="/">Twitter</a></li>
                  </ul>
              </div>
          </section>

    </footer>
  )
}

export default Footer