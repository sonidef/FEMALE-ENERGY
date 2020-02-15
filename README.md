# teamSassGroup4

## CONCERNS
 - I was wondering if we will have to change home.html to index.html? Will Netlify know to use that as the index? 
 - I deleted nav.scss because the whole header is basically a two part navigation bar because of the search area on the top nav bar.
 - We need to have at least one mixin (sass function thing). I was thinking maybe for our bios on the about page? This is an area that repeats. 

## Hi Everyone,
We will be using Prettier to keep our code styling the same. Prettier is a linter on VS Code. You can download it by searching for it in the extensions window of VS Code. This is where we downloaded Live Server, Live Sass Compiler etc.

I will ask Gary how to config Prettier tomorow

Also, 
Insure that when you setup your site on Netlify, that you specify the build command to be:

npm run build


## Header / Footer

Here is the html for the Header and Footer. I made it into a fake page just in case you want to copy and paste it and use it as a template. OR go to details.html and copy and paste. I used details.html because I needed a place to test the sass/css and the mock of this page is bascially dummy text and an image I think.

```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/app.min.css">
  <title></title>
</head>

<body>

  <header>

    <nav class="secondary-nav">

      <div class="logo">
        <h1>News Site Logo</h1>
      </div>

      <div class="search-area">
        <p>Search</p>
      </div>

      <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

    </nav>

    <nav class="main-nav">

      <ul class="nav-links">
        <li><a href="#">Politics</a></li>
        <li><a href="#">Sports</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">Media</a></li>
        <li><a href="#">Technology</a></li>
        <li><a href="#">Weather</a></li>
        <li><a href="#">Regional</a></li>
        <li class="search-li"><a href="#">Search</a></li>
      </ul>

    </nav>

  </header>

  <main>

    <div class="fake-body">

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni commodi illo minus ipsum dolorem perspiciatis inventore veniam quos repellat adipisci hic, laborum nisi autem nostrum id deserunt amet non exercitationem delectus doloribus corporis necessitatibus eaque accusantium cumque. Natus soluta non cumque hic illo vel voluptate, dolores incidunt, sequi maxime, quos officiis beatae totam repudiandae et at id voluptates eos corporis magni quas tempora! Dicta saepe veniam odio temporibus, perferendis dolores nemo aliquam officiis, amet repellat omnis dolorum reprehenderit recusandae placeat nulla iure id enim fugiat? Corporis nostrum molestias nisi! Ut quia earum officia tempora exercitationem sapiente maxime accusantium 
        
        corporis quasi at perspiciatis harum, suscipit veritatis saepe. Facilis repellat fuga at architecto nesciunt dolorum, a vel assumenda incidunt praesentium ipsum inventore itaque sed quas odio nemo. Minus consequuntur reprehenderit explicabo consectetur facilis, iusto saepe, incidunt nostrum dolores vitae, magnam necessitatibus eligendi. Blanditiis, facere ex! Maiores, distinctio excepturi deleniti suscipit cupiditate soluta! Voluptas soluta debitis sapiente, nobis obcaecati consequatur? Tempore eaque facere, officia expedita eveniet dolorem cupiditate, reiciendis quos veritatis omnis voluptates temporibus perspiciatis aut. Magnam error ab nobis esse adipisci debitis odio quam. Optio cupiditate amet maiores reprehenderit corrupti, deserunt, modi accusantium quidem quas nisi eligendi similique facilis nesciunt 
        
        rem. Corrupti dignissimos, amet non odio culpa assumenda, ex id autem in accusantium ullam officiis! Similique incidunt iure iste quaerat provident, ratione aut neque? Sint mollitia tempora sed iste aut! Harum tempora recusandae officia suscipit eveniet ex similique impedit assumenda id placeat quam sit velit in perspiciatis, repellat natus amet quia autem magni fuga voluptatem. Reiciendis quos, adipisci facere rem officia cum sed totam illo odio nam iusto reprehenderit explicabo ullam molestiae eveniet ex ducimus porro sunt praesentium, accusantium distinctio possimus dolorum itaque. Aut ab doloremque aliquid quidem reiciendis consequuntur fugiat eaque, impedit cumque maxime sapiente, vitae itaque. Alias architecto voluptatum ullam.</p>
      
    </div>

  </main>

  <footer>

  </footer>

  <script src="header.js"></script>
  
</body>

</html>

```
