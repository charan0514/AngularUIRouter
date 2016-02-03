module.exports = function(grunt){

	grunt.initConfig({
		sass:{
			buildCss:{
				files:{
					'src/css/commonStyles.css':'src/scss/commonStyles.scss',
					'src/css/theme.css':'src/scss/theme.scss',
				}
			}
		},
		concat:{
			js:{
				src: 'src/js/*.js',
				dest: 'build/js/app.js',
				//tasks: ['uglify']
			},
			css:{
				src:['src/css/commonStyles.css','src/css/theme.css'],
				dest:'build/css/styles.css',
				//tasks:['cssmin']
			},
			html:{
				src: 'src/templates/*.html',
				dest: 'build/templates/allTemplates.html'
			}
		},

		/*min:{
			js:{
				src: 'build/js/app.js',
				dest:'build/js/app.min.js'
			},
			css:{
				//src:'build/css/styles.css'
				tasks:['cssmin']
			}
		},*/
		cssmin:{
			css:{
				src:'build/css/styles.css',
				dest:'build/css/styles.min.css'
			},
			/*autoprefixer:{
				files: {
	      			'build/css/styles.css': 'build/css/styles.css'
	    		}
			}*/
		},
		uglify:{
			minifyJs:{
				files:{
					'build/js/app.min.js' : 'build/js/app.js'
				}
			}
		},
		watch:{
			scss:{
				files:['src/scss/*.scss'],
				tasks:['sass:buildCss'],	
			},
			css:{
				files:['src/css/*.css'],
				tasks:['concat:css'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-minify-html');

	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['concat','uglify','cssmin']);

};