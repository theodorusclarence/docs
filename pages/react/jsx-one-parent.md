# Why JSX Can Only Have One Parent Element

[Go to Twitter Post](https://twitter.com/th_clarence/status/1625719727418114048?s=20&t=tpMVOc6twUSJ_JMjH2UuuA)

## The Error

When you try to return multiple elements from a component, you will get an error message like this:

![jsx-transform-1](/images/react/jsx-one-parent/jsx-transform-1.png)

## How JSX Works

JSX is a syntactic sugar for `React.createElement{:tsx}`, which is a function that takes three arguments: the tag, the props, and the children.

![jsx-transform-2](/images/react/jsx-one-parent/jsx-transform-2.png)

### Nested Example

If you have a nested element, the children will be an array of `React.createElement{:tsx}`

![jsx-transform-3](/images/react/jsx-one-parent/jsx-transform-3.png)

## Why can't we return multiple elements?

If you see the example, it actually makes sense

![jsx-transform-4](/images/react/jsx-one-parent/jsx-transform-4.png)

As we know, we can't return 2 elements from a function, so returning 2 parent elements in a component/map function is not possible.

## Solutions

There are two solutions to this problem:

### Wrap the elements in one parent element

By wrapping the elements in one parent element, we can solve the problem.

![jsx-transform-5](/images/react/jsx-one-parent/jsx-transform-5.png)

However, you are ending up with an extra element in the DOM tree. This might be your desired result, and mostly it is. Use this if you want to.

### Use React.Fragment

`React.Fragment` is a component that doesn't render anything in the DOM tree.

![jsx-transform-6](/images/react/jsx-one-parent/jsx-transform-6.png)

If you want to return multiple elements without adding an extra element in the DOM tree, use `React.Fragment`.
