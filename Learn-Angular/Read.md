## Components in Angular
- Components are the foundational building blocks for any Angular application. Each component has three parts:
  - TypeScript class
  - HTML Template
  - CSS Style

- In Angular, the component's logic and behavior are defined in the component's TypeScript class.

## Property Binding in Angular
- Property binding in Angular enables you to set values for properties of HTML elements, Angular components and more.
- Use property binding to dynamically set values for properties and attributes. You can do things such as toggle button features, set image paths programmatically, and share values between components.

## Event Handling
- Event handling enables interactive features on web apps. It gives you the ability as a developer to respond to user actions like button presses, form submissions and more.
- In Angular you bind to events with the parentheses syntax ().

## Component input properties
- Sometimes app development requires you to send data into a component. This data can be used to customize a component or perhaps send information from a parent component to a child component.
- Angular uses a concept called input. This is similar to props in other frameworks. To create an input property, use the input() function.

## Component output properties
- When working with components it may be required to notify other components that something has happened. Perhaps a button has been clicked, an item has been added/removed from a list or some other important update has occurred. In this scenario components need to communicate with parent components.
- Angular uses the output() function to enable this type of behavior.

## Deferrable Views
- Sometimes in app development, you end up with a lot of components that you need to reference in your app, but some of those don't need to be loaded right away for various reasons.
- Maybe they are below the visible fold or are heavy components that aren't interacted with until later. In that case, we can load some of those resources later with deferrable views.

