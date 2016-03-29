/**
 * Created by longfei on 16/3/24.
 */

/**
 * name
 * @type {string}
 */
var name = "uglify usage";

/**
 * print info to console
 * @param param
 */
function test(param){
    console.log(param);
}

test(name);

parameter();

function parameter(){

    var data = {
        age:100,
        name:[1,2,3]
    };

    console.log('ago add',data);

    function addData(data){
        data.age += 200;
        data.name[0] = "123";
    }

    addData(data);

    console.log('after add',data);

}


