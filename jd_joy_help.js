/*
瀹犳豹姹己鍒朵负鍒汉鍔╁姏锛堝姪鍔涗竴涓ソ鍙嬩綘鑷繁鍙互鑾峰緱30绉垎锛屼竴澶╀笂闄愭槸甯姪3涓ソ鍙嬶紝鑷繁鑾峰緱90绉垎锛屼笉绠″姪鍔涙槸鍚︽垚鍔燂紝瀵规柟閮戒細鎴愪负浣犵殑濂藉弸锛�
鏇存柊鍦板潃锛歨ttps://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_help.js
鏇存柊鏃堕棿锛�2021-1-21
娲诲姩鍏ュ彛锛氫含涓淎PP鎴戠殑-鏇村宸ュ叿-瀹犳豹姹�
鐩墠鎻愪緵浜�30309浣嶅ソ鍙嬬殑friendPin渚涗娇鐢ㄣ�傝剼鏈殢鏈轰粠閲岄潰鑾峰彇涓�涓紝鍔╁姏鎴愬姛鍚庯紝閫�鍑哄皬绋嬪簭閲嶆柊鐐瑰嚮杩涘幓寮�濮嬪姪鍔涙柊鐨勫ソ鍙�
娆㈣繋澶у浣跨敤 https://jdjoy.jd.com/pet/getFriends?itemsPerPage=20&currentPage=1 (currentPage=1琛ㄧず绗竴椤靛ソ鍙嬶紝=2琛ㄧず绗簩椤靛ソ鍙�)
鎻愪緵鍚勮嚜璐﹀彿鍒楄〃鐨刦riendPin缁欐垜
濡傛灉鎯宠缃浐瀹氬ソ鍙嬶紝閭ｄ笅杞戒笅鏉ユ斁鍒版湰鍦颁娇鐢紝鍙互淇敼friendPin鎹㈠ソ鍙�(鍔╁姏涓�濂藉弸鍚庯紝鏇存崲涓�娆riendPin閲岄潰鐨勫唴瀹�)
鎰熻阿github @Zero-S1鎻愪緵
浣跨敤鏂规硶锛�
鈶犺缃ソ鐩稿簲杞欢鐨勯噸鍐�
鈶′粠浜笢APP瀹犳豹姹�->棰嗙嫍绮�->閭�璇峰ソ鍙嬪姪鍔涳紝鍒嗕韩缁欎綘灏忓彿寰俊鎴栬�呭井淇＄殑鏂囦欢浼犺緭鍔╂墜銆� 鑷繁鍐嶆墦寮�鍒氭墠鐨勫垎浜紝鍔╁姏鎴愬姛鍚庯紝杩斿洖鍒版灏忕▼搴忛椤甸噸鏂拌繘鍘诲疇姹豹鍗冲彲鍔╁姏涓嬩竴浣嶅ソ鍙�
鈶㈠鎻愮ず濂藉弸浜烘皵鏃猴紝璇存槑姝ゅソ鍙嬪凡婊′簡涓変汉鍔╁姏锛岄渶閲嶆柊杩涘嚭灏忕▼搴忥紝閲嶆柊杩涘叆鏉ュ鏈夌ぜ-瀹犳豹姹��
new Env('瀹犳豹姹己鍒朵负鍒汉鍔╁姏');//姝ゅ蹇界暐鍗冲彲锛屼负鑷姩鐢熸垚iOS绔蒋浠堕厤缃枃浠舵墍闇�
[MITM]
hostname = draw.jdfcloud.com
======================Surge=====================
[Script]
瀹犳豹姹己鍒朵负鍒汉鍔╁姏= type=http-request,pattern=^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin,requires-body=1,max-size=0,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_help.js

===================Quantumult X=====================
[rewrite_local]
^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin url script-request-header https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_help.js

=====================Loon=====================
[Script]
http-request ^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_help.js, requires-body=true, timeout=3600, tag=瀹犳豹姹己鍒朵负鍒汉鍔╁姏


浣犱篃鍙粠涓嬮潰閾炬帴鎷垮ソ鍙嬬殑friendPin(澶嶅埗閾炬帴鍒版湁浜笢ck鐨勬祻瑙堝櫒鎵撳紑鍗冲彲)

https://jdjoy.jd.com/pet/getFriends?itemsPerPage=20&currentPage=1
*/
const friendsArr = ["jd_41345a6f96aa5", "jd_45a6b5953b15b", "jd_45a6b5953b15b", "jd_704a2e5e28a66", "jd_66f5cecc1efcd", "jd_sIhNpDXJehOr", "jd_5851f32d4a083", "yhr_19820404", "13008094886_p", "13966269193_p", "jd_4e4d9825e5fb1", "jd_5ff306cf94512", "ququkoko", "jd_59a9823f35496", "529577509-275616", "18923155789_p", "jd_455da88071d1e", "dreamscometrue5120", "钂嬪懆鍗�19620607", "jd_620ceca400151", "鏉夐洦2011", "MARYMY88", "13682627696_p", "jd_6777ee65f9fcc", "澶忔捣涓�12315", "jd_437b4f3fa5d83", "zyjyc9998", "meoygua", "MLHK7288", "jd_42d9ce3001acd", "jd_57650a30ef6eb", "jd_44ca1016e0f96", "jd_74332d1d62a97", "jd_7dbe4f8a40a7d", "jd_4fa238e4e3039", "elbereth1122", "jd_4d9be23908e41", "jd_51f0d43d78900", "13588108107_p", "123by456", "09niuniuma", "143798682-947527", "jd_560c6f30e6951", "jd_54ddb8af5374a", "澶忛潻骞�", "247466310", "wang2011", "chensue", "1362245003-624122", "wdGefYCBlyOuvz", "jd_412f7eb363cd8", "18311575050_p", "1307976-34738981", "wdgOGLtOJjjbnp", "klhzdx", "jd_5fdcdcb183d7d", "jd_5862fd8834680", "jd_51a64a9da6b94", "302990512-553401", "jd_4078f69a72873", "jd_ewYCRdmukzQH", "13348822441_p", "hlcx86021", "390823571-784974", "jd_79af2bc7a56a3", "15053231812_p", "jd_6f53253d117c5", "jd_5bf29dffa62ea", "jd_47a1c4ad02103", "鍒樺嚖鑻�", "145391572-102667", "yanglan0409", "jd_4b8a70f3b06c3", "寮戠X", "jd_59d962a076126", "sjw3000", "jd_4d4def8b59787", "L1518235423", "jd_579b891fbea9b", "frank818", "hellohuhua", "jd_4cf1918577871", "jd_akYbyiXqrIDC", "鏉庣邯绾�", "jd_54a4260ca986c", "jd_4cba35cfa8220", "13654075776_p", "13916051043", "jd_6f9b9a6769afb", "iamkgbfox", "jd_5fbda9be54d5b", "jd_76763ba485c5e", "jd_485c757b79422", "xiaojingang_0", "lanye1545", "chenzhiyun2002", "lmpbjs1988", "jd_SmPxpudoGYOb", "jwl19690905", "鑽疯垶寮勬竻褰�88", "jd_750d6a9734717", "jd_64e37854e713f", "jd_573c9832d8989", "wdkplHVQlgowTW", "wwk232323", "jd_6bfe51f915c90", "鎴戞墜鏈哄彿鐮�", "13681610268_p", "ss836580793", "15868005933_p", "zooooo58", "闄屼笂鑺卞紑鑺卞張钀�", "jd_701f52f8badbb", "jd_462f9229c20e4", "jd_42193689987a0", "jd_7dc5829121bcc", "13656692651_phz", "jd_47f49f22f1dc3", "handechun959", "13775208986_p", "guoyizhang", "jd_677dd20bf2749", "jd_FfAnqFVEoBul", "jd_4e59841cae4f9", "jd_5279d593e7803", "鎬濈华闅忛2011", "jd_62e335d785872", "suyugen", "jd_4e68b48d16f7b", "jd_56b7a4e092e85", "cocoty", "jd_7b6d6e7dc98f1", "jd_63423cd594e8b", "greatyunyun", "4349灏忎涪涓�", "18027486801_p", "15207695569_p", "llbai11", "wdNRUvbJItetlvB", "jd_54154982c707f", "85192cool", "jd_60d497271825b", "greatyunyun9320", "ky252571504", "jd_74e60dbcae365", "wdiicnSbYSHWwE", "jd_529a0a309d418", "jd_7be92b11b7e8f", "13486659225_p", "jd_iFnquhpWWAzO", "jd_6e348ece13e20", "jd_6f5b49bb757cb", "znz浼犲", "418001066_m", "jd_67ded5748c3ab", "361372-27819972", "jd_5fafb631c98af", "jd_76dd04e844d63", "灏忛箍Jenny", "00鏁板瓧鏂圭▼寮�", "jd_77a82b603c6c3", "鍕囨暍鐨勫皬娉�", "jd_4481f68984466", "jd_758f5224ee957", "mwb1992062_m", "15975229552_p", "zdj8341", "pet_virtual_friend_鑳＄殝涓�", "pet_virtual_friend_缁胯尪sama", "pet_virtual_friend_Ainio", "jd_4915949b7bfa1", "jd_7ca74ed9224ef", "jd_42764f5ea2341", "5317123-63418293", "jd_40a2d9485cbdb", "qazmcl1230", "jd_7ced325aba4fd", "jd_402fe7425fcaf", "95581245-627991", "luffy-314_m", "jd_BCXgLlmxHdiS", "jd_610b3d00928e5", "浣犺閱掓潵", "338379384-148135", "pet_virtual_friend_涔旀不妗�", "jd_54130a3e282ea", "jd_6169b3411ed5b", "jd_428d930ca56a5", "qq6924309", "pet_virtual_friend_璺亣鐙椾笌灏戝勾", "jd_712bd3bfd55d6", "jd_4e97fe5ca4003", "tommy_he1", "13981372001_p", "129867657-673064", "jd_525d6e7a57e7c", "wdZuirGekSHKmF", "jd_75e1da74980ab", "jd_RVMXldNSQNOP", "jd_5f94da0265e0d", "jd_67ab629be7e61", "13887490621_p", "jd_4e0d529ba3c35", "jd_493918e314b50", "jd_71a220104187a", "jd_vVhhkdUpTkJQ", "gary388jingdong", "wdjQkAbFobMTyo", "cloud_kim", "jd_558ed75f52d39", "15555448319_p", "wdhxZuEvXhhvCf", "jd_72b940be8c0f4", "congcong鐐掕懕钁�", "jd_7eb0de64eb25a", "13209558123_p", "jd_53bf7cb6fb8e6", "jd_4fe620f72fa7c", "澶忛洦鐨勭埍鎯�", "jd_47ba82eb392a5", "jd_LXnFHXoJwXkW", "62160785-578856", "閱掗啋璇ョ潯浜�", "jd_LOEWgvNwQIWD", "xiiirww", "pet_virtual_friend_鐗瑰叞鍏嬫柉", "pet_virtual_friend_Talon", "jd_4f7cd5b108733", "jd_NgNWXMVkJIvk", "jadonglin", "鐜╁鍗紙", "liangxuejingdong", "jd_627171efb7c0a", "jd_53bc7a14f64d6", "15809290902_p", "jd_65a2ab73d9aa5", "jd_6edb943cacbfb", "jd_7f7eabc5caf7d", "jd_725e17effb6a9", "钄¤緣鐓�", "voxb", "gdxx_hhw_m", "jd_78f0d6524a1dc", "jd_sDtnONLeHwfG", "xyyshy1983", "yinlang46", "ypqian", "15817094457_p", "fdxwb", "wuyaoxin2012", "鏄庡瓙婧�", "henry1927_m", "chamy99", "jd_461e384274c34", "248358330-645106", "jd_4fd63de4a6033", "铚滅硸鍚戞棩钁�", "wonghe", "36453197-121619", "鐞崇悈婊＄洰cbb", "jd_5b7cc9e532426", "134795344-89911673", "15211488203_p", "jd_6f1f0722f8365", "jd_JmGCpqgpCtqG", "澧ㄦ槑妫嬪闄�", "pet_virtual_friend_1314鐖辨境", "1209815-33190621", "zhouhuayh", "jd_6d3cbb8b0751a", "jd_6e00e826f939b", "mztvip", "davidharry", "sara35424", "sun5025", "jd_62ce2385bb364", "352834026-406289", "pet_virtual_friend_涓佸骇鐨勭湡鐖辩矇", "jd_582eecf8d27a9", "jd_49acdb02e8514", "13976911784_p", "jd_uGzohbhFpRuz", "wzywolfgang", "yjbonny", "娌ф捣涓嶈疆鍥�", "649297742_327799447", "鍊氬叞妞�", "鐞崇惓8796", "snzh2013", "jd_73751adc04afd", "wdNnlMzPGJJKgqI", "yygt1158", "jd_53df36eb204a0", "鑺卞紑鑺辫姳钀�", "jd_611e082213c89", "jd_71e77d9235cf5", "jd_596fd9fea411f", "jd_7277d200aa1ac", "15230573701_p", "zb19881021", "692620136钀�", "168876810-159969", "zhushidan100", "涓婅嚜涔犵殑鐚�", "15602231009_p", "jd_5213fd3fd5e09", "jd_6711f97ee4dfe", "44787591-640051", "MisterGlasses", "jd_7b22bbfe1e7e5", "138555963-81748582", "jd_QEVVkkDTQAlJ", "4932713-24535180", "jd_6dce98c07a644", "jd_DUtPtiiDamDr", "wangyneu", "wBm1TsDy3p_m", "jd_6acd3a6cc79cc","jd_444f5c020f31c","jd_71caf6b3ec4cb", "shin_dynasty", "carola82", "jd_AOhLSBLdSnux", "ningbormb"]
/**
 * 鐢熸垚闅忔満鏁板瓧
 * @param {number} min 鏈�灏忓�硷紙鍖呭惈锛�
 * @param {number} max 鏈�澶у�硷紙涓嶅寘鍚級
 */
let newUrl, url = $request.url;
function randomNumber(min = 0, max = 100) {
  return Math.min(Math.floor(min + Math.random() * (max - min)), max);
}
try {
  console.log(`url:${url}`);
  let friendPin = encodeURI(friendsArr[randomNumber(0, friendsArr.length)]) //寮哄埗涓哄鏂瑰姪鍔�,鍙垚涓哄ソ鍙嬪叧绯�
  const timestamp = new Date().getTime()
  const lks = url.match(/lks=.*?$/g)[0];
  newUrl = url.replace(/friendPin=.*?$/i, "friendPin=" + friendPin).replace(/invitePin=.*?$/i, "invitePin=" + friendPin).replace(/inviteTimeStamp=.*?$/i, "inviteTimeStamp=" + timestamp + "&")
  newUrl += `&${lks}`;
  console.log(`newUrl:${newUrl}`);
} catch (e) {
  console.log(e);
} finally {
  $done({ url: newUrl })
}
