# hono-expo-bun-template

A project that makes uses of hono-dev for strongly typed backed->frontend APIs using zod schema and validation.


Prerequisites: 
- Ensure that bun is installed
- Add `EXPO_USE_METRO_WORKSPACE_ROOT=1` to ./mobile/.env otherwise expo's web view will not work.


## Setup

1. Install dependencies:
   ```
   bun install
   ```

2. Run the mobile (for both mobile and web):
   ```sh
   bun dev:mobile
   ```

3. Run the backend:
   ```sh
   bun dev:backend
   ```

## Project Structure

- `backend`: Bun backend application
- `mobile`: React Native mobile application
- `shared`: Shared utility components.


Looks like monorepos are hard to support, perhaps top level package imports is an option,. 

Ref: https://github.com/facebook/react-native/issues/33466 
https://github.com/honojs/hono/issues/1773
https://github.com/ts-rest/ts-rest/issues/664