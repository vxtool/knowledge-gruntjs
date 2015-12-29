module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    example: {
      files: {
        '<%= projectDir %>structure-load-config.min.js': 
        [
        '<%= projectDev %>structure-load-config.js'
        ]
      }
    }
  };
};