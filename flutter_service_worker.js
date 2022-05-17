'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "83d003b08979b69418953976daeedf2a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e71c081c99bb46c3398714e45468382c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0301243f8ef5d7182aeaa8959764a1d8",
".git/logs/refs/heads/main": "e6689b8fdd024ca45e9a18e840873809",
".git/logs/refs/remotes/origin/main": "044853f61c13e3a2ae1a3d3fd5790ec1",
".git/objects/16/85f40c3c1e66da79cb1559f86f7a14e8fdb5e1": "22a9d6daf865fb15aadac3b7cb18a061",
".git/objects/1f/9599e5b2e5f8defb32d0f7837948b069fa301d": "26b8bb259144ed2fd8fb53b2f6963ec3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/28/a6051130c820d4ff85ee144d81f6b71a5a1350": "19d7bd9630d29b2f5785c58f82ee0590",
".git/objects/38/af5fda4f16ebbaf10aa7930cd7e2a658d68cc7": "aabc658ee74f3ea692b6956e6dfba650",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ca9b1362bdc86c23bab550076592b11cef1ceb": "468f5acd784a5fd7c167c94e189b37a3",
".git/objects/62/10582d24461dfcc146d313ea85e207a793a94f": "d2e0d090396f5b05cb6b9dfd562df9a3",
".git/objects/6a/642d2640fda8a748ebc33025dc7b0594ae60c5": "2e6f0283e092e23455b67457ce945d91",
".git/objects/6b/c7e6ad5ac39ec72f52391b79dcfceae51b7c71": "95ea9e773830b91c7704793dc691799d",
".git/objects/6c/ce890ff4c594ea35957158500118c6bff5c7ff": "d39b31661c06461d4ddecaaad679d2f2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/132bee820b03fb8f2397b9b4f4832196679d65": "43ba5028f11b05c5035ced4a4f0b7f5a",
".git/objects/b1/ffe04bae03cdbfae55abc5fe269602e93a5f2c": "43fe4172567818dd5f1276d87517fcbd",
".git/objects/b4/a503aa0ac4362253e23485843bc7f629f01175": "552e136309f1d4bf523b8bc392251eb3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d9/b4207248e81c80e00a10b34e70806c13dfccd4": "a2c699ee626d0378e37675157b8a611d",
".git/objects/e3/0cb179818a6af6315936ec5e5f57d9280c79c7": "8f54607dbf30eece0d1f87a334d395ca",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/b4d19bab4a5c9d785acb736ee674b8239b4e20": "a7161918a1420a8de95def67c4fcf237",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/refs/heads/main": "5f6cf38c5f74e8a970dba696d78d3c96",
".git/refs/remotes/origin/main": "5f6cf38c5f74e8a970dba696d78d3c96",
"assets/AssetManifest.json": "c51c92c328f6e7bcad12143075820116",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/about/aboutPageimage.png": "5d44667a8ae43641d0c1226b9594e285",
"assets/images/about/ficon.png": "c9311a602bea774bbbafac638a9eb178",
"assets/images/about/icon1.png": "350d9605b4ad5dc603f16edefb138386",
"assets/images/about/icon2.png": "d880cb7082d42ba25eb5ac060ca211f2",
"assets/images/about/icon3.png": "256b428790f81b15ab92537dfd8f3a34",
"assets/images/about/icon4.png": "c9d5035437277387bf9c6e07f6500b97",
"assets/images/about/icon5.png": "025e7814f4b2b80459445913007169a1",
"assets/images/about/iicon.png": "f72625565feccb4d561b96b7332a724b",
"assets/images/about/slide1.png": "9d109864839dab6c6017c54eb2ddb568",
"assets/images/about/slide2.png": "7788eba7835af40f309141496de6f589",
"assets/images/about/Untitled-2.jpg": "8ae54f9724e590aebc5db1bd3e61377b",
"assets/images/about/Untitled-3.png": "366557fac8f901684594f788345a518f",
"assets/images/anjel.png": "35dcebaf94630154b0ff043becc71c30",
"assets/images/appbarimage.png": "ed5cabc3752e2fd6fc9f57a7ec04955b",
"assets/images/arrow.png": "9aaa153edd52de2903079d3af01fe166",
"assets/images/book.png": "a1956e165c9ca13faf5b05bbb34fe126",
"assets/images/branding.png": "085e0a8a446520985bacc9da97f6f747",
"assets/images/bulb.png": "1dfc1b6c33df493a1603e1bb3619e147",
"assets/images/chain.png": "a2e20b541a370c52d24416ece4fc66a7",
"assets/images/clg.png": "265d6544bf82d0b03b661c2a24538c81",
"assets/images/client/1.png": "cf0eb1eeb496e8caeab486c537e03f2a",
"assets/images/client/10.png": "dcc689631190b8f702a8c2fcfad33be8",
"assets/images/client/11.png": "9a56ae89f96878a9d5722a7ef789dd73",
"assets/images/client/12.png": "e4e95b1caeb1bfc4c43577ff78f4fb0a",
"assets/images/client/13.png": "154f53a2c2878c05f7d3c78d30867a7c",
"assets/images/client/14.png": "b28159385acdb825406759b77dc0fcd9",
"assets/images/client/15.png": "6fbf7a70fa82da92fc6d69a4ee32d323",
"assets/images/client/16.png": "c71784adca57befed0af11aba4eeba87",
"assets/images/client/17.png": "25bccb4e6d10c9ade820e2e21d4511ae",
"assets/images/client/18.png": "923be50ebd84854c35840d16949225e6",
"assets/images/client/19.png": "211e2bcbff9879cd150b40ce8e9c5778",
"assets/images/client/2.png": "f848cb45dacb6eed7998e35ddf841d60",
"assets/images/client/20.png": "03aab62378943ad338b88e068913af5d",
"assets/images/client/21.png": "14c5c786e576daf149e2c7f9aeaed889",
"assets/images/client/22.png": "d65fcfc6731b2162f59753395e86455b",
"assets/images/client/23.png": "c86f180e97e218b291a8312803493174",
"assets/images/client/24.png": "95174a36f6b9006131d65eb84a509d1b",
"assets/images/client/25.png": "614104dba2292beab4f4fbd548b564ba",
"assets/images/client/26.png": "cefb6393957a70ad4b4a6e457cad3dd2",
"assets/images/client/27.png": "4d0288cfd61260891a5e906d43a7ee9d",
"assets/images/client/28.png": "70c419612c7f024bf77c9bf8ff886b69",
"assets/images/client/29.png": "6f76739fe4b462811549ba7ef2cf420c",
"assets/images/client/3.png": "22d53ff9d5a78e0dfab9b4bdd47b9d6b",
"assets/images/client/30.png": "6c72bf1d4e55f3a8b8c495dbf724bbe5",
"assets/images/client/31.png": "757896bdbb7b897bec5a98a90941c61f",
"assets/images/client/32.png": "2fe4dbcb3b50e8eadb3bd907bae83268",
"assets/images/client/33.png": "5100f5d8049bb3af02d3c777d0fd0eac",
"assets/images/client/34.png": "d9579e484d0acd5df7251bc3f392cd7d",
"assets/images/client/35.png": "519e719526de4858a880e247d25452e6",
"assets/images/client/36.png": "c171e1db6e1c4861bf853f8aec494cb0",
"assets/images/client/37.png": "06aa36a71deba3c8d3c0e9cef4f022f4",
"assets/images/client/38.png": "a44dddd94072d5d2326401a4f47f2090",
"assets/images/client/39.png": "30c7def78ac1ce8b1eaac84b0cf83f92",
"assets/images/client/4.png": "48e723bb5dcbd96d2b4cd98894c36e64",
"assets/images/client/40.png": "a97e0232944e20e9a2fbe25505f450cd",
"assets/images/client/41.png": "6ffeedebdc8a960b4a55a5c0ff0e1a74",
"assets/images/client/42.png": "28a021578b88d70d5cc95a95800337d6",
"assets/images/client/43.png": "05cf5a7674b9634dd68464e52d3d727b",
"assets/images/client/44.png": "bd2007b4b77493ec58aba5cf043a63ce",
"assets/images/client/45.png": "9572a5b0730d718235390561a58c59dc",
"assets/images/client/46.png": "0c345917c6c0c5c1e99c8e6c374825ca",
"assets/images/client/47.png": "ec3df347790cb0c9d998f1d56972f96c",
"assets/images/client/48.png": "80331764068d62dc59076b8e6b52cd75",
"assets/images/client/49.png": "857c0512dd0eb33aa59742e23f1effb3",
"assets/images/client/5.png": "4a0aca6abe828f094cdb60233c6de21c",
"assets/images/client/50.png": "ec8e420f0370ea2868a79bd8a1c63cde",
"assets/images/client/51.png": "5030a0249699051b610659fe1ca49b95",
"assets/images/client/52.png": "b5b3f3c1977df195d1e5981476ada7b3",
"assets/images/client/53.png": "16c4584413c54021a76c4d679a5688f2",
"assets/images/client/54.png": "33696e45141d2b04d5a1ab686adccf73",
"assets/images/client/55.png": "f3d9ce0632e1734291433ec27bb9bb8d",
"assets/images/client/56.png": "a537ce6373e5178049cf10ff0b89686f",
"assets/images/client/6.png": "1f5c496b3ba4366bf401539451551f61",
"assets/images/client/7.png": "5efe0a9db778c756f8e3802e675cfb06",
"assets/images/client/8.png": "410d15caa0a32bc0acb4554cd8099898",
"assets/images/client/9.png": "81afeac68b38a160a1ddd34e6bfea975",
"assets/images/cook.png": "b5aad879e1aac102bb607a914ea0c10a",
"assets/images/faa.mp4": "5c2f78127ef89b55374540052bcd3ff8",
"assets/images/girl.png": "2100a01d3dd6262f37782aae30a52223",
"assets/images/redline.png": "7a16ce50c0302b006d0238daa91b8e1d",
"assets/images/saa.mp4": "f11a9cfeea9a85416f854d16b42ea742",
"assets/images/service/bluephoto.png": "d366ddb240ccb9944b3f7511c969cc1d",
"assets/images/service/brandcup.jpg": "a1d0924edf8c51f7e061dc3b809094ea",
"assets/images/service/goldgirl.png": "de530a829a832bdec67ea2aed926167b",
"assets/images/service/movieclip.png": "c8f36eec39bffb5e8bc53c07036665a1",
"assets/images/service/papercup.png": "b8b34d34f18fbbc944f4cff2c0645c21",
"assets/images/thumplogo.png": "e430e67cd635a1238f1ad75486933c68",
"assets/images/tlogo.png": "bda4bb09ed60a83844c58f95deb759ad",
"assets/images/work/1.png": "da32bb9a741ed0d568f1addcb6522f28",
"assets/images/work/10.png": "160406b5feb935fa5c36a22e4894b0ec",
"assets/images/work/11.png": "e14352a738092a43f2af5ba2e45a508b",
"assets/images/work/12.png": "31694f1f092b967fcb051121040e0b1b",
"assets/images/work/13.png": "e2dd761078f95419a6bd6bf88f0ba63f",
"assets/images/work/14.png": "e6ae9bb10cdee92f046bcfed69ccfb99",
"assets/images/work/15.png": "9059e314ba953b1706275c8289b142df",
"assets/images/work/16.png": "64f256a4eab4bd28672abd3e56747c34",
"assets/images/work/17.png": "9b619e14c6d0d9b4ca029926c3bf7284",
"assets/images/work/18.png": "1aca38502eb6bcbe11da366a470212f1",
"assets/images/work/19.png": "aa8b6ec72468583ef009c674a069f6d2",
"assets/images/work/2.png": "52a4b516fcd65fa58abc7cbda5d54f50",
"assets/images/work/20.png": "ffb99c109fd7489f984d95de3f8691e4",
"assets/images/work/21.png": "436f58f36c40d098a30515c26545ea59",
"assets/images/work/22.png": "89ef5bdbfcb4703eb91d4447d27d6d6e",
"assets/images/work/23.png": "2de8e0c3f8d4386bb29514da85db6b07",
"assets/images/work/24.png": "a8a048a5fffae2c8cfc9bff273e211be",
"assets/images/work/3.png": "05d2df61516e28b4cb3ada7194f8272c",
"assets/images/work/4.png": "817044b482c319b9e28c6d082addf6cc",
"assets/images/work/5.png": "4d9a00d3ffccf5745e2b7e0b30d78d53",
"assets/images/work/6.png": "3ff13140720a875b0b43f01b8668df88",
"assets/images/work/7.png": "3ccf7e46e97bf12b4d0556cded06e63f",
"assets/images/work/8.png": "3d3d2c74fe72e1459bc34cfd0380dad0",
"assets/images/work/9.png": "59599621ca74b6d626b1e4088a02ea77",
"assets/images/workpage/BOOKCOVERDESIGNINGPAGE/1.png": "8c182245cf4d2bd99053c13cf2b6985c",
"assets/images/workpage/BOOKCOVERDESIGNINGPAGE/2.png": "fb0516e0ec02589d84d32f42ae81f3c3",
"assets/images/workpage/BOOKCOVERDESIGNINGPAGE/3.png": "8058bc2fbfaeb7eea63220d26fb38f66",
"assets/images/workpage/BREADLOAVES/1.png": "98b3a3bfaac78e1b137d9acf50080e96",
"assets/images/workpage/BREADLOAVES/2.png": "500fa3ae3eec19fc5d595c041c26cbd9",
"assets/images/workpage/BREADLOAVES/3.png": "767315e27b3bb1071328408f280d2b83",
"assets/images/workpage/BREADLOAVES/4.png": "b705707a9bcd4f52af38a76155f7cac2",
"assets/images/workpage/BREADLOAVES/5.png": "04cea3c1e7b7a5d9bbe5691e5e7a5ef4",
"assets/images/workpage/CHECKOUTBATHROOMCLEANER/1.png": "dd0699b4c14a595476dc797ecd3d1c29",
"assets/images/workpage/CHECKOUTBATHROOMCLEANER/2.png": "b090ad672ee00f6dda529b8a7b9a4682",
"assets/images/workpage/CHECKOUTBATHROOMCLEANER/3.png": "630c41252b0d6ca99c82ba578d33571d",
"assets/images/workpage/CHECKOUTBATHROOMCLEANER/4.png": "594fc77122a161bf5f75e4af44d3a6bb",
"assets/images/workpage/CLIQ/1.png": "4f06971245dd83c653f636fc7bf5008f",
"assets/images/workpage/CLIQ/2.png": "b2b2fdf2bd5c798b9dcd43c2b921f5b0",
"assets/images/workpage/CLIQ/3.png": "276af2cc2b00fe8258c526a162339e37",
"assets/images/workpage/CLIQ/4.png": "a147c04065cc9c2f023db17c99252b6e",
"assets/images/workpage/CREATIVEADS/1.png": "98d74721b0d8bac2f073e6adecdc0cb8",
"assets/images/workpage/CREATIVEADS/2.png": "c8d858e707c123b5fd50ae595251f428",
"assets/images/workpage/CREATIVEADS/3.png": "7f5bc97ca155771850c88c1b9c070e40",
"assets/images/workpage/CREATIVEADS/4.png": "96794b2490e19d402e87491ee59f9b6a",
"assets/images/workpage/HITENPURETEA/1.png": "69d4880b9d21e91af333a79d75460279",
"assets/images/workpage/HITENPURETEA/2.png": "1035ca45e100718d2482232221a551df",
"assets/images/workpage/HITENPURETEA/3.png": "db37a91ab456f9d26ef2cb4e9c59a97a",
"assets/images/workpage/HITENPURETEA/4.png": "5d6f8246917e52badb0cf76fe4667a4f",
"assets/images/workpage/HITENPURETEA/5.png": "1cae06500a22d10c23b318a7fef154ad",
"assets/images/workpage/HOEST/1.png": "dd40355bcf289bf8eeb8717a500bc4fc",
"assets/images/workpage/HOEST/2.png": "dec35f18bf36f534d488d4a8a5e8d9b6",
"assets/images/workpage/HOEST/3.png": "699f91edc29ffddf7ff06baeb16a2d0c",
"assets/images/workpage/HOEST/4.png": "9a805f7c443f8a163ce7272c25f59c39",
"assets/images/workpage/HONESTY/1.png": "b0c4bc9e2456483b23d01c5b7d5dcce4",
"assets/images/workpage/HONESTY/2.png": "0dc9f0643a3e5ae9b1c340194d7ac0fa",
"assets/images/workpage/HONESTY/3.png": "cfc7de6926ea45756d48e3604edcbde5",
"assets/images/workpage/HONESTY/4.png": "2c4f16b1065468883bd323dd0820191a",
"assets/images/workpage/JEWELLERY/1.png": "8c984abb2b583ef46feaa0edf383877f",
"assets/images/workpage/JEWELLERY/2.png": "a28c45d1fee8fbed7e8e59fb4ffbf580",
"assets/images/workpage/JEWELLERY/3.png": "f7cb2cbfba6e4fde29b562d6691292f6",
"assets/images/workpage/JEWELLERY/4.png": "e6b0af9485c4cf28635a0de147947b5e",
"assets/images/workpage/KAVITHAJEWELLERY/1.png": "bda655c3e625266f47ad66307c96499a",
"assets/images/workpage/KAVITHAJEWELLERY/2.png": "45a36c379f9000199b4bbe41eee5c36b",
"assets/images/workpage/KAVITHAJEWELLERY/3.png": "4561739dd020ed5b25bee3fc6c28a111",
"assets/images/workpage/KAVITHAJEWELLERY/4.png": "25618e19fc2805d259a87f2929402d5b",
"assets/images/workpage/KAVITHAJEWELLERY/5.png": "a6b12a1cc2c49084f994685d77132310",
"assets/images/workpage/LOGODESIGNINGWORKS/1.png": "4a900fc9fa93018e942cf01ed062fb26",
"assets/images/workpage/LOGODESIGNINGWORKS/10.png": "862ecc042c9ca9db72a671f077c04982",
"assets/images/workpage/LOGODESIGNINGWORKS/11.png": "96c0e12f2d9da9e3e36fb2b8b82728d9",
"assets/images/workpage/LOGODESIGNINGWORKS/12.png": "5c8f3b6e109eea38405317c1ea0c5803",
"assets/images/workpage/LOGODESIGNINGWORKS/13.png": "c6a7af0a9e1ebbd8194aecfc2b93c068",
"assets/images/workpage/LOGODESIGNINGWORKS/14.png": "0616538caa55cabcfbd437b5b9d6ae9f",
"assets/images/workpage/LOGODESIGNINGWORKS/15.png": "f39f14ad5382f16a57b1841fd19345f4",
"assets/images/workpage/LOGODESIGNINGWORKS/16.png": "5853596256c11f0fb6facc091fe81f22",
"assets/images/workpage/LOGODESIGNINGWORKS/17.png": "7edc00b6be0e984dd2c7d5c696e78f0c",
"assets/images/workpage/LOGODESIGNINGWORKS/2.png": "1f7b6dbd4e4f9a5cf23276e5416cc896",
"assets/images/workpage/LOGODESIGNINGWORKS/20.png": "e68e444e6cf009d7d6e9fdbd313c566f",
"assets/images/workpage/LOGODESIGNINGWORKS/3.png": "1fbd7ac924ae827edb8117632988ea6f",
"assets/images/workpage/LOGODESIGNINGWORKS/4.png": "72cfd520d878afd07eab6ae4d90fadd2",
"assets/images/workpage/LOGODESIGNINGWORKS/5.png": "ddc46b15a8917940f7ba39ce84b2ed9e",
"assets/images/workpage/LOGODESIGNINGWORKS/6.png": "7a3f7cfef4fc6b3cb098d9216ba59e92",
"assets/images/workpage/LOGODESIGNINGWORKS/7.png": "e7c4bdf05d9ad82a372587847ac68e8a",
"assets/images/workpage/LOGODESIGNINGWORKS/8.png": "a5d73954f7fc1e1f5381a3310b12eec2",
"assets/images/workpage/LOGODESIGNINGWORKS/9.png": "e6d9901d8661fa698d76dfb1f8ddee48",
"assets/images/workpage/MAMMAS/1.png": "79ca63734e8c4d1044c455ef3ff354a3",
"assets/images/workpage/MAMMAS/2.png": "71353fa3eaa3c5b555ec2399b3cef1f5",
"assets/images/workpage/MAMMAS/3.png": "4fc24edaab137fe680fe262fbfb01722",
"assets/images/workpage/MAMMAS/4.png": "fa824368015b3a9a98e752e1937ce7a4",
"assets/images/workpage/MAMMASCHUKKUKAPPI/1.png": "f974292613c169da7fc9de7d58b6127c",
"assets/images/workpage/MAMMASCHUKKUKAPPI/2.png": "e5c3adfcd9945b361a382a2a8c092b1b",
"assets/images/workpage/MAMMASCHUKKUKAPPI/3.png": "76a135a7563c947c0972faf335c0d6eb",
"assets/images/workpage/MAMMASCHUKKUKAPPI/4.png": "31dc76c301bb96000bc569218263dc79",
"assets/images/workpage/MANGAISESAMEOILPAGE/1.png": "94d0732071d9e22fb593844c446ca238",
"assets/images/workpage/MANGAISESAMEOILPAGE/2.png": "122c9be7ec39992bbed76b69b97797c4",
"assets/images/workpage/MANGAISESAMEOILPAGE/3.png": "3fab242deba7b496a8d732ffa3189da5",
"assets/images/workpage/MANGAISESAMEOILPAGE/4.png": "348a0ad1f924552bd73e716c6ab88694",
"assets/images/workpage/NEHRUCOLLEGE/1.png": "5b8022e707f4347be70ba2eadb82a323",
"assets/images/workpage/NEHRUCOLLEGE/2.png": "71354de1478a767a37b853b7b4ebbab4",
"assets/images/workpage/NEHRUCOLLEGE/3.png": "e1a14489a1560f5eb5f448b86e50291d",
"assets/images/workpage/NEHRUCOLLEGE/4.png": "6462358251d8f2bdd1214badbef70f64",
"assets/images/workpage/NEHRUCOLLEGE/5.png": "fce7b12108a5ca103b407ffdd5741641",
"assets/images/workpage/NEHRUCOLLEGE/6.png": "e41f0885805727d706a4277fd3c703f2",
"assets/images/workpage/PAVITHRAM/1.png": "33b78ac9669dea32fba754ccb809a9ec",
"assets/images/workpage/PAVITHRAM/2.png": "5e37905f1d84a79fe63fd60f91e2011a",
"assets/images/workpage/PAVITHRAM/3.png": "99f85849accda38951367b9d4cd8c62a",
"assets/images/workpage/PAVITHRAM/4.png": "8cb2ba58d35dabfdbda5ad92930e913f",
"assets/images/workpage/PAVITHRAM/5.png": "4d675411ae8872a6de04b5e4e74a5cfe",
"assets/images/workpage/PAVITHRAMOILWORK/1.png": "3c324c9f21a833bebc4d2ea2ee2493c1",
"assets/images/workpage/PHOTOGRAPHYRETOUCHING/1.png": "6e0b26f941676d09f5ef508e29c411f9",
"assets/images/workpage/PHOTOGRAPHYRETOUCHING/2.png": "0ba6913b982732efcf3c1de8ec90a512",
"assets/images/workpage/PHOTOGRAPHYRETOUCHING/3.png": "249a1d42a97ec88a293ee66e4a5d72c4",
"assets/images/workpage/PHOTOGRAPHYRETOUCHING/4.png": "dcfda01124687b225a7174e19c58354a",
"assets/images/workpage/ROSERAYHAANROTANA/1.png": "8f8801776c892b75e1209a2715fc981d",
"assets/images/workpage/ROSERAYHAANROTANA/2.png": "283ab1b9c2fed6a4d1feb7b6cd704094",
"assets/images/workpage/ROSERAYHAANROTANA/3.png": "cf7e99106b39b18a825d09503c3003bc",
"assets/images/workpage/SAVEBOXWORKS/1.png": "827ed3d4e5265a5f87ad8d2fdf968602",
"assets/images/workpage/SAVEBOXWORKS/2.png": "7d5d22a1cf671742122fe1e633c57e86",
"assets/images/workpage/SAVEBOXWORKS/3.png": "20b1607c9d9914868c425078c3f95818",
"assets/images/workpage/SAVEBOXWORKS/4.png": "7dd82cac7d46cb3cfaff5b5929a7d095",
"assets/images/workpage/SAVEBOXWORKS/5.png": "180df67cc741f96c29a47113136eebe5",
"assets/images/workpage/SAVEBOXWORKS/6.png": "977380451bcbbf6e7aaaede9fcd43c9c",
"assets/images/workpage/SAVEBOXWORKS/7.png": "e4263f049c13ab210314e3de4adf33f1",
"assets/images/workpage/sevenhorse/1.png": "f780e19d140324e78e6ba30ba4a2fb63",
"assets/images/workpage/sevenhorse/2.png": "cfabc315fbdcf17c45cf6573b6573616",
"assets/images/workpage/sevenhorse/3.png": "8c74d6af03a855e65820a7ae7880eb22",
"assets/images/workpage/sevenhorse/4.png": "62ac73165fc4e333a09c1223f332da44",
"assets/images/workpage/sevenhorse/5.png": "99cfa4ac5fa3e784f3b352d0e377c50c",
"assets/images/workpage/sevenhorse/6.png": "b992930d58b0e18984d3fdb251adaec3",
"assets/images/workpage/sevenhorse/7.png": "729b10036c47702e9dc069548e34adb4",
"assets/images/workpage/sevenhorse/8.png": "cae7b3a5771ccbeb8ef8061fb70fd528",
"assets/images/workpage/SEVENHORSETISSUEPAPER/1.png": "fccf5089b9975166c02a6e011f8bef27",
"assets/images/workpage/SEVENHORSETISSUEPAPER/2.png": "0eb26a91f11956d0ce2042b3b2619997",
"assets/images/workpage/SEVENHORSETISSUEPAPER/3.png": "13dea03afc72e899da7598827286785d",
"assets/images/workpage/SEVENHORSETISSUEPAPER/4.png": "02a0f6da2fce81049e8fdb1c340b87a0",
"assets/images/workpage/SEVENHORSETOILETTISSUE/1.png": "a413110b0eaa8341d6d173190dba8c1e",
"assets/images/workpage/SEVENHORSETOILETTISSUE/2.png": "59dce3b8980abadfbc2ba7f8d556cf53",
"assets/images/workpage/SEVENHORSETOILETTISSUE/3.png": "bf2aac9b4bf83118e708bce99f8ccc2a",
"assets/images/workpage/SEVENHORSETOILETTISSUE/4.png": "7b6ebc01b73816050d3bb2604d7edc2d",
"assets/images/workpage/squad/1.png": "17530ec73d658717795c3466611bdd1b",
"assets/images/workpage/squad/2.png": "f3a1e7d11ec8232f7dab8b978dccc8b1",
"assets/images/workpage/squad/3.png": "6acc8aa17e25bc8bc1622f3a71cc78b0",
"assets/images/workpage/squad/4.png": "5f4585e4ac4f8ced748a0ec857abd1fd",
"assets/NOTICES": "2eb8faaba2b92709242f43e7e10e65cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "d53b5828c6ea43cc01150fe99539deb9",
"favicon2.png": "d53b5828c6ea43cc01150fe99539deb9",
"icons/Icon-192%20ee.png": "30b05192ebdb2dcb288f1cf8b581140b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512%20ee.png": "9e1971ed48e12f9cc0e777eb0565ead5",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "61d80d6e742b0e8b6825083f9b6a1864",
"/": "61d80d6e742b0e8b6825083f9b6a1864",
"main.dart.js": "e116b14f29c70585c5d4904382c84192",
"manifest.json": "0b99d61c43d9305058579ddf96e61348",
"version.json": "599744a8ca87cccbfc29c89481456fd9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
