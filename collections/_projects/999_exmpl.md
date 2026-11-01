---
title: "Example Project"
image: /assets/images/example.jpg
year: "2017-2023"
desc: "This article is mostly just to test and showcase all the markdown formatting possibilities. Setting them up is much easier when there's an article that contains them all neatly in one block of text!"
---

<!-- mock up text! -->

# Normal plain text with paragraphs (plus bold and italic)
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et **and something that's really important**, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et *or somethign that's a title or similar*, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

# Text with interspersed lists 
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

## Unordered list (with links)
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 

- [Maturarbeit (PDF)]({{ '/assets/files/academic/matur/maturarbeit_elias_steiner.pdf' | relative_url}})
- [Demonstration Prototyp (Blechdosen-Stirlingmotor)](https://youtu.be/CKf1bin9Naw)
- [Demonstration Stirlingmotor](https://youtu.be/IZPS30YnD6Q)
- and also, maybe something longer: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

## Ordered lists

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

1. reason for this
2. and for that
3. final point
4. (This can only go up to 9 tho with the current formatting!)

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.


# Code snippets in text

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. Very easily I can put some inline code here now: `csv: where; is; this; data` At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. And technically, even syntax highlighting is possible inline, although that may be overkill: `if a is True: np.concat([A, Btensor])`{: .language-python .highlight}. all this needs to work is: `{: .language-python .highlight}` at the end! At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

If I want to showcase an entire snippet of code, I can put it in a block and if the language is specified, syntax highlighting is possible:

```python
self = somereallylongclass.anothermethod("somestring" + "aconcatenation").thefirstelement[555, 1]
# this would be a python comment
a = [1, 2, 3]
b = a
b.append(4)
print(a)

import re
for test_string in ['555-1212', 'ILL-EGAL']:
    if re.match(r'^\d{3}-\d{4}$', test_string):
        print (test_string, 'is a valid US local phone number')
    else:
        print (test_string, 'rejected')  
```

Or just some more code that is formatted as text and has no syntax highlighting when no language is specified: 

```
this is some csv stuf maye
or just random instruction
or bash or somehting
```

# One empty main tile


# Main title

## Some title right after

This blocks subtitle that directly follows a main title will sit closer than it would if it were following just a block of text. This is so that the two titles kind of stay connected - question of style tho... could be changed easily

## And Another one

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.