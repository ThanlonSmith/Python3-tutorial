##### 1. 数字类型(整型)
###### 1.1 整数
可以用十进制、二进制、八进制、十六进制表示
###### 1.2 浮点数
浮点数必须带有小数部分，小数部分可以是0。浮点数有两种表示方式，一般形式：123.456；科学计数法：1.23456e2或1.23456e+2，相当于1.23456x10<sup>2</sup>。
##### 2. 布尔类型
<kbd>bool</kbd>关键字表示布尔类型，只有两个值：True/False。
##### 3. 字符串
###### 3.1 公共功能
① len：计算长度(字符串->计算字符串中字符的个数)
```python
# coding:utf-8
'''
公共的方法len:计算字符个数
'''
v = '你好！'
print(len(v))
'''
3
'''
```
② 索引：索引字符串中的元素
```python
# coding:utf-8
'''
字符串索引
'''
s = input('输入字符串：')
s_len = len(s)
index = 0
while True:
    v = s[index]
    print(v)
    if index == s_len - 1:
        break
    index += 1
```
③ 切片：获取字符串中的片段
```python
# coding:utf-8
'''
字符串切片
'''
v = 'thanlon'
print(v[1:3])  # 左开右闭
print(v[1:-1])
print(v[-2:-1])
print(v[1:])
print(v[:-1])
print(v[:])
'''
ha
hanlo
o
hanlon
thanlo
thanlon
'''
```
④ 步长
```python
# coding:utf-8
v = 'thanlon'
print(v[0:7:2])
'''
taln
'''
```
⑤ for循环
```python
# coding:utf-8
v = 'thanlon'
for i in v:
    print(i)
'''
t
h
a
n
l
o
n
'''
```
###### 3.2 字符串独有功能
① upper：将字符串转换为大写
```python
# coding:utf-8
v = 'Thanlon'
print(v.upper())
'''
THANLON
'''
```
② lower：将字符串转为小写
```python
# coding:utf-8
v = 'Thanlon'
print(v.lower())
'''
thanlon
'''
```
③ split、rsplit：切割
```python
# coding:utf-8
'''
split、rsplit方法：切割
'''
msg = '你是个笨蛋吗？你是个笨蛋吗？你是个笨蛋吗？'
print(msg.split('？'))  # 从左向右切割所有
print(msg.split('？', 1))  # 从左向右切割，从第一个？开始切割
print(msg.rsplit('？'))  # 从右向左切割所有，从最后一个？开始切割
print(msg.rsplit('？', 1))  # 从右向左切割
'''
['你是个笨蛋吗', '你是个笨蛋吗', '你是个笨蛋吗', '']
['你是个笨蛋吗', '你是个笨蛋吗？你是个笨蛋吗？']
['你是个笨蛋吗', '你是个笨蛋吗', '你是个笨蛋吗', '']
['你是个笨蛋吗？你是个笨蛋吗？你是个笨蛋吗', '']
'''
```
④ strip：去除字符串左右多余的空格
```python
'''
strip()删除左右的空白字符串
lstrip()删除左右的空白字符串
lstrip()删除的空白字符串
'''
name = input('请输入用户名：')
print('---->' + name + '<----')
print('---->' + name.strip() + '<----')
print('---->' + name.lstrip() + '<----')
print('---->' + name.rstrip() + '<----')
'''
请输入用户名： thanlon 
----> thanlon <----
---->thanlon<----
---->thanlon <----
----> thanlon<----
'''
```
⑤ replace：替换
```python
# coding:utf-8
'''
replace方法：替换
'''
msg = '你是个笨蛋吗？你是个笨蛋吗？你是个笨蛋吗？'
print(msg)
print(msg.replace('笨蛋', '**'))  # 替换所有''笨蛋'
print(msg.replace('笨蛋', '**', 1))  # 只替换第一个''笨蛋'
'''
你是个笨蛋吗？你是个笨蛋吗？你是个笨蛋吗？
你是个**吗？你是个**吗？你是个**吗？
你是个**吗？你是个笨蛋吗？你是个笨蛋吗？
'''
```
⑥ isdigit：判断是否是数字
```python
# coding:utf-8
# isdigit：方法判断是否是数字
while True:
    print('''
    1.余额查询
    2.业务办理
    ''')
    num = input('请选择服务:')
    if num.isdigit():
        print(int(num))
    else:
        print('请输入数字！')
```
⑦ startswith
```python
# coding:utf-8
'''
startswith
'''
name = 'thanlon'
v = name[0:2]
if v == 'th':
    print('是以%s开头！' % v)
else:
    print('不是以%s开头！' % v)
'''
True
'''
```
```python
# coding:utf-8
'''
startswith与endswith
'''
v = 'thanlon'
flag = v.startswith('th')
print(flag)
'''
True
'''
```
⑧ endswith
```python
# coding:utf-8
'''
endswith
'''
name = 'thanlon'
v = name[5:]
if v == 'on':
    print('是以%s结尾！' % v)
else:
    print('不是以%s结尾！' % v)
'''
True
'''
```
```python
# coding:utf-8
'''
endswith
'''
name = 'thanlon'
flag = name.endswith('on')
if flag:
    print('是以on结尾！')
else:
    print('不是以on结尾！')
'''
True
'''
```
⑨ format
```python
# coding:utf-8
'''
format
'''
print('wow,{}'.format('thanlon'))
'''
wow,thanlon
'''
```
⑩ join
```python
# coding:utf-8
'''
join
'''
name = 'thanlon'  # 解释器读取到内存后，按照unicode编码存储，占用7x4b=28b
r = '_'.join(name)
print(r)
'''
t_h_a_n_l_o_n
'''
```
⑩ encode
```python
# coding:utf-8
'''
encode
'''
name = 'thanlon'  # 解释器读取到内存后，按照unicode编码存储，占用7x4b=28b
v1 = name.encode('utf-8')
print(v1)
'''
b'thanlon'
'''
v2 = name.encode('gbk')
print(v2)
'''
b'thanlon
'''
```
###### 3.3 字符串练习
① 请将字符串反转（笔试题）
```python
# coding:utf-8
'''
方式1
'''
v = 'Thanlon'
index = len(v) - 1
while index >= 0:
    print(v[index])
    index -= 1
'''
方式2
'''
v = 'Thanlon'
print(v[::-1])  # 或print(v[-1::-1])
```
② 判断字符串中是否含有敏感字符？
```python
# coding:utf-8
info = 'thanlonkiku'
if 'kiku' in info:
    print('right!')
'''
right!
'''
```
###### 3.4 字符串与二进制相互转换
① 字符串转二进制
```python
# coding:utf-8
''''
字符串转二进制
'''
v = '一问奈何'
v2 = 'thanlon'
data = v.encode('utf-8')
data2 = v2.encode('utf-8')
print(data)
print(data2)
'''
b'\xe4\xb8\x80\xe9\x97\xae\xe5\xa5\x88\xe4\xbd\x95'
b'thanlon'
'''
```
② 二进制转字符串
```python
# coding:utf-8
''''
二进制转字符串
'''
v = b'\xe4\xb8\x80\xe9\x97\xae\xe5\xa5\x88\xe4\xbd\x95'
v2 = b'thanlon'
data = v.decode('utf-8')
data2 = v2.decode('utf-8')
print(data)
print(data2)
'''
一问奈何
thanlon
'''
```
##### 4. 列表
###### 4.1 公共功能
 ① len
