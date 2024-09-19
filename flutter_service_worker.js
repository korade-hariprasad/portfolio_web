'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "a1493c9d2796ba00eb0e670f40256e75",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "d2bc14bd97b0ae100a3db7bcf9b75dfc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "72254cda4cd4dfa15e3aab45861e4f5d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58e9a829740aa8a52be7a7009273ac87",
".git/logs/refs/heads/upload": "8d86466c9823d24da46fafc609f9c62c",
".git/logs/refs/remotes/origin/upload": "9078d95e3f5a74802975dd5bf5a9387d",
".git/objects/00/4a8afa95035644335a3410bb37447aaed0225b": "7100829a9fa6b859565907faf73ac981",
".git/objects/00/976de4cbbb0a31cd5959a94035370a32add963": "cf9a5fb7d7b1057685b3a537bfc6fb25",
".git/objects/05/f02ec61c05c863c1d2104ec0b2f2009436bcba": "3f31dfd7bb4750f8d555561ab0aacd06",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/ed9e305f3bfe5f31639fd30c0685ec4ab9a629": "ef3ebf43bde85a2e83a657be539bcd82",
".git/objects/0c/3513c02e473d21e77c587be203a45a98d6889a": "ad52a93abe6a91c543f3e1eca21b1030",
".git/objects/1a/6bbc69ba3dce242628c41b40da6274944aab45": "3e1e045e1f086e12e2e91a6e3d7368c0",
".git/objects/1a/8b20455661e274ef24daacee77912102a0cd13": "e4aaf492a75086c1d9885ec0bc2c7731",
".git/objects/1a/c4e62b065c248ce2bf38e7df899260a95c3200": "9eb683eb7ea41ab8f6eb67172adef8dd",
".git/objects/1d/4db3d5a0379911e49bf0fb74aab74a9177e822": "6d2855a943503a5cd863c9227a44fe83",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/cb4f23566ada3d8270617d6b05143717657e85": "9778feced3fbbfacd9edbccff2445afb",
".git/objects/26/ad8c96f14cdd73d78920100b0c6e46386bfa67": "7616d6cff285b193a31599bb46dedc13",
".git/objects/28/709bd2f9af780123f3128cf4a6e14a682c8e80": "169d5e799b55e6abd5c9ab203514c2a4",
".git/objects/30/3c876a9ea67393afc6bffe6d4c915b30cdc44c": "89e4be0270d6a5b7eae4b2ff0a243461",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/39c2a23eb976a51345b973b8e238b5c89c1627": "f968881b3bcaaca5c1c945483673a9b9",
".git/objects/37/3592c5ad7bea8a8bef27da2bbebe8395328150": "1ba6bca49179731bc02fd84777825f66",
".git/objects/38/4403aa4a227375d90a556e80738e514cbf7d15": "51d5471415a9f78cd5b7bd446a38a6a7",
".git/objects/3a/72e8def8eeea337da9cb26fc2eea568fde6450": "1708996e2c9d78ef54357d5b831baae5",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/698fa827e0f9a499ee05a6778387dd3adbb026": "640aab783fc631f353822ea959b0d0be",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/e1c3c8d7c86e69cdad6aa9dadfc4fca127c620": "6a7539fe84fc6bb0a456ba36765d5571",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c981272059bcfa4526d1197344d940562bd055": "9b444cc6c8d417f7f40ef015e4d97f1c",
".git/objects/46/e4f05281dd236c19ca40faa38cefb926135670": "3484df84122828c322baa6367b0128ef",
".git/objects/49/d2d600cc6fcb78c56b93b9d75d686ee318a926": "b029aa8d296bc3b83faa20045b45f65f",
".git/objects/4a/9e61d4a97ed9716b3572cb60eba4d4986896f3": "a30213ba999a1ee0f54665328fe01cd0",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/50/22b98c5304af2fa92c6636d3f89428e216e382": "f5aef18279bb93389869a3a48cc0bb3f",
".git/objects/51/04cd0d44a27cd921c1064a31173ca875beac45": "518e2b5244e2325df40e76a96f9ced6e",
".git/objects/57/6a0d85804977ce0ccf203b473bf680d308da8a": "5fe12ea9560987daac4210e8e205fa31",
".git/objects/5c/645b4eaf5f483c9430e60ada87c583caff907a": "552838272b1ebf3f4f6e033312f5aa21",
".git/objects/68/101dcb72e4e79472d5a41422741df6280454b4": "72dfbf31742a065ada796c8f82430d96",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/754465523346ed438f3abe9a5b41f81e572d06": "e4f21a8b1bc6ef99d457e0c6879771fa",
".git/objects/6c/d495eae0caae7f7261d0a99cfac37026349e52": "c7864bae157db5d53d4f75ffa3bc920c",
".git/objects/6d/b39c2e9c6ab9faa9e776ef75044167ee85ab53": "591669736bd312e56e3b285a74b19a4d",
".git/objects/72/7db801b0a7bbbee4d4b560a0607c15608a6b71": "27c11d96033d688d7ca0fc5c7603c43e",
".git/objects/72/a5f83518f8f902490dfbae8fee450590c339a9": "d4aafacf7d74e81cb56d39302b9c2941",
".git/objects/73/faf1f38bd555aabf95a9ebdf4f781cd16539b3": "2684bf63737fb4ae7f388bc4faa21796",
".git/objects/79/1fdfba8a36ce552afe331b6530202344cc9d27": "1fdf1efe6a948fbdd68f9b8ff25f0d88",
".git/objects/7b/037c099704b5f5afb526efde3b33094eec1e94": "768f5ae3a8032317a7a1da7c5c361014",
".git/objects/7c/e5aa14a9deb4ba8e8bc1fb1bfae42dc340ef40": "7c678cda87fe93809f024a58c7c1a216",
".git/objects/83/6a7dab3df8469f912eaf62dbde8b26ca43216c": "99767d089a85178b434588d37d4c4018",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/91dfa371fd6a337359c4020148fbd4cb2629f2": "41fee62da0c3b665f109abcf8fdd21b1",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/0ac7e5913a2dde6200f9c835b8410904b23378": "97ceebcd86a881950667a86166b6cd1e",
".git/objects/8d/e001b0ab77294780eddd87027d61b37845fff6": "f15618b22f0a92569e1abb8d71ae433b",
".git/objects/8f/c6daac9abb2729c49fbb10d93ce2fd1a6fa1d7": "d81e37489cfce16acfa4df0b7decc62e",
".git/objects/8f/d1764fae9226b84784a4c764e10ecb3ff0b00e": "026bef030cb38b95668fbf7fba308bdb",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/332a5b4bee342d96d08c56b008bddf1ec47a14": "cd9786aa9f3674bae8e1ad64c95b1122",
".git/objects/96/377db98445958249d7fed9028fb695ecffc66d": "a1bce5ced0973dbf8fc8bb0d762b018a",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/8abc07303f1f150b47342d9039129617d62249": "22067758b0f8241baba5336097ce1989",
".git/objects/9d/c4a3d61bd7e2413fafde04f05a5b2858ce5fbc": "754112497ff960c0d6d652c029e2d7f1",
".git/objects/a5/997f196a5284f6aa7e926eaddf4819b38daba4": "78da7f0975809eda50ed85d07a2fd643",
".git/objects/a6/cdb36f20ab2aa2d96bc800a32ed3435106c9b5": "19f299629991d696ffe71028850f5ac5",
".git/objects/a7/842a78f0c5538c944b4e5b470fc2ecf11ce4dd": "b6ead6b4a91dbf6bc530aa453ae0dbca",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/87658c9af90679feaf7694e6fdd1fdd660eb40": "ac10f47d59688ffc51e7f1d51286aa7a",
".git/objects/cd/e9fe8beafaa44bef019675ab6084ddc2005a99": "86a4af7f4fb83f708e49d9c548edc84d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/ea/93ad2b3d4e794d51e1d8909e5d907b2c0891bb": "f1574ad76e73fea53cdb3107327c991e",
".git/objects/ea/d48d1c5f185f42976a49a850039984ed2b9897": "54d5efe985a23df7123be84f41b1bd57",
".git/objects/ed/999d28ff41dbbf7d6540531fa58682bd5341cc": "b7e56f990ac40b109420ba041e831551",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/8b9d7140ad69622105f2759bdbc76adff7d249": "7bb354f6e59bdf85d0db91e047115fb6",
".git/objects/f7/3c0336401a739c6b09d005d440c7e42a7feac6": "3eb4f9c2ea2d815a107c8c6288f17b03",
".git/objects/f9/7b1196720cca9432f126a93c7261f557a8cffc": "8e63cf8f4fd50d079902f6c48cd857a6",
".git/objects/fa/cd0f1f349132a8428b502447f96fb9c5d2fcc5": "8013d048b782245206d0af9609c4c110",
".git/objects/fe/ce46738e080c15eec0325a1557f851e64f846c": "10f7d61eae06fc50596059ccaa5eba4e",
".git/refs/heads/upload": "3cd6667abf722afe66c4b5056da77fca",
".git/refs/remotes/origin/upload": "3cd6667abf722afe66c4b5056da77fca",
"assets/AssetManifest.bin": "f9fb5abb0eb8ec22b41fb4eb82e243b8",
"assets/AssetManifest.bin.json": "c2927d949e05ff41e9804040520d5860",
"assets/AssetManifest.json": "f3dc68d2d39e186b501d52ab4ec34c10",
"assets/assets/aFelicitation.jpg": "8cb16cdbe0dbd89f7db369d889b5a312",
"assets/assets/avish.jpg": "dde1eacba6a1e66ddba811a459a536cf",
"assets/assets/avisMIT.jpg": "64d985c9ee5f5b59f883f098d07313b3",
"assets/assets/aviStateCert.jpg": "c114991aad21657ab7c540c46833ed38",
"assets/assets/aviStateFelicitation.jpg": "25e8df83a6b60d75a16938d2052c06f6",
"assets/assets/aviUniCert.jpg": "dad5c88f0ac6bfd3c5f61aa324692110",
"assets/assets/aviUniNews.jpg": "dbfde522065deb32955ef67ee6caf928",
"assets/assets/bannerImage1.png": "a9e7d336365e45af500fa84d907effef",
"assets/assets/bannerImage2.png": "afe2d70e70fe54436b5539b42bacb1cb",
"assets/assets/bcs.jpg": "30325fe5106ff638fcd921aba266ca4f",
"assets/assets/bg.jpg": "c38b05b317ca926eaa218aebd7a58f6e",
"assets/assets/boredbrain.jpg": "eb508e6291aebbe7cb88fb854b5dc151",
"assets/assets/cognitive.png": "c7a4e965d4a21a92bcc5965c475dd69b",
"assets/assets/conv.jpg": "f4531ee7ced85a6cda81c11dfc2c95c3",
"assets/assets/dart.png": "81824107f13f1fdf9abd9c8d6470aafa",
"assets/assets/firebase.png": "d12cf916a663b52d01d2e0bbb2e7c18a",
"assets/assets/flutter.png": "c940e427945a4d75c296f346cfb78cb7",
"assets/assets/github.png": "8a116e0acf74c73dcee645dae9687ec8",
"assets/assets/gpa.png": "d2d1524f43bc5f42d26cc4456a5220a8",
"assets/assets/java.png": "9f9565df4350f2141ec2b0b5aaa23f98",
"assets/assets/keyemu.jpg": "2d32a0aab4444925bb72767b39c8bc9b",
"assets/assets/KeyEmuPoster.jpg": "19ae3a1075c421101feeb4dc1562bb04",
"assets/assets/keymu.jpg": "a7f4cc4c6e19b579c3b425be1690c2c7",
"assets/assets/linkedin.png": "e3c62b407d410408601fde9f9609fdb9",
"assets/assets/mail.png": "3f6c4c014901200e7b4729ddd403a717",
"assets/assets/masterBg.jpg": "339027c7a1a8c24db7a28b400a9a6b12",
"assets/assets/mca1.jpeg": "4ea3221c6267c02583bdc5a9cebb3405",
"assets/assets/mca2.jpg": "9a697fe3dea71fd39a7ecb93d38ebc74",
"assets/assets/mongo.png": "dd8319d428f8fbf7a61ee383b265e2f6",
"assets/assets/nptel.png": "a071bdb8bc7fa68f901f9768ff149696",
"assets/assets/pfp.jpg": "f26504910c2dea02caed0adfa3c925eb",
"assets/assets/shreenath.jpg": "5bd51da22ad89dbe1cba791a7d0785df",
"assets/assets/studio.png": "2cb44475975daf90559b90142be25ca1",
"assets/assets/sumago.jpg": "9a4d906b676d6b1c44f68e7de7528cfb",
"assets/assets/sumago1.JPG": "8994d005c47bda262d2428ca7bd6a139",
"assets/assets/sumago2.JPG": "ace1e200c84470b3dba7e07a4bcd6b07",
"assets/assets/sumago3.jpg": "270eb19a83d827b47540a7b56b0542bd",
"assets/assets/sumagoCert.jpg": "e8476ecb19082549de943d0b3d7593fe",
"assets/assets/trakify.png": "924030e9b59f55588400a74b76aae6ef",
"assets/assets/vol.jpg": "3e1ef978c2eeb115f1307b0d45226bb3",
"assets/assets/whatsapp.png": "ec69d1fab1d1b2bd76ab53aab8e982e2",
"assets/assets/wipro.jpg": "c55929ff81f2f49e5522344f9ee978ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "871d120ba241c94c5cf9bd83dea439de",
"assets/NOTICES": "03ee58ef44783a951956e83df8cc0e6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c31e74637ffa023c2ab2c245a5e3a99d",
"icons/icon-192.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"icons/icon-512.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"icons/Icon-maskable-192.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"icons/Icon-maskable-512.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"index.html": "ad4198740f4c7f734fdb2c1cc3243f2b",
"/": "ad4198740f4c7f734fdb2c1cc3243f2b",
"main.dart.js": "d2122b3731c874a9ad2419cb5a51f823",
"manifest.json": "cd4f476f205dccfe4ee8e812c317016e",
"version.json": "e521cce27e8e40d119b0c83c0480dbae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
