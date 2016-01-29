module.exports = { 

    getConfig: function () {
	return {
	    browserSync: {
		bsFiles: {
		    src : [
		    'app/**/*.*',
		    'app/**/**/*.*',
		    'app/**/**/**/*.*',
		    'app/**/**/**/**/*.*'
		    ]
		},
		options: {
		    server: {
			baseDir: "app"
		    }
		}
	    }
	};
    }

    loadNpmTasks: function (grunt) {
	grunt.loadNpmTasks('grunt-browser-sync');
    }
};

