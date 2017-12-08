# react-parcel

- 1.安装依赖

```
npm init -y
npm i react react-dom -S
npm i babel-preset-react parcel-bundler -D
```

- 2.添加 `.babelrc`

```json
{
  "presets": ["react"]
}

```

- 3.添加 `npm script`

```json
// package.json
  ...
  "scripts": {
    "dev": "parcel index.html"
  },
  ...
```

- 4.配置入口 index.html

```html
<html>
  <head>
    <title>react-parcel</title>
  </head>
  <body>
      <div id="root"></div>
      <script src="./src/index.js"></script>
  </body>
</html>
```

- 5.配置 `src` 开发目录

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))


--- 

// App.jsx
import React, { Component } from 'react'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      count: 0
    }
    this.plus = this.plus.bind(this)
    this.reduce = this.reduce.bind(this)
  }

  plus(e) {
    this.setState({
      count: this.state.count + 1
    });
  }
  reduce(e) {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="layout">
        <h1>{this.state.count}</h1>
        <button  onClick={this.plus}>加 1</button>
        <button  onClick={this.reduce}>减 1</button>
      </div>
    )
  }
}

export default App

--- 

// App.css
.layout {
  text-align: center;
  padding-top: 10%;
}

```


- 6.运行

`npm run dev`

open `http://localhost:1234`