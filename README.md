# Ui-React-Core
A collection of reusable UI services and components for React Projects

## Useful References

- [Step by step: Building and publishing an NPM Typescript package](https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c)
- [Creating and publishing scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Unpublishing packages from the registry](https://docs.npmjs.com/unpublishing-packages-from-the-registry)

## Useful cli commands

- `npm publish --access public` publish package (public is required unless you pay monthly subscription)
- `npm unpublish -f` - remove the package (can only be done in the first 72 hours)
- `npm version {patch|minor|major}` - update version number (in ascending order of importance)
- `npm publish` - publish updated version