const Bosco = require('../lib/events')
const Heroku = require("heroku-client");
const Config = require("../config");
const heroku = new Heroku({ token: Config.HEROKU.API_KEY });
const baseURI = "/apps/" + Config.HEROKU.APP_NAME;
const { SUDO } = require("../config");

Bosco.addCMD(
	{
		pattern: 'setsudo',
		isOwner: true,
		desc: "set/add sudo", 
		type: 'misc'
},
async (conn, match) => {
	var mentionUser
	function _0x2c48(){var _0x53caac=['split','mentionedJid','1129884yLXnco','remoteJid','163112gxpzor','801444jeVxnL','key','6zTXYtj','endsWith','data','1374303zqasoP','929115KUSzJc','175755cdFdum','4545840WaUMgY'];_0x2c48=function(){return _0x53caac;};return _0x2c48();}var _0x546849=_0x50b5;function _0x50b5(_0x15b0e1,_0xa6bb03){var _0x2c48dc=_0x2c48();return _0x50b5=function(_0x50b561,_0x45aef2){_0x50b561=_0x50b561-0x1e4;var _0x1e0323=_0x2c48dc[_0x50b561];return _0x1e0323;},_0x50b5(_0x15b0e1,_0xa6bb03);}(function(_0x47168c,_0x13ad45){var _0x248370=_0x50b5,_0x30faad=_0x47168c();while(!![]){try{var _0x349485=-parseInt(_0x248370(0x1f0))/0x1+-parseInt(_0x248370(0x1e8))/0x2*(-parseInt(_0x248370(0x1eb))/0x3)+-parseInt(_0x248370(0x1e9))/0x4+parseInt(_0x248370(0x1ef))/0x5+-parseInt(_0x248370(0x1e6))/0x6+-parseInt(_0x248370(0x1ee))/0x7+parseInt(_0x248370(0x1f1))/0x8;if(_0x349485===_0x13ad45)break;else _0x30faad['push'](_0x30faad['shift']());}catch(_0x2ffa7d){_0x30faad['push'](_0x30faad['shift']());}}}(_0x2c48,0x262f6));if(conn[_0x546849(0x1ed)][_0x546849(0x1ea)][_0x546849(0x1e7)][_0x546849(0x1ec)]('@g.us')){if(conn[_0x546849(0x1ed)][_0x546849(0x1e5)][0x0]!=undefined){var mm=conn[_0x546849(0x1ed)][_0x546849(0x1e5)][0x0];mentionUser=mm[_0x546849(0x1e4)]('@')[0x0];}else mentionUser=![];}
	
	var replyUser		
	function _0x3661(_0x4ce794,_0x540900){var _0x27180f=_0x2718();return _0x3661=function(_0x36616a,_0x1dfeff){_0x36616a=_0x36616a-0x1d2;var _0x3a4746=_0x27180f[_0x36616a];return _0x3a4746;},_0x3661(_0x4ce794,_0x540900);}var _0x5d7adf=_0x3661;(function(_0x358e84,_0x140b09){var _0x385546=_0x3661,_0x3b2d00=_0x358e84();while(!![]){try{var _0x30cd7a=-parseInt(_0x385546(0x1de))/0x1*(-parseInt(_0x385546(0x1d7))/0x2)+-parseInt(_0x385546(0x1e0))/0x3+parseInt(_0x385546(0x1d6))/0x4*(-parseInt(_0x385546(0x1db))/0x5)+-parseInt(_0x385546(0x1da))/0x6+-parseInt(_0x385546(0x1d8))/0x7+parseInt(_0x385546(0x1d9))/0x8+-parseInt(_0x385546(0x1d4))/0x9*(-parseInt(_0x385546(0x1d5))/0xa);if(_0x30cd7a===_0x140b09)break;else _0x3b2d00['push'](_0x3b2d00['shift']());}catch(_0x4d12c1){_0x3b2d00['push'](_0x3b2d00['shift']());}}}(_0x2718,0x91170));if(conn[_0x5d7adf(0x1df)]['message'][_0x5d7adf(0x1dc)]!=undefined){if(conn[_0x5d7adf(0x1df)][_0x5d7adf(0x1e1)][_0x5d7adf(0x1dc)][_0x5d7adf(0x1d2)]!=undefined){if(conn['data'][_0x5d7adf(0x1e1)][_0x5d7adf(0x1dc)][_0x5d7adf(0x1d2)][_0x5d7adf(0x1dd)]!=undefined){var ms=conn['data'][_0x5d7adf(0x1e1)]['extendedTextMessage']['contextInfo'][_0x5d7adf(0x1dd)];replyUser=ms[_0x5d7adf(0x1d3)]('@')[0x0];}else replyUser=![];}}function _0x2718(){var _0x206a10=['1500XRDONX','202696USQrjD','431854GnVIzH','2381624YodMki','2695008xZtzbP','5718780DHWchL','65UJthEs','extendedTextMessage','participant','1jTOuBN','data','741723mlkylD','message','contextInfo','split','134451RblzLp'];_0x2718=function(){return _0x206a10;};return _0x2718();}
	
	var user = mentionUser || replyUser
	if (!user) 
	return await conn.reply('mention/reply user')
	var sudo = (SUDO + "," + user).replace(/,,/g,",");
        sudo = sudo.startsWith(",") ? sudo.replace(",","") : sudo;
	await conn.reply("SUDO :" + sudo);
	await heroku
 .patch(baseURI + "/config-vars", { body: { SUDO: sudo } })
 .then(async (app) => {});
 });

Bosco.addCMD(
	{
		pattern: 'delsudo',
		isOwner: true,
		desc: "delete/remove sudo", 
		type: 'misc'
},
async (conn, match) => {
	var mentionUser
	function _0x2c48(){var _0x53caac=['split','mentionedJid','1129884yLXnco','remoteJid','163112gxpzor','801444jeVxnL','key','6zTXYtj','endsWith','data','1374303zqasoP','929115KUSzJc','175755cdFdum','4545840WaUMgY'];_0x2c48=function(){return _0x53caac;};return _0x2c48();}var _0x546849=_0x50b5;function _0x50b5(_0x15b0e1,_0xa6bb03){var _0x2c48dc=_0x2c48();return _0x50b5=function(_0x50b561,_0x45aef2){_0x50b561=_0x50b561-0x1e4;var _0x1e0323=_0x2c48dc[_0x50b561];return _0x1e0323;},_0x50b5(_0x15b0e1,_0xa6bb03);}(function(_0x47168c,_0x13ad45){var _0x248370=_0x50b5,_0x30faad=_0x47168c();while(!![]){try{var _0x349485=-parseInt(_0x248370(0x1f0))/0x1+-parseInt(_0x248370(0x1e8))/0x2*(-parseInt(_0x248370(0x1eb))/0x3)+-parseInt(_0x248370(0x1e9))/0x4+parseInt(_0x248370(0x1ef))/0x5+-parseInt(_0x248370(0x1e6))/0x6+-parseInt(_0x248370(0x1ee))/0x7+parseInt(_0x248370(0x1f1))/0x8;if(_0x349485===_0x13ad45)break;else _0x30faad['push'](_0x30faad['shift']());}catch(_0x2ffa7d){_0x30faad['push'](_0x30faad['shift']());}}}(_0x2c48,0x262f6));if(conn[_0x546849(0x1ed)][_0x546849(0x1ea)][_0x546849(0x1e7)][_0x546849(0x1ec)]('@g.us')){if(conn[_0x546849(0x1ed)][_0x546849(0x1e5)][0x0]!=undefined){var mm=conn[_0x546849(0x1ed)][_0x546849(0x1e5)][0x0];mentionUser=mm[_0x546849(0x1e4)]('@')[0x0];}else mentionUser=![];}
	
	var replyUser		
	function _0x3661(_0x4ce794,_0x540900){var _0x27180f=_0x2718();return _0x3661=function(_0x36616a,_0x1dfeff){_0x36616a=_0x36616a-0x1d2;var _0x3a4746=_0x27180f[_0x36616a];return _0x3a4746;},_0x3661(_0x4ce794,_0x540900);}var _0x5d7adf=_0x3661;(function(_0x358e84,_0x140b09){var _0x385546=_0x3661,_0x3b2d00=_0x358e84();while(!![]){try{var _0x30cd7a=-parseInt(_0x385546(0x1de))/0x1*(-parseInt(_0x385546(0x1d7))/0x2)+-parseInt(_0x385546(0x1e0))/0x3+parseInt(_0x385546(0x1d6))/0x4*(-parseInt(_0x385546(0x1db))/0x5)+-parseInt(_0x385546(0x1da))/0x6+-parseInt(_0x385546(0x1d8))/0x7+parseInt(_0x385546(0x1d9))/0x8+-parseInt(_0x385546(0x1d4))/0x9*(-parseInt(_0x385546(0x1d5))/0xa);if(_0x30cd7a===_0x140b09)break;else _0x3b2d00['push'](_0x3b2d00['shift']());}catch(_0x4d12c1){_0x3b2d00['push'](_0x3b2d00['shift']());}}}(_0x2718,0x91170));if(conn[_0x5d7adf(0x1df)]['message'][_0x5d7adf(0x1dc)]!=undefined){if(conn[_0x5d7adf(0x1df)][_0x5d7adf(0x1e1)][_0x5d7adf(0x1dc)][_0x5d7adf(0x1d2)]!=undefined){if(conn['data'][_0x5d7adf(0x1e1)][_0x5d7adf(0x1dc)][_0x5d7adf(0x1d2)][_0x5d7adf(0x1dd)]!=undefined){var ms=conn['data'][_0x5d7adf(0x1e1)]['extendedTextMessage']['contextInfo'][_0x5d7adf(0x1dd)];replyUser=ms[_0x5d7adf(0x1d3)]('@')[0x0];}else replyUser=![];}}function _0x2718(){var _0x206a10=['1500XRDONX','202696USQrjD','431854GnVIzH','2381624YodMki','2695008xZtzbP','5718780DHWchL','65UJthEs','extendedTextMessage','participant','1jTOuBN','data','741723mlkylD','message','contextInfo','split','134451RblzLp'];_0x2718=function(){return _0x206a10;};return _0x2718();}

	var user = mentionUser || replyUser
	if (!user) 
	return await conn.reply('reply/mention user')
	var sudo = SUDO.replace(user,'').replace(/,,/g,",");
	sudo = sudo.startsWith(",") ? sudo.replace(",","") : sudo; 
	await conn.reply("SUDO :" + sudo);	
	await heroku
 .patch(baseURI + "/config-vars", { body: { SUDO: sudo } })
 .then(async (app) => {});
})

Bosco.addCMD(
	{
		pattern: 'getsudo',
		isOwner: true,
		desc: "get sudo", 
		type: 'misc'
},
async (conn, match) => {
	const vars = await heroku
 .get(baseURI + "/config-vars")
 .catch(async (error) => {
 	return await conn.reply("HEROKU : " + error.body.message);
 	});
 	await conn.reply(`SUDO : ${vars.SUDO}`);
 	});