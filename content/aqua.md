## About

<div class="px-8 py-8 space-x-2 border rounded bg-lily border-cool-gray-300">
  An in-progress, web-based recreation of one of the most memorable UI libraries of all time. Made just for fun.
</div>

## Elements

### Buttons

#### Standard Buttons

<div class="px-8 py-8 space-x-2 border rounded bg-lily border-cool-gray-300">
  <button class="px-5 py-1 text-sm font-light leading-4 border rounded-full shadow border-cool-gray-400 bg-gradient-button from-foam to-jordy reflect reflect-33 reflect-round active:from-foam-dark active:to-jordy-dark active:border-cool-gray-500 focus:outline-none focus:shadow-outline-blue">
    <span class="relative z-10">Leopard Blue</span>
  </button>
  <button class="px-5 py-1 text-sm font-light leading-4 border rounded-full shadow border-cool-gray-400 bg-gradient-button from-white to-alto reflect reflect-50 active:reflect-33 reflect-round active:from-foam-dark active:to-jordy-dark active:border-cool-gray-500 focus:outline-none focus:shadow-outline-blue">
    <span class="relative z-10">Leopard Gray</span>
  </button>
  <button class="px-5 py-1 text-sm font-light leading-4 border rounded shadow border-cool-gray-400 bg-gradient-button from-foam to-jordy reflect reflect-33 active:from-foam-dark active:to-jordy-dark active:border-cool-gray-500 focus:outline-none focus:shadow-outline-blue">
    <span class="relative z-10">Lion Blue</span>
  </button>
  <button class="px-5 py-1 text-sm font-light leading-4 border rounded shadow border-cool-gray-400 bg-gradient-button from-notwhite to-notwhite reflect reflect-50 active:reflect-33 active:from-foam-dark active:to-jordy-dark active:border-cool-gray-500 focus:outline-none focus:shadow-outline-blue">
    <span class="relative z-10">Lion Gray</span>
  </button>
</div>

<!-- prettier-ignore -->
```html
<!-- Leopard Blue -->
<button class="px-5 py-1 text-sm font-light leading-4 border rounded-full shadow border-cool-gray-400 bg-gradient-button from-foam to-jordy reflect reflect-33 reflect-round active:from-foam-dark active:to-jordy-dark active:border-cool-gray-500 focus:outline-none focus:shadow-outline-blue">
  <span class="relative z-10">Leopard Blue</span>
</button>

<!-- Leopard Gray -->
<button class="px-5 py-1 text-sm font-light leading-4 border rounded-full shadow border-cool-gray-400 bg-gradient-button from-white to-alto reflect reflect-50 active:reflect-33 reflect-round active:from-foam-dark active:to-jordy-dark active:border-cool-gray-500 focus:outline-none focus:shadow-outline-blue">
  <span class="relative z-10">Leopard Gray</span>
</button>

<!-- Lion Blue -->
<button class="px-5 py-1 text-sm font-light leading-4 border rounded shadow border-cool-gray-400 bg-gradient-button from-foam to-jordy reflect reflect-33 active:from-foam-dark active:to-jordy-dark active:border-cool-gray-500 focus:outline-none focus:shadow-outline-blue">
  <span class="relative z-10">Lion Blue</span>
</button>

<!-- Lion Gray -->
<button class="px-5 py-1 text-sm font-light leading-4 border rounded shadow border-cool-gray-400 bg-gradient-button from-notwhite to-notwhite reflect reflect-50 active:reflect-33 active:from-foam-dark active:to-jordy-dark active:border-cool-gray-500 focus:outline-none focus:shadow-outline-blue">
  <span class="relative z-10">Lion Gray</span>
</button>
```

#### "Textured" Buttons

<div class="px-8 py-8 space-x-2 border rounded bg-lily border-cool-gray-300">
  <button class="px-5 text-sm font-light leading-6 border rounded active:shadow-inner-md focus:outline-none focus:shadow-outline-blue border-cool-gray-400 bg-gradient-to-t from-mercury to-alabaster active:from-silver active:to-silver active:border-cool-gray-500">
    Normal
  </button>
  <button class="px-5 text-sm font-light leading-5 border rounded-full active:shadow-inner-md focus:outline-none focus:shadow-outline-blue border-cool-gray-400 bg-gradient-to-t from-mercury to-alabaster active:from-silver active:to-silver active:border-cool-gray-500">
    Rounded
  </button>
</div>

<!-- prettier-ignore -->
```html
<!-- Normal -->
<button class="px-5 text-sm font-light leading-6 border rounded active:shadow-inner-md focus:outline-none focus:shadow-outline-blue border-cool-gray-400 bg-gradient-to-t from-mercury to-alabaster active:from-silver active:to-silver active:border-cool-gray-500">
  Normal
</button>

<!-- Rounded -->
<button class="px-5 text-sm font-light leading-5 border rounded-full active:shadow-inner-md focus:outline-none focus:shadow-outline-blue border-cool-gray-400 bg-gradient-to-t from-mercury to-alabaster active:from-silver active:to-silver active:border-cool-gray-500">
  Rounded
</button>
```

