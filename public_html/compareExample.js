/* It only copy class of Brackets, doesn't compile */

/*Ext */
Ext.define('MojaAplikacja.view.main.Main', {
    extend: "Ext.panel.Panel",
    alias: 'widget.binding-two-way',
    require: [
        "Ext.grid.Panel",
        "Ext.data.Store",
        'Ext.grid.selection.SpreadsheetModel'
    ],

viewModel: {
    data: {
        checked: true,
        sex: true
    }
},   
    
initComponent: function() {
 var Main = this;
    
 var initialStoreData = [
     {unitId: "1", name: "pawel", surname: "Brzeczyszczykiewicz"},
     {unitId: "2", name: "damian", surname: "Brzeczyszczykiewicz"},
     {unitId: "3", name: "anna", surname: "Brzeczyszczykiewicz"},
     {unitId: "4", name: "dariusz", surname: "Brzeczyszczykiewicz"}
 ];
 var currentStoreData = [ 
     //{unitId: "1", name: "pawel", surname: "Brzeczyszczykiewicz"},
     {unitId: "2", name: "damjan", surname: "Brzeczyszczykiewicz"},
     {unitId: "3", name: "anna", surname: "Brzeczyszczykiewicz"},
     {unitId: "4", name: "dariusz", surname: "Brzeczyszczykiewicz"},
     {unitId: "5", name: "Ewa", surname: "Brzeżyszczykiewicz" },
     {unitId: "6", name: "Ewa", surname: "Brzeżyszczykiewicz" }];
    
 var _s = function(initialData, currentData, propertyId){
     var zmodyfikowaneRekordy = 0;
     var valueOfCurrentDatapropertyId;
     var dodaneRekordy = currentData.length;
     var result = [];
     for(var a = 0; a < currentData.length; a++){
        valueOfCurrentDatapropertyId = currentData[a][propertyId];
          for(var b = 0; b < initialData.length; b++){
              if(initialData[b][propertyId] === valueOfCurrentDatapropertyId){
                dodaneRekordy--;
                if(JSON.stringify(initialData[b]) !== JSON.stringify(currentData[a])){
                   zmodyfikowaneRekordy++;
                   }
               }
          }     
     }
     
     var valueOfInitialDatapropertyId;
     var usunieteRekordy = initialData.length;
     for(var c = 0; c < initialData.length; c++){
        valueOfInitialDatapropertyId = initialData[c][propertyId];
          for(var d = 0; d < currentData.length; d++){
            if(currentData[d][propertyId] === valueOfInitialDatapropertyId){
                usunieteRekordy--;
            }
          }
     }
     
     result.push("Dodano "+dodaneRekordy+" rekordów", 
                 "Usunięto "+usunieteRekordy+" rekordów",
                 "Zmodyfikowano "+zmodyfikowaneRekordy+" rekordów");
     return result;
 };
    
    
    var button = Ext.create({
        xtype: "button",
        text: "click",
        handler: function(){
           console.log(_s(initialStoreData, currentStoreData, "unitId"));
        }
    });
    
    this.items = [button];
    this.callParent(arguments);
}
}); 

