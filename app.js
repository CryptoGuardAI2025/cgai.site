
function loadChart(){
  if(!window.TradingView) return;
  new TradingView.widget({
    container_id:"chart",
    autosize:true,
    symbol:"CRYPTOCAP:TOTAL",
    interval:"D",
    timezone:"Etc/UTC",
    theme:"dark",
    style:"1",
    locale:"en",
    range:"ALL",
    hide_top_toolbar:false,
    allow_symbol_change:false
  });
}
