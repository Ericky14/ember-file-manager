# ember-file-manager

This addon is a file-manager for ember. Anyone is free to contribute to it.
As of right now, I do not have time to work on it, so I just grabbed the code from my existing project and made it into an addon. There are a lot of bugs and things done wrong most likely since I never created an addon before. I just thought I would share this.

I also published the nodejs server I used for my project as an example server on https://github.com/Ericky14/ember-file-manager-example-server.

Backend is MongoDB and LDAP.

## Installation

Make sure you have ember-paper installed and you have `@import 'ember-paper'` in your app.scss file.

* `npm install ember-file-manager --save-dev`

## Usage

This addon uses a certain structure for the backend.

# File Structure

`
  date: string(xx/xx/xxxx),
  mime: string,
  hash: string(prefix 'dir_' for directories and 'file_' for files,
  phash: string(hash of parent directory),
  name: string,
  size: number,
  tmb: string(url),
  read: number, write: number, rm: number,
`

Look at the example nodejs server for more information.