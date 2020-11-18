import React from "react";
import "./footer.css";

function Footer(){
    return(
        <>
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container text">
            © 2020 Made By Crystal Han
            </div>
            
                <h5 className="text">Links</h5>
                <li><a className="black-text text-lighten-3" href="https://github.com/hancc1006">Github</a></li>
                <li><a className="black-text text-lighten-3" href="https://www.linkedin.com/in/crystal-h-8a2a6b13a/">LinkedIn</a></li>
              

          </div>
        </footer>
        </>
    )
}

export default Footer;