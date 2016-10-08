<img src="http://i.imgur.com/cw3TD8x.png"/>

An API written with Node.js that enables developers to easily abstract binary to hexadecimal conversions.

<h2>Usage</h2>
<h3>URL</h3>
```
https://hexapi.herokuapp.com/
```
<h3>Parameters</h3>
The parameter for the binary string is required in order to retrieve a valid response.

<h3>Example Request</h3>
```
https://hexapi.herokuapp.com/11101100101001
```

<h2>Response Format</h2>
```
{"binary": String, "hex": String}
```