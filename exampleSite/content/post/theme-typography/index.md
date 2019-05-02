---
title: "Theme Typography"
date: 2019-03-29
tags: [markdown, typography]
---

## Text

```
Text can be **bold**, _italic_, or ~~strikethrough~~. A [Link](https://github.com). 
```

Text can be **bold**, _italic_, or ~~strikethrough~~. A [Link](https://github.com). 

## Paragraph 

```
There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.
```

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs. There should be whitespace between paragraphs.

## Blockquote 

```
{{%/* blockquote author="Carl Jung" */%}}
Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness. It is far better to take things as they come along with patience and equanimity. 
{{%/* /blockquote */%}}
```

{{% blockquote author="Carl Jung" %}}
Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness. It is far better to take things as they come along with patience and equanimity. 
{{% /blockquote %}}

## Heading 

````
# Header 1

This is a normal paragraph following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

## Header 2

This is another normal paragraph following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### Header 3

```
This is a code block following a header.
```

#### Header 4

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

##### Header 5

1. This is an ordered list following a header.
1. This is an ordered list following a header.
1. This is an ordered list following a header.

###### Header 6

{{</* table "table" */>}}
| What | Follows |
| --- | --- |
| A table | A header |
| A table | A header |
| A table | A header |
{{</* /table */>}}
````

# Header 1

This is a normal paragraph following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

## Header 2

This is another normal paragraph following a header. Bacon ipsum dolor sit amet t-bone doner shank drumstick, pork belly porchetta chuck sausage brisket ham hock rump pig. Chuck kielbasa leberkas, pork bresaola ham hock filet mignon cow shoulder short ribs biltong.

### Header 3

```
This is a code block following a header.
```

#### Header 4

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

##### Header 5

1. This is an ordered list following a header.
1. This is an ordered list following a header.
1. This is an ordered list following a header.

###### Header 6

{{< table "table" >}}
| What    | Follows  |
|---------|----------|
| A table | A header |
| A table | A header |
| A table | A header |
{{< /table >}}

## Horizontal Line 

```
---

There's a horizontal rule above and below this.

---
```

---

There's a horizontal rule above and below this.

---

## List

```
Here is an unordered list:

- Salt-n-Pepa
- Bel Biv DeVoe
- Kid 'N Play

<p>And an ordered list:</p>

1. Michael Jackson
1. Michael Bolton
1. Michael Bublé

And an unordered task list:

- [x] Create a sample markdown document
- [x] Add task lists to it
- [ ] Take a vacation

And a "mixed" task list:

- [ ] Steal underpants
- ?
- [ ] Profit!

And a nested list:

- Jackson 5
    - Michael
    - Tito
    - Jackie
    - Marlon
    - Jermaine
- TMNT
    - Leonardo
    - Michelangelo
    - Donatello
    - Raphael

Definition lists can be used with HTML syntax. Definition terms are bold and italic.

<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

Here is an unordered list:

- Salt-n-Pepa
- Bel Biv DeVoe
- Kid 'N Play

<p>And an ordered list:</p>

1. Michael Jackson
1. Michael Bolton
1. Michael Bublé

And an unordered task list:

- [x] Create a sample markdown document
- [x] Add task lists to it
- [ ] Take a vacation

And a "mixed" task list:

- [ ] Steal underpants
- ?
- [ ] Profit!

And a nested list:

- Jackson 5
    - Michael
    - Tito
    - Jackie
    - Marlon
    - Jermaine
- TMNT
    - Leonardo
    - Michelangelo
    - Donatello
    - Raphael

Definition lists can be used with HTML syntax. Definition terms are bold and italic.

<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>

## Table

```
Tables should have bold headings and alternating shaded rows.

{{</* table "table" */>}}
| Artist          | Album          | Year |
|-----------------|----------------|------|
| Michael Jackson | Thriller       | 1982 |
| Prince          | Purple Rain    | 1984 |
| Beastie Boys    | License to Ill | 1986 |
{{</* /table */>}}

<br>

{{</* table "table table-dark table-striped table-responsive" */>}}
| Artist          | Album          | Year | Label                   | Awards                                                                                                                                                                                                                                                                          | Songs                                                                                                                                                                                                                     |
|-----------------|----------------|------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Michael Jackson | Thriller       | 1982 | Epic Records            | Grammy Award for Album of the Year, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&B Album, Brit Award for Best Selling Album, Grammy Award for Best Engineered Album, Non-Classical                                                | Wanna Be Startin' Somethin', Baby Be Mine, The Girl Is Mine, Thriller, Beat It, Billie Jean, Human Nature, P.Y.T. (Pretty Young Thing), The Lady in My Life                                                               |
| Prince          | Purple Rain    | 1984 | Warner Brothers Records | Grammy Award for Best Score Soundtrack for Visual Media, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&B Album, Brit Award for Best Soundtrack/Cast Recording, Grammy Award for Best Rock Performance by a Duo or Group with Vocal | Let's Go Crazy, Take Me With U, The Beautiful Ones, Computer Blue, Darling Nikki, When Doves Cry, I Would Die 4 U, Baby I'm a Star, Purple Rain                                                                           |
| Beastie Boys    | License to Ill | 1986 | Mercury Records         | noawardsbutthistablecelliswide                                                                                                                                                                                                                                                  | Rhymin & Stealin, The New Style, She's Crafty, Posse in Effect, Slow Ride, Girls, (You Gotta) Fight for Your Right, No Sleep Till Brooklyn, Paul Revere, Hold It Now, Hit It, Brass Monkey, Slow and Low, Time to Get Ill |
{{</* /table */>}}
```

Tables should have bold headings and alternating shaded rows.

{{< table "table" >}}
| Artist          | Album          | Year |
|-----------------|----------------|------|
| Michael Jackson | Thriller       | 1982 |
| Prince          | Purple Rain    | 1984 |
| Beastie Boys    | License to Ill | 1986 |
{{< /table >}}

<br>

{{< table "table table-dark table-striped table-responsive" >}}
| Artist          | Album          | Year | Label                   | Awards                                                                                                                                                                                                                                                                          | Songs                                                                                                                                                                                                                     |
|-----------------|----------------|------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Michael Jackson | Thriller       | 1982 | Epic Records            | Grammy Award for Album of the Year, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&B Album, Brit Award for Best Selling Album, Grammy Award for Best Engineered Album, Non-Classical                                                | Wanna Be Startin' Somethin', Baby Be Mine, The Girl Is Mine, Thriller, Beat It, Billie Jean, Human Nature, P.Y.T. (Pretty Young Thing), The Lady in My Life                                                               |
| Prince          | Purple Rain    | 1984 | Warner Brothers Records | Grammy Award for Best Score Soundtrack for Visual Media, American Music Award for Favorite Pop/Rock Album, American Music Award for Favorite Soul/R&B Album, Brit Award for Best Soundtrack/Cast Recording, Grammy Award for Best Rock Performance by a Duo or Group with Vocal | Let's Go Crazy, Take Me With U, The Beautiful Ones, Computer Blue, Darling Nikki, When Doves Cry, I Would Die 4 U, Baby I'm a Star, Purple Rain                                                                           |
| Beastie Boys    | License to Ill | 1986 | Mercury Records         | noawardsbutthistablecelliswide                                                                                                                                                                                                                                                  | Rhymin & Stealin, The New Style, She's Crafty, Posse in Effect, Slow Ride, Girls, (You Gotta) Fight for Your Right, No Sleep Till Brooklyn, Paul Revere, Hold It Now, Hit It, Brass Monkey, Slow and Low, Time to Get Ill |
{{< /table >}}

## Code 

````
Code snippets like `var foo = "bar";` can be shown inline.

Code can also be shown in a block element.

```
var foo = "bar";
```

Code can also use syntax highlighting.

```js
var foo = "bar";
```

Inline code inside table cells should still be distinguishable.

| Language   | Code               |
|------------|--------------------|
| Javascript | `var foo = "bar";` |
| Ruby       | `foo = "bar"`      |
````

Code snippets like `var foo = "bar";` can be shown inline.

Code can also be shown in a block element.

```
var foo = "bar";
```

Code can also use syntax highlighting.

```js
var foo = "bar";
```

Inline code inside table cells should still be distinguishable.

{{< table "table" >}}
| Language   | Code               |
|------------|--------------------|
| Javascript | `var foo = "bar";` |
| Ruby       | `foo = "bar"`      |
{{< /table >}}

## Image

```
Small images should be shown at their actual size.

![](https://unsplash.it/300/200)

Large images should always scale down and fit in the content container.

![](https://unsplash.it/1200/800)
```

Small images should be shown at their actual size.

![](https://unsplash.it/300/200)

Large images should always scale down and fit in the content container.

![](https://unsplash.it/1200/800)
