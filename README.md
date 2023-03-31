# javascript-password

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Javascript    | [https://www.w3schools.com/tags/tag_footer.asp](https://www.w3schools.com/tags/tag_footer.asp)  
| Javascript    | [https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById] (https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) 
| Javascript    | [https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 
| Javascript    | [https://stackoverflow.com/questions/17907455/how-to-get-numeric-value-from-a-prompt-box](https://stackoverflow.com/questions/17907455/how-to-get-numeric-value-from-a-prompt-box) 
| Javascript    | [https://www.w3schools.com/jsref/jsref_touppercase.asp](https://www.w3schools.com/jsref/jsref_touppercase.asp) 
| Javascript    | [https://www.londonacademyofit.co.uk/blog/fixing-code-bugs-javascript-checklist](https://www.londonacademyofit.co.uk/blog/fixing-code-bugs-javascript-checklist) |


## Description 

For this project I was given a very new and difficult (in my opinion) language to write, Javascript. In this homework I was tasked to create a random password generator with: special characters, numbers, lower and uppercase letters. I was also tasked with prompting questions such as, "How many characters would you like to choose for your password? Choose between 8 and 128." Before I was able to prompt these questions I needed to give each character, number and letter values, which took a lot of typing. After all of the typing I could then work with forming the questions and give "if" and "else if" statements to give the code different possibilities to then create the random password with the math.random method.

## Markdown



## Code Examples

Here I will be showing a couple of examples of some codes I was stuck on but eventually discovered the solutions.

Here are the examples:


```js
var options;

var toUpper = function (X) {
  return X.toUpperCase();
};
```

For this I was stuck on what needed to happen to get this result and I needd to do a lot of research to find this method. I finally discovered, through one of the links listed above, a great description on what the method "toUpperCase" meant and how to use it.

Here is another example that I struggled with:

```js
for (var i = 0; i < enter; i++) {
    var pickOptions = options [Math.floor(Math.random() * options.length)];
    password.push(pickOptions);
}

```
In this code I spent a long time with a blank section since I had no idea what else to write, but like I had previously stated in the other example above I found after some research. I realized that giving the "i" a value and less than value was one of the first steps i needed to do before writing anything else. After I was able to write out the math.floor and math.random inside this array to look at all options (characters, numbers, and letters) and give it a set length.

## Usage 

For usages I found that all of the websites I have listed at the top of the page to be so helpful. At times I also hit a lot of walls and didn't know how else to continue, but weirdly enough the most helpful thing I found to be extremely beneficial is brain breaks. In the future now if I hit any sort of mental blocks taking a 10-15min break really comes in handy to work better.


## Learning Points 


This project for me really taught me a lot and pushed myself to be ok with not understanding with what is going on and just look it up. Finding functions, methods and even when to put something as simple as parantheses' in for a certain result is still something I am struggling with and I hope throughout this program I will become more confident in these learning points.


## Author Info

```md
### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)
```---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
