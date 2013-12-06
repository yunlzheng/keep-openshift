5步快速的搭建一个web应用
========================

## 一些基础的东西

* yeoman: MODERN WORKFLOWS FOR MODERN WEBAPPS
* Flask: 一个Python的微性框架

## 创建一个web应用

1, 使用yo生成一个angular的前端项目骨架

```
yo angular
```

2, 创建一个app.py文件

```
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run()
```

3， 编译你的前端

修改Gruntfile.js, 修改编译的目标目录到static

```
····
yeoman: {
  // configurable paths
  app: require('./bower.json').appPath || 'app',
  //dist: 'dist'
  dist: 'static'
}

····
```

编译

```
grunt build
```

4, 使用Python运行app.py

```
python app.py
```

5, 访问你的网站


[http://localhost:5000](http://localhost:5000)