```python
# coding:utf-8
users = ['Thanlon', 'Kiku']
print(len(users))
'''
2
'''
```
② 索引
```python
# coding:utf-8
users = ['Thanlon', 'Kiku']
print(users[1])
'''
Kiku
'''
```
③ 切片
```python
# coding:utf-8
users = ['Thanlon', 'Kiku']
print(users[0:1])
'''
['Thanlon']
'''
```
④ 步长
```python
# coding:utf-8
users = ['Thanlon', 'Kiku','Haha']
print(users[0::2])
'''
['Thanlon']
'''
```
⑤ for循环
```python
# coding:utf-8
users = ['Thanlon', 'Kiku', 'Haha']
for i in users:
    print(i)
'''
Thanlon
Kiku
Haha
'''
```
###### 4.2 列表独有功能
① append：在列表的最后追加一个元素
```python
# codeing:utf-8
users = []
users.append('Thanlon')
print(users)
'''
['Thanlon']
'''
```
② insert：在指定索引位置插入元素
```python
# codeing:utf-8
'''
在指定索引位置插入元素
'''
users = ['thanlon']
users.insert(0, 'Kiku')  # 在第0个元素的位置加入
print(users)
'''
['Kiku', 'thanlon']
'''
```
③ pop
```python
# codeing:utf-8
'''
删除指定索引的文件
'''
# codeing:utf-8
'''
删除指定索引的文件
'''
users = ['Kiku', 'thanlon', 'Kiku']
users.pop(0)
print(users)
users.pop()  # 删除最后一个元素
print(users)
'''
['thanlon', 'Kiku']
['thanlon']
'''
```
④ remove
```python
# codeing:utf-8
'''
删除指定元素
'''
users = ['Kiku', 'thanlon', 'Kiku']
users.remove('Kiku')  # 只能删除第一个'Kiku'
print(users)
'''
['thanlon', 'Kiku']
'''
```
⑤ clear
```python
# codeing:utf-8
'''
删除所有元素
'''
users = ['Kiku', 'thanlon', 'Kiku']
print(users)
users.clear()
print(users)
'''
['Kiku', 'thanlon', 'Kiku']
[]
'''
```
⑥ extend：在列表中追加一个列表/元组
```python
# coding:utf-8
users = ['Thanlon', 'Kiku']
ex = ['Haha', 1, 2]  # 或 ('Haha', 1, 2)
users.extend(ex)
print(users)
'''
['Thanlon', 'Kiku', 'Haha', 1, 2]
'''
```
⑦ del 列表[索引]：删除指定索引的元素(与pop方法不同的是必须得加索引)
```python
# codeing:utf-8
'''
del语法删除指定元素
'''
users = ['Kiku', 'thanlon', 'Kiku']
del users[0]
print(users)
'''
['thanlon', 'Kiku']
'''
```
⑧ 列表的修改
```python
# codeing:utf-8
users = ['thanlon', 'Kiku']
users[0] = 'T'
users[1] = 'K'
print(users)
'''
['T', 'K']
'''
```
⑨ join([字符串，字符串，，，])
```python
# coding:utf-8
'''
join([字符串,字符串,])
'''
name = [1, 2, 3, 4, 5, 6]
for item in range(0, len(name)):
    name[item] = str(name[item])
result = ''.join(name)
result2 = ','.join(name)
print(result)
print(result2)
'''
123456
1,2,3,4,5,6
'''
```
⑩ reverse：反转
```python
# coding:utf-8
'''
reverse
'''
info = ['thnalon', 'kiku']
print(info)
info.reverse()
print(info)
'''
['thnalon', 'kiku']
['kiku', 'thnalon']
'''
```
⑩ sort：排序（列表中需要是数字类型的数据）
```python
# coding:utf-8
'''
sort排序
'''
info = [4, 2, 5]
print(info)
info.sort(reverse=False)  # 从小到大排列（默认）
print(info)
info.sort(reverse=True)  # 从大到小排列（默认）
print(info)
'''
[4, 2, 5]
[2, 4, 5]
[5, 4, 2]
'''
```
###### 4.3 列表练习
① 列表的嵌套：
```python
# codeing:utf-8
users = ['thanlon', 'Kiku', [66, 'thanlon', 'Kiku', ['thanlon', 'Kiku']]]
print(users[-1])
print(users[-1][-1])
print(users[-1][-1][0])
print(users[-1][-1][0][0:-2])
'''
[66, 'thanlon', 'Kiku', ['thanlon', 'Kiku']]
['thanlon', 'Kiku']
thanlon
thanl
'''
```
② 判断列表中是否含有敏感元素？
```python
# coding:utf-8
info = [1, 2, 3, 4, 5, 'thanlon']
if 1 in info:
    print('right!')
'''
right!
'''
```
##### 5. 元组
###### 5.1 公共功能
① len
```python
# coding:utf-8
users = ('Thanlon', 'Kiku', 'Haha')
print(len(users))
'''
3
'''
```
② 索引
```python
# coding:utf-8
users = ('Thanlon', 'Kiku', 'Haha')
print(users[0])
'''
Thanlon
'''
```
③ 切片
```python
# coding:utf-8
users = ('Thanlon', 'Kiku', 'Haha')
print(users[0:3])
'''
('Thanlon', 'Kiku', 'Haha')
'''
```
④ 步长
```python
# coding:utf-8
users = ('Thanlon', 'Kiku', 'Haha')
print(users[0:3:2])
'''
('Thanlon', 'Haha')
'''
```
⑤ for循环
```python
# coding:utf-8
users = ('Thanlon', 'Kiku', 'Haha')
for i in users:
    print(i)
'''
Thanlon
Kiku
Haha
'''
```
###### 5.2 元组独有功能
###### 5.3 元组练习
① 判断元组中是否含有敏感元素？
```python
# coding:utf-8
info = (1, 2, 3, 4, 5, 'thanlon')
if 1 in info:
    print('right!')
'''
right!
'''
```
##### 6. 字典
###### 6.1 字典概述
帮助用户去表示一个事物的信息（事物有多个属性）。

