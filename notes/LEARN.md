## [This](https://v3.vuejs.org/guide/installation.html#from-cdn-or-without-a-bundler) article speaks of **templates**.

What are these templates? Components? Something else?

ANSWER:
"If you need to compile templates on the client (e.g. passing a string to the template option, or mounting to an element using its in-DOM HTML as the template), you will need the compiler and thus the full build"

```javascript
// this requires the compiler
Vue.createApp({
  template: '<div>{{ hi }}</div>'
})

// this does not
Vue.createApp({
  render() {
    return Vue.h('div', {}, this.hi)
  }
})
```

When using vue-loader, templates inside *.vue files are pre-compiled into JavaScript at build time. You don’t really need the compiler in the final bundle, and can therefore use the runtime-only build.

## Directives

Prefixed with `v-`. They apply special reactive behavious to the rendered DOM.

## Component and application instances

Created with `createApp'. Can be used to register globals which can then be used by components within the application.

### Root component

- Must be mounted into a DOM element: `app.mount('#app')`
- `mount` returns reference to mounter component.

### Component instance properties

- `props`
- `methods`
- `computed`
- `inject`
- `setup`
- Properties defined in `data` are exposed via the component instance.
- Built-in properties are prefixed with `$`.

### Lifecycle hooks

- **Do not use arrow functions** on an options property or callback because they treat `this` differently.

![Hooks](https://v3.vuejs.org/images/lifecycle.svg)

