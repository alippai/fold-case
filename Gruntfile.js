module.exports = function (grunt) {

	grunt.initConfig({
		'template': {
			'build': {
				'options': {
					'data': function () {
						return require('./src/data');
					}
				},
				'files': {
					'lib/index.js': ['./src/template.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-template');
	grunt.registerTask('default', [
		'template'
	]);

};
