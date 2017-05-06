# 考核, 好紧张啊~~(请仔细阅读本文档说明)

+ 这个手机端页面,只有一页,虽然它有两张图

   psd下载地址: https://redrock.cqupt.edu.cn/exam-mock/exam.zip

  + <名字>_ spec. png 文件描述了该页的交互, 没标注的,就是没交互, 不懂的来问我


+ 请在页面先入这两个 js 文件,按顺序引入这两个 js 文件,并且不要在你的 js里使用 mock 和 Mock, 这个变量名,避免命明冲突

  ```html
  <script src="https://redrock.cqupt.edu.cn/exam-mock/mock-min.js"></script>
  <script src="https://redrock.cqupt.edu.cn/exam-mock/mock-data.js"></script> //此文件必须以外链的形式引入到页面中, 不能私自下载到本地
  ```




## 接口

+ 新闻接口 

  ```
  url: "/news?num=[number]",  // 请求参数 number 必须大于零
  method: 'GET',
  返回 number 条新闻
  ```

  示例: 

  ```
  ajax({
    url: "/new?num=2",
    method: "GET",
    success: function(res) {
  	console.log(res);
    }
  })
  ```

  返回值

  ```json
  [
      {
        	"link": "http://hongyan.cqupt.edu.cn",                               // 新闻链接
          "imgURL": "http://dummyimage.com/300x200/00405d/FFF&text=Mock.js",  // 新闻图片
          "title": "今天天气很好,某人做了三件小事",							  // 新闻标题
          "description": "Dswedh dvwhby xhxjj gatvl xvycjqm tidrbi nhrrt axc", // 新闻描述
          "post": 78,														// 跟贴数
          "type": "专题",						// 标签, 此处该 api只返回文字(原图上有个摄像机)
          "typeColor": "#ccc"												// 标签背景色
      },
      {
        	"link": "http://hongyan.cqupt.edu.cn",
          "imgURL": "http://dummyimage.com/300x200/00405d/FFF&text=Mock.js",
          "title": "Wkvz ixotkwkwm vveet",
          "description": "Gobcjrhss whbtmie bfmc kvvcnh hbafs vgvibna inns k",
          "post": 67,
          "type": "专题",
          "typeColor": "#ccc"
      }
  ]
  ```

+ 轮播图接口

  ```

    url: "/sliders" 
    method: "GET"
  ```

  返回值, **將返回随机数目的图片地址**, 图片比例固定

  ```
  [
      {
          "imgURL": "http://hongyan.cqupt.edu.cn/images/index_top.jpg",
          "link": "http://hongyan.cqupt.edu.cn/",
          "title": "这是一张图片"
      },
      {
          "imgURL": "http://hongyan.cqupt.edu.cn/images/index_top.jpg",
          "link": "http://hongyan.cqupt.edu.cn/",
          "title": "这是一张图片"
      },
      {
          "imgURL": "http://hongyan.cqupt.edu.cn/images/index_top.jpg",
          "link": "http://hongyan.cqupt.edu.cn/",
          "title": "这是一张图片"
      }
  ]
  ```

+ 菜单接口

  ```
  url: '/tags',
  method: 'GET'
  ```

  返回值 added已关注的标签, avaliable可添加的标签

  ```
  {
      "added": [
          {
          	"id": 1,
              "name": "头条"
          },
          {
          	"id":2,
              "name": "hello"
          },
          {
          	"id":3,
              "name": "hello"
          }
      ],
      "avaliable": [
          {
          	"id":4,
              "name": "world"
          },
          {
          	"id":5,
              "name": "world"
          },
          {
          	"id":6,
              "name": "world"
          }
      ]
  }
  ```

  ​

## 注意

+  postman 是不能访问的给的接口的,因为那些接口只是在前端拦截 ajax请求提供的一些假数据,所以,数据只能用 ajax访问到
+  ajax获取数据时, 不要在 file 协议下, 需要放到 wamp, xampp, 或者其他 server 下使用 !!
+  **新闻标题和描述可能出现过长的情况, 请考虑这种情况, 没节操的部长闲着无聊会改数据!!** 
+  有些数据现在还不是随机的,不要问我为什么,明早十点以后我会改好的



## 大家加油,好好规划时间

