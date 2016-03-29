/**
 * Created by longfei on 16/3/24.
 */

//grunt-contrib-uglify 具体参数使用

//源码:https://github.com/gruntjs/grunt-contrib-uglify


module.exports = function (grunt) {

    // 项目配置
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            //对js文件进行语法检查
            jshint: {
                options: {
                    //大括号包裹
                    curly: true,
                    //对于简单类型，使用===和!==，而不是==和!=
                    eqeqeq: true,
                    //对于首字母大写的函数（声明的类），强制使用new
                    newcap: true,
                    //禁用arguments.caller和arguments.callee
                    noarg: true,
                    //对于属性使用aaa.bbb而不是aaa['bbb']
                    sub: true,
                    //查找所有未定义变量
                    undef: true,
                    //查找类似与if(a = 0)这样的代码
                    boss: true,
                    //指定运行环境为node.js
                    node: true
                },
                //也可以引入文件
                //options: {
                //    jshintrc: '.jshintrc'
                //},
                //具体任务配置
                files: {
                    src: ['src/js/*.js','src/**/*.js']
                }
            },

            uglify: {
                buildall:{

                }
            }
        }
    );

    // 加载提供"uglify"任务的插件
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint','uglify:buildall']);
}

