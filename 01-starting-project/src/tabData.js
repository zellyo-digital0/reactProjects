export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. They allow you to break down your UI into reusable pieces.',
    code: `function Greeting() {
  return <h1>Hello, world!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code within JavaScript.',
    code: `const element = <h1>Hello, world!</h1>;`,
  },
  props: {
    title: 'Props',
    description:
      'Props (short for properties) are a way to pass data from parent to child components. They allow you to customize the behavior and appearance of components.',
    code: `function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State is a built-in object that allows components to manage their own data. It can be updated using the setState method.',
    code: `class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <div>Count: {this.state.count}</div>;
  }
}`,
  },
};
