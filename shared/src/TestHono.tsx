import React from 'react';
const { hc } = require("hono/dist/client") as typeof import("hono/client");
import { type ApiRoutes } from '@backend/index'
const client = hc<ApiRoutes>("/");


const TestHono = () => {
  React.useEffect(() => {
    console.log('Hono client initialized:', client);
  }, []);

  return null;
};

export default TestHono;