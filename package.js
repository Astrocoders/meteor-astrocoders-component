Package.describe({
  name: 'astrocoders:component',
  version: '0.0.1',
  summary: 'Component class base',
  documentation: 'README.md',
  git: 'https://github.com/Astrocoders/meteor-astrocoders-component',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'jquery',
  ]);

  api.addFiles('component.js');
  api.export('AstroComponent');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('astrocoders:component');
  api.addFiles('component-tests.js');
});
