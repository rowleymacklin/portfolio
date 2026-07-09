import classNames from 'classnames';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as Error } from './error.svg';
import { ReactComponent as Menu } from './menu.svg';
import { ReactComponent as Close } from './close.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Email } from './email.svg';
import { ReactComponent as Call } from './call.svg';

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