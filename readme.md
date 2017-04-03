# ux core demo

# Use

Update the `lib` with new Angular components. In `lib/index.ts`, add the following statement:

```typescript
export * from './yourcomponent.ts';
```

# Deploy

1. Update the version in `/package.json`
2. `npm run build`
3. `cd` into `dist`
4. `npm publish`