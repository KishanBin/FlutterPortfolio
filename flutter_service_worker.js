'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3f3f2e85337879df218cce6eb0748057",
".git/config": "a4528eadf2488c10aae0fbcadb8341d8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "c1d5df87409089438f15877529c43b59",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb23811e3f8b535bea0ff0c0617169da",
".git/logs/refs/heads/main": "ee7df18d21b24500665531ad0e935f2f",
".git/logs/refs/remotes/origin/main": "cc92648c56b4d6a7f5b5e702a9b60d29",
".git/objects/06/ad164115b2fda20cea4fd4b1425c31121f1787": "480b6955444127ced6bbf615955b3c0c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/a5f126e2205718adc7a228d95c950aa1d6fcf5": "7c80c6c0e1f1fdf5286e6bcec919d8c4",
".git/objects/0b/370b083fe9649d5ec71b659c00f30611f594ea": "40a9154f9e70fcd2b273379e48977fc4",
".git/objects/0c/0d0ca5449cc5541bbb8bc904644babe9e2b5ea": "8f44dddec38fdc89ea673cb72e0472ce",
".git/objects/0c/f3b4d3be564e40c202534b0b6becc725ea8886": "cdee8544680d74f9b4a4b71677eeaffc",
".git/objects/0e/a2355e08dbe2b58a9d2dfd23c3d1211c1a3bfd": "3845dbbb3abfa7a482b4f12cdf67a3d5",
".git/objects/0f/3bddf8a513d30a184faaf65f59fededce0e095": "52a569cc4108bd4a8da47822c8905125",
".git/objects/12/234c3754596fffedb78b533610beab594b7b00": "60e554c1c8f912a063b6eee37985d0d5",
".git/objects/12/f059726de25aa33bea70f9abe60bf50e0d4b3e": "1fb0215c5f03bd732aebef0ff546c568",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/0897ee8184bfed51f90ea7cd963808a9cb6ae4": "7b6feb6be4752e4ba2a67564147b97b1",
".git/objects/1f/0ecae28af1759c5edb80bca288f9917fda5730": "de325fc2050f46a383388b2bab82ddae",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2a/751aa5f5837e66c3a6496be5e66666867b80e2": "fcf43389b3fd721ddf502831e90c9b82",
".git/objects/2b/cd4c0b6f92091625d4699128c80a64e4e7a3e0": "7063a208f5938022e3dedc05c7632b6e",
".git/objects/2f/c177ff3cbc976ebea2c3893b4fc981a83ace70": "93299fae7d2c32bffaa15d77f0174939",
".git/objects/37/b8dbb9e8639907124f7672299866ba033d5912": "aa052af594acf26188843ebfc64857f5",
".git/objects/3b/ee9d0c1ac9e52a2d2a61f318984df85034cd2e": "9f6067d014a151f24db15edc6f201bb7",
".git/objects/3d/6c6055ef60acd24b3c5f495d0c1395732f7b72": "7f0dca46198f6006736d4f2ba04f3367",
".git/objects/3e/23db1735e5da1affd4469af9c50233c2c8a98c": "eb279e92342dc36062ebdfc70080cab8",
".git/objects/3f/c2195f43e2ccb617b47cf391964963c7fff8a0": "fd656f0798687b09f5e16d203e4302d5",
".git/objects/46/ed37a7487f179588d4584518743d47b82ae784": "5571cdb2a620892777135f5f2c6f97bb",
".git/objects/48/375c4aeb75a2659b7193681518569007341e9b": "5457314658827eb6fb12fa445392631f",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/d4b005314e323afa7d159862b34266e4fc5c88": "69a63294e969c0d43ff62b2380cf1ba9",
".git/objects/4d/c796dad1f4587b5aec34765b6c9d0a151a8d76": "4ffdad1cb7543c2329997a64325dc332",
".git/objects/4f/97316a876da2180d3a48f89305c28b33322f8b": "b4533b56c6712b7f51f175c47665f428",
".git/objects/50/4814e04382ca055595e6439e60df92ef32f396": "0b12f608a909a226271512a3f1f51017",
".git/objects/52/7d2477db6254b18c511056fc2f6561289310fd": "262cef4d24bd91b6a899314b2f67b029",
".git/objects/54/5a5d46e80d8585be50198ddda7768a69a3223e": "3bb62ca7130ece23b9e5ff0913d2955f",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/5edaa90ebf0a8c54e2c8904c6b41801c16edd3": "d3cc8871a4e219e8a23b5ede14441d20",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/4de5bc3158d335e544ec7adc200af1cd72cf20": "4d2ad28ff9ef0644939de30545735129",
".git/objects/61/3b954c3995b8502786a4db9a165d81be58d0b4": "b59e1b2322d148438170b30edf7509fe",
".git/objects/68/8cb66420fea1d7db813980d12eeaa03cbface4": "ab7fe81b10d169b7730571c35afc1c77",
".git/objects/6a/26cc53005228d538b66e317a0752f193b0bf2f": "d6dde7f36cf0a5653bb47f8ca38c7c96",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/bb3cd264302ebbd2629266fa6cf022aab9f4a3": "abf45fcdf4180229140157f021b1c8f7",
".git/objects/74/ebf9f67f547fa30ba7624b58344425987c6e36": "0869ea3d4acd9439cde5ca5c30b850d1",
".git/objects/77/750f406ce0b39daeb1588fbd7f6859912a0899": "12b59040529c4eab76b16cfd134d89ef",
".git/objects/79/0e2d63c2a995a661c53a6cc9808bb1d019db60": "9269bd2f6ec3eab211f5f24fc84d4f5b",
".git/objects/79/42971b6f9f759aaee53e35dc9596519316f6c8": "3e29efc7d609b08d3617a7020d06c225",
".git/objects/7a/d358995d449b58c6303b29c4ca4d0f934ffd7d": "4f66f3fde416fb7172ab025df6e19ec2",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/6249fc8a545c026770562c9f19987f34414f8b": "08e9d504a7f4def91140dacfcb1d6ba1",
".git/objects/7d/9a6c4c32d7e920b549caf531e390733496b6e0": "08fc72bf13310819ae18642e598966de",
".git/objects/7f/7a33a963be36ebbf86278c730e828a70d15fde": "1bc86d506b18f63b0d93513eeb13a829",
".git/objects/80/780e1306bfaf6d17bafcc7bd245e44abf2a5da": "57e53c29059e86ab6fd5c15b1662f6d5",
".git/objects/82/b7012d182a92d0dd966e2196f3cb226f54023c": "b0bb0fa9dfa7da2dff6c482836641c18",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/2ddf68f29438b5d1411d2a43b44a58efbe0a59": "48ebe3e9a26c9c3a6d4fb1bbdfecaa5e",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/89/0730a815c5796dc3ad11f4dee991521a12e0af": "8ed7859baf36c8da3cfa0de78880fb9e",
".git/objects/89/ba7ae65eb2b6427a7ee1978df73ca0b3c46f1f": "74c8e222030844c42282ec1d706abc9d",
".git/objects/8b/15e0e7c6ad3238224083dd854d903ff1afb05e": "d480cb3d562e4841d101675ec6c3d0c4",
".git/objects/8c/9502420cc456483b8bab68a6b00a8fbaf65f9d": "61f87be6daba84a580ef909d5b9749f9",
".git/objects/8e/8652f011bbdb9edf94e08cc94aff2c837c5847": "502ba90ebbc1880717e174383094981a",
".git/objects/94/679c7248c13974137ab245e2075c93d7c5fa03": "022c53d635a4514b89bad5a4532f7799",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/84c2338f3e581433490c19afd935130105d22b": "91630c2661b47e90472911786be9f749",
".git/objects/95/c22dd7f9beae9aeb237d942de716078a615dda": "1526332a5326271c54d03334fbf92967",
".git/objects/a0/7820f3410410c2d5c9b62e5cff42925dea2064": "e5a5a56a67fc376e33de9ee4461ff656",
".git/objects/a2/7317089cb361ad9254f546547c121c95f84269": "ea3f2b5080fc295325c38bcde00e1926",
".git/objects/a6/8290748b12063af971729223363e9ea572b1a7": "2c945113c16b06d6f40ba50d8a373931",
".git/objects/a8/e0c01e3081aea94545e4335577d7c1bee94275": "89457fbf435088069f86fcf1365dddfc",
".git/objects/ac/18ee94a65f7ef542a9eaa0dfec56e7cbf2c28b": "a19e4ca9f5f349a9389bffae1b7355be",
".git/objects/ac/6389ab54c724983c3d10919d9d4ac64064fa63": "35132d8ad0c2c44ba432d7f08f1b7edd",
".git/objects/ac/b5656926fa6e02e9dd839f699231dc1342c13c": "776f003d0bfe7ab9bc0e350ad9fd76a8",
".git/objects/af/5ed594c26506d8280a834e26bf7d0943ebfde7": "2cda1fda056ca81a21a380a32f3971fa",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/9cf7d3f21c546ce4771d48e3ac8abd403a0fb1": "9f73bfccc3cb70a2e9052d471b99065a",
".git/objects/b9/6c61153eb881e5e5ce231f2169355c73fadc7b": "3d0c88656c0f5db2855bc0a10102ccce",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/79989ea20c2adc3813c4d0ab1c2b55dc5fdba2": "d2a8c9f07986e2c9e1a47b3026bcde64",
".git/objects/bc/9d07d80db9754552e9f636712f979455dcd7d5": "6888c6d3f29a2b441fbd97dac60d1e96",
".git/objects/bd/53bff9d44fef57c025663c6c9e0776849cb89f": "06c15f4c30645b5398a04b19f9193545",
".git/objects/bd/64797af33b8c218a01b273f0ae61181c9c9863": "44e7a23bdc81a00751818ca489fb2204",
".git/objects/bf/a4852da0339bf4a625a9476c90cf84119e8b82": "2f969a24609c7dfb5de0254bc35b45b5",
".git/objects/bf/aaf0dfed50b61671b04a87fd3be6efb181b9e3": "97162c91dfd53b8a1c3391366b115bf0",
".git/objects/bf/db92302863f0a404d684f9c386c2b032b6e9cf": "94e8a83f16ec1ef5a6f696aabf23ed0e",
".git/objects/bf/f134303efbad31c935747cbc4ea6daf964160a": "45a7ea1721dfc1f3d8c40af13ba6e439",
".git/objects/c1/0813de1d4ecd6c86e70a71af9fe7d27cdeaeef": "aeaeeca95a38b593fdd6f8938064f004",
".git/objects/c1/44eb2ecf93aa8a4be3ddd44b5248d873704541": "911737271f84d84f1d3566ef2d989e81",
".git/objects/c4/6f687c3cd9c091b5c0b2fd78bef59d7168eb24": "d00227a77fd419f797d5d811598e2ea0",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/042a14d23264750c35c7e6a75c01c65149fbb1": "eee85e50589e3029d18fe420c41f2d3b",
".git/objects/c6/9022925d1203f570e7a48937b627a6869e1bd2": "6dd294389aa2de236a916ec35a3fafcb",
".git/objects/c6/e99947483479b07540eaf2e9746f906942a154": "a1d6e0076ba9f5a5ee214a7cafc34664",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/83c8ce317581197a53be9fb3fafdf487ef3fcd": "00a332096961835629790f8afedbcdb5",
".git/objects/ce/571c1899e31ce2c050fd7abad7f128b197e8df": "acd976324b133cda5ee65cc6aa5454b6",
".git/objects/cf/26e7985186ae7b7d69752e5afc5c5eae166068": "2f8d673e61fd7ccf2b372fb8b2359820",
".git/objects/d2/fffb760870da1e1819beeb9302874467e06028": "d860521e3180fb04b61993d4ab6048fa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/db/f3361518cee68909a0d030659b67c34c29cb9d": "b7a424cd050cb410353f9d5f9a748203",
".git/objects/dd/bf741813d13f00ec8aa32d9f7d22114ca752bb": "76cde7c6a22d065ecc147c36410ea535",
".git/objects/e0/fc2b02f9a659ef6df6ee77d15f9c1f5f4920c7": "ec03987aa0b2672b5414a576b5b95b48",
".git/objects/e2/1d8b1648224ed034da8f368a50c003da2e8836": "7bf27eb616902e0b69a40b01e4af36fa",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/9de58cc5ab4c8978096d33cf6646152a12198f": "a13b3a117327d9d806113ba03a04d21e",
".git/objects/ec/04ca6a8f6840d10f95b35e6722c473c5af7fd5": "049caf63effeead4c16afe8900feb8f2",
".git/objects/ec/0568430e4dc38d2ba9371a87e23d8db38a6ad8": "3c3ba8d936f682f5e16ccaa4f72dad12",
".git/objects/ed/96a2d2cf8df33a96e5633f214cb4021c0d2d07": "cbe3e1ea382670b55d6e640a09d7371b",
".git/objects/ee/3a91bd0165c8eba3e0666054a1f17499ec8f08": "a876ac170e07e0f308b81dbb7bbbf08e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/68131193a88271062467866bdebaf93e55364a": "dd84ff78f3f761729b7e0078cba418af",
".git/objects/f2/f1505d58d77eed35cdca735a447afb6385af08": "bc32dbacd8026234b2e60489c5392c68",
".git/objects/f3/165d565f672016b473ad5014be4c3cb5848da7": "21b30efb2e951d785a592911d1e31e99",
".git/objects/f3/9cd93a7735214f135627f97e9df47750dd037a": "248b29de60dfb0d35dc55cf4229e8b15",
".git/objects/f7/de707f5cb933040737c63adccaa63c750108d3": "d1a2466b2abe1aaa0c0268fbbcd2b4dc",
".git/objects/fb/27a11fa1eceef94e8c77bea29842e4a6ea500d": "b6dc93a6256c030f553b66c56a4a0007",
".git/objects/ff/02c366f538c9439ea7447e846e70b97fc17c43": "916c71eda66d5e641e84560cc3250721",
".git/refs/heads/main": "aaa6b23deca3df45abc0a24d75a99b22",
".git/refs/remotes/origin/main": "aaa6b23deca3df45abc0a24d75a99b22",
"assets/AssetManifest.bin": "082bb7c01b2df32aaf557b7db59725ac",
"assets/AssetManifest.bin.json": "656eea3c54a8410676781195672fa18d",
"assets/AssetManifest.json": "e3ea988aadc8bffc7a17ea1b95e3917e",
"assets/Assets/3dmodel/plane_pc.glb": "76db89769684ea628cda7f2380bd8078",
"assets/Assets/fonts/airstrike/airstrike.ttf": "4d3a3a8495c885e288ee63d2e0f0b5f8",
"assets/Assets/fonts/airstrike/airstrikebold.ttf": "da7557ed2bbd032697cd63666335f8da",
"assets/Assets/fonts/roboto/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/Assets/fonts/varelmo/Varelmo.otf": "2b56c2f11d464a6ed3213c3a280f696b",
"assets/Assets/fonts/varelmo/Varelmo.ttf": "ed9d6dd97b82515f68dccc2affd12885",
"assets/Assets/Images/Kishan.png": "6ab2c322f80729fbeca2c34f2334b1e3",
"assets/Assets/Images/project/cal/cal1.jpg": "56905e8f93d4d19d13eb21cf571f8271",
"assets/Assets/Images/project/cal/cal2.jpg": "511a2b3fc9c4b297d2913bee58a2b45c",
"assets/Assets/Images/project/cal/calculator.png": "142c6e61aba9016266e950eccbc6f1ba",
"assets/Assets/Images/project/chat/chat1.jpg": "c90e74fb7b62aaa0d4b7fec2af3cf2ea",
"assets/Assets/Images/project/chat/chat2.jpg": "3d2bd0106613dba4e2471c23e25f3824",
"assets/Assets/Images/project/chat/chat3.jpg": "126b732cb05571548547911035678955",
"assets/Assets/Images/project/chat/chat4.jpg": "001a439dabc81095d3bdc9b0e44f5082",
"assets/Assets/Images/project/chat/chat5.jpg": "43fc9f585174cdfdbe2d54889479f1b8",
"assets/Assets/Images/project/chat/Chatify.jpg": "bddf6acfc4d610e074ba9493f82bfe58",
"assets/Assets/Images/skill/canva.jpg": "2ed70791ed4ed103afbdc42d30003497",
"assets/Assets/Images/skill/dart.jpg": "fcaaa553aeee881874b5998d1194b74d",
"assets/Assets/Images/skill/figma.png": "0a5514e881baa6a8a615f78c1040af09",
"assets/Assets/Images/skill/firebase.jpg": "fc876044f33dce61561c8b2e79cc7e5f",
"assets/Assets/Images/skill/flutter.png": "cddbe3d50b83fb44d7c640e53d89b258",
"assets/Assets/Images/skill/git.jpg": "faaf6e7c707390d104329fc24fe14c1c",
"assets/Assets/Images/skill/github.jpg": "c8b379fb23ccd3937de27aafa0e44e45",
"assets/Assets/Images/skill/htmlCss.jpg": "a2ac8ce0423623573b0475b5cdeda14d",
"assets/FontManifest.json": "7202b6a0df3361c59abdfad04dc65937",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9ec75db637f417a65f6c3d2309e4f066",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_3d_controller/assets/model-viewer.min.js": "da8ab9e8570d09c7a44ba234786d34f7",
"assets/packages/flutter_3d_controller/assets/template.html": "24a1f29951029adea5122572451138fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e254ba0aec595fff1aa5e6498f6628f8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6fe6cd732292f7e6d7dd4d99e12b5c62",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "7c51ea09dc2e10404541b0bbdffdf3f4",
"icons/Icon-512.png": "83be16598996ca743bf57e1daef89711",
"icons/Icon-maskable-192.png": "7c51ea09dc2e10404541b0bbdffdf3f4",
"icons/Icon-maskable-512.png": "83be16598996ca743bf57e1daef89711",
"index.html": "8df8b2d5b5e90f1a1e22c7a6c9e833be",
"/": "8df8b2d5b5e90f1a1e22c7a6c9e833be",
"main.dart.js": "06eef5f4a15ce4008ebfba809bba99b7",
"manifest.json": "6c2921dd496bac31a6f652f8ced600e9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
