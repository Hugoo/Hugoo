"use strict";(self.webpackChunkhugoo=self.webpackChunkhugoo||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/tips-tricks-web3-hackathons","metadata":{"permalink":"/tips-tricks-web3-hackathons","editUrl":"https://github.com/Hugoo/Hugoo/edit/main/blog/blog/tips-tricks-web3-hackathons.md","source":"@site/blog/tips-tricks-web3-hackathons.md","title":"Tips and tricks for (Web3?) hackathons","description":"Tips and tricks for (web3?) hackathons.","date":"2023-02-26T00:00:00.000Z","formattedDate":"February 26, 2023","tags":[{"label":"web3","permalink":"/tags/web-3"},{"label":"hackathon","permalink":"/tags/hackathon"}],"readingTime":5.35,"hasTruncateMarker":true,"authors":[{"name":"Hugo Masclet","url":"https://hugomasclet.com/about","imageURL":"https://github.com/Hugoo.png","key":"hugo"}],"frontMatter":{"authors":"hugo","tags":["web3","hackathon"],"date":"2023-02-26T00:00:00.000Z","description":"Tips and tricks for (web3?) hackathons."},"unlisted":false,"nextItem":{"title":"Playing with ethereum secp256k1 keys","permalink":"/ethereum-secp256k1-keys"}},"content":"<div style={{textAlign: \'center\'}}>\\n\\n![Ready to hack at ETHNewYork 2022](/img/articles/ethny.jpeg)\\n\\n_Ready to hack at ETHNewYork \ud83e\udd1f._\\n\\n</div>\\n\\nHackathons are amazing \u2728\\n\\nOne has to be a bit crazy - _or to really love building_ - to spend her/his weekend on a 48h+ coding challenge. But it is worth it. You\'ll meet amazing people, learn new technologies, develop ideas, find a job, build a company, win things...\\n\\nOver the last few years, I was fortunate enough to participate in multiple hackathons. As a hacker \ud83d\udc68\u200d\ud83d\udcbb, a mentor \ud83e\uddd9\u200d\u2642\ufe0f or a judge \ud83d\udc68\u200d\u2696\ufe0f.\\n\\nIt all started with a hackathon organised by Louis Vuitton, [Unlock the Future of Luxury](https://www.lvmh.com/news-documents/news/hackathon-decodes-louis-vuitton/) hackathon in 2015. My first Web3 hackathon was the [Polkadot Hello World hackathon](https://gitcoin.co/hackathon/polkadot/onboard) in 2020 on Gitcoin. Later in 2022 at [ETHDenver](https://www.ethdenver.com/), I joined the judging team for the [NFT track](https://dorahacks.io/hackathon/ethdenver22?track=nfts). At [LUKSO](https://lukso.network/), we also organised two hackathons: [Hack your Profile](https://medium.com/lukso/winners-of-the-lukso-hack-your-profile-hackathon-5f8b90504de9) and the [Build \ud83c\udd99 #1](https://medium.com/@lukso/lukso-build-1-hackathon-meet-the-winners-6824f744b610) hackathons for which I was part of the judging team. The last hackathon I did was [ETHNewYork](https://nyc.ethglobal.co/) in 2022 where I participated as a hacker. And finally, this year, I\'ll join the mentor team for ETHDenver 2023 \\\\#BUIDLathon.\\n\\nFrom these experiences, I gathered a few tips and tricks that I want to share with you.\\n\\n\x3c!--truncate--\x3e\\n\\n## During the hackathon\\n\\n<div style={{textAlign: \'center\'}}>\\n\\n![The hacking area at DEVCON VI Bogot\xe1](/img/articles/devcon-hack.webp)\\n\\n_The hacking area at [DEVCON VI Bogot\xe1](https://devcon.org/) \ud83c\udde8\ud83c\uddf4._\\n\\n</div>\\n\\n### \ud83d\udc65 Team\\n\\nHave a well-balanced team. I find teams over 3 to be a bit too large, especially if you don\'t know each other. Try to mix your team skills as much as possible: frontend, backend, smart contracts, design, etc. Usually, you can connect with hackathon participants before it starts. Go on Discord, Twitter, etc. and create connections before the start of the hackathon.\\n\\n### \ud83d\udea7 Project\\n\\nYour project doesn\'t have to be too technical, for instance don\'t underestimate educational projects. Try to do one thing well rather than a lot things bad. Everyone knows it is a hackthon project, you don\'t have time. The most important thing is to have a good idea and to share this idea with the judges.\\n\\n### \ud83c\udfa8 Don\'t under estimate the impact of UX/UI/presentation\\n\\nI think many teams fail because they can\'t explain well what their project is about. At the demo time, it won\'t really matter that you have an amazing super optimized Kafka distributed event streaming platform if no one understands what your idea/product is about. So don\'t under estimate \\"less technical\\" roles in your team. They can work on the presentation, and they will definitely make sure your project \\"has a reason to exist\\".\\n\\n### \u23f1\ufe0f Spend your time wisely\\n\\nIt may not be worth to spend 5h to debug or build a super crazy cool function that no one will see during the demo. Sometimes, you need to make compromises. Go fast, use libraries, use no code platforms (Airtable backend?...) - just use whatever brings the best value for as little time as possible. If you win, you\'ll have enough time to adjust and improve your technical stack.\\n\\n### \ud83d\udca4 Sleep well\\n\\nTrust me, you don\'t need to be up for 48h or to sleep under your desk to win a hackathon. Have fun, sleep well, be productive.\\n\\n### \ud83e\uddf0 Know your stack\\n\\nYou will be more efficient if you work with a stack you already know. 48h is too less to jump into a new framework or language. Just stick to what you know best.\\n\\n### \ud83d\udc68\u200d\ud83c\udfeb Prepare your demo/presentation on time\\n\\nDon\'t underestimate the time needed to make a good demo/presentation. You could spend 2h to fix a bug or slightly optimise something, or you could use these 2h to make a nice presentation to explain what you are building. I think the later is a better way to spend 2h.\\n\\n### \ud83c\udf10 Deploy a live version of your web app\\n\\nAsking the judges to `git clone` and `npm install` your project is just too much to ask. Sorry. Is your repo safe? Do I have the latest Node version?... You can deploy a frontend in minutes with [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), Google App Engine, [Heroku](https://www.heroku.com/), etc. Just set it up at the beginning of the project and share your preview URL. You will get these extra bonus points for making everyone\'s life easier \ud83e\udd19\\n\\nI find the [NextJS](https://nextjs.org/) + Vercel stack amazing to quickly setup a live version of your project.\\n\\n## During the demo\\n\\n<div style={{textAlign: \'center\'}}>\\n\\n![A demo at ETHDenver 2022](/img/articles/demo-ethdenver-2022.webp)\\n\\n_A demo at [ETHDenver 2022](https://www.ethdenver.com/) \ud83c\udfd4\ud83e\uddac\ud83e\udd84._\\n\\n</div>\\n\\n### \ud83c\udf99\ufe0f Confirm your team name\\n\\nThings go fast, judges jump from teams to teams. Before starting your pitch/demo, just make sure the judges know which team you are in.\\n\\n### \ud83d\udd0d Make things big\\n\\nWe don\'t see much, the hacking area is busy and crowded. If you make presentations, make everything super big so everyone can see what you want to show.\\n\\n### \ud83d\udd17 Use QR codes and short links\\n\\nIf you want to share something (project demo, GitHub repo, etc.) think about using QR code or short links.\\n\\n### \ud83d\udcca Make diagrams\\n\\nDiagrams will never hurt, especially if you build a complex DeFi/NFT protocol.\\n\\nMake sure every judge has understood what you are building. Read their faces - if they seem confused - ask questions. You can stop your pitch and ask if everyone understands what you are presenting.\\n\\n### \ud83e\udee1 Respect the rules\\n\\nThis seems obvious right?\\n\\n- Make your repo public\\n- Make a presentation video\\n- Submit on time\\n- ...\\n\\nJust stick to the rules. As good as your project can be and as much as we want to make you a winner, if your project does not respect the rules, giving you the 1st place \ud83e\udd47 won\'t be fair - therefore, we can\'t give you the 1st place. So, just stick to the rules \ud83d\ude4f\\n\\n### \ud83e\udd2a Use emojis\\n\\nYeah, it makes it cooler at literally no cost. On a Mac, you can use `Ctrl+Cmd+Space` to open the emoji selector.\\n\\n<div style={{textAlign: \'center\' }}>\\n\\n<img src=\\"/img/articles/emoji.webp\\" width=\\"200px\\" alt=\\"MacOS emoji selector\\"/>\\n\\n</div>\\n\\n### 1\ufe0f\u20e3 Make sure your project is new and unique\\n\\nSome people simply send the exact same project to multiple hackathons and only change the name and the favicon. Come on, save everyone\'s time. Don\'t do that.\\n\\n## Conclusion\\n\\nParticipate to hackathons, keep your team small, know your stack, don\'t underestimate the UI/UX/presentation, have fun and make friends \ud83d\ude0a"},{"id":"/ethereum-secp256k1-keys","metadata":{"permalink":"/ethereum-secp256k1-keys","editUrl":"https://github.com/Hugoo/Hugoo/edit/main/blog/blog/ethereum-secp256k1-keys.md","source":"@site/blog/ethereum-secp256k1-keys.md","title":"Playing with ethereum secp256k1 keys","description":"In this article, we will generate a secp256k1 key with openssl, analyse the content of the public key .pem file and generate the Ethereum address from it.","date":"2022-04-08T00:00:00.000Z","formattedDate":"April 8, 2022","tags":[],"readingTime":3.015,"hasTruncateMarker":true,"authors":[{"name":"Hugo Masclet","url":"https://hugomasclet.com/about","imageURL":"https://github.com/Hugoo.png","key":"hugo"}],"frontMatter":{"title":"Playing with ethereum secp256k1 keys","authors":"hugo","date":"2022-04-08T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"Tips and tricks for (Web3?) hackathons","permalink":"/tips-tricks-web3-hackathons"}},"content":"In this article, we will generate a `secp256k1` key with `openssl`, analyse the content of the public key `.pem` file and generate the [Ethereum address](https://ethereum.org/en/developers/docs/accounts/#account-creation) from it.\\n\\n\x3c!--truncate--\x3e\\n\\n## Generate keys with OpenSSL\\n\\nLet\'s generate a private key using OpenSSL:\\n\\n```sh\\nopenssl ecparam -name secp256k1 -genkey -noout -out priv-key.pem\\n```\\n\\nand create the corresponding public key:\\n\\n```sh\\nopenssl ec -in priv-key.pem -pubout > pub-key.pem\\n```\\n\\nYou can also generate this file:\\n\\n```sh\\nopenssl ec -in priv-key.pem -text -noout -out priv-pub-key\\n```\\n\\nThe `-noout` option prevents output of the encoded version of the request.\\n\\nYou should have a file like this:\\n\\n```txt title=\\"public-key.pem\\"\\n-----BEGIN PUBLIC KEY-----\\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE95AekWG5tT8uHyew8eRxH8yPI0qQ9V/S\\nBopnsVKUg4nA7h5A90oOGU73wrWWZicLFtUs9YX9jmX8AJWPeK93sA==\\n-----END PUBLIC KEY-----\\n```\\n\\n## From .pem to uncompressed hex public key\\n\\nThe content of the file above is encoded in `base64`, let\'s get our public key from it in hex.\\n\\n```js\\nconst pem =\\n  \\"-----BEGIN PUBLIC KEY-----\\\\n\\" +\\n  \\"MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE95AekWG5tT8uHyew8eRxH8yPI0qQ9V/S\\\\n\\" +\\n  \\"BopnsVKUg4nA7h5A90oOGU73wrWWZicLFtUs9YX9jmX8AJWPeK93sA==\\\\n\\" +\\n  \\"-----END PUBLIC KEY-----\\\\n\\";\\n\\nconst b64Final = pem\\n  .replace(/\\\\n/g, \\"\\")\\n  .replace(\\"-----BEGIN PUBLIC KEY-----\\", \\"\\")\\n  .replace(\\"-----END PUBLIC KEY-----\\", \\"\\");\\n\\nconsole.log(b64Final);\\n// MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE95AekWG5tT8uHyew8eRxH8yPI0qQ9V/SBopnsVKUg4nA7h5A90oOGU73wrWWZicLFtUs9YX9jmX8AJWPeK93sA==\\n```\\n\\nAccording to [`RFC5480`](https://www.rfc-editor.org/rfc/rfc5480), the structure is:\\n\\n```txt\\nSubjectPublicKeyInfo  ::=  SEQUENCE  {\\n    algorithm         AlgorithmIdentifier,\\n    subjectPublicKey  BIT STRING\\n}\\n\\nAlgorithmIdentifier  ::=  SEQUENCE  {\\n    algorithm   OBJECT IDENTIFIER,\\n    parameters  ANY DEFINED BY algorithm OPTIONAL\\n}\\n```\\n\\nIn our case, the `AlgorithmIdentifier` is[^1], [^2]:\\n\\n```\\nSEQUENCE { OID 1.2.840.10045.2.1 (ecPublicKey), OID 1.3.132.0.10 (secp256k1) }\\n```\\n\\nLet\'s check the hex value of the key:\\n\\n```js\\nconst b64Final =\\n  \\"MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE95AekWG5tT8uHyew8eRxH8yPI0qQ9V/SBopnsVKUg4nA7h5A90oOGU73wrWWZicLFtUs9YX9jmX8AJWPeK93sA==\\";\\n\\nconst buffer = Buffer.from(b64Final, \\"base64\\");\\nconst pemHex = buffer.toString(\\"hex\\");\\n\\nconsole.log(pemHex);\\n// 3056301006072a8648ce3d020106052b8104000a03420004f7901e9161b9b53f2e1f27b0f1e4711fcc8f234a90f55fd2068a67b152948389c0ee1e40f74a0e194ef7c2b59666270b16d52cf585fd8e65fc00958f78af77b0\\n```\\n\\nWe can analyse this hexadecimal string in an [hexadecimal editor](https://hexed.it/):\\n\\n![hex editor](./pem-hex.png)\\n\\nIn hexadecimal, each group of 2 characters represents one byte. The `algorithm` (AlgorithmIdentifier) is encoded in the first 24 bytes.\\nYou can use an [Online Object Identifier DER Encoder](https://misc.daniel-marschall.de/asn.1/oid-converter/online.php) to find values above:\\n\\n| Name        | OID               | HEX                          |\\n| ----------- | ----------------- | ---------------------------- |\\n| ecPublicKey | 1.2.840.10045.2.1 | `06 07 2A 86 48 CE 3D 02 01` |\\n| secp256k1   | 1.3.132.0.10      | `06 05 2B 81 04 00 0A`       |\\n\\nThe `subjectPublicKey` is encoded in the remaining 26 bytes.\\nTo remove the first 24 bytes, we can remove the first `2*24` hexadecimal characters from the `pemHex` string above.\\n\\nFinally, we need to add the `0x04` prefix (`0x` is for hexadecimal, [but why 04?](https://bitcointalk.org/index.php?topic=42384.0)) - `(0x04 | PubKeyX(32B) | PubKeyY(32B))` and we get the uncompressed public key:\\n\\n```txt title=\\"Uncompressed public key\\"\\n0x04f7901e9161b9b53f2e1f27b0f1e4711fcc8f234a90f55fd2068a67b152948389c0ee1e40f74a0e194ef7c2b59666270b16d52cf585fd8e65fc00958f78af77b0\\n```\\n\\nYou can check if the hex value above matches the `pub:` value you have in the `priv-pub-key` file generated earlier.\\n\\n```txt\\nPrivate-Key: (256 bit)\\npriv:\\n    00:...\\npub:\\n    04:f7:90:1e:91:61:b9:b5:3f:2e:1f:27:b0:f1:e4:\\n    71:1f:cc:8f:23:4a:90:f5:5f:d2:06:8a:67:b1:52:\\n    94:83:89:c0:ee:1e:40:f7:4a:0e:19:4e:f7:c2:b5:\\n    96:66:27:0b:16:d5:2c:f5:85:fd:8e:65:fc:00:95:\\n    8f:78:af:77:b0\\nASN1 OID: secp256k1\\n\\n```\\n\\n## Uncompressed public key -> Ethereum address\\n\\nSo now, we have an uncompressed public key in hex, how to get the Ethereum address from it?\\n\\nAccording to the Ethereum docs[^3]:\\n\\n_The address consists of the rightmost 160 bits of the 256-bit Keccak-256 hash of the serialized public key. This is equivalent to the rightmost 20 bytes of the 32-byte hash._\\n\\nIn Ethereum we only use uncompressed key (`0x04` prefix).\\nPublic key K (x and y coordinates concatenated and shown as hex):\\n\\n```\\nf7901e9161b9b53f2e1f27b0f1e4711fcc8f234a90f55fd2068a67b152948389c0ee1e40f74a0e194ef7c2b59666270b16d52cf585fd8e65fc00958f78af77b0\\n```\\n\\nIt is worth noting that the public key is not formatted with the prefix (hex) 04 when the address is calculated.\\n\\nYou need to hash the _bytes_ of the public key (not the public key hex _string_).\\n\\n```js\\nconst pemHexWithoutHeader =\\n  \\"f7901e9161b9b53f2e1f27b0f1e4711fcc8f234a90f55fd2068a67b152948389c0ee1e40f74a0e194ef7c2b59666270b16d52cf585fd8e65fc00958f78af77b0\\";\\n\\nconst hash = createKeccakHash(\\"keccak256\\")\\n  .update(Buffer.from(pemHexWithoutHeader, \\"hex\\"))\\n  .digest();\\nconst address = \\"0x\\" + hash.slice(-20).toString(\\"hex\\");\\n\\nconsole.log(\\"Checksum address:\\", web3.utils.toChecksumAddress(address));\\n// 0x039DC3795a6702F2B53FA0A29534Ec90B10F8d6a\\n```\\n\\nDone :)\\n\\n# References\\n\\n- [^1][OID-Info - id-ecPublicKey](http://oid-info.com/get/1.2.840.10045.2.1)\\n- [^2][OID-Info - secp256k1](http://oid-info.com/get/1.3.132.0.10)\\n- [^3][https://ethereum.org/en/developers/docs/accounts/#account-creation](https://ethereum.org/en/developers/docs/accounts/#account-creation)\\n- [https://www.oreilly.com/library/view/mastering-ethereum/9781491971932/ch04.html](https://www.oreilly.com/library/view/mastering-ethereum/9781491971932/ch04.html)\\n- [https://tls.mbed.org/kb/cryptography/asn1-key-structures-in-der-and-pem](https://tls.mbed.org/kb/cryptography/asn1-key-structures-in-der-and-pem)\\n- [SEC 1: Elliptic Curve Cryptography](https://www.secg.org/sec1-v2.pdf)\\n- [https://gist.github.com/miguelmota/3793b160992b4ea0b616497b8e5aee2f](https://gist.github.com/miguelmota/3793b160992b4ea0b616497b8e5aee2f)"}]}')}}]);