$(document).ready(function(){
    /*normalizzazioni, correzioni, abbreviazioni*/
    $(".orig, .sic, .abbr").click(function(){
        $(this).hide();
        $(this).next().show();
    });
    $(".reg, .corr, .expan").click(function(){
        $(this).hide();
        $(this).prev().show();
    });

        //caratteristiche
    $(".inside_desc").hide();
    $("#car1").click(function(){
            $(".inside_desc").toggle("slow");
    });
        
    //descrizione fisica
    $(".inside_desc_fis").hide();
    $("#car2 ").click(function(){
            $(".inside_desc_fis").toggle("slow");
    });
    
    //storia editoriale
    $(".hist").hide();
    $("#car3 ").click(function(){
            $(".hist").toggle("slow");
    });

    // Correzioni
    $("#correzione").click(function(){
        if ($(".corr").is(":visible")) {
            if ($(".corr").css('background-color') == 'rgb(255, 0, 0)') {
                $(".corr").css('background-color', 'transparent');
                $(".corr").click(function(){
                    $(".sic").css('background-color', 'transparent');
                })
            } else {
                $(".corr").css('background-color', 'red');
                $(".corr").click(function(){
                    $(".sic").css('background-color', 'red');
                })
            }
        
        } if ($(".sic").is(":visible")) {
            if ($(".sic").css('background-color') == 'rgb(255, 0, 0)') {
                $(".sic").css('background-color', 'transparent');
                $(".sic").click(function(){
                    $(".corr").css('background-color', 'transparent');
                })
            } else {
                $(".sic").css('background-color', 'red');
                $(".sic").click(function(){
                    $(".corr").css('background-color', 'red');
                })
            }
        } 
    });

    // Normalizzazioni
    $("#normalizzazione").click(function(){
        if ($(".reg").is(":visible")) {
            if ($(".reg").css('background-color') == 'rgb(0, 128, 0)') {
                $(".reg").css('background-color', 'transparent');
                $(".reg").click(function(){
                    $(".orig").css('background-color', 'transparent');
                })
            } else {
                $(".reg").css('background-color', 'green');
                $(".reg").click(function(){
                    $(".orig").css('background-color', 'green');
                })
            }
        
        } if ($(".orig").is(":visible")) {
            if ($(".orig").css('background-color') == 'rgb(0, 128, 0)') {
                $(".orig").css('background-color', 'transparent');
                $(".orig").click(function(){
                    $(".reg").css('background-color', 'transparent');
                })
            } else {
                $(".orig").css('background-color', 'green');
                $(".orig").click(function(){
                    $(".reg").css('background-color', 'green');
                })
            }
        } 
    });

    // Abbreviazioni
    $("#abbreviazione").click(function(){
        if ($(".abbr").is(":visible")) {
            if (($(".abbr").css('background-color') == 'rgb(30, 144, 255)') && ($(".abbr_1").css('background-color') == 'rgb(30, 144, 255)') && ($(".abbr_2").css('background-color') == 'rgb(30, 144, 255)')){
                $(".abbr").css('background-color', 'transparent');
                $(".abbr_1").css('background-color', 'transparent');
                $(".abbr_2").css('background-color', 'transparent');
                $(".abbr").click(function(){
                    $(".expan").css('background-color', 'transparent');
                })
            } else {
                $(".abbr").css('background-color', 'rgb(30, 144, 255)');
                $(".abbr_1").css('background-color', 'rgb(30, 144, 255)');
                $(".abbr_2").css('background-color', 'rgb(30, 144, 255)');
                $(".abbr").click(function(){
                    $(".expan").css('background-color', 'rgb(30, 144, 255)');
                })
            }
        
        } if ($(".expan").is(":visible")) {
            if ($(".expan").css('background-color') == 'rgb(30, 144, 255)') {
                $(".expan").css('background-color', 'transparent');
                $(".expan").click(function(){
                    $(".abbr").css('background-color', 'transparent');
                })
            } else {
                $(".expan").css('background-color', 'rgb(30, 144, 255)');
                $(".expan").click(function(){
                    $(".abbr").css('background-color', 'rgb(30, 144, 255)');
                })
            }
        }  
    });

    // Aggiunte
    $("#aggiunta").click(function(){
        if ($(".add").css('background-color') == 'rgb(255, 215, 0)') {
                $(".add").css('background-color', 'transparent');       
        } 
        else{
            $(".add").css('background-color', 'rgb(255, 215, 0)'); 
        }
        
    });

    // Cancellature
    $("#cancellatura").click(function(){ 
        if ($(".del").is(":visible")) { 
            $(".del").hide();
            $(".del").css('background-color', 'transparent');
        } else {
            $(".del").show();
            $(".del").css('background-color', 'violet');
        }
    });

    // Persona
    $("#persona").click(function(){ 
        if ($(".class_persona").css('background-color') == 'rgb(229, 165, 135)') {
            $(".class_persona").css('background-color', 'transparent');
            $(".class_persona").css('padding', '0px');       
        } 
        else{
            $(".class_persona").css('background-color', 'rgb(229, 165, 135)');
            $(".class_persona").css('padding', '11px');
        }
    });

    // Organizzazioni
    $("#organizzazione").click(function(){ 
        if ($(".class_org").css('background-color') == 'rgb(164, 208, 187)') {
            $(".class_org").css('background-color', 'transparent'); 
            $(".class_org").css('padding', '0px');      
        } 
        else{
            $(".class_org").css('background-color', 'rgb(164, 208, 187)'); 
            $(".class_org").css('padding', '11px');
        }
    });

    // Luogo
    $("#luogo").click(function(){ 
        if ($(".class_place").css('background-color') == 'rgb(223, 205, 191)') {
            $(".class_place").css('background-color', 'transparent'); 
            $(".class_place").css('padding', '0px');      
        } 
        else{
            $(".class_place").css('background-color', 'rgb(223, 205, 191)'); 
            $(".class_place").css('padding', '11px');
        }
    });

    /*note persona*/
    $(".note_p").css("display", "none");
    var note_persone=$(".note_p").toArray();
    var i;
    
    $(".person_of_list").click(function(){
        var index_clicked= $(".person_of_list").index(this);
        for (i=0; i<note_persone.length; i++){
            note_persone[i].style.display = "none";
        }
        note_persone[index_clicked].style.display = "block";
    });

    /*note luogo*/
    $(".note_l").css("display", "none");
    var note_luogo=$(".note_l").toArray();
    var j;
    
    $(".place_of_list").click(function(){
        var index_clicked2= $(".place_of_list").index(this);
        for (j=0; j<note_luogo.length; j++){
            note_luogo[j].style.display = "none";
        }
        note_luogo[index_clicked2].style.display = "block";
    });

    /*note organizzazione*/
    $(".note_o").css("display", "none");
    var note_org=$(".note_o").toArray();
    var z;
    
    $(".org_of_list").click(function(){
        var index_clicked3= $(".org_of_list").index(this);
        for (z=0; z<note_org.length; z++){
            note_org[z].style.display = "none";
        }
        note_org[index_clicked3].style.display = "block";
    });
    
    /*immagini*/
    $("img.img_class").css("display", "none");
    $("p.desc_img").css("display", "none");

    $("img.img_class:first").css("display", "inline");
    $("p.desc_img:first").css("display", "inline");

    var img=$("img.img_class").toArray();
    var p=$("p.desc_img").toArray();

    var index_foto=0;
    var index_p=0;

    function switchFoto(n){
        index_foto+=n;
        index_p+=n; 
        if(index_foto==img.length && index_p==img.length){
            index_foto=0;
            index_p=0;
        };
        if(index_foto<0 && index_p<0){
            index_foto=img.length-1;
            index_p=img.length-1;
        };
        $("img.img_class").css("display", "none");
        img[index_foto].style.display = "block";

        $("p.desc_img").css("display", "none");
        p[index_p].style.display = "block";
    }
    switchFoto(0);
    
    $("#btn_back").click(function(){
        switchFoto(-1);
    });
    $("#btn_next").click(function(){
        switchFoto(+1);
    });  
})
