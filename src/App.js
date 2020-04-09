import React from 'react';

import { renderRoutes } from 'react-router-config';

import './App.scss';

export const App = ({ route }) => {
  return <div>{renderRoutes(route.routes)}</div>;
};

App.defaultProps = {
  route: null,
};
