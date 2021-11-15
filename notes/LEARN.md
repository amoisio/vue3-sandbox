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

## Introduction

- Directives are prefixed with `v-`. They apply special reactive behavious to the rendered DOM.

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

## Template syntax

- Vue renders templates into virtual dom render functions.
- `v-once` one-time rendereding of affected nodes (will not change on data change)
- `v-html` for replacing the element with raw HTML. **Do not use for composing template partials**.
- Binding attribute values is done with `v-bind`. If the value is `null` or `undefined` then the attribute will not be
incluced in the rendered HTML.
- Some directives can take arguments. These are denoted by a colon after the directive name. Eg. `v-bind:href="value"` binds
the value of `value` to `href`.
- Dynamic binding to an attribute can be done with `[]` e.g. `v-bind:[attributeName]="value"`

### Caveats

- With dynamic arguments, `null` is a special value and can be used to remove a binding.
- Avoid naming dynamic argument keys with uppercase letters as browsers will coerce attribute names into lowercase.
- Avoid accessing user defined globals in template expressions.

## Data Properties and Methods

- Instance properties are **only** added when the instance is first created => ensure they are all present in the object returned by the data function. Where necessary, use null, undefined or some other placeholder value for properties where the desired value isn't yet available.
- Vue binds `this` for methods to the component instance. **Do not use arrow functions if using `this` within the function**.
- Methods called from a template should not have any side effects, such as changing data or triggering asynchronous processes. If you find yourself tempted to do that you should probably use a lifecycle hook instead. <-- Interesting - I wonder how submit should then be handled?

## Computed properties and watchers

- Computed properties are cached based on its reactive properties.
- Use watchers when you want to perform asynchronous or expensive operations in response to changing data.

## Conditional rendering

### `v-if` vs `v-show`

- `v-if` is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.
- `v-if` is also lazy: if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.
- In comparison, `v-show` is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.
- Generally speaking, `v-if` has higher toggle costs while `v-show` has higher initial render costs. So prefer `v-show` if you need to toggle something very often, and prefer `v-if` if the condition is unlikely to change at runtime.

###  `v-if` with `v-for`

- When used on the same element `v-if` will be evaluated first.
