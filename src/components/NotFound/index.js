import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="bg-container">
              <div className="content-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-image"
                />
                <h1 className="heading">Lost Your Way</h1>
                <p className="not-found">We cannot seem to find the page</p>
              </div>
            </div>
          ) : (
            <div className="dark-bg-container">
              <div className="content-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="not-found-image"
                />
                <h1 className="dark-heading">Lost Your Way</h1>
                <p className="dark-not-found">
                  We cannot seem to find the page
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
