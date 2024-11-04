# Your Monorepo Project

This is a monorepo project using Bun workspaces.

## Setup

1. Install dependencies:
   ```sh
   bun install
   ```

2. Run the development servers:
   ```sh
   bun run dev
   ```

3. Build the project:
   ```sh
   bun run build
   ```

4. Lint the project:
   ```sh
   bun run lint
   ```

## Project Structure

- `backend`: Bun backend application
- `mobile`: React Native mobile application
- `shared`: Shared code and components

## Notes

- Ensure you have Bun installed on your system.
- For the mobile app, you'll need to have Expo CLI installed globally.

Looks like monorepos are hard to support, perhaps top level package imports is an option,. 

Ref: https://github.com/facebook/react-native/issues/33466 
https://github.com/honojs/hono/issues/1773
https://github.com/ts-rest/ts-rest/issues/664