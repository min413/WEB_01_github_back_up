module.exports ={
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
    <title>WEB_2 - ${title}</title>
    <meta charset="utf-8">
    </head>

    <body>
      <h1 style="text-align:center; font-size:30px " ><a href="/">WEB Practice</a></h1>

      <hr class="two">
      <div style="float: left; width: 20%; padding:10px;">

      ${list}
      ${control}

      </div>
      <div style="float: left; width: 70%; padding:10px; border-left:thin solid #808080;">

        ${body}
      </div>
    </body>
    </html>

    `;
  }, list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li type=square><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`
      i = i + 1;
    }
    list = list+ '</ul>';
    return list;
  }
}
