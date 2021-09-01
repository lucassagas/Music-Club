import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

type NavigationButtonProps = {
  icon: React.ReactElement;
  link: string;
  section: string;
};

export function Navigation({
  icon,
  link,
  section,
}: NavigationButtonProps): React.ReactElement {
  return (
    <Container>
      <NavLink to={link} activeClassName="active">
        {icon}
        {section?.replace('_', ' ')}
      </NavLink>
    </Container>
  );
}
