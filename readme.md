# ux core demo

# Use (npm)

Update the `lib` with new Angular components. In `lib/index.ts`, add the following statement:

```typescript
export * from './yourcomponent.ts';
```

## Adding css.

Add style sheets in `lib/styles`. This directory _and only this directory_ will be added to the dist package (under `dist/styles`) whenever the build is ran.

Developers can then link to stylesheets like so:

```html
<link rel="stylesheet" src="pathTo/node_modules/ux-core/styles/style_sheet.css"/>
```

# Deploy

1. Update the version in `/package.json`
2. `npm run build`
3. `cd` into `dist`
4. `npm publish`

