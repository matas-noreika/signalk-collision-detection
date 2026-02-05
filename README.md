# signalk-collision-detection
Signalk web application for assessing the risk of potential collisions for a vessel.

# Project Structure
```Shell
.
├── LICENSE
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

## Local Build
If you wish to install and develop on top of this project you may wish to use a local build. First you need to clone the repository on your local machine.
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

# Next Steps
- [ ] Implement a potential threat detection system using waypoint resources.
- [ ] Implement an algorithm to determine if a potential collision is to occur within the vessels current movement direction.
- [ ] _**TBD**_

# Dev notes
The web app used webpack for bundling and transpiling to ES5. The frontend framework uses react as per the documentation provided on signalk.

# Documentation
[React Legacy API](https://react.dev/reference/react/legacy)
[Signalk documentation](https://demo.signalk.org/documentation/index.html)
