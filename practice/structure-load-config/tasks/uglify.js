module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    options: {
      mangle: {
        except: ['jQuery']
      }
    },
    site: {
      files: {
        '<%= projectDir %>structure-load-config.min.js': 
        [
        '<%= projectDev %>structure-load-config.js'
        ]
      }
    }
  };
};