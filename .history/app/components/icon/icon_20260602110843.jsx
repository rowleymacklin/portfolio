import classNames from 'classnames';
import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as Error } from 'assets/icons/error.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg';
import { ReactComponent as Email } from 'assets/icons/email.svg';
import { ReactComponent as Call } from 'assets/icons/call.svg';

import './icon.module.css';

export const icons = {
  linkedin: Linkedin,  
  email: Email, 
  call: Call,  
  github: Github,
  error: Error,
  menu: Menu,
  close: Close,
};

const Icon = ({ icon, style, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classNames('icon', className)} {...rest} />
  );
};

export default Icon;