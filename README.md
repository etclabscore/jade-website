<h1 align="center" style="margin-top: 1em; margin-bottom: 3em;">
  <p><a href="https://jade.builders"><img alt="jade logo" src="https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-light/jade-logo-light%20(PNG)/256x256.png" alt="jade.builders" width="125"></a></p>
  <p>👋 Welcome to jade.builders!</p>
</h1>

[jade.builders](https://jade.builders) is a primary online resource for the Jade community. It is improved and changed over time through the contributions of community members who submit content, give feedback, or volunteer their time to managing its evolution.

If you’re interested in helping to improve [jade.builders](https://jade.builders), start here. This contribution guide will help you get started.

<br>

### jade.builders’s design and content is guided by three core principles:

**🌏 1. jade.builders is a portal to resources created by the community**
  - It will never be "encyclopedia jade" - we can’t add every link, or cover every topic
  - Rather, its purpose is to direct people to community-built resources
  - jade.builders will always have minimal native-content

**🛠 2. jade.builders is a work in progress, because Jade is a work in progress**
  - We expect it to change over time, including both content and design
  - To accommodate long-term changes, the site has a simple modular structure that will let us add or remove subpages

**🧙 3. jade.builders is not a typical product website**
  - jade.builders is a representation of our Jade community, and a starting point for those who want to join it, use it, and contribute to it.
  - jade.builders should not be a traditional product website. There is no sales pitch.

## How can I contribute?

Keeping in mind the above core principles, there are many ways you can get involved in improving the website!

- Check out the issues page and see if there are any you can help with!
- Submit links to add to specific sections that are incomplete, by submitting a pull-request
- Identify out-of-date information on jade.builders (or linked to from jade.builders) and submit a pull-request
- Suggest ideas for new subpages, new content, or other ways to improve jade.builders by opening an issue.


## Notes on individual sub-pages:

![image](https://user-images.githubusercontent.com/364566/61649945-62c1fc80-ac67-11e9-9f9d-ca59f8e33dbb.png)

If you want to suggest changes to particular sub-pages, keep in mind the purpose of each page:

### 🛠 Developers

- The purpose of this page is to collect core technical resources helpful to someone building on Jade
- Information should be kept as up to date as possible, as new tools appear, standards are adopted, or material is deprecated
- This page will never be completely comprehensive: the goal is to list the most popular or widely used resources or tools.

### 📚 Learn

- The purpose of this page is to collect educational material about Jade on a variety of topics
- Some information will be technical in nature, but it will also include non-technical information, or articles that may serve as inspiration to community members

### 📱 Use

- This page is for the person who wants to get started using Jade, but doesn’t know how.

### 👋 Beginners

- The purpose of this page is to offer a coherent answer to the most basic questions about Jade: what is it, and why does it exist?
- Because this page is very simple and does not contain much content, changes to the text will be limited.
- Useful contributions include: suggesting better “beginner” content to link at the bottom of the page, or suggesting images that could be added to the page to break up the text.



## Development

### Windows
- Download [node.js & npm](https://nodejs.org/en/download/)
- Download [Git Bash](https://git-scm.com/downloads)
- Download the `master` branch
- Navigate to the `jade-website` folder
- Right click and select `Git Bash Here`

### Unix/Mac
```
# In the root folder:
npm run dev
```
open http://localhost:8080

## Build
```
# In the root folder:
npm run build
```

The build should be exported to `/docs/.vuepress/dist` which can be deployed to a static host. We are hosting the site on github pages via the deploy script below.


## Deployment
```
# In the root folder:
./deploy.sh
```

## Structure
Site content is in `/docs` folder. Everything else in `/docs/.vuepress`

---

This repo was originally forked from https://github.com/ethereum/ethereum-org-website.
