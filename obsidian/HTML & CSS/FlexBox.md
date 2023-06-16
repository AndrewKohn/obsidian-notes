--------

### Title: [[FlexBox]]
Date Created: ==2021-10-31, 11:12==

--------

Flexbox is generally easier to work with than floats in CSS.  
```
        /* FLEXBOX */
        display: flex;
        align-items: center;
        justify-content: space-between;
```

![flexbox example usage](https://i.gyazo.com/50e4171c04b6aff1473fceff7ad8fb09.png)

-----

- The main idea behind flexbox is that empty space inside a container element can be automatically divided by its child elements
- makes it easy to automatically align items to one another.
- Flexbox solves common problems such as vertical centering and creating equal-height columns.
- Flexbox is perfect for replacing floats, allowing us to write fewer and cleaner HTML/CSS code.

---

### Flexbox terminology

![flexbox diagram](https://i.gyazo.com/4215a515f947902d398c590ccaf86a42.png)

![flexbox containers / items](https://i.gyazo.com/58a598a750ba1bac9e2d779c3e914b86.png)

---

##### Flex property
```
Default setting for the flex properties:
 flex-grow: 0;

 flex-shrink: 1;

 flex-basis: auto;
```

Adding properties is not absolute.  Think of it as giving the browser recommendations to create the dimension.

```
 flex: 0 0 200;  			//shorthand version of the three usages above
 
 flex: [flex-grow] [flex-shrink] [flex-basis];
```

--------
Tags: [[CSS]]