<kbd>info = {'name': 'thanlon', 'age': 23, 'gender': '男'}  # 键值</kbd>
###### 6.2 字典的键值类型
任何数据类型都可以作为字典的值，但字典中键的数据类型不可以是可变类型，如列表、字典（这两种数据类型是不可hash的）。其它数据类型的值内部是不可被修改的，也即是不可变类型，这些都是可以的作为字典的键。
###### 6.3 字典基本格式
<kbd>info = {键:值,键:值,键:值,键:值,,,}</kbd>
###### 6.4 字典独有功能
① keys()：获取字典中的所有键
```python
# coding:utf-8
'''
keys()
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
for item in info:
    print(item)
print()
for item in info.keys():
    print(item)
'''
name
age
gender

name
age
gender
'''
```
② values()：获取字典中的所有值
```python
# coding:utf-8
'''
values()
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
for item in info.values():
    print(item)
print()
'''
thanlon
23
男
'''
```
③ items()：获取字典中的所有键值对
```python
# coding:utf-8
'''
values()
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
for key, value in info.items():
    print(key, value)
'''
name thanlon
age 23
gender 男
'''
```
```python
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
for item in info.items():
    print(item)
'''
('name', 'thanlon')
('age', 23)
('gender', '男')
'''
```
④ get：获取字典中的值（公司里基本上使用此方式获取字典中的值）
通过索引去取值，如果没有所取的键，就会报错。但是，如果通过get方法，不会报错。
```python
# coding:utf-8
'''
get方法，None表示什么都没有，转为bool类型是False
'''
d = {'name': 'thanlon', 'age': 23}
# v1 = d['gender']  # 不存在此键，会报错
v2 = d.get('gender')
v3 = d.get('gender', '没有这个键！')
print(v2)  # 如果没有取到值，默认返回None
print(v3)
'''
None
没有这个键！
'''
```
```python
# coding:utf-8
d = {'name': 'thanlon', 'age': 23}
result = d.get('gender')
# print(result)#None
if result == None:
    print('不存在！')
if result:
    print('存在！')
else:
    print('不存在！')
'''
不存在！
不存在！
'''
```
⑤ pop：删除键值，并返回删除的值
```python
# coding:utf-8
info = {'name': 'thanlon', 'age': 23}
result = info.pop('age')
print(info, result)
'''
{'name': 'thanlon'} 23
'''
```
⑥ update：不存在添加，存在就更新
```python
# coding:utf-8
info = {'name': 'thanlon', 'age': 23}
info.update({'name': 'kiku', 'gender': '男'})
print(info)
'''
{'name': 'kiku', 'age': 23, 'gender': '男'}
'''
```
⑦ 知识点补充
```python
# coding:utf-8
s = '1,2'
print(s.split(','))  # ['1', '2']
v1, v2 = s.split(',')
print(v1, v2)
'''
['1', '2']
1 2
'''
```
```python
# coding:utf-8
v1, v2 = ['1', '2']
print(v1, v2)
'''
1 2
'''
```
```python
# coding:utf-8
v1, v2 = ('1', '2')
print(v1, v2)
'''
1 2
'''
```
###### 6.5 公共功能
① len：获取字典长度
```python
# coding:utf-8
'''
len()
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
print(len(info))
'''
3
'''
```
② 索引
```python
# coding:utf-8
'''
len()
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
print(info['name'])
'''
thanlon
'''
```
③ 切片【无】
④ 步长【无】
⑤ for循环
```python
# coding:utf-8
'''
values()
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
for key, value in info.items():
    print(key, value)
'''
name thanlon
age 23
gender 男
'''
```
⑥ 修改：存在就修改，不存在就添加
```python
# coding:utf-8
'''
修改
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
info['name'] = 'Kiku'
info['age'] = 25
info['gender'] = '女'
print(info)
'''
{'name': 'Kiku', 'age': 25, 'gender': '女'}
'''
```
如果需要修改键，可以先删掉原来的键，再增加新的键，一般是不改键的。

⑦ 删除：删除键值
```python
# coding:utf-8
'''
删除
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
del info['name']
print(info)
'''
{'age': 23, 'gender': '男'}
'''
```
###### 6.6 字典练习
① 用户输入键，系统根据输入的键输出对应的值?
```python
# coding:utf-8
'''
用户输入键，系统根据输入的键输出对应的值
'''
info = {'name': 'thanlon', 'age': 23, 'gender': '男'}
for k, v in info.items():
    print(k, v)
while True:
    key = input('请输入key：')
    print(info[key])
'''
name thanlon
age 23
gender 男
请输入key：name
thanlon
请输入key：age
23
'''
```
② 给一个空字典，在空字典中添加数据
```python
# coding:utf-8
'''
给一个空字典，在空字典中添加数据
'''
info = {}
info['name'] = 'thanon'
info['age'] = 23
info['gender'] = '男'
print(info)
'''
{'name': 'thanon', 'age': 23, 'gender': '男'}
'''
```
③ 给一个空字典，输入key和value，将输入的key和value添加到字典中
```python
# coding:utf-8
'''
# coding:utf-8
'''
给一个空字典，输入key和value，将输入的key和value添加到字典中
'''
info = {}
k = input('Place input key：')
v = input('Place input value：')
info[k] = v
print(info)
'''
Place input key：name
Place input value：thanlon
{'name': 'thanlon'}
'''
```
④ 给一个空字典，让用户一直输入key和value，将输入的key和value添加到字典中，直到用户输入N，则表示不再输入。
```python
# coding:utf-8
'''
给一个空字典，让用户一直输入key和value，将输入的key和value添加到字典中，直到用户输入N，则表示不再输入。
'''
info = {}
while True:
    k = input('Please input key：')
    if k == 'N':
        break
    v = input('Please input Value：')
    info[k] = v
print(info)
'''
Please input key：name
Please input Value：thanlon
Please input key：age
Please input Value：23
Please input key：N
{'name': 'thanlon', 'age': '23'}
'''
```
⑤ 使用代码实现：将字符串'k1|v1,k2|v2,k3|v3,…'转换为字典{'k1':'v1','k2':'v2',……}
```python
# coding:utf-8
'''
使用代码实现：
将这样的字符串'k1|v1,k2|v2,k3|v3,…'转换为这样的字典{'k1':'v1','k2':'v2',……}
'''
msg = 'k1|v1,k2|v2,k3|v3'
info = {}
for item in msg.split(','):
    k, v = item.split('|')
    info[k] = v
print(info)
'''
{'k1': 'v1', 'k2': 'v2', 'k3': 'v3'}
'''
```
⑥ 数据类型的嵌套
元组、列表、字典可以相互嵌套：
```python
# coding:utf-8
'''
从[1, 2, {'k1': 1, 'k2': 2, 'k3': (1, 2, 3), 'k4': [1, (4, 5, 6), 2]}, 3]中取值，取出k4中的6
'''

data = [1, 2, {'k1': 1, 'k2': 2, 'k3': (1, 2, 3), 'k4': [1, (4, 5, 6), 2]}, 3]
print(data[2]['k4'][1][2])
'''
6
'''
```
⑦ 创建一个用户列表，然后让用户输入用户名和密码进行登录
```python
# coding:utf-8
'''
创建一个用户列表，然后让用户输入用户名和密码进行登录
'''
# 构建用户列表
user_list = []
while True:
    user = input('请输入用户名：')
    if user == 'N':
        break
    pwd = input('请输入密码：')
    '''
    构建列表方式1
    '''
    # user_info = {}
    # user_info['user'] = user
    # user_info['pwd'] = pwd
    # # print(user_info)  # {'user': 'thanlon', 'pwd': '123'}
    # user_list.append(user_info)
    '''
      构建列表方式2
    '''
    user_info = {'user': user, 'pwd': pwd}
    user_list.append(user_info)
username = input('请输入用户名：')
pwd = input('请输入密码：')
msg = '登录失败！'
for item in user_list:
    if username == item['user'] and pwd == item['pwd']:
        print('登录成功！')
        break
print(msg)
```
⑦ 判断键、值、键值是否在字典中
```python
# coding:utf-8

'''

'''
v = {'k1': 'v1', 'k2': 'v2', 'k3': 'v3'}
if 'x' in v:  # 默认按照键来判断：判断x是否是字典的键
    pass

# 请判断：k1是否是字典中的键
if 'k1' in v:
    pass

'''
请判断：v1是否是字典中的值
方式1：循环判断
'''
# flag = '不存在'
# for v in v.values():
#     if v == 'v1':
#         flag = '存在！'
# print(flag)
'''
请判断：v1是否是字典中的值
方式1：强制转换成列表
'''
if 'v1' in list(v.values()):  # 迁至转换成列表：['v1', 'v2', 'v3']
    pass

'''
判断'k1':'v1'是否在字典中
'''
value = v.get('k1')
if value == 'v1':
    print('存在')
else:
    print('不存在')
```
⑨ 让用户输入任意字符串，判断此字符串是否包含指定的敏感字符
```python
# coding:utf-8
'''
让用户输入任意字符串，判断此字符串是否包含指定的敏感字符
'''
char_list = ['thanlon', 'kiku', 'haha']
content = input('请输入内容：')
success = True
for v in char_list:
    if v in content:
        success = False
        break
if success:
    print(content)
else:
    print('包含敏感字符！')
'''
请输入内容：thanlonthanlon
包含敏感字符！
'''
```
##### 7. None
None数据类型，该类型表示空，无任何功能，专用于提供空值。比空字符串、空列表等更节省内存。
##### 8. 集合
###### 8.1 集合概述
集合是无序的且不重复的。
###### 8.2 空集合与其它空数据类型
```python
# coding:utf-8
None
# int
v1 = 123
v1 = int()  # 0
# bool
v2 = True  # v3 = False
v2 = bool()  # False
# str
v3 = ''
v3 = str()
# list
v4 = []
v4 = list()
# tuple
v5 = ()
v5 = tuple()
# dict
v6 = {}
v6 = dict()
# set
v7 = set()
```
###### 8.3 独有功能
① add：添加
```python
# coding:utf-8
'''
add方法
'''
v = {1, 2}
v.add('thanlon')
v.add('thanlon')  # 不重复，所以不被添加
print(v)
'''
{1, 2, 'thanlon'}
'''
```
② discard
```python
# coding:utf-8
'''
discard方法
'''
v = {1, 2, 'thanlon'}
v.discard('thanlon')
print(v)
'''
{1, 2}
'''
```
③ update
```python
# coding:utf-8
'''
update方法
'''
v = {1, 2, 'thanlon'}
v.update({'kiku'})
v.update(['haha'])
print(v)
'''
{1, 2, 'thanlon', 'haha', 'kiku'}
'''
```
④ intersection：交集
```python
# coding:utf-8
'''
intersection方法:产生交集
'''
v = {1, 2, 'thanlon'}
result = v.intersection({1, 2, 'kiku'})
result2 = v.intersection([1, 2, 'kiku'])
print(result)
print(result2)
'''
{1, 2}
{1, 2}
'''
```
⑤ union：并集
```python
# coding:utf-8
'''
union:并集
'''
v = {1, 2, 'thanlon'}
result = v.union({1, 'kiku'})
result2 = v.union([1, 'kiku'])
print(result)
print(result2)
'''
{1, 2, 'thanlon', 'kiku'}
{1, 2, 'thanlon', 'kiku'}
'''
```
⑥ difference：差集
```python
# coding:utf-8
'''
difference:产生差集
'''
v = {1, 2, 'thanlon'}
result = v.difference({1, 2})
result2 = v.difference([1, 2])
print(result)
print(result2)
'''
{'thanlon'}
{'thanlon'}
'''
```
⑦ symmetric_difference：对称差集
```python
# coding:utf-8
'''
difference:对称差集
'''
v = {1, 2, 'thanlon'}
result = v.symmetric_difference({1, 'kiku'})
result2 = v.symmetric_difference([1, 'kiku'])
print(result)
print(result2)
'''
{2, 'kiku', 'thanlon'}
{2, 'kiku', 'thanlon'}
'''
```
###### 8.4 公共功能
① len：获取集合元素的长度
```python
# coding:utf-8
v = {'thanlon', 'kiku'}
print(len(v))
'''
2
'''
```
② for循环
```python
# coding:utf-8
v = {'thanlon', 'kiku'}
for i in v:
    print(i)
'''
kiku
thanlon
'''
```
③ 索引【无】
④ 步长【无】
⑤ 切片【无】
⑥ 删除【无】
⑦ 修改【无】
###### 8.5 集合的嵌套
可变类型不可以放在集合中，列表、字典、集合均不能放在集合中，这三种数据类型是不可hash的，并且不能作为字典的key。
```python
info = {1,2,True,'thanlon',None,(1,2,3)}
```
在列表查找元素比较慢，在集合和字典中查找元素比较快。字典中会把key进行hash转换，查找元素的时候，直接根据k1，找到v1。而不是一个元素一个元素去找。集合和字典要比列表、元组查找速度快得多。
```python
# coding:utf-8
v = {
    1: 'thanlon',
    True: 'kiku'  # True还是1，值发生改变
}
print(v)
'''
{1: 'kiku'}
'''
```
##### 9. 有无序性
元组和列表是有序的，集合和字典是无序的，但是Python3.6之后字典是有序的。可以这样说，元组、列表和字典都是有序的，只有集合是无序的。
##### 10. 字节类型
对于字符串v = '奈何'，内部使用unicode编码，“奈”与“何”分别占4个字节。如果对它的字节进行编码，达到压缩的效果：v2 = v.encode('utf-8')，得到的v2是字节。将字符串通过某种编码方式进行编码，编码后的叫做字节。字节类型显示一般有个特点：前面有个“b”。写入文件、网络传输时，字符串（unicode编码）需要进行压缩，也就是编码成utf-8的类型，才能让用户进行文件操作和网络传输。
```python
# coding:utf-8
f = open('log.txt', mode='wb')
v = '奈何'
data = v.encode('utf-8')
print(type(data), data)  # <class 'bytes'> b'\xe5\xa5\x88\xe4\xbd\x95'
f.write(data)
f.close()
```
```python
# coding:utf-8
f = open('log.txt', mode='w', encoding='utf-8')  # 内部将unicode编码的字符串转换为utf-8的编码方便文件操作
data = '奈何'
f.write(data)  # data是字符串类型就可以
f.close()
```
pickle与json的dumps方法会得到不同的类型：
```python
# coding:utf-8
import json, pickle

v = ['thanlon', '奈何']
val = pickle.dumps(v)
print(type(val), val)
'''
<class 'bytes'> b'\x80\x03]q\x00(X\x07\x00\x00\x00thanlonq\x01X\x06\x00\x00\x00\xe5\xa5\x88\xe4\xbd\x95q\x02e.'
'''
val2 = json.dumps(v)
print(type(val2), val2)
'''
<class 'str'> ["thanlon", "\u5948\u4f55"]
'''
```
如果是一个字符串，就说明是unicode编码的二进制。如果是字节，可能是utf-8，可能是gbk，也可能是其它编码的二进制。
##### 11. 数据类型内存相关
注意：是内部修改了，还是重新赋值

