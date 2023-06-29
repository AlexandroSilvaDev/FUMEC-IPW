var dia = document.getElementById('seçao1');
var tarde = document.getElementById('seçao2');
var noite = document.getElementById('seçao3');
var data = new Date();
var horas = data.getHours();

if ( horas >= '05' && horas < '12' )
{
    document.getElementById('seçao1').style.marginLeft='18%';
    document.getElementById('seçao1').style.width='65%';
    document.getElementById('seçao2').style.display='none';
    document.getElementById('seçao3').style.display='none';
}
else
{
    if ( horas >= '12' && horas < '18' )
    {
        document.getElementById('seçao2').style.marginLeft='18%';
        document.getElementById('seçao2').style.width='65%';
        document.getElementById('seçao1').style.display='none';
        document.getElementById('seçao3').style.display='none';
    }
    else
    {
        if ( horas >= '18' && horas <= '24' )
        {
            document.getElementById('seçao3').style.marginLeft='18%';
            document.getElementById('seçao3').style.width='65%';
            document.getElementById('seçao1').style.display='none';
            document.getElementById('seçao2').style.display='none';
        }
    }
}

var botao = document.getElementById('botao');
var todas = document.addEventListener('click', todasNoticias);
var largura = width();

function todasNoticias()
{
    if ( horas >= '05' && horas < '12' )
    {
        document.getElementById('seçao1').style.float='left';
        document.getElementById('seçao1').style.width='33%';
        document.getElementById('seçao1').style.marginLeft='0'
        document.getElementById('seçao2').style.display='inline';
        document.getElementById('seçao3').style.display='inline';
    }
    else
    {
        if ( horas >= '12' && horas < '18' )
        {
            document.getElementById('seçao2').style.float='left';
            document.getElementById('seçao2').style.width='34%';
            document.getElementById('seçao2').style.marginLeft='0'
            document.getElementById('seçao1').style.display='inline';
            document.getElementById('seçao3').style.display='inline';
        }
        else
        {
            if ( horas >= '18' && horas <= '24' )
            {
                document.getElementById('seçao3').style.float='left';
                document.getElementById('seçao3').style.width='33%';
                document.getElementById('seçao3').style.margin='0'
                document.getElementById('seçao1').style.display='inline';
                document.getElementById('seçao2').style.display='inline';
            }
        }
    }
}


    