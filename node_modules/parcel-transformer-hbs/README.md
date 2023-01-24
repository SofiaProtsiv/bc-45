# parcel-transformer-hbs
Transforms hbs files to template functions

Works with parcel 2

# Install

```bash
npm install --save-dev parcel-transformer-hbs
yarn add -D parcel-transformer-hbs
```

In your `.parcelrc` add: 
```json
"transformers": {
  "*.hbs": ["parcel-transformer-hbs"]
}
```

# Usage

Import your handlebars template:  

```javascript
// index.js
import templateFunction from './template.hbs';
document.body.innerHTML = templateFunction();
```

Import `index.js` from your `index.html` file:

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

# Credits
 - [Handlebars](https://handlebarsjs.com/) - A templates on steroids.
 - [Parcel](https://parceljs.org/) - Zero configuration bundler.