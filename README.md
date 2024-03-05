# Auto-Complete Deel
Auto-complete component in React TypeScript.

In the project directory ("auto-complete-deel"), you can run:
### `npm install`

Then you can run the project:
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Questions

1. What is the difference between Component and PureComponent?
Give an example where it might break my app.
The biggest difference is that a Pure component is has access to lifecycle methods, that its good to improve performance but you will be pretty sure how to pass the props because if the reference is no thr same but the content is same, it won't be re-rendered for the comparision of the data.
An example of breaking the app is when you are trying to update an state like :
    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
  };
It won't be rendered even though the state variable count changes, PureComponent performs a shallow comparison and won't trigger a re-render because the object reference itself remains the same.

2. Context + ShouldComponentUpdate might be dangerous. Why is
that?
 shouldComponentUpdate doesn't automatically take Context changes into account by default, as a result, the component using shouldComponentUpdate might not re-render, even though the data in the Context has actually changed.
3. Describe 3 ways to pass information from a component to its
PARENT.

* Moving the logic to the parent, that parent pass as a prop the functions that will trigger something that will affect data that will share
* Using callbacks to trigger when something it's done
* Using forwardRef, like by example to focus an element of the parent of the button.

4. Give 2 ways to prevent components from re-rendering.
Using references and comparisions to identify when re-rendering, And using hooks like useCallback or useMemo and only update if any dependency changes

5. What is a fragment and why do we need it? Give an example where it
might break my app.
A fragment works to don't use elements that you don't need in the dom, by example you need to return <ComponentA/> <ComponentB/> , according React you need to return only one component, you can encapusulate into React.Fragment

6. Give 3 examples of the HOC pattern.
When you use a Theme, you define the theme and envolve the component that will changed by that theme.
Using withAuth to share capabilities o redirects depending if the user was logged or not
Using a HOC as a global loader and the components that will rendered as a child.

7. What's the difference in handling exceptions in promises,
callbacks and async...await?

In promises you use .catch to handle the errors, in the callbacks you need to implement your own error handling logic by checking for error conditions within the callback function itself; and in async/await you can use also try and catch.

8. How many arguments does setState take and why is it async.
2, the new value and an optional function that was called  after the state update has been applied and the component has re-rendered.

9. List the steps needed to migrate a Class to Function
Component.
Identify which hook you'll use, the data that you will update and basically separate all the logic into a hooks previously identified

10.List a few ways styles can be used with components.
Inline, using the style prop of the component, using css or sass global as a class, using modules only for each component.

11. How to render an HTML string coming from the server.
Creating a parser or search a third library, because React has one but i remember that always recomend don't do that.

