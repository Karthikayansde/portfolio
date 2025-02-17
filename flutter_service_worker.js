'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "920d7f89e8dac83a22110cac8be19a47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "cef4f71ef29564f89339ca7f5fc5eb98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8c6c3324e1ebf5b6ff6486b715461d43",
".git/logs/refs/heads/main": "94394ea99c5f3a9ca8801b07d2ed2604",
".git/logs/refs/remotes/origin/main": "3c1656ff32c68594b0db98ec023398cc",
".git/objects/02/65060cb6ce6a6a9e60eecfea54920c58ef3985": "e08c46e072069b33796afc466b0c175c",
".git/objects/03/22db64982c8f3022206d57fa3c9958361b311f": "496dc34e2b9deeda2f460331c201a7f6",
".git/objects/05/23ed49a6476d5434c7b6669097d6655fde9ec9": "20ec1c687e5a5e3b80a24321f46879ce",
".git/objects/05/75874e33e03c5255bf434ac333ce2176d0dce4": "91829fb7b8f1930c0eca2b7d7ec656eb",
".git/objects/06/eca7785d4d5c4a2d85fa2a5bae3ccb551cd0ba": "c78e2558a96cb9d90399a3efa0d68ffe",
".git/objects/08/0408f55025dec748d1647815d33b10e2c79064": "489654dd81fc72e18197b6716fac29f7",
".git/objects/0d/f84bdf8d0d8dd49f3a38355742af5d5558f8d7": "2ba993c3d8b69e8dfe3a4e4def29f732",
".git/objects/0d/fe749b1f2fad377ae8cb2dc10d9e7f69dff643": "11d503f23b0474ab3f54f59bc72bbb71",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/f7dc775d17891aec9e49716b0e655440f4996a": "4e6a5c432a22fcd1d819a859c8dc1e75",
".git/objects/13/097851801f257266cccea2302ab44e9e5f79e3": "1241d1c7fa1c3084e740b9836d375470",
".git/objects/13/24748b48c72894658702c16d08d2749c5dad35": "d03c89db0f8ef0ec19ad9ef49dade6ea",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/26/065789e80a89dc1e69f82ac476728af6cc8256": "c86e604a83de8aeaacd3cc1c0775d76b",
".git/objects/28/962ba144104e62c00a99d956683adfd41f7d7e": "3be73d357c4d66c64e67b5d5059a00d6",
".git/objects/28/d9830bb90fc94f21c8fccd4eddb47571bb7b20": "3f31119b6a121d3a69bb3df8fb079743",
".git/objects/2a/23c38c9ff47194cc2bb3731c4bd8e25507e322": "5b06badaf71f440823f59e73d208f145",
".git/objects/2a/96b24fe1bdf04f12e12b838d2dbdc3995607ff": "b73bf5d554af96bd24ab5d989a404490",
".git/objects/2e/fbf9dfb19fa3cc3a42d5bca31bf3908ecd1964": "7f0cd593b4421c6b97d14e63f332af28",
".git/objects/36/09359641b2cde5af24b793eb4791868067f756": "108e4d397d3721b055bdbc4be1e7a536",
".git/objects/36/370308cc62971c11fccb6be9e8095bf6a1875b": "c248893b8be3c7a005fce9bde33be768",
".git/objects/37/aac8c9ce17b00287a01971fe76af75f4c89166": "a1b4d88ff32b30c15587b785e5fb533a",
".git/objects/38/6b2ff649c7628c1eed83dea3469543100f50f6": "b9a494ba5520a726f4ba01245b471af9",
".git/objects/3a/87bcbfc9494d680781a6a84e0a5f441a1e6b50": "9fd7c358b990fd51f9e4ec42092d2566",
".git/objects/3b/711d685b962bd7dc7f1faabd5763f66decd736": "9c4aa3fcd4b1ae07dca7c7af1c112eee",
".git/objects/3c/50acc14fe0472df8747efe0c1af010b3e64038": "341be64fd604a677ab9d5e73089bac26",
".git/objects/3c/a2aa9a82fabc627842c34fb7a2e0a8e96c59e9": "fd4c0c5a16d36105c99673bdc1ed433d",
".git/objects/3e/2bdbc6dde4708566bba391fd6ac90670abb771": "d7c8e4c14f7a07ecdbec24c099eaa354",
".git/objects/42/f4c01ae2b7aab4e18abf0c15c9331260f05e2a": "12deab3a9e84a72646b840f6fede6ef0",
".git/objects/49/012de116865ce9698f961ffdfcd169a9f025a0": "1dd101fe3f1d982507c3fcad06aaa379",
".git/objects/49/971843f20ace43b86e280407cf36781131a22b": "5fb1b3a9075607e1b226a8fc36f3a753",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/bfdb77278131f1713377d9dbf84504d0d0b64b": "72a95cf1d779652a5a40558afbb55bf0",
".git/objects/54/e165386ae7443b0667045bae81870f2a03315c": "ff2228a384ff8ad50ca3d481e31e7b47",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/7df67e6f5741c3d8f5f9bae45daa59eac49f5f": "c32d68efb651980fd0168b0ad9902d70",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/8e72eb2096a2ad3d471d7c14adead5db3d9e13": "e4e765fb22c8e33705982a8f17ec1d72",
".git/objects/5e/1bc2d071284e8cffc778c57416439fb4a3644d": "1bc58b956b0375269425d434b62e9e2f",
".git/objects/5e/87e70ddd3a659733e177ec92ef6dab1c837dee": "79725761946673ff34fafce4078547fa",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/a90e738536a20d1fab0d1a41e168e8ca2bc47d": "639dd8c58bc911e7ca1e0d843949e7b5",
".git/objects/66/53056b51fc61ea2742b9ff5a954b05780c3b1e": "30a78963ccba54899de0ef7b9e1e9896",
".git/objects/68/2e90bae87b633882349e85fc1492edbc70fbd0": "6aff4693946b7447aa3750d7f5a7b4fd",
".git/objects/6d/32ed40691b73ce1d0327bd9cd30ef3c35cd0db": "8250fd7aab07a446f23d55c74be7fdad",
".git/objects/6d/68287d753a49069f2356a0f9cfb516c2bc8b05": "e63dea4841d5747cfab4eb65469b282f",
".git/objects/6e/becc3d9dd8d2bcc1d83b5e999a7c02555f0946": "0f1304ad3af11468d23b265f4bbbb2bd",
".git/objects/70/2760e4e74d74b16685fd73400254cf9ad0597c": "34229cb98a6f1b5983e6f9609f69584c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/8d0891c410ab6efe8bc84bbc2bf73e21c18d68": "0542611d151a95cee3c148c6788f1534",
".git/objects/78/c4048202d7dcf78418bc760cf04bdfa640e20d": "991c68e8059e96ecda9104d7ebf46f49",
".git/objects/7a/c70bc1f3356edae9d27ba12c5a34874579d6ab": "2a9f095f520be66152f232aa0efd9048",
".git/objects/7c/2efd1f9747f7714e5a900d13add6fe3436432d": "2592285cff3cd69f51d6c4ec9a0b074b",
".git/objects/7e/18c0fa4740c007cc406f7816436a6311208121": "4c0bf1b9f3b6d6b113fe156296ceeb2f",
".git/objects/84/576d99511f5cfb4fede4fed62d11b0228ce29e": "9bc2939605cc30b9bfd572f0d550b745",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/77d7c26be2e792cddf2f4fbffdac91040575c8": "2d596e238ec8a7b4bdc2571645596770",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ba7f844adb1d5318f49a2bbca3aff8a0cec7fe": "21d3562d6b5e1cf10d09eb3949ed3286",
".git/objects/8f/f75edfbcc6c928ac233a93701761779495f0d0": "e3159baf50851903eed25f742f502198",
".git/objects/90/0c5498e9fcf0c645d32bfdd3de029e4a8d4bb2": "c5c3e6f079c3343a9306066984bf473b",
".git/objects/90/862da45cf292a2558b07a527c9ffb0058cc555": "bb2e7bbf476d1d6e871b1dc2fe9f1d41",
".git/objects/91/f8d103a96b177885db1b1c3bee53262fb0ae6f": "53bf0db169f393e6e6651c5917c194f0",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/54264cbbf54eed1ad40856a6da0c5764388cc5": "4788da4f02a8dd3b40715d8848d28b5f",
".git/objects/9a/a9bc823ea7b407082138d5459fa8c8de6dc5dd": "51f23b232a6383019fb0bc6c13aa7211",
".git/objects/9f/57c98264d5cdddfcd687e454b62221d8e2c4e5": "38f9b82b6cdd2f25f225bebcbaf2d7bd",
".git/objects/a3/4037e0afe1943afbb4689ea95979bbeaa6f376": "42afb227aa43aa1c71238ed15484f9c6",
".git/objects/a7/486019bc3c7101ce0c8869a4145a974e95671d": "bb84e51abfcccaba38bd41d63cfc4c6b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/3bc50f162b4f48a8fc4e85675061cf0c8d6b73": "953ea082b2b93d4bfb6e1d2a0048320d",
".git/objects/c4/ad0b681a7d5ce722a5ce79448e7174eab88785": "9e9543fe9f6a3900c2f7f299e3aadc71",
".git/objects/c4/edb594360120fb35251c6b7958be8f64cd2d15": "459a1479259e69a245df125979906989",
".git/objects/c6/87300bc3f5e00374f5344af38f9e79d4f81b6f": "b47c4a1f52755057471d8f743d47bf48",
".git/objects/c7/9005fc6b6433fb5ec149fed2aec7a9ebd49380": "0efc146b45670de68aebc3c803ccaedc",
".git/objects/c7/ca2fe7599421894c264b90b5622acb4dbdd9f1": "f82783c70c020ad8858f62f8eaf855f2",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/9f3e6fd7f4fbfed36cb9df95cb1ca616d00937": "5e4eb6280f372317c703566c7b55f224",
".git/objects/cc/f4d938a5d5c508c020b02d088020c14728ceb8": "24a56ea3f39d7ee91f3a10eb3a32fcbe",
".git/objects/cc/f7025e56f5c4a322abd0c54056b3a0b5b5e48d": "082591cf4a96457f411b0e4adf37954e",
".git/objects/cd/918f87c3049d7b60d022c878dae17aa653527f": "d34984e7943684cb67115e6d0963ab7f",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/c12069f37a1bc493803f72cf17500ddb6b46cb": "dbde1cc950858703140f489ed1526ab3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/4b0d015b67113608e114431eccc4560355f883": "783aebfb924bfc645f74d87d2c0ff859",
".git/objects/e5/16aa3b6af23ded76366c0cb693481b682986d3": "3b2f412d9d93e222365eff48fee0755b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/f2087e12fc734ecc00fb12d01ba7f6e5d60c6f": "304606060e824391613bb04b7f3fd120",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e3cf3d5600e9cbf738a0a8b9d0e4711358231a": "902bf34430412d7d9fdd8c77391b81ed",
".git/objects/fe/c95155e03e9b2b9fb66ff511d81483ee1f8910": "8076b1ad2ff04806494d80c77ccbb600",
".git/refs/heads/main": "a53f6f007fb9a6a0dc5c1333ab32c59d",
".git/refs/remotes/origin/main": "a53f6f007fb9a6a0dc5c1333ab32c59d",
"assets/AssetManifest.bin": "f9b989e163de05a9b9afbc7dba4dc29f",
"assets/AssetManifest.bin.json": "f3564b38279565a2f06c6ae6f5518bad",
"assets/AssetManifest.json": "f9cb5ca279729905f1529736336c771a",
"assets/assets/11.PNG": "2af946db2407ac64cfdaafe0ff6ec8c8",
"assets/assets/22.PNG": "e26943d7cb34e5903e754605f584b829",
"assets/assets/33.PNG": "4d1d2a5cfab30482197b5522cbb7968e",
"assets/assets/44.PNG": "195943edabf80072bfda029c44eed0ba",
"assets/assets/55.PNG": "15fa7c5b7c510d482b67d7070a8bf8de",
"assets/assets/appStore.png": "8d8f08e1de9007e8af37f7aa0ad49446",
"assets/assets/bgImage.jpg": "17b102e8e539dee9cd96ecb67a19709d",
"assets/assets/BgImageContact.JPG": "a4e6cc78bbdca0d9603377bc7aaf1b32",
"assets/assets/bottomLeft.jpg": "96b85d84312043dcd63aeac8a58845e1",
"assets/assets/bottomRight.jpg": "e218075e93dbe7bd178299da72652a5f",
"assets/assets/Capture.PNG": "8167155123e85c3c9701be409fd42f80",
"assets/assets/fonts/NeueMontreal-Regular.otf": "4d742e8ebdf9b030dc46a59963a6e1fb",
"assets/assets/gmail.png": "66c8f4e88d969252631acf1b842393c9",
"assets/assets/left.jpg": "b4e6dc0c1692b0bbd348271438908df8",
"assets/assets/linkedin.png": "6c35c8cf4a0d0ef311eb641adba0f931",
"assets/assets/name_sound.mp3": "26a0c6e1c889e973dde29ad93058de5d",
"assets/assets/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/pngegg.png": "bda8e65b424e02ba9393bf657e575a53",
"assets/assets/pngwingGit.png": "b6e204b52431ac9ae3206c419c86213e",
"assets/assets/right.jpg": "694aae73a4cec7c8429f503a21924bc4",
"assets/assets/topLeft.jpg": "4df8c796dd1ab18a87a8258b52493bfc",
"assets/assets/topRight.jpg": "2857b260f8d4451c77592efa139e9300",
"assets/assets/www.png": "d485e1986b9bb7b6e856941260030430",
"assets/FontManifest.json": "6d8822f9a3d2a3e070e20165f7db867c",
"assets/fonts/MaterialIcons-Regular.otf": "66e572ac4c80f0ba76ad1a1601c507e8",
"assets/NOTICES": "ffce4a1cbbc737ed60438bd64476a917",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d6acd2254077ccd381f6ee2fc499158c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3c91502079c796bab85bc8eb44bc86ee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61152af67d3b0ee4106ed5de02529a71",
"/": "61152af67d3b0ee4106ed5de02529a71",
"main.dart.js": "b4b11c5646fbcceea60d938832aba122",
"manifest.json": "43b83f8b1aa43ef17c5ef63d39c49489",
"version.json": "006ccd41c9fd444ac60c1d325ca3241d"};
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
