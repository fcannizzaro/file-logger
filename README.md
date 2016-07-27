# file-logger
Log stdout/stderr to file

# Install
`npm install file-logger`

# Usage

```javascript
// default = out.log
require("file-logger")()	

// or

require("file-logger")("dev.log")

// other lines
// ...

```

# Sample
```javascript
2016/07/27-22:16:11 ~: something
2016/07/27-22:16:11 ~: ReferenceError: err is not defined
    at Object.<anonymous> (path/to/file/test.js:9:14)
    at Module._compile (module.js:541:32)
    at Object.Module._extensions..js (module.js:550:10)
    at Module.load (module.js:458:32)
    at tryModuleLoad (module.js:417:12)
    at Function.Module._load (module.js:409:3)
    at Module.runMain (module.js:575:10)
    at run (bootstrap_node.js:352:7)
    at startup (bootstrap_node.js:144:9)
    at bootstrap_node.js:467:3
2016/07/27-22:16:13 ~: wait
2016/07/27-22:16:15 ~: wait
2016/07/27-22:16:17 ~: wait
```