/**
 * Created by dllo on 2017/4/25.
 */


function handleError(error, operation, results) {
    if (error) {
        console.log(operation + '失败');
        console.log(error);
    } else {
        console.log(operation + '成功');
        if (results) {
            console.log(results);
        }
    }
}

module.exports = exports = handleError;


