学习笔记
week3
1.使用LL算法构建AST
 AST：抽象语法树
 LL：从左到右扫描，从左到右规约
<MultiplicativeExpression> : 用乘号或者除号相连接的Number的序列
<Expression>::=
 <AdditiveExpression><EOF>     (EOF终结符)
