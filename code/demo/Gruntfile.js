/**
 * Created by longfei on 16/3/23.
 */

module.exports = function(grunt){

    //任务配置，所有插件的配置信息
    grunt.initConfig({

        //获取 package.json的信息
        pkg:grunt.file.readJSON('package.json'),

        //uglify usage : https://github.com/gruntjs/grunt-contrib-uglify
        //uglify插件配置信息
        //“options”中规定允许生成的压缩文件带banner，即在生成的压缩文件第一行加一句话说明。注意，其中使用到了pkg获取package.json的内容
        //“build”中配置了源文件和目标文件。即规定了要压缩谁？压缩之后会生成谁？注意，我们这里将目标文件的文件名通过pkg的name和version来命名
        uglify:{
            options:{},
            build:{
                src:'src/storage.js',
                dest:'output/<%=pkg.name%>-<%=pkg.version%>.min.js'
            }

        }

    });

    //告诉grunt我们使用的插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //告诉grunt当我们在终端输入grunt时需要做什么，注意先后顺序
    grunt.registerTask('default',['uglify']);
}