function App() {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

function Header() {
  return (
    <div className="container">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
        <div className="card-content">
          <div className="card-header">
            <h1 className="card-heading">Random Name</h1>
            <h2 className="card-heading-2">Front end Developer</h2>
            <p className="card-heading-3">random.website</p>
          </div>
          <div className="card-buttons">
            <a href="#" className="card-link-email">
              <i class="fa-solid fa-envelope-open"></i>{' '}
              <p className="button-text">Email</p>
            </a>
            <a href="#" className="card-link-linked">
              <i class="fa-brands fa-linkedin-in"></i>
              <p className="button-text">LinkedIn</p>
            </a>
          </div>
          <div className="card-text">
            <h3 className="card-text-heading">About</h3>
            <p className="card-text-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus laboriosam voluptatem id dignissimos temporibus,
              eos adipisci dolore rerum exercitationem incidunt, fugiat alias
              soluta. Quam, excepturi!
            </p>
            <h3 className="card-text-heading">Interests</h3>
            <p className="card-text-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus laboriosam voluptatem id dignissimos temporibus.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <ul>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-square-facebook"></i>
          </li>
          <li>
            <i class="fa-brands fa-square-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-github"></i>
          </li>
        </ul>
      </footer>
    </div>
  )
}
export default App
