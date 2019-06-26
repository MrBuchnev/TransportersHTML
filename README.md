# TransportersHTML

### Project Setup
```
npm install
```

### Project Usage
```
npm run start
```

### Commentary

- Build tools used: Node-sass, prefixer and live-server (instead of webpack)
- BEM methodology in SCSS
- Custom mixin for determining screen breakpoints `..src/abstracts/mixins.scss`
- jQuery used in order to write easier JavaScript code
- HTML density switching used on images as a simpler solution to making images responsive (instead of Art Direction and Resolution Switching)
- Flickity used to make the mobile slider with the names of cities (hidden via SCSS after a certain breakpoint)
- Bootstrap used because of its easy-to-use grid system, modal component and other features
- The form has one simple validation rule for each field (AJAX not implemented)
