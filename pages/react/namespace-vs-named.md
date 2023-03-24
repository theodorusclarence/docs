# Namespace vs Named Imports

What’s the difference between these two imports?

```jsx
import * as React from 'react'
import { useState, useEffect } from 'react'
```

Does it mean by using `import *`, it will import all of them, even the unused one to the production?

Turns out, it won’t.

## Let’s see a simpler example

### Exported

We have these components exported from components.js

```jsx
// src/components.js
export const A = () => 'A Component'
export const B = () => 'B Component'
export const C = () => 'C Component'
```

### Namespace Import

Imports all of the exported variables from a file under one name.

```jsx
import * as Component from './components'

<Component.A />
<Component.B />
```

### Named Import

Import specific variables from a file while using the original variable name

```jsx
import { A, B } from './components'

<A />
<B />
```

## Tree-Shaking

Both can be tree-shaken, if we look at the production build, only ‘A Component’ and ‘B Component’ will be there, and ‘C Component’ will not shipped to production.

### Namespace Import Production Build

![Namespace Import Production Build](/images/react/namespace-vs-named/CleanShot_2023-03-23_at_23.42.33.png)

### Named Import Production Build

![med Import Production Build](/images/react/namespace-vs-named/CleanShot_2023-03-24_at_12.48.40.png)

No difference, just use the one you like!

## Reference

[https://dev.to/mapleleaf/es6-modules-and-default-imports-p0](https://dev.to/mapleleaf/es6-modules-and-default-imports-p0)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import)
