# pitch-transpose

Simple and fast pitch transposition:

```js
transpose('E2', '2M') // => 'F#2'
transpose('F4', '3m') // => 'Ab4'
```

## Installation

Install the npm module: `npm i --save pitch-transpose` and use it:

```js
var transpose = require('pitch-transpose')
transpose('3m', 'G') // => 'Bb'
```

For browser environments you need browserify, webpack or a similar tool.

## Usage

The simplest usage is with a pitch and interval (the order doesn't matter):

```js
transpose('C2', '4A') // => 'F#2'
transpose('4A', 'C2') // => 'F#2'
```

You can transpose pitch classes (pitches without octaves):

```js
tranpose('A', '3M') // => 'C#'
```

Also, you can partially apply to get a transposer:

```js
var major3th = transpose('3M')
major3th('D') // => 'F#'
```

And this allows to work with arrays easily:

```
['C', 'D', 'E', 'F', 'G'].map(transpose('3M')) // => ['E', 'F#', 'G#', 'A', 'B']
['1P', '3m', '5P'].map(transpose('C')) // => ['C', 'Eb', 'G']
```


## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">(a, b)</span><span class="type-signature"> &rarr; {String|Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Transposes pitch by an interval</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>a</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>a pitch or interval in string or array notation</p></td>
</tr>
<tr>
<td class="name"><code>b</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>a pitch or interval in string or array notation</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/pitch-transpose/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/pitch-transpose/blob/master/index.js#L19">lineno 19</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the transposed pitch</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>transpose('3m', 'C4') // => 'Eb4'
transpose('C4', '3m') // => 'Eb4'
tranpose([1, 0, 2], [3, -1, 0]) // => [3, 0, 2]</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT License
