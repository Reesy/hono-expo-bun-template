import React from 'react';
const { hc } = require("hono/dist/client") as typeof import("hono/client");
import { type ApiRoutes } from '@backend/index'
import config from './utilities/config';
const client = hc<ApiRoutes>(config.apiUrl);


const TestHono = () => {
  React.useEffect(() => {
    console.log('Hono client initialized:', client);
  }, []);

  return null;
};

export default TestHono;