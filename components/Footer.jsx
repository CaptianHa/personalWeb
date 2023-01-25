import React from "react"

export default function Footer() {
    return (
      <div>
        <footer className="footer">
          <div className="footer--header">
            <p1 className="footer--text">Let's Talk</p1>
            <br></br>
            <p2 className="footer--text2">Connect with me here</p2>
          </div>

          <span className="social--media">
            <a
              href="https://www.linkedin.com/in/hayatotsujii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </span>
          <span className="social--media">
            <a
              href = "mailto:htsujii@zagmail.gonzaga.edu"
            >
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </span>
          <span className="social--media">
            <a
              href="https://github.com/CaptianHa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </span>
        </footer>
      </div>
    );
}