### Forms

#### Text Inputs

<div class="flex items-center px-8 py-8 space-x-2 border rounded bg-lily border-cool-gray-300">
  <input class="px-1 py-0.5 text-sm leading-2 placeholder-gray-400 border border-gray-400 shadow-inner-input focus:outline-none focus:shadow-outline focus:border-blue-600" placeholder="Text Field" />
  <div class="relative">
    <svg class="absolute top-0 z-10 w-3 h-3 ml-2 my-3.5 stroke-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.17375 2.72552c-1.44521 0-2.83123.57408-3.85314 1.59595-1.02192 1.02188-1.59603 2.40784-1.59603 3.85299s.57411 2.83114 1.59603 3.85294c1.02191 1.0219 2.40793 1.596 3.85314 1.596 1.44521 0 2.83125-.5741 3.85315-1.596 1.0219-1.0218 1.596-2.40779 1.596-3.85294s-.5741-2.83111-1.596-3.85299C11.005 3.2996 9.61896 2.72552 8.17375 2.72552zM1.5e-7 8.17446C-.000164 6.8881.303304 5.61987.885723 4.47291 1.46814 3.32595 2.31307 2.33264 3.35178 1.57378 4.39049.814916 5.59366.311923 6.86342.105709c1.26977-.206214 2.57029-.10982634 3.79578.281325 1.2255.391151 2.3414 1.066016 3.2568 1.969716.9155.9037 1.6048 2.01071 2.0117 3.231.407 1.22029.5201 2.5194.3303 3.79168-.1898 1.27227-.6772 2.48177-1.4226 3.53017l4.7822 4.7818c.2481.2569.3855.601.3823.9582-.0031.3572-.1463.6988-.3989.9514-.2526.2526-.5943.3958-.9515.3989-.3571.0032-.7013-.1342-.9582-.3823l-4.7809-4.7804c-1.2228.8694-2.6614 1.3856-4.15812 1.4918-1.49671.1062-2.99377-.2017-4.32715-.8898-1.33337-.6881-2.4516-1.7299-3.23214-3.0114C.412448 11.1464-.0002916 9.67487 1.5e-7 8.17446z" clip-rule="evenodd"/></svg>
    <input class="pr-2 pl-6 py-0.5 relative text-sm leading-2 placeholder-gray-400 border border-gray-400 shadow-inner-input focus:outline-none rounded-full focus:shadow-outline focus:border-blue-600" placeholder="Search" />
  </div>
</div>

<!-- prettier-ignore -->
```html
<!-- Normal -->
<input class="px-1 py-0.5 text-sm leading-2 placeholder-gray-400 border border-gray-400 shadow-inner-input focus:outline-none focus:shadow-outline focus:border-blue-600" placeholder="Text Field" />

<!-- Search -->
<div class="relative">
  <svg class="absolute top-0 z-10 w-3 h-3 ml-2 my-3.5 stroke-3 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.17375 2.72552c-1.44521 0-2.83123.57408-3.85314 1.59595-1.02192 1.02188-1.59603 2.40784-1.59603 3.85299s.57411 2.83114 1.59603 3.85294c1.02191 1.0219 2.40793 1.596 3.85314 1.596 1.44521 0 2.83125-.5741 3.85315-1.596 1.0219-1.0218 1.596-2.40779 1.596-3.85294s-.5741-2.83111-1.596-3.85299C11.005 3.2996 9.61896 2.72552 8.17375 2.72552zM1.5e-7 8.17446C-.000164 6.8881.303304 5.61987.885723 4.47291 1.46814 3.32595 2.31307 2.33264 3.35178 1.57378 4.39049.814916 5.59366.311923 6.86342.105709c1.26977-.206214 2.57029-.10982634 3.79578.281325 1.2255.391151 2.3414 1.066016 3.2568 1.969716.9155.9037 1.6048 2.01071 2.0117 3.231.407 1.22029.5201 2.5194.3303 3.79168-.1898 1.27227-.6772 2.48177-1.4226 3.53017l4.7822 4.7818c.2481.2569.3855.601.3823.9582-.0031.3572-.1463.6988-.3989.9514-.2526.2526-.5943.3958-.9515.3989-.3571.0032-.7013-.1342-.9582-.3823l-4.7809-4.7804c-1.2228.8694-2.6614 1.3856-4.15812 1.4918-1.49671.1062-2.99377-.2017-4.32715-.8898-1.33337-.6881-2.4516-1.7299-3.23214-3.0114C.412448 11.1464-.0002916 9.67487 1.5e-7 8.17446z" clip-rule="evenodd"/></svg>
  <input class="pr-2 pl-6 py-0.5 relative text-sm leading-2 placeholder-gray-400 border border-gray-400 shadow-inner-input focus:outline-none rounded-full focus:shadow-outline focus:border-blue-600" placeholder="Search" />
</div>
```

#### Select Inputs

