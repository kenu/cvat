# Module CVAT-CANVAS-3D

## Description

The CVAT module written in TypeScript language.
It presents a canvas to viewing, drawing and editing of 3D annotations.

## Versioning

If you make changes in this package, please do following:

- After not important changes (typos, backward compatible bug fixes, refactoring) do: `npm version patch`
- After changing API (backward compatible new features) do: `npm version minor`
- After changing API (changes that break backward compatibility) do: `npm version major`

## Commands

- Building of the module from sources in the `dist` directory:

```bash
npm run build
npm run build -- --mode=development     # without a minification
```

### API Methods

```ts
interface Canvas3d {
  html(): HTMLDivElement;
  setup(frameData: any): void;
  mode(): Mode;
  isAbleToChangeFrame(): boolean;
  render(): void;
}
```

### WEB

```js
// Create an instance of a canvas
const canvas = new window.canvas.Canvas3d();

console.log('Version ', window.canvas.CanvasVersion);
console.log('Current mode is ', window.canvas.mode());

// Put canvas to a html container
htmlContainer.appendChild(canvas.html());
```