① 示例一（内部修改）
```python
# coding:utf-8
'''
练习：v1和v2指向同一存储空间
'''
v1 = [1, 2, 3]
v2 = v1
v1.append(4)
print(v1)
print(v2)
'''
[1, 2, 3, 4]
[1, 2, 3, 4]
'''
```
② 示例二（重新赋值）
```python
# coding:utf-8
'''
练习：v1和v2指向同一存储空间
'''
v1 = [1, 2, 3]
v2 = v1
# v1.append(4)
v1 = [4, 5, 6]
print(v1)
print(v2)
'''
[4, 5, 6]
[1, 2, 3]
'''
```
③ 示例三（重新赋值）
```python
# coding:utf-8
'''
字符串内部是不可以修改的
'''
v1 = 'thanlon'
v2 = v1
v1 = 'kiku'
print(v2)
'''
thanlon
'''
```
④ 示例四
- 练习1（内部修改）
```python
# coding:utf-8
v = [1, 2, 3]
v2 = [1, 2, 3, v]
v.append('4')
print(v2)
'''
[1, 2, 3, [1, 2, 3, '4']]
'''
```
⑤ 练习2（内部修改）
```python
# coding:utf-8
v = [1, 2, 3]
v2 = [1, 2, 3, v]
v2[3].append(4)
print(v2)
'''
[1, 2, 3, [1, 2, 3, '4']]
'''
```
⑥ 练习3（重新赋值）
```python
# coding:utf-8
'''
重新赋值
'''
v = [1, 2, 3]
v2 = [1, 2, 3, v]
v = [4, 5, 6]
print(v2)
'''
[1, 2, 3, [1, 2, 3]]
'''
```
⑦ 练习五
```python
# coding:utf-8
v = [1, 2, 3]
v2 = [1, 2, 3, v]
v2[3] = 4
print(v)
'''
[1, 2, 3]
'''
```
⑧ 查看内存地址

