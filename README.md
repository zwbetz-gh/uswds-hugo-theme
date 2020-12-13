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

## Configuration

Copy the `config.yaml` from the [`exampleSite`](https://github.com/zwbetz-gh/uswds-hugo-theme/tree/master/exampleSite), then edit as desired. See this file for all valid global params. 
