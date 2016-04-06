//money
Ext.form.VTypes['moneyVal'] = /^[-+]?\d+(\.\d{1,2})?$/i;
Ext.form.VTypes['moneyText'] = 'Payment amount is not valid';
Ext.form.VTypes['moneyMask'] = /[-+0-9.]/;
Ext.form.VTypes['money'] = function(v) {
 return Ext.form.VTypes['moneyVal'].test(v);
};
//numeric
Ext.form.VTypes['numericVal'] = /^[0-9]+$/i;
Ext.form.VTypes['numericText'] = 'Number entry is not valid';
Ext.form.VTypes['numericMask'] = /[0-9]/;
Ext.form.VTypes['numeric'] = function(v) {
 return Ext.form.VTypes['numericVal'].test(v);
};
//chinacardid
Ext.form.VTypes['chinaCardIdVal'] = /^\d{15}|\d{17}[\dXx]$/;
Ext.form.VTypes['chinaCardIdText'] = 'Identity id is not valid';
Ext.form.VTypes['chinaCardIdMask'] = /[0-9]/;
Ext.form.VTypes['chinaCardId'] = function(v) {
 return Ext.form.VTypes['chinaCardIdVal'].test(v);
};