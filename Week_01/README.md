学习笔记
1.职业规划
2.算法练习 Tic_Tac_Toe
  getElementById() 方法可返回对拥有指定 ID 的第一个对象的引用。
innerText 属性表示一个节点及其后代的“渲染”文本内容。 \
胜负减枝：只要可以找到一个点可以赢，那么接下来的计算就可以省去，只能保证赢，不能保证赢的最多。
break outer 跳出两层循环
  
3.异步编程
 1) callback  函数回调
function go() {
        green()
        setTimeout(function () {
            yellow()
            setTimeout(function () {
                red()
                setTimeout(function () {
                    go()
                }, 2000);
            }, 3000);
        }, 5000);
    }

 2）promise  链式表达式的形式
function sleep(t) {  
            return new Promise((resolve,reject) => {
                setTimeout(resolve,t);
            })
        }
        function go() {
            green()
            sleep(5000).then(() => {
                yellow();
                return sleep(3000);
            }).then(() => {
                    red();
                    return sleep(2000);
                }).then(go);
        }

 3）async/await
在promise的基础上进行语法上的改进，优点在与可以更换处理函数
async function go() {
            while (true){
                green();
                await sleep(5000);
                yellow();
                await sleep(3000);
                red();
                await sleep(2000);
            }
        }
  
