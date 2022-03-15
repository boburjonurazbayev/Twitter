import "./Nav.css";
import React from "react";
import { Context } from "../../Context/Localization";
import Languages from "../../Localization/Languages";

// Import images
import Logo from "../../Assets/Images/Nav/twitter-logo.svg";
import Home from "../../Assets/Images/Nav/home.svg";
import Explore from "../../Assets/Images/Nav/explore.svg";
import Notification from "../../Assets/Images/Nav/notification.svg";
import Messages from "../../Assets/Images/Nav/messages.svg";
import Bookmarks from "../../Assets/Images/Nav/bookmarks.svg";
import Lists from "../../Assets/Images/Nav/lists.svg";
import Profile from "../../Assets/Images/Nav/profile.svg";
import More from "../../Assets/Images/Nav/more.svg";
import UserAvatar from "../../Assets/Images/Nav/user-avatar.svg";
import UserMore from "../../Assets/Images/Nav/user-more.svg";

function Nav() {
  const { lang, setLang } = React.useContext(Context);

  return (
    <nav className="nav">
      {/* Twitter Logo */}
      <div className="nav__inner">
        <a className="nav__link" href="#link">
          <img
            className="nav__link-logo"
            src={Logo}
            alt="Twitter`s logo"
            width="40"
            height="32"
          />
        </a>

        <select className="nav__lang" value={lang} onChange={(evt) => {
          setLang(evt.target.value)
        }}>
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
      </div>

      {/* Nav list */}

      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-item__link" href="#Home">
            <img
              className="nav-item__icon"
              src={Home}
              alt="Home icon"
              width="28"
              height="28"
            />

            <span className="nav-item__title">
              {Languages[lang].main.nav.navItem1}
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-item__link" href="#Explore">
            <img
              className="nav-item__icon"
              src={Explore}
              alt="Explore icon"
              width="28"
              height="28"
            />

            <span className="nav-item__title">
              {Languages[lang].main.nav.navItem2}
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-item__link" href="#Notifications">
            <img
              className="nav-item__icon"
              src={Notification}
              alt="Notifications icon"
              width="28"
              height="28"
            />

            <span className="nav-item__title">
              {Languages[lang].main.nav.navItem3}
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-item__link" href="#Messages">
            <img
              className="nav-item__icon"
              src={Messages}
              alt="Messages icon"
              width="28"
              height="28"
            />

            <span className="nav-item__title">
              {Languages[lang].main.nav.navItem4}
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-item__link" href="#Bookmarks">
            <img
              className="nav-item__icon"
              src={Bookmarks}
              alt="Bookmarks icon"
              width="28"
              height="28"
            />

            <span className="nav-item__title">
              {Languages[lang].main.nav.navItem5}
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-item__link" href="#Lists">
            <img
              className="nav-item__icon"
              src={Lists}
              alt="Lists icon"
              width="28"
              height="28"
            />

            <span className="nav-item__title">
              {Languages[lang].main.nav.navItem6}
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-item__link" href="#Profile">
            <img
              className="nav-item__icon"
              src={Profile}
              alt="Profile icon"
              width="28"
              height="28"
            />

            <span className="nav-item__title">
              {Languages[lang].main.nav.navItem7}
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-item__link" href="#More">
            <img
              className="nav-item__icon"
              src={More}
              alt="More icon"
              width="28"
              height="28"
            />

            <span className="nav-item__title">
              {Languages[lang].main.nav.navItem8}
            </span>
          </a>
        </li>
      </ul>

      {/* Tweet link */}

      <a className="nav__tweet-link" href="#tweetlink">
      {Languages[lang].main.nav.navTweet}
      </a>

      {/* User card */}

      <div className="user__card">
        <img
          className="user__avatar"
          src={UserAvatar}
          alt="User`s avatar"
          width="50"
          height="50"
        />

        {/* User info */}

        <div className="user-info">
          <p className="user-info__title">Bobur</p>

          <a className="user-info__link" href="#userinfolink">
            @bobur_mavlonov
          </a>
        </div>

        {/* More btn */}

        <img
          className="user__more-icon"
          src={UserMore}
          alt="More icon"
          width="17"
          height="4"
          role="button"
        />
      </div>
    </nav>
  );
}

export default Nav;