<div class="flex items-center px-8 py-8 space-x-2 border rounded bg-lily border-cool-gray-300">
  <div class="flex border rounded shadow border-cool-gray-400 bg-gradient-button from-notwhite to-notwhite reflect reflect-50">
    <select class="z-10 py-1 pl-1.5 pr-8 text-sm font-light leading-4 bg-transparent appearance-none focus:outline-none active:outline-none">
      <option>
        Lion Select
      </option>
      <option>
        Option Two
      </option>
    </select>
    <div class="absolute inset-y-0 right-0 z-10 pointer-events-none">
      <div class="flex items-center h-full px-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="7" class="fill-current " viewBox="0 0 16 32" stroke-width="0" fill="none"><path fill="#040404" d="M8 32L1 20h14L8 32zM8 0l7 12H1L8 0z" /></svg>
      </div>
    </div>
  </div>
  <div class="flex border rounded shadow border-cool-gray-400 bg-gradient-button from-white to-alto reflect reflect-66">
    <select class="z-10 py-1 pl-1.5 pr-8 text-sm font-light leading-4 bg-transparent appearance-none focus:outline-none active:outline-none">
      <option>
        Leopard Select
      </option>
      <option>
          Option Two
      </option>
    </select>
    <div class="absolute inset-y-0 right-0 z-10 pointer-events-none">
      <div class="flex items-center h-full px-2 bg-gradient-button from-foam-dark to-jordy-dark reflect reflect-33">
        <svg xmlns="http://www.w3.org/2000/svg" width="7" class="fill-current " viewBox="0 0 16 32" fill="none"><path fill="#040404" d="M8 32L1 20h14L8 32zM8 0l7 12H1L8 0z" /></svg>
      </div>
    </div>
  </div>
</div>

<!-- prettier-ignore -->
```html
<!-- Lion Select -->
<div class="flex border rounded shadow border-cool-gray-400 bg-gradient-button from-notwhite to-notwhite reflect reflect-50">
  <select class="z-10 py-1 pl-1.5 pr-8 text-sm font-light leading-4 bg-transparent appearance-none focus:outline-none active:outline-none">
    <option>
      Lion Select
    </option>
    <option>
      Option Two
    </option>
  </select>
  <div class="absolute inset-y-0 right-0 z-10 pointer-events-none">
    <div class="flex items-center h-full px-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="7" class="fill-current " viewBox="0 0 16 32" stroke-width="0" fill="none"><path fill="#040404" d="M8 32L1 20h14L8 32zM8 0l7 12H1L8 0z" /></svg>
    </div>
  </div>
</div>

<!-- Leopard Select -->
<div class="flex border rounded shadow border-cool-gray-400 bg-gradient-button from-white to-alto reflect reflect-66">
  <select class="z-10 py-1 pl-1.5 pr-8 text-sm font-light leading-4 bg-transparent appearance-none focus:outline-none active:outline-none">
    <option>
      Leopard Select
    </option>
    <option>
        Option Two
    </option>
  </select>
  <div class="absolute inset-y-0 right-0 z-10 pointer-events-none">
    <div class="flex items-center h-full px-2 bg-gradient-button from-foam-dark to-jordy-dark reflect reflect-33">
      <svg xmlns="http://www.w3.org/2000/svg" width="7" class="fill-current " viewBox="0 0 16 32" fill="none"><path fill="#040404" d="M8 32L1 20h14L8 32zM8 0l7 12H1L8 0z" /></svg>
    </div>
  </div>
</div>
```

## Use this theme

#### 1. Update Tailwind config

```js
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      colors: {
        // Grays
        mag: '#b3b2b5',
        silver: '#dedddd',
        lily: '#ebebeb',
        mercury: '#e5e5e5',
        alabaster: '#fcfcfc',
        notwhite: '#ececec',
        // Blues
        alto: '#bbb',
        foam: '#dcffff',
        jordy: '#4ea4f3',
        'foam-dark': '#b7d5eb',
        'jordy-dark': '#4ea4f3',
      },
      boxShadow: {
        'inner-md': 'inset 0px 5px 5px -1px rgb(0 0 0 / 25%)',
        'inner-input': 'inset 0px 1px 2px 0px rgb(0 0 0 / 22.5%)',
      },
      strokeWidth: {
        3: '3',
        4: '4',
      },
    },
    fontFamily: {
      sans: [
        'Lucida Grande',
        'Lucida Sans Unicode',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    gradientColorStops: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('@tailwindcss/ui')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  experimental: {
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
    uniformColorPalette: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
```

#### 2. Update CSS

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

@variants active {
  .bg-gradient-button {
    position: relative;
    overflow: hidden;
    background-image: -webkit-gradient(
      linear,
      0% 0%,
      0% 100%,
      from(var(--gradient-to-color)),
      to(var(--gradient-from-color))
    );
  }

  .reflect-33::before {
    background-color: rgba(255, 255, 255, 0.33);
  }
  .reflect-50::before {
    background-color: rgba(255, 255, 255, 0.5);
  }
  .reflect-66::before {
    background-color: rgba(255, 255, 255, 0.66);
  }
}

.reflect::before {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(50% + 10px);
  left: 0;
  right: 0;
  margin: -10px auto 0 auto;
}

.reflect-round::before {
  border-radius: 7px;
  margin-top: -14px;
  width: 95%;
}
```
