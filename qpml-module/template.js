/*
 * qpml-init module
 * 
 * Based on https://github.com/gruntjs/grunt-init
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a module for QPML.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'If you encounter any problems, please let us know at https://github.com/QPML/QPML/issues/new';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('author_name'),
    {
      name: 'github-user-name',
      message: 'GitHub Username',
      default: 'none',
      warning: 'May consist of any characters.'
    },
    init.prompt('licenses')
  ], function(err, props) {
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};

