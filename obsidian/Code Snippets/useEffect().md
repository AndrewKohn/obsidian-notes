--------

### Title: [[useEffect()]]
Date Created: ==2023-06-07, 04:47==

--------

`useEffect()` hook accepts 2 arguments:

```javascript 
useEffect(callback, [dependencies]);
```

- `callback` is a function that contains the side-effect logic. `callback` is executed right after the DOM update.
- `dependencies` is an optional array of dependencies. `useEffect()` executes `callback` only if the dependencies have changed between renderings.

![useeffect hook](https://dmitripavlutin.com/d0532a1ba251b6730f64aff0a02b0925/react-useeffect-hook-cleanup.svg)

```javascript
// not provided dependency
function MyComponent(){
	useEffect(() => {
		// Runs after EVERY rendering
	});
}

// provided empty dependency
function MyComponent(){
	useEffect(() => {
		// Runs ONCE on the initial render
	}, []);
}

// dependencies provided
function MyComponent(prop){
	const [state, setState] = useState('');
	useEffect(() => {
		// Runs ONCE on the initial render
		// and will render if the prop or state changes
	}, [prop, state]);
}
```

--------
Tags: [[Code Snippets]] - [[React]]