# USWDS Hugo theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/675e8c1c-bba0-4a89-8cb6-4e4706bae488/deploy-status)](https://app.netlify.com/sites/uswds-hugo-theme/deploys)

A Hugo theme made with [United States Web Design System](https://v2.designsystem.digital.gov/). 

## Demo

https://uswds-hugo-theme.netlify.com/

## Minimum Hugo version

Hugo extended version `0.55.5` or higher is required. View the [Hugo releases](https://github.com/gohugoio/hugo/releases) and download the binary for your OS.

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

Copy the `config.yaml` from the [`exampleSite`](https://github.com/zwbetz-gh/uswds-hugo-theme/tree/master/exampleSite), then edit as desired. 

## Shortcodes

### accordion

```
{{< accordion >}}

{{< accordion-item heading="2" summary="First Amendment" >}}
Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
{{< /accordion-item >}}

{{< accordion-item heading="2" summary="Second Amendment" >}}
A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
{{< /accordion-item >}}

{{< accordion-item heading="2" summary="Some summary" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo ligula, laoreet quis leo sit amet, ornare luctus orci. Maecenas eu mollis felis, quis blandit justo. 

- This is a list item
- Another list item
{{< /accordion-item >}}

{{< /accordion >}}
```

### blockquote

The `author` param is optional. 

```
{{% blockquote author="Carl Jung" %}}
Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness. It is far better to take things as they come along with patience and equanimity.
{{% /blockquote %}}
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
