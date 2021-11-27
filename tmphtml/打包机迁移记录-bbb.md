# **打包机迁移记录**

### 1、系统篇：

升级Mac Mini至最新系统macO Monterey 12.0.1



### 2、部署iOS开发环境

#### 1）安装HomeBrew

官方地址：/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

国内地址：/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

安装后验证：brew -v

```
Homebrew 3.3.2

Homebrew/homebrew-core (git revision c6efab0517c; last commit 2021-11-02)
```

#### 2）安装Cocoapods

##### 更换ruby源：

​	a）删除现有Ruby源：gem sources --remove https://rubygems.org/

​	b）新增国内Ruby源：gem sources --add https://gems.ruby-china.com/	

##### 升级Gem：

​	a）sudo gem update --system　

##### 安装Cocoapods

​	a）安装指令：sudo gem install -n /usr/local/bin cocoapods  

​	b）验证安装结果：pod --version

​	c）配置pod：pod setup

​	d）验证配置结果：pod search AFNetworking

#### 3）安装Git工具

​	a）安装SourceTree工具

​	b）为Git新增私有库源：pod repo add BCMSpecs http://182.119.184.219:8084/client/ios/bcmspecs.git

​	c）使用SourceTree拉取最新壳工程代码

​	d）在壳工程根目录执行pod install，拉取所有pod私有库

#### 4）安装Xcode 13.1

​	a）迁移交通银行、港行证券、港行手机银行、东京行、澳门行企业发布证书+描述文件

​	b）迁移交通银行、港行证券、港行手机银行、东京行、澳门行开发证书+描述文件

​	c）编译壳工程代码，本地打包测试



### 3、部署Android开发环境

1）安装jdk8，jdk11

https://www.oracle.com/java/technologies/downloads/#java8

2）安装android studio最新版本

https://developer.android.com/studio

3）在android studio中安装

android sdk：10.0、11.0、12.0

sdk tools：build-tools、command-line tools、cmake、android emulator、android sdk platform-tools

4）同步gradle

5）编译测试：gradlew build



### 4、迁移Jenkins

#### 1）安装Jenkins

- （我们安装的版本）Install the latest LTS version: `brew install jenkins-lts`
- Install a specific LTS version: `brew install jenkins-lts@YOUR_VERSION`
- Start the Jenkins service: `brew services start jenkins-lts`
- Restart the Jenkins service: `brew services restart jenkins-lts`
- Update the Jenkins version: `brew upgrade jenkins-lts`

#### 2）配置Jenkins

打开localhost:8080，获取初始化密码填入，安装初始化建议插件，配置用户名、密码、邮箱等

#### 3）迁移数据

- 拷贝jobs目录至桌面
- 定位到jobs目录下所有工程的builds目录，$JENKINS_HOME/jobs/[JOB_NAME]/builds
- 清理build记录，build文件夹下所有数字命名的文件夹，全部清理
- 拷贝jobs目录至Mac mini，并放入Mac mini对应的jenkins目录下

#### 4）配置插件

比对老打包机已安装插件，在Mac mini上补充安装缺失的插件

#### 5）配置访问地址
- 配置jks的plist文件，指定listenAddressHost: 0.0.0.0

#### 6）调试脚本
> ##### 安装周边工具
> iterm2,sublime text,inetutils,go2shell
- 配置jks的credential，系统=》mgr crendtial添加
- 配置jks的ftp插件，指定182.119.184.219的8083端口
- 配置主要ci工程的ftp local目录和remote目录
> ##### 安装nodejs
> git clone http://182.119.184.219:8084/ios/BCMMockWHT
> cd Jmes
> npm install
> npm link
- 做好相关ci工程的子试图方便管理
- 根据打包机的cpu指令集，决定是否添加ONLY_ACTIVE_ARCH=NO的选项，m1芯片加，x86芯片不加
- 导入各种p12证书
- 配置ci工程的git crendial
- 配置git config --user.email='xxxxxx@xxx.xx' 邮箱
- 配置git config --user.name='xxxxxx' 用户名
- 把uat的ci工程跑一遍，待弹出apns.new授权autosign，填好打包机登录密码
- 把预发布的ci工程跑一遍，待弹出bankcomm.bankcomm授权autosign，填好打包机登录密码
- 把appstore的ci工程跑一遍，待弹出bankcomm.bankcomm授权autosign，填好打包机登录密码
- 检查ftp落地文件是否丢失
- 检查ftp落地文件指令集是否满足期望lipo -info xxxxx.xxxx

