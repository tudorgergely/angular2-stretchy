# angular2-stretchy

***angular2-stretchy*** is an Angular2 directive that automatically adjusts input width to fit content.

## Demo:

https://tudorgergely.github.io/angular2-stretchy/

## Installation:

```bash
npm install angular2-stretchy
```

## Use Example:

Add the declaration to your @NgModule:

```typescript
import {StretchyModule} from 'angular2-stretchy';

...

@NgModule({
  imports: [
    StretchyModule
  ]
})
```

Use directly inside your HTML templates

```
<input stretchy />
```

Set normal styling on input such as min-width

```
<input stretchy style="min-width: 300px;"/>
```

## Author

[Tudor Gergely](https://github.com/tudorgergely)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
