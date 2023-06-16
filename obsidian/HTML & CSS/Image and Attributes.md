--------

### Title: [[Image and Attributes]]
Date Created: ==2021-10-26, 14:03==

--------

Image element:
```
	<img src="post-img.jpg"/>
		//img = element
		//src="blah.jpg" = attribute
```
![standard img element](https://i.gyazo.com/b1eeb69be67de40031bf4ad6a6398f54.png)

Unlike the other elements, img elements don't have a "/img" ending.
	Within the "img" element, the "src" (source) is the attribute that is describing the element.
There are other attributes other than "src", such as "alt" (alternative text), which describes what the image is about.  This is important as it allows search engines to understand what the image is actually about.  Just as important, if not more important:  By describing the imaging, it allows blind people to use a website and understand what that image is trying to convey.  Also, if the "src" path is incorrect or nonexistant, the "alt" text will be shown and can help identify what the image is suppose to show.
```
	<img src="post-img.jpg" alt="HTML code on a computer monitor"/>			//Correct
	<img src="post-img.jp" alt="HTML code on a computer monitor"/>			//Incorrect
\	
```
![bad img path example](https://i.gyazo.com/aa5afb591e07bf4c64e45d5450e552bc.png)

```
    <img												//Formatting of an img element
      src="post-img.jpg"									//Source attribute
      alt="HTML code on a computer monitor"					//Alternative Text attribute
      width="500"											//Width attribute
      height="200"											//Height attribute
    />
```
![example img element with attributes](https://i.gyazo.com/fc544fbacbe71ed81228eebd342a24bd.png)

Attributes can be assigned to other elements as well, like:
```
<html lang="en">
```
Which in this example indicates this html is set for English speaking persons.


--------
Tags: [[HTML]]
