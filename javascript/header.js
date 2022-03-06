MenuShow();
function MenuShow(){
    //  $ jQuery的變數前綴詞

    // 隱藏選單與關閉按鈕
    $('#Navbar_Menu').hide();
    $('#Mobile_Close').hide();

    // 開啟選單
    $('#Mobile_Menu').click( function(){
        $('#Navbar_Menu').slideToggle(500);
        $('#Mobile_Menu').hide();
        $('#Mobile_Close').show();        
    });
    
    // 關閉選單
    $('#Mobile_Close').click( function(){
        $('#Navbar_Menu').slideToggle(500);
        $('#Mobile_Close').hide();
        $('#Mobile_Menu').show(); 
    });
}