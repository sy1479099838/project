function UserFenYe(nowPage,page,AllPage)
{
    var currentUrl = this.location.href;
    var result=currentUrl.split("&");

    if(page=="Previous")
    {
        if(nowPage!="1")
        {
            window.location.href=result[0]+"&page="+(parseInt(nowPage)-1);
        }
    }
    else if(page=="next")
    {
        if(nowPage!=AllPage)
        {
            window.location.href=result[0]+"&page="+(parseInt(nowPage)+1);
        }
    }
    else
    {
        if(page!=nowPage)
        {
            window.location.href=result[0]+"&page="+page;
        }

    }

}