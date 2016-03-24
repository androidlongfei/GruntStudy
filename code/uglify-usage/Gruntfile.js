/**
 * Created by longfei on 16/3/24.
 */

//grunt-contrib-uglify 具体参数使用

//源码:https://github.com/gruntjs/grunt-contrib-uglify


module.exports = function (grunt) {

    // 项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            builda: {//任务一：压缩a.js，不混淆变量名，保留注释，添加banner和footer
                options: {
                    mangle: false, //不混淆变量名
                    preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    footer: '\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
                },
                files: {
                    'output/js/a.min.js': ['src/js/a.js']
                }
            },
            buildb: {//任务二：压缩b.js，输出压缩信息
                options: {
                    report: "min"//输出压缩率，可选的值有 false(不输出信息)，gzip
                },
                files: {
                    'output/js/b.min.js': ['src/js/main/b.js']
                }
            },
            buildall: {//任务三：按原文件结构压缩js文件夹内所有JS文件
                //所有js文件,注意**/表示迭代子目录（子目录的子目录...）,*/表示一级子目录
                //!表示忽略文件
                files: [{
                    expand: true,
                    cwd: './src/js',//js目录下
                    src: ['**/*.js','*/*.js','!**/node_modules/*.js'],
                    dest: 'output/js'//输出到此目录下
                }]
            },
            release: {//任务四：合并压缩a.js和b.js
                files: {
                    'output/js/index.min.js': ['src/js/a.js', 'src/js/main/b.js']
                }
            }
        }
    });

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 默认任务
   // grunt.registerTask('default', ['uglify:release']);
   // grunt.registerTask('mina', ['uglify:builda']);
   // grunt.registerTask('minb', ['uglify:buildb']);
   // grunt.registerTask('minall', ['uglify:buildall']);

    //grunt.registerTask('default', ['uglify:builda']);
    //grunt.registerTask('default', ['uglify:buildb']);
    grunt.registerTask('default', ['uglify:buildall']);
}

