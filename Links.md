When utilizing react-router-dom, there are three main ways to create links: NavLink, Link, and an anchor tag (<a>). In this article, we will explain the differences between these three methods. We will also provide examples of how to use each one. Let’s get started!

Link
The Link component is provided by react-router-dom and is used to navigate within the app. It renders an anchor tag (<a>) under the hood, which links to internal routes. The Link component utilizes the “to” attribute, which can be either a string or an object. If the “to” attribute is a string, it will render an anchor tag with an href equal to the string.

If the “to” attribute is an object, it will render an anchor tag with an href equal to the pathname of the object. If the object version of the “to” attribute is used, you can pass four different properties: pathname (the path link), search (query params), hash (to put in URL), and state (persisting state).

Examples:

```jsx

<Link to='/home'>Home</Link>

<Link
  to={{
    pathname: "/entrees",
    search: "?sort=rating",
    hash: "#the-hash",
    state: { showMenu: true }
  }}
/>
```

NavLink
NavLink is a component provided by react-router-dom that allows users to navigate throughout the React application. NavLink is similar to Link, but it has the ability to add additional styling attributes to the element. For example, you can use NavLink to style the active link differently than the other links. NavLink utilizes the “activeClassName” attribute. This is the class that will be applied to the element when it is active.

Example:

```jsx
<NavLink to='/about' activeClassName='active'>
  About
</NavLink>
```

The NavLink component has an activeClassName of ‘active’, which will enable when the user is on the about page. You can style the activeClassName in a CSS file. For example, if we wanted the NavLink to be green when it is active, we could write the following CSS:

```css
.active {
  color: green;
}
```

Anchor Tag (<a>)
An anchor tag is an HTML element that is used to create a link to another page. The anchor tag has an href attribute, which specifies the URL of the page that the link goes to. The anchor tag is different than Link and NavLink because it does not utilize React Router. It is used for linking to external pages or for creating links that do not go to a specific route in the React application.

Example:

```js
<! –– Linking to an individuals instagram account ––>
<a href="https://www.linkedin.com/user1">
```

Which to Use When?
Now that we have gone over the differences of each link, when should you use which one? If you want to create a link within your React application, that does not need styling when it is active, use the Link component. If you want to create a link within your React application, that does need styling when it is active, use the NavLink component. Lastly, if you want to create a link to an external page or a non-route within your React application, use the anchor tag.

Conclusion
In conclusion, there are three ways to create links when utilizing React Router DOM: NavLink, Link, and anchor tag (<a>). We discussed the differences between each link and when you should use each one. Now that you know the differences, you can utilize each link accordingly in your React application.
