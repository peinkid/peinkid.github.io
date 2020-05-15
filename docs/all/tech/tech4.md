---
title: crypto-js aes 加解密
--- 
# 前端 crypto-js aes 加解密
  
&emsp;&emsp;关于 AES 加密的算法有兴趣的小伙伴可自行百度，这里我先推荐几篇文章[AES加密算法的详细介绍与实现](https://blog.csdn.net/qq_28205153/article/details/55798628)、[理解AES加密解密的使用方法](https://blog.csdn.net/vieri_32/article/details/48345023)  
### 具体实现  
&emsp;&emsp;要用 AES 算法加密，首先我们要引入 ***crypto-js*** ，***crypto-js*** 是一个纯 javascript 写的加密算法类库 ，可以非常方便地在 javascript 进行 MD5、SHA1、SHA2、SHA3、RIPEMD-160 哈希散列，进行 AES、DES、Rabbit、RC4、Triple DES 加解密，我们可以采用 npm i crypto-js --save 进行下载安装，也可以直接去 [GitHub](https://github.com/brix/crypto-js)下载源码~  
### 定义加密和解密方法
```javascript
    const CryptoJS = require('crypto-js');  //引用AES源码js
    
    const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');   //十六位十六进制数作为密钥偏移量
    
    //解密方法
    function Decrypt(word) {
        let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
        let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        let decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
        return decryptedStr.toString();
    }
    
    //加密方法
    function Encrypt(word) {
        let srcs = CryptoJS.enc.Utf8.parse(word);
        let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
        return encrypted.ciphertext.toString().toUpperCase();
    }
    
    export default {
        Decrypt ,
        Encrypt
    }
```  

&emsp;&emsp;上面的代码中的 ***key*** 是密钥 ，***iv*** 是密钥偏移量，这个一般是接口返回的，为了方便，我们这里就直接在这里定义了。值得注意的是密钥的长度，由于对称解密使用的算法是 AES-128-CBC算法，数据采用 PKCS#7 填充 ， 因此这里的 key 需要为16位！接着我们定义了 解密方法 ***Decrypt*** 和 加密方法 ***Encrypt*** ，最后通过 ***export default*** 将其暴露出去，方便在需要的时候进行引入~
  
 

