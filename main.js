var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');


var template ={
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
    <title>WEB_01 - ${title}</title>
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
  }, list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li type=square><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i = i + 1;
    }
    list = list+ '</ul>';
    return list;
  }
}


var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;


    if(pathname === '/'){
      if(queryData.id === undefined){

          fs.readdir('./data', function(error, filelist){
            var title = 'Welcome';
            /*
            var description = `
            <p style="color:red;"> <strong>어서오세요 </strong></p>
            <p><a href="https://www.youtube.com/channel/UC5ScPjbt-a97AJO7SBj6nAg"
            target="_blank" title="어...허..허.">
              <img src="https://yt3.ggpht.com/a/AATXAJyF9G0nR3RY_1puAktFXb_0M1jzaIBR_bDWzuyj=s900-c-k-c0xffffffff-no-rj-mo"
              alt="폭8이다" width="300" height="270"/>
            </a></p>
            `;
            */
            var description = `
            <p style="color:red;"> <strong>어서오세요 </strong></p>

            `;

            var list = template.list(filelist);
            var html = template.HTML(title, list, `<h1><strong>${title}</strong></h1>${description}`,
            `<a href="/create">create</a>`);
            response.writeHead(200);
            response.end(html);


          });



      } else {

        fs.readdir('./data', function(error, filelist){
            var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`, 'utf8', function(err,description){
          var title = queryData.id;
          var list = template.list(filelist);
          var html = template.HTML(title, list,
            `<h1><strong>${title}</strong></h1>${description}`,
          `<a href="/create">create</a>
          <a href="/update?id=${title}">update</a>
          <form action="delete_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <input type="submit" value="delete">
          </form>`
        );
          response.writeHead(200);
          response.end(html);
        });
      });
      }

    } else if(pathname === '/create'){
      fs.readdir('./data', function(error, filelist){

        var title = 'WEB - create';
        var list = template.list(filelist);
        var html = template.HTML(title, list, `
          <form action="/create_process" method="post">
          <p>
            <input type="next" name="title" placeholder="title">
          </p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
          </form>
          `, '');
        response.writeHead(200);
        response.end(html);
      })

    } else if(pathname === '/create_process'){
      var body = '';
      request.on('data',function(data){
        body = body + data;
      });

      request.on('end',function(){
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;

        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.writeHead(302, {Location: `/?id=${title}`});
        response.end();
        })
      });

    } else if(pathname === '/update'){
      fs.readdir('./data', function(error, filelist){
          var filteredId = path.parse(queryData.id).base;
      fs.readFile(`data/${filteredId}`, 'utf8', function(err,description){
        var title = queryData.id;
        var list = template.list(filelist);
        var html = template.HTML(title, list,
          `
          <form action="/update_process" method="post">
          <input type="hidden" name="id" value="${title}">
          <p>
            <input type="next" name="title" placeholder="title" value="${title}">
          </p>
          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>
          <p>
            <input type="submit">
          </p>
          </form>
          `,
        `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`);
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if(pathname === '/update_process'){
    var body = '';
    request.on('data',function(data){
      body = body + data;
    });

    request.on('end',function(){
      var post = qs.parse(body);
      var id = post.id;
      var title = post.title;
      var description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, function(error){
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        })
      });

    });
  } else if(pathname === '/delete_process'){
    var body = '';
    request.on('data',function(data){
      body = body + data;
    });

    request.on('end',function(){
      var post = qs.parse(body);
      var id = post.id;
        var filteredId = path.parse(id).base;
      fs.unlink(`data/${filteredId}`, function(error){
        response.writeHead(302, {Location: `/`});
        response.end();
      })

    });
  }
    else {
      response.writeHead(404);
      response.end('Not found');
    }





});
app.listen(3000);
