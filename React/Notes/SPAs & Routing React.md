## Single Page Applications (SPAs):

1. Single Page Applications (SPAs) are web applications that load single HTML page and dynamically update the page as the user interacts with the page.

2. So in easier words the top level HTML on the page remains the same but when we change the tabs (user interactions) the contents on the page changes.

3. Take example of _LinkedIN_, here the top bar is always present just as we switch tabs the contents on the page changes, this means there is no new page and a single page is utilized for all the tabs.

4. Also while we switch tabs in a SPA there is not a load that happens, while in MPAs (Multi Page Apps) each time a tab is switched a fresh load happens before loading the new page.

5. This technique of using SPAs allows for a smoother user experience compared to traditional MPAs where each page interaction requires a full page reload.

## Routing:

1. To implement such SPAs or in general terms to implement routing to switch from one tab to another we use the _React Router_ library.

2. Install the `react-router-dom` npm package:

```bash
npm i react-router-dom
```

3. Just to navigate from one page to another we use the `React Router` package. The package provides various kinds of routers, the mostly used one will be the `<BrowserRouter />`.

4. We can implement routing in React pages through the following way:

```javascript
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/jee/class-11-program" element={<Class11Program />} />
            <Route path="/jee/class-12-program" element={<Class12Program />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

5. We define the _route_ in the `path` attribute, while the `element` attribute contains the Component to be rendered on that particular path.

6. The layout component sets up a basic layout that will be the same for every page just the middle content will keep on changing.

```javascript
function Layout() {
  return (
    <div>
      <Link to={"/"}>Allen</Link> |
      <Link to={"/jee/class-11-program"}>Class 11</Link> |
      <Link to={"/jee/class-12-program"}>Class 12</Link>
      <Outlet />
      About Us | Contact | Footer
    </div>
  );
}
```

7. In the above code the _header_ and _footer_ are defined, while the `<Outlet />` contains the content for the a particular page the user is currently on.
