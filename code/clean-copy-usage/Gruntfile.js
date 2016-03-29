/**
 * Created by longfei on 16/3/24.
 */

//grunt-contrib-uglify 具体参数使用

//源码:https://github.com/gruntjs/grunt-contrib-uglify


module.exports = function (grunt) {

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['output'],

        copy: {
            generated: {
                src: './src/index.html',
                dest: 'output/index.html'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            buildall: {//任务三：按原文件结构压缩js文件夹内所有JS文件
                //所有js文件,注意**/表示迭代子目录（子目录的子目录...）,*/表示一级子目录
                //!表示忽略文件
                files: [{
                    expand: true,
                    cwd: './src/js',//js目录下
                    src: ['**/*.js', '*/*.js', '!**/node_modules/*.js'],
                    dest: 'output/js'//输出到此目录下
                }]
            },
            release: {//任务四：合并压缩a.js和b.js
                files: {
                    'output/index.js': ['./output/**/*.js', './output/*/*.js']
                }
            }
        },

        jsObfuscate: {
            test: {
                options: {
                    concurrency: 2,
                    keepLinefeeds: false,
                    keepIndentations: false,
                    encodeStrings: true,
                    encodeNumbers: true,
                    moveStrings: true,
                    replaceNames: true,
                    variableExclusions: ['^_get_', '^_set_', '^_mtd_']
                },
                files: {
                    'output/index.js': [
                        'output/index.js'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-contrib-copy');

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //二进制混淆
    grunt.loadNpmTasks('js-obfuscator');

    grunt.registerTask('default', ['clean', 'copy:generated', 'uglify:buildall', 'uglify:release', 'jsObfuscate:test']);
}

