## Basic interface utilities

Here you'll find basic building blocks for a page.  These utilities will give your site hierarchy, clarity and focus.
### Page blocks
Page blocks help to build a responsive and organised page. All page blocks must be wrapped in a container with the class `.hcContentContainer`.

```

<div ^^~class="hcContentContainer"~^^>
	<div>
		// some content
	</div>
</div>

```

Alle child elements inside the `.hcContentContainer` behave the same way. It prevents the content to spread all over the screen. It give content a maximum with of 1200 pixels. On smaller screens it take 100% of the width.


#### Text block
Text blocks gives content a nice readable width on all screens. Add the class `.hcBlockText` to an element and all headings and paragraph tags align.


```

<div class="hcContentContainer">
	<div ^^~class="hcBlockText"~^^>
		<h2>Summary</h2>
		<p>Here's a summery of all the above</p>
	</div>
</div>

```
#### Column block
`.hc2columns`

`.hc3columns`

`.hc4columns`

`.hc5columns`

`.hc6columns`

### Margins
Margins help to create focus but keep tranquility.
#### Basic left and right margin
The `.hcBasicSideMargin` prevents content from hitting screen edge. It enhances the readability and understandability of the content.

```

<div class="hcBlockText ^^~hcBasicSideMargin~^^">
	<h2>Summary</h2>
	<p>Here's a summery of all the above</p>
</div>

```

#### Margin bottom
Use the _margin bottom_ to separate elements and blocks from each other.

`.hcMarginBottom1`

`.hcMarginBottom2`

`.hcMarginBottom3`

`.hcMarginBottom5`

#### Margin top
Use the top

`.hcMarginTop1`

`.hcMarginTop2`

`.hcMarginTop3`

`.hcMarginTop5`

#### Backgrond Margin
`.hcMarginBackground`


#### Header margin

### Alignments

`.hcAlignHorizontal`


`.hcAlignVertical`


`.hcAlignLeft`


`.hcAlignRight`


`.hcAlignCenter`

### Headers
### Labels
