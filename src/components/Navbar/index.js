import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <div className="nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="nav-middle-container">
                <Link to="/">
                  <li className="nav-item">Home</li>
                </Link>
                <Link to="/about">
                  <li className="nav-item">About</li>
                </Link>
              </ul>
              <button type="button" onClick={onChangeTheme} className="btn">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="change-theme"
                />
              </button>
            </div>
          ) : (
            <div className="dark-nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="nav-middle-container">
                <Link to="/">
                  <li className="dark-nav-item">Home</li>
                </Link>
                <Link to="/about">
                  <li className="dark-nav-item">About</li>
                </Link>
              </ul>
              <button
                type="button"
                onClick={onChangeTheme}
                className="btn"
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="change-theme"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