修改内部元素：
```python
# coding:utf-8
v = [1, 2, 3]
v2 = v
print(id(v), id(v2))  # 指向同一地址
v.append(4)
print(id(v), id(v2))
'''
2375633494664 2375633494664
2375633494664 2375633494664
'''
```
重新赋值：
```python
# coding:utf-8
v = [1, 2, 3]
v2 = v
print(id(v), id(v2))  # 指向同一地址
v = [4, 5, 6]
print(id(v), id(v2))
'''
2398328087176 2398328087176
2398328087240 2398328087176
'''
```
⑨ 内存地址特殊情况
```python
'''
v1 = [1, 2, 3]
v2 = [1, 2, 3]

v3 = [1, 2, 3]
v4 = [4, 5, 6]

v5 = [1, 2, 3]
v6 = v4
'''
```
按理说上面的v1与v2，v3与v4，v5与v6的内存地址是不同的，但特殊情况下有：
- 整型：-5~256
- 字符串：简单的字符串，如'thanlon'，做缓存，不开辟内存。复杂点的如'a_*~'*大于1的数，一般都会开辟内存。

这其实是python为了提高性能，做的一些优化的方案。

⑩ == 和is的区别（面试题）

 ==：用于比较值是否相等
 is：用于比较内存地址是否相等
