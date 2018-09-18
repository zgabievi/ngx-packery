# ngx-packery

[![NPM Version](https://img.shields.io/npm/v/ngx-packery.svg?style=flat-square)](https://www.npmjs.com/package/ngx-packery)
[![NPM Size + Gzip](https://img.shields.io/bundlephobia/minzip/ngx-packery.svg?style=flat-square)](https://www.npmjs.com/package/ngx-packery)
[![NPM Downloads](https://img.shields.io/npm/dt/ngx-packery.svg?style=flat-square)](https://www.npmjs.com/package/ngx-packery)
[![NPM License](https://img.shields.io/npm/l/ngx-packery.svg?style=flat-square)](https://www.npmjs.com/package/ngx-packery)

Angular 2+ wrapper package around [Packery by Metafizzy](https://packery.metafizzy.co/). This package will help you create stunning masonry grids with only few lines of code.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Changelog](#changelog)
- [Paperwork](#paperwork)
  - [Contributing](#contributing)
  - [Issue / Feature Request](#issue--feature-request)
  - [Pull Request](#pull-request)
- [Credits](#credits)
- [License](#license)

## Installation

```bash
npm install --save ngx-packery
```

```bash
yarn add ngx-packery
```

## Usage

**app.module.ts**

```ts
import { NgModule } from '@angular/core';
import { NgxPackeryModule } from 'ngx-packery';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ NgxPackeryModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

**app.component.html**

```html
<ngx-packery>
  <ngx-packery-item>
    <img src="IMAGE_URL_1" alt="Image #1">
  </ngx-packery-item>

  <ngx-packery-item>
    <img src="IMAGE_URL_2" alt="Image #2">
  </ngx-packery-item>
</ngx-packery>
```

### Options

You can pass options input to `ngx-packery` element;

```html
<ngx-packery [options]="{ gutter: 10 }">
  <!-- ITEMS -->
</ngx-packery>
```

or create object inside **app.component.ts** using interface `NgxPackeryOptions` and pass to element;

```ts
pckryOptions: NgxPackeryOptions = {
  columnWidth: 150,
  rowHeight: 100
};
```

```html
<ngx-packery [options]="pckryOptions">
  <!-- ITEMS -->
</ngx-packery>
```

Full list of options can be found [here](https://packery.metafizzy.co/options.html).

### Events

Packery element outputs some events;

For example when layout is complete you will catch it using *layoutComplete* output:

```html
<ngx-packery (layoutComplete)="handleLayoutComplete($event)">
  <!-- ITEMS -->
</ngx-packery>
```

Full list of events can be found [here](https://packery.metafizzy.co/events.html).

### Methods

If you want to call some methods on packery element, you can use service created speacially for this;

For example if you want to remote element from grid you can do it:

```ts
constructor(private pckryService: NgxPackeryService) {}

removeItem() {
  this.pckryService.remove('.item-2');
}
```

Full list of methods can be found [here](https://packery.metafizzy.co/methods.html).

### Plugins

If you want to have dragging functionallity, you can pass `draggabilly: true` as option. It's using [Draggabilly](https://draggabilly.desandro.com/) library

If you want to order grid after images has been loaded, you can pass `imagesLoaded: true` as option. It's using [imagesLoaded](https://imagesloaded.desandro.com/) library

## Changelog

Please see [Changelog Page](https://github.com/zgabievi/ngx-packery/releases) for more information what has changed recently.

## Paperwork

### Contributing

Please see [CONTRIBUTING.md](https://github.com/zgabievi/ngx-packery/blob/master/CONTRIBUTING.md) for details.

### Issue / Feature Request

To submit an issue correctly, please follow [instructions](https://github.com/zgabievi/ngx-packery/blob/master/.github/ISSUE_TEMPLATE.md#bug-report)

If you have an idea, and you want to request feature, then read [this one](https://github.com/zgabievi/ngx-packery/blob/master/.github/ISSUE_TEMPLATE.md#feature-request)

### Pull Request

To crearte new pull request and add your piece of work in our project, go through this [steps](https://github.com/zgabievi/ngx-packery/blob/master/.github/PULL_REQUEST_TEMPLATE.md)

## Credits

- [Zura Gabievi](https://github.com/zgabievi)
- [All contributors](https://github.com/zgabievi/ngx-packery/graphs/contributors)

## License

The MIT License (MIT). Please see [License file](https://github.com/zgabievi/ngx-packery/blob/master/LICENSE) for more information.

## Coming Next
- [ ] Draggable
- [ ] imagesLoaded
