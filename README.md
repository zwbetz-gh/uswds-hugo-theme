# USWDS Hugo theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/675e8c1c-bba0-4a89-8cb6-4e4706bae488/deploy-status)](https://app.netlify.com/sites/uswds-hugo-theme/deploys)

A Hugo theme made with [United States Web Design System](https://v2.designsystem.digital.gov/). 

Made specifically for [my site](https://github.com/zwbetz-gh/zwbetz).

## Demo

https://uswds-hugo-theme.netlify.com/

## Minimum Hugo version

Hugo extended version `0.62.2` or higher is required. View the [Hugo releases](https://github.com/gohugoio/hugo/releases) and download the binary for your OS.

## Installation

From the root of your site:

```
git submodule add https://github.com/zwbetz-gh/uswds-hugo-theme.git themes/uswds-hugo-theme
```

## Updating

From the root of your site:

```
git submodule update --remote --merge
```

## Run example site

From the root of `themes/uswds-hugo-theme/exampleSite`:

```
hugo server --themesDir ../..
```

## Global configuration

Copy the `config.yaml` from the [`exampleSite`](https://github.com/zwbetz-gh/uswds-hugo-theme/tree/master/exampleSite), then edit as desired. See this file for all valid global params. 

## Post configuration

Valid post params:

### toc

If `true`, shows a table of contents.

### show_comments

If `false`, hides comments. 

## Shortcodes

### blockquote

The `author` param is optional. 

```
{{< blockquote author="Carl Jung" >}}
Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness. It is far better to take things as they come along with patience and equanimity.
{{< /blockquote >}}
```

### figure

Only works with page bundle images. 

```
{{< figure
img="sun.jpg" 
alt="The Sun" 
caption="The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. [Credits](https://images.nasa.gov/details-GSFC_20171208_Archive_e000393.html)." 
command="Resize" 
options="800x" >}}
```
