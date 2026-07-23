import { useRef, useState, memo } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Icon from 'components/Icon';
import NavToggle from './NavToggle';
import ThemeToggle from './ThemeToggle';
import { useWindowSize, useAppContext } from 'hooks';
import { workLinks } from './navDataWork';
import { reflow } from 'utils/transition';
import { media, msToNum, numToMs } from 'utils/style';
import { tokens } from 'components/ThemeProvider/theme';
import { blurOnMouseUp } from 'utils/focus';
import './index.css';

function Header(props) {
  const { menuOpen, dispatch } = useAppContext();
  const { location } = props;
  const [hashKey, setHashKey] = useState();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  const handleNavClick = () => {
    setHashKey(Math.random().toString(32).substr(2, 8));
  };

  const handleMobileNavClick = () => {
    handleNavClick();
    if (menuOpen) dispatch({ type: 'toggleMenu' });
  };

  const isMatch = ({ match, hash = '' }) => {
    if (!match) return false;
    return `${match.url}${hash}` === `${location.pathname}${location.hash}`;
  };

  return (
    <header className="navbar-work" ref={headerRef}>
      <RouterLink
        to={{ pathname: '/', hash: '#intro', state: hashKey }}
        onClick={handleMobileNavClick}
        onMouseUp={blurOnMouseUp}
      >
      </RouterLink>
      <NavToggle onClick={() => dispatch({ type: 'toggleMenu' })} menuOpen={menuOpen} />
      <nav className="navbar-work__nav">
        <div className="navbar-work__nav-list">
          {workLinks.map(({ label, pathname, hash }) => (
            <NavLink
              exact
              className="navbar-work__nav-link"
              activeClassName="navbar-work__nav-link--active"
              isActive={match => isMatch({ match, hash })}
              onClick={handleNavClick}
              key={label}
              to={{ pathname, hash, state: hashKey }}
              onMouseUp={blurOnMouseUp}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
      <Transition
        mountOnEnter
        unmountOnExit
        in={menuOpen}
        timeout={{ enter: 0, exit: msToNum(tokens.base.durationL) }}
        onEnter={reflow}
      >
        {status => (
          <nav className={`navbar-work__mobile-nav navbar-work__mobile-nav--${status}`}>
            {workLinks.map(({ label, pathname, hash }, index) => (
              <NavLink
                className={`navbar-work__mobile-nav-link navbar-work__mobile-nav-link--${status}`}
                activeClassName="navbar-work__mobile-nav-link--active"
                key={label}
                onClick={handleMobileNavClick}
                to={{ pathname, hash, state: hashKey }}
                onMouseUp={blurOnMouseUp}
                style={{
                  transitionDelay: numToMs(
                    Number(msToNum(tokens.base.durationS)) + index * 50
                  ),
                }}
              >
                {label}
              </NavLink>
            ))}
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle />}
    </header>
  );
}

export default memo(Header);
