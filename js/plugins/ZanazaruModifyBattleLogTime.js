/*:
* @author Zanazaru
* @plugindesc modify the duration the battle log stays
* 
* @param stay
* @desc 1 is normal 2 is double the length and 0.5 is halve the time
* @default 1
* @help Nothing special here.
*/

var mBLTStayParam = PluginManager.parameters("ZanazaruModifyBattleLogTime")["stay"];

Window_BattleLog.prototype.wait = function() {
    this._waitCount = this.messageSpeed() * mBLTStayParam;
};