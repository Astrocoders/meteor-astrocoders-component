Package.describe({
  name: 'astrocoders:component',
  version: '0.0.1',
  summary: '',
  documentation: 'README.md'
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
