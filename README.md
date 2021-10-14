<div>
  <h1 align="center">Build An Accessible Web App – Testing Accessibility</h1>
  <strong>
    Building accessible web applications with HTML, CSS, JavaScript, and React
  </strong>
  <p>
    Ensuring your frontend code is accessible requires consistent development effort and testing of inclusive markup and scripted interactions. In this workshop we’ll build an
    accessible web application using widely supported and proven tools and
    techniques. We’ll cover everything about building accessible frontend
    applications, from the absolute basics with HTML and CSS to the tricky parts you'll run into
    building and testing JavaScript-heavy components.
  </p>

  <!-- <a href="https://testingaccessibility.com">
    <img
      alt="Learn Accessible Web Development from Start to Finish"
      src="https://marcysutton.com/images/testingaccessibility-promo/ta-1.gif"
    />
  </a> -->
</div>

<hr />

<!-- prettier-ignore-start -->
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- The first workshop in the series on Manual Testing & Tools is intended for web developers of all skill and experience levels. Some knowledge of the Web Platform would be helpful (HTML, CSS, and JavaScript).
- In later workshops, the exercises will become increasingly more advanced. Experience with JavaScript, React, and Git will be helpful.

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `12 || 14 || 15 || 16`
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

> If you want to commit and push your work as you go, you'll want to
> [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
> first and then clone your fork rather than this repo directly.

After you've made sure to have the pre-requisites installed, you
should be able to run a few commands to get set up:

```
git clone https://github.com/marcysutton/testing-accessibility-demos.git
cd testing-accessibility-demos
npm install
```

If you get any errors, please read through them and see if you can find out what
the problem is. If you can't work it out on your own then please [file an
issue][issue] and provide _all_ the output from the commands you ran (even if
it's a lot).

You can also download the source code from GitHub as a ZIP file instead of using `git clone`: https://github.com/marcysutton/testing-accessibility-demos/archive/refs/heads/main.zip

## Running the app

To get the app up and running (and really see if it worked) with [Parcel](https://parceljs.org), run this command from the project’s root folder:

```shell
npm start
```

This should start the site for your browser at the address indicated in your Terminal:
`http://0.0.0.0:1234`

## Working through the exercises

The project has **before** and **after** files for each of the 5 sections:

1. [exercise1-keyboard](https://github.com/marcysutton/testing-accessibility-demos/tree/main/example1-keyboard/)
2. [exercise2-devtools](https://github.com/marcysutton/testing-accessibility-demos/tree/main/example2-devtools/)
3. [exercise3-extensions](https://github.com/marcysutton/testing-accessibility-demos/tree/main/example3-extensions/)
4. [exercise4-magnification](https://github.com/marcysutton/testing-accessibility-demos/tree/main/example4-keyboard/)
5. [exercise5-screenreader](https://github.com/marcysutton/testing-accessibility-demos/tree/main/example5-screenreader/)

This will allow you to choose which exercise you want to work on while keeping things tidy.

The purpose of an exercise is **not** for you to work through all the material.
It's intended to get your brain thinking about the right questions to ask as
we go through the material together.

Contributions of any kind are welcome!

<!-- prettier-ignore-start -->
<!-->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/marcysutton/testing-accessibility-demos/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/marcysutton/testing-accessibility-demos/blob/main/CODE_OF_CONDUCT.md
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/marcysutton/testing-accessibility-demos/issues/new-->
<!-- prettier-ignore-end -->