# signalk-collision-detection

Signalk web application for assessing the risk of potential collisions for a vessel.

# Introduction

The aim of this plugin is to enable a user of the signalk platform to receive
potential risks of collision from the server.
This plugin depends on an AIS receiver to provide nearby vessel positions.

# Theory overview

The plugin represents current vessel and nearby vessels as points,
which are a pair of longitude and latitude values representing a unique
location. The values can be obtained currently through an AIS receiver
although plans to expand and create a generic interface would be optimal
for cross compatibility with different sensors like radar, LiDAR, etc.

# Project Structure

```Shell
.
├── examples
├── LICENSE
├── node_modules
├── package-lock.json
├── package.json
├── public # Final webapp build
│   └── index.html
├── public_src # Template directory for HTML and css rendering
│   └── index.html
├── README.md
├── src # Source files for plugin and webapp frontend content
│   ├── components
│   │   └── AppPanel.js
│   └── index.js # Plugin related content
└── webpack.config.js # Webpack configurations
```

# Build Instructions

## package manager

***TBD***

## Local Build

If you wish to install and develop on top of this project you may wish to
use a local build.
First you need to clone the repository on your local machine.
This can be done by the following command:

```Shell
git clone git@github.com:matas-noreika/signalk-collision-detection.git
```

In order to view the package you must use a npm symlink it can be done by the following:

```Shell
npm link # run this in the project directory
cd ~/.signalk # cd to signalk server
npm link signalk-collision-detection # adds symlink to project directory
```

## Development Features

The functionalities exposed by this web application are not fixed to the
signalk platform. This means that future development or implementation of this
software can be reimplemented for a different data model or use case.

# Next Steps

- [ ] Implement a potential threat detection system using signalk data model.
- [ ] Implement an algorithm to determine if a potential collision is to occur
within the vessels current movement direction.
- [ ] ***TBD***

# Dev notes

The web app uses webpack for bundling and transpiling to ES5.
The frontend framework uses react as per the documentation provided on signalk.
Signalk-server expects a file names remoteEntry.js for webapp frontend.

# Documentation

[React Legacy API](https://react.dev/reference/react/legacy)
[Signalk documentation](https://demo.signalk.org/documentation/index.html)
