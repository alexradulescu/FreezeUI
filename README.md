# FreezeUI
FreezeUI is a dead simple, responsive, vanilla javascript loading plugin. 
No jQuery required.

**Demo and examples:** [alex-radulescu.com/freeze-ui](http://alex-radulescu.com/freeze-ui/)

## Installation

Add it to your project:
```html
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <link href="/path/to/freeze-ui.min.css" type="text/css" rel="stylesheet"/>
    <script src="/path/to/freeze-ui.min.js" type="text/javascript"></script>
  </body>
</html>
```
## Usage

### Basic

```javascript
// Freeze the UI
FreezeUI();

// Un Freeze the UI 
UnFreezeUI();
```


## Options
You can set some options when calling the FreezeUI function.

#### `new Notyf([options])`

Param | Type | Default | Details
------------ | ------------- | ------------- | -------------
text | `string` | Loading | The text to be displayed. 
selector | `string` | <body> of the document | The loading can be applied only to an element, as long as the element has position absolute or fixed.

<!-- 
```javascript
var notyf = new Notyf({
  delay:1000,
  alertIcon: 'fa fa-exclamation-circle',
  confirmIcon: 'fa fa-check-circle'  
})
``` -->

## Licence
FreezeUI is under [MIT licence](https://opensource.org/licenses/mit-license.php)
