## Forms
For forms this utility provides a default form markup, and a way to organise forms.
### Default form layout
By adding the `.hcForm` class forms and child elements automatically get a uniform HuC look. They get a bigger size and a distinctive background color.

### Form stack
To organise your form one can use form stacks. A stack consists of a information part and a form part. The information part contains a header and a description. The form part has one or more form fields.

```

<div class="hcContentContainer">
<div ^^~class="hcFormStack"~^^>
  <div ^^~class="hcStackInfo"~^^>
    <h2>Name of the stack</h2>
    <div class="hcTxtColorGreyMid">
	    ^^^~// a description text~^^^
    </div>
  </div>

  <div ^^~class="hcStackFormItems"~^^>
			^^^~// Form items~^^^
  </div>
</div>

```

![Using form stacks](images/form-stack.svg)

### Form items
Every field in the stack 


```

<div class="^^~hcFormItemRow~^^ hcMarginBottom2">
  <div ^^~class="hcFormItem"~^^>
    <label class="hcLabel" for="{{elemId}}"> ^^^~// Label text~^^^</label>
	<input type="text" id="{{elemId}}"> ^^^~// Or an <select> or <textarea> ~^^^
	<div class="hcSmallTxt hcTxtColorGreyMid">
		^^^~// Text for feedback~^^^
	</div>
</div>

^^^~// space for extra info or provenance~^^^
<div class="^^~hcFormItemExtra~^^ hcSmallTxt">
<div ^^~class="hcProvenanceComp"~^^>
  <label class="hcLabel" for="provFor{{elemId}}">Provenance</label>
  <textarea name="name" class="hcProvenanceText" id="provFor{{elemId}}"></textarea>
</div>
</div>
</div>

```

![Using items in a stack](images/stack-item.svg)

[See form example](/tim-edit.html).