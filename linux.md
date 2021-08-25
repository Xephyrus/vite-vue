<center><h2>Linux开发手记</h2></center>

#### Linux系统目录结构

```bash
/ // 根目录
├── bin // bin 目录
├── boot
├── dev
├── etc
├── home
│   ├── alice
│   ├── bob
│   └── eve
├── root
├── run
├── sbin
├── usr
│   ├── bin
│   ├── local
│   ├── sbin
│   └── tmp
└── var
    └── tmp

```

以下是对这些目录的解释:

+ ##### /bin:   

   bin是 Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。

+ ##### /boot：  
这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。

+ ##### /dev ：  
dev 是 Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。

+ ##### /etc：  
etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。

+ ##### /home：  
用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。

+ ##### /root：  
该目录为系统管理员，也称作超级权限者的用户主目录。

+ ##### /sbin：  
s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。

+ ##### /tmp：  
tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。

+ ##### /usr：  
 usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。

 + ##### /var：  
    var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。





#### Linux 文件基本属性

