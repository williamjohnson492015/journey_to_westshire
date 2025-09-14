/*:
 * @plugindesc Addresses gauges bleeding into the text for HP, MP, etc when using fatter fonts.
 * @author MrTravelingBard
 *
 * @help This plugin does not provide plugin commands.
 *
 * @param Gauge Area Width
 * @parent ---Window Battle Status---
 * @type number
 * @min 1
 * @desc Adjusts the size of the gauge area in battles
 * Default: 330
 * @default 330
 *
 */

//=============================================================================
// Parameter Variables
//=============================================================================

TB.Parameters = PluginManager.parameters('TB_GaugeAdjustment');
TB.Param = TB.Param || {};

TB.Param.GaugeAreaWidth = Number(TB.Parameters['Gauge Area Width']);


//=============================================================================
// Window_BattleStatus Adjustments
//=============================================================================

Window_BattleStatus.prototype.gaugeAreaWidth = function() {
    return TB.Param.GaugeAreaWidth;
};