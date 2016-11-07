# CURRENTLY IN PROGRESS

# Indominus-Flex
CSS Flexgrid using flexbox.
[Visual Guide](https://xjdesigns.github.io/flexbox-grid/)

## How to use
Using Flexgrid is easy. You can grab the `flexgrid` folder and use it out of the box or
else clone and run the built in gulp commands to compile this.

### Run
```javascript
npm install
```
```javascript
gulp watch
```
This will compile your sass and run the basic app for visual testing.
```shell
localhost:3000
```
Running this will compile the final css and put into a directory call `flexgrid`
```javascript
gulp finish
```

### Using the flexgrid
To use the flexgrid apply the class
```
.flex
```
, this sets up the grid. Inside apply item or offset classes to use the grid.
```
.flex__item--xs-12
```
```
flex__offset--xs-2
```

Along with the grid you get some nice additions with flexbox such as vertical or horizontal alignment.
All classes have breakpoint options.
### Vertical Alignment
```
.flex--xs-middle
.flex--xs-bottom
```
### Horizontal Alignment
```
.flex--xs-center
.flex--xs-end
.flex--xs-around
.flex--xs-between
```
