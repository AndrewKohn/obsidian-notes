--------

### Title: [[CSS Grid]]
Date Created: ==2021-11-01, 08:20==

--------

```
        /* CSS GRID */
        display: grid;
        grid-template-columns: 200px 200px 100px 100px;
        grid-template-rows: 300px 200px;

        row-gap: 60px;
        column-gap: 30px;
```

CSS Grid is a set of CSS properties for building 2-dimensional layouts.
- Main idea behind CSS Grid is that we divide a container element into rows and columns that can be filled with its child elements.
- in 2-dimensional contexts, CSS Grid allows us to write less nested HTML and easier to read CSS.

CSS Grid is now meant to replace flexbox!  instead, they work perfectly together. 
- Need a 1D layout?  Use flexbox.
- Need a 2D layout?  Use CSS Grid.

---
### CSS Terminology

![CSS Grid diagram](https://i.gyazo.com/2b277e6378560e4dfc4c9752815a0404.png)

![CSS container/items](https://i.gyazo.com/aeb168ccdc20754ac5f5795cb28c7eee.png)

---
#### 1fr
- fr = fraction.  Instead of a rigid size (ex. 250px), fr allows the grid item to expand/contract to fit within the container.
```
grid-template-columns: 3fr 1fr 1fr 1fr;		//first column takes 3 fractions, rest is 1fraction, which
												all equals 6 fractions.
```


--------
Tags: [[CSS]]