import { useState } from "react"
import { HashLink } from "react-router-hash-link"

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <div className="img-text-container">
        <img
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
          src={props.src}
          alt="header-icon"
          className="header-icon"
        />
        <p className="rohan-name">ROHAN KIRAN ADHAV</p>
      </div>

      <button
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <nav className={isOpen ? "open" : ""}>
        <ul>
          <li><HashLink className="nav-link" to="#home">Home</HashLink></li>
          <li><HashLink className="nav-link" to="/#about">About</HashLink></li>
          <li><HashLink className="nav-link" to="/#skills">Skills</HashLink></li>
          <li><HashLink className="nav-link" to="/#projects">Projects</HashLink></li>
          <li><HashLink className="nav-link" to="https://drive.google.com/drive/folders/18yUhkRHpj-0PfEHNG0lsGVxwqZvifA8G?usp=sharing">Resume</HashLink></li>
          <li><HashLink className="nav-link" to="/#certificates">Certifications</HashLink></li>
          <li><HashLink className="nav-link" to="https://github.com/rohan-adhav">Github</HashLink></li>
        </ul>
      </nav>
    </header>
  )
}
