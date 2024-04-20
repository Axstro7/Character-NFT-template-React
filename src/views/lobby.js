import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './lobby.css'

const Lobby = (props) => {
  return (
    <div className="lobby-container">
      <Helmet>
        <title>Lobby - Character NFT template</title>
        <meta property="og:title" content="Lobby - Character NFT template" />
      </Helmet>
      <header data-thq="thq-navbar" className="lobby-navbar">
        <span className="lobby-logo">Character</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="lobby-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="lobby-nav"
          >
            <button className="lobby-button button-clean button">About</button>
            <button className="lobby-button1 button-clean button">
              Features
            </button>
            <button className="lobby-button2 button-clean button">
              Pricing
            </button>
            <button className="lobby-button3 button-clean button">Team</button>
            <button className="lobby-button4 button-clean button">Blog</button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="lobby-btn-group">
          <div className="lobby-socials">
            <button className="social button">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="lobby-image"
              />
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="lobby-image1"
              />
            </button>
          </div>
          <button className="button">View on Opensea</button>
        </div>
        <div data-thq="thq-burger-menu" className="lobby-burger-menu">
          <button className="button lobby-button5">
            <svg viewBox="0 0 1024 1024" className="lobby-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="lobby-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="lobby-nav1"
          >
            <div className="lobby-container1">
              <span className="lobby-logo1">Character</span>
              <div data-thq="thq-close-menu" className="lobby-menu-close">
                <svg viewBox="0 0 1024 1024" className="lobby-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="lobby-nav2"
            >
              <span className="lobby-text">About</span>
              <span className="lobby-text1">Features</span>
              <span className="lobby-text2">Pricing</span>
              <span className="lobby-text3">Team</span>
              <span className="lobby-text4">Blog</span>
            </nav>
            <div className="lobby-container2">
              <button className="lobby-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="lobby-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="lobby-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="lobby-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="lobby-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="lobby-hero">
        <div className="lobby-heading">
          <h1 className="lobby-header">Create yourself for the metaverse</h1>
          <p className="lobby-caption">
            A character custom collection is joining the NFT space on Opensea.
          </p>
        </div>
        <div className="lobby-buttons">
          <button className="button">View on Opensea</button>
          <button className="lobby-learn button-clean button">
            Learn more
          </button>
        </div>
      </section>
      <footer className="lobby-footer">
        <div className="lobby-main">
          <div className="lobby-branding">
            <div className="lobby-heading1">
              <h2 className="lobby-logo2">Character</h2>
              <p className="lobby-caption1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="lobby-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="lobby-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="lobby-image2"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="lobby-discord1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="lobby-image3"
                />
              </a>
            </div>
          </div>
          <div className="lobby-links">
            <div className="lobby-list">
              <h3 className="lobby-heading2">Site</h3>
              <div className="lobby-items">
                <button className="lobby-link button-clean button">
                  About
                </button>
                <button className="lobby-link1 button-clean button">
                  Collection
                </button>
                <button className="lobby-link2 button-clean button">
                  Roadmap
                </button>
                <button className="lobby-link3 button-clean button">
                  Features
                </button>
              </div>
            </div>
            <div className="lobby-list1">
              <h3 className="lobby-heading3">Company</h3>
              <div className="lobby-items1">
                <button className="lobby-link4 button-clean button">
                  Team
                </button>
                <button className="lobby-link5 button-clean button">
                  Press
                </button>
                <button className="lobby-link6 button-clean button">
                  Terms
                </button>
                <button className="lobby-link7 button-clean button">
                  Limitations
                </button>
                <button className="lobby-link8 button-clean button">
                  Licenses
                </button>
              </div>
            </div>
          </div>
          <div className="lobby-socials2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="lobby-twitter2 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="lobby-image4"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="lobby-discord2 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="lobby-image5"
              />
            </a>
          </div>
        </div>
        <span className="lobby-copyright">
          © 2022 Character. All Rights Reserved.
        </span>
      </footer>
      <div>
        <div className="lobby-container4">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Lobby
