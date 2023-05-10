const Nav = () => {
  return (
    <>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid nav-container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/discussion">
                  Discussion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
