import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './create-game.css'

const CreateGame = (props) => {
  return (
    <div className="create-game-container">
      <Helmet>
        <title>CreateGame - Character NFT template</title>
        <meta
          property="og:title"
          content="CreateGame - Character NFT template"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="create-game-navbar">
        <span className="create-game-logo">Character</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="create-game-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="create-game-nav"
          >
            <button className="create-game-button button-clean button">
              About
            </button>
            <button className="create-game-button1 button-clean button">
              Features
            </button>
            <button className="create-game-button2 button-clean button">
              Pricing
            </button>
            <button className="create-game-button3 button-clean button">
              Team
            </button>
            <button className="create-game-button4 button-clean button">
              Blog
            </button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="create-game-btn-group">
          <div className="create-game-socials">
            <button className="social button">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="create-game-image"
              />
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="create-game-image01"
              />
            </button>
          </div>
          <button className="button">View on Opensea</button>
        </div>
        <div data-thq="thq-burger-menu" className="create-game-burger-menu">
          <button className="button create-game-button5">
            <svg viewBox="0 0 1024 1024" className="create-game-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="create-game-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="create-game-nav1"
          >
            <div className="create-game-container1">
              <span className="create-game-logo1">Character</span>
              <div data-thq="thq-close-menu" className="create-game-menu-close">
                <svg viewBox="0 0 1024 1024" className="create-game-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="create-game-nav2"
            >
              <span className="create-game-text">About</span>
              <span className="create-game-text1">Features</span>
              <span className="create-game-text2">Pricing</span>
              <span className="create-game-text3">Team</span>
              <span className="create-game-text4">Blog</span>
            </nav>
            <div className="create-game-container2">
              <button className="create-game-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="create-game-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="create-game-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="create-game-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="create-game-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="create-game-cards">
        <div className="create-game-row">
          <div className="create-game-card">
            <div className="create-game-avatar">
              <img
                alt="image"
                src="/Avatars/avatar.svg"
                className="create-game-avatar1"
              />
            </div>
            <div className="create-game-main">
              <div className="create-game-content">
                <h2 className="create-game-header">
                  10,000+ unique characters
                </h2>
                <p className="create-game-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="create-game-learn button">
                <span className="create-game-text5">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="create-game-image02"
                />
              </button>
            </div>
          </div>
          <div className="create-game-card1">
            <div className="create-game-avatar2">
              <img
                alt="image"
                src="/Avatars/default-avatar.svg"
                className="create-game-avatar3"
              />
            </div>
            <div className="create-game-main1">
              <div className="create-game-content1">
                <h2 className="create-game-header1">
                  Create yourself for the metaverse
                </h2>
                <p className="create-game-description1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="create-game-learn1 button">
                <span className="create-game-text6">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="create-game-image03"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="create-game-card2">
          <div className="create-game-avatar4">
            <img
              alt="image"
              src="/Avatars/light-avatar.svg"
              className="create-game-avatar5"
            />
          </div>
          <div className="create-game-row1">
            <div className="create-game-main2">
              <div className="create-game-content2">
                <h2 className="create-game-header2">
                  Create yourself for the metaverse
                </h2>
                <p className="create-game-description2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="create-game-learn2 button">
                <span className="create-game-text7">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="create-game-image04"
                />
              </button>
            </div>
            <img
              alt="image"
              src="/group%202262.svg"
              className="create-game-image05"
            />
          </div>
        </div>
      </section>
      <footer className="create-game-footer">
        <div className="create-game-main3">
          <div className="create-game-branding">
            <div className="create-game-heading">
              <h2 className="create-game-logo2">Character</h2>
              <p className="create-game-caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className="create-game-socials1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="create-game-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="create-game-image06"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="create-game-discord1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="create-game-image07"
                />
              </a>
            </div>
          </div>
          <div className="create-game-links">
            <div className="create-game-list">
              <h3 className="create-game-heading1">Site</h3>
              <div className="create-game-items">
                <button className="create-game-link button-clean button">
                  About
                </button>
                <button className="create-game-link1 button-clean button">
                  Collection
                </button>
                <button className="create-game-link2 button-clean button">
                  Roadmap
                </button>
                <button className="create-game-link3 button-clean button">
                  Features
                </button>
              </div>
            </div>
            <div className="create-game-list1">
              <h3 className="create-game-heading2">Company</h3>
              <div className="create-game-items1">
                <button className="create-game-link4 button-clean button">
                  Team
                </button>
                <button className="create-game-link5 button-clean button">
                  Press
                </button>
                <button className="create-game-link6 button-clean button">
                  Terms
                </button>
                <button className="create-game-link7 button-clean button">
                  Limitations
                </button>
                <button className="create-game-link8 button-clean button">
                  Licenses
                </button>
              </div>
            </div>
          </div>
          <div className="create-game-socials2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="create-game-twitter2 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="create-game-image08"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="create-game-discord2 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="create-game-image09"
              />
            </a>
          </div>
        </div>
        <span className="create-game-copyright">
          © 2022 Character. All Rights Reserved.
        </span>
      </footer>
      <div>
        <div className="create-game-container4">
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

export default CreateGame