```python
# coding:utf-8
v1 = [1, 2, 3]
v2 = [1, 2, 3, 4]
print(v1 == v2)
print(v1 is v2)
'''
False
False
'''
```
```python
# coding:utf-8
v1 = [1, 2, 3]
v2 = [1, 2, 3]
print(v1 == v2)
print(v1 is v2)
'''
True
False
'''
```
```python
# coding:utf-8
v1 = [1, 2, 3]
v2 = v1
print(v1 == v2)
print(v1 is v2)
'''
True
True
'''
```
##### 12. 数据类型转换
###### 12.1 其它类型转换为数字类型
```py
# 字符串转数字类型
a = int('123')
print(type(a),a)
b = float('123.456')
print(type(b),b)
# 布尔类型转数字类型
c = int(True)
d = float(True)
print(type(c),c)
print(type(d),d)
```
`执行记录：`
```js
<class 'int'> 123
<class 'float'> 123.456
<class 'int'> 1
<class 'float'> 1.0
```
###### 12.2 其它类型转字符串
```py
# 数字类型转换为字符串类型
str1 = str(123)
str2 = str(123.456)
print(str1)
print(str2)
# 布尔类型转换为字符串类型
str3 = str(True)
str4 = str(False)
print(str3)
print(str4)
# 列表转字符串
str5 = str(["Thanlon","Kiku"])
print(type(str5),str5)
str6 = ''.join(['Thanlon','kiku']) # 将列表中元素通过join连接必须是字符串才可以
print(type(str6),str6)
# 元组转字符串
str7 = str((1,2,3,4,5,6))
print(type(str7),str7)
```
`执行记录：`
```js
123
123.456
True
False
<class 'str'> ['Thanlon', 'Kiku']
<class 'str'> Thanlonkiku
<class 'str'> (1, 2, 3, 4, 5, 6)
```
###### 12.3 其它类型转换为列表
```py
# 字符串转换为列表
str = 'thanlon'
print(list(str)) # ['t', 'h', 'a', 'n', 'l', 'o', 'n']
# 元组转换为列表
tuple1 = (1,2,3,4,5,6)
print(list(tuple1)) # [1, 2, 3, 4, 5, 6]
```
`执行记录：`
```js
['t', 'h', 'a', 'n', 'l', 'o', 'n']
[1, 2, 3, 4, 5, 6]
```
###### 12.4 其它类型转换为元组
```py
# 字符串转元组
str = 'thanlon' # ('t', 'h', 'a', 'n', 'l', 'o', 'n')
print(tuple(str))
# 列表转元组
lst = [123,'thanlon']
print(tuple(lst)) # (123, 'thanlon')
```
`执行记录：`
```js
('t', 'h', 'a', 'n', 'l', 'o', 'n')
(123, 'thanlon')
```
###### 12.5 其它类型转换为布尔
```py
# 只有数字0、空字符串，空列表，空元组转换为布尔是False，其它类型转布尔为True
print(bool(0)) # print(bool(0)),(0)就是数字0
print(bool(''))
print(bool([]))
print(bool(()))
```
`执行记录：`
```js
False
False
False
False
```
>**常见的类型转换：`字符串转数字`，`数字转字符串`，`列表转元组`，`元组转列表`，`其它转布尔`**

