(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{458:function(t,s,a){"use strict";a.r(s);var n=a(13),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"前端-crypto-js-aes-加解密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端-crypto-js-aes-加解密"}},[t._v("#")]),t._v(" 前端 crypto-js aes 加解密")]),t._v(" "),a("p",[t._v("  关于 "),a("span",{staticClass:"pein"},[t._v("AES")]),t._v(" 加密的算法有兴趣的小伙伴可自行百度，这里我先推荐几篇文章"),a("a",{attrs:{href:"https://blog.csdn.net/qq_28205153/article/details/55798628",target:"_blank",rel:"noopener noreferrer"}},[t._v("AES 加密算法的详细介绍与实现"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://blog.csdn.net/vieri_32/article/details/48345023",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解 AES 加密解密的使用方法"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),a("p",[t._v("  要用 "),a("span",{staticClass:"pein"},[t._v("AES")]),t._v(" 算法加密，首先我们要引入 "),a("span",{staticClass:"pein"},[t._v("crypto-js")]),t._v(" ，"),a("span",{staticClass:"pein"},[t._v("crypto-js")]),t._v(" 是一个纯 "),a("span",{staticClass:"pein"},[t._v("javascript")]),t._v(" 写的加密算法类库 ，可以非常方便地在 "),a("span",{staticClass:"pein"},[t._v("javascript")]),t._v(" 进行 "),a("span",{staticClass:"pein"},[t._v("MD5")]),t._v("、"),a("span",{staticClass:"pein"},[t._v("SHA1")]),t._v("、"),a("span",{staticClass:"pein"},[t._v("SHA2")]),t._v("、"),a("span",{staticClass:"pein"},[t._v("SHA3")]),t._v("、"),a("span",{staticClass:"pein"},[t._v("RIPEMD-160")]),t._v(" 哈希散列，进行 "),a("span",{staticClass:"pein"},[t._v("AES")]),t._v("、"),a("span",{staticClass:"pein"},[t._v("DES")]),t._v("、"),a("span",{staticClass:"pein"},[t._v("Rabbit")]),t._v("、"),a("span",{staticClass:"pein"},[t._v("RC4")]),t._v("、"),a("span",{staticClass:"pein"},[t._v("Triple DES")]),t._v(" 加解密，我们可以采用 "),a("span",{staticClass:"pein"},[t._v("npm i crypto-js --save")]),t._v(" 进行下载安装，也可以直接去 "),a("a",{attrs:{href:"https://github.com/brix/crypto-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v("下载源码~")]),t._v(" "),a("h3",{attrs:{id:"定义加密和解密方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义加密和解密方法"}},[t._v("#")]),t._v(" 定义加密和解密方法")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CryptoJS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crypto-js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引用AES源码js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234123412ABCDEF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//十六位十六进制数作为密钥")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABCDEF1234123412"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//十六位十六进制数作为密钥偏移量")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//解密方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Decrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("word")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" encryptedHexStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" srcs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Base64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encryptedHexStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" decrypt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("srcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    iv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" iv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CBC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    padding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pkcs7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" decryptedStr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" decrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" decryptedStr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加密方法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Encrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("word")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" srcs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("word"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" encrypted "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("srcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    iv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" iv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CBC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    padding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CryptoJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pkcs7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" encrypted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ciphertext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Decrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Encrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("  上面的代码中的 "),a("span",{staticClass:"pein"},[t._v("key")]),t._v(" 是密钥 ，"),a("span",{staticClass:"pein"},[t._v("iv")]),t._v(" 是密钥偏移量，这个一般是接口返回的，为了方便，我们这里就直接在这里定义了。值得注意的是密钥的长度，由于对称解密使用的算法是 "),a("span",{staticClass:"pein"},[t._v("AES-128-CBC")]),t._v("算法，数据采用 "),a("span",{staticClass:"pein"},[t._v("PKCS#7")]),t._v(" 填充 ， 因此这里的 "),a("span",{staticClass:"pein"},[t._v("key")]),t._v(" 需要为 16 位！接着我们定义了 解密方法 "),a("span",{staticClass:"pein"},[t._v("Decrypt")]),t._v(" 和 加密方法 "),a("span",{staticClass:"pein"},[t._v("Encrypt")]),t._v(" ，最后通过 "),a("span",{staticClass:"pein"},[t._v("export default")]),t._v(" 将其暴露出去，方便在需要的时候进行引入~")]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=p.exports}}]);