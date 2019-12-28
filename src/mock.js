// 引入mockjs 模快
// const Mock = require('mockjs');
import Mock from 'mockjs'

const accNoInfoData = function () {
    return {
        "returbCode": 0,
        "msg": "success",
        "List": [
            {
                "accNo": "6212 2624 8888 8888 000",
                "accName": "zhangsan01"
            },
            {
                "accNo": "6212 2624 8888 8888 001",
                "accName": "zhangsan02"
            },
            {
                "accNo": "6212 2624 8888 8888 002",
                "accName": "zhangsan03"
            },
            {
                "accNo": "6212 2624 8888 8888 003",
                "accName": "zhangsan04"
            }
        ]
    }
};

Mock.mock('/api/getAccno','post',accNoInfoData);

/**
 *
 * 拦截ajax请求主要可以使用Mock中的两个方法：
 * Mock.mock( url, type, template )
 * Mock.mock( url, type, function( options ) )
 */

// Mock.mock( url, post/get , 返回的数据)；


// Mock.mock('/api/getAccno', (_accNoInfoData) => {
//     console.log(_accNoInfoData.List)
//     return _accNoInfoData.List;
// });

/*
設置假接口  第二種方式
Mock.mock('/login', (options) => {
  console.log(options.body)
  return options.body
})
Mock.mock('/register', (options) => {
  console.log(options.body)
  return options.body
})
 */