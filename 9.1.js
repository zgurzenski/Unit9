/**
 * Created by Zack_ on 7/11/2017.
 */

/*var wordItems[] = document.getElementsByTagName("strong1",).innerText;

document.addEventListener("mouseover", highlight(wordItems));*/

function highlight(i)
{
    document.getElementsByTagName("strong")[i].setAttribute("class", "democlass");
}

function norm(i)
{
    document.getElementsByTagName("strong")[i].setAttribute("class", "defaultclass");
}


