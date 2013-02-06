# Plantilles Simplificades 2012

Prova de repositori Entorns Web

## Plantilles bàsiques
Disposem de 3 tipus de plantilles bàsiques 
* <b>Una</b> columna:
	* Cos de la pàgina.
* <b>Dues</b> columnes:
	* Cos de la pàgina
	* Columna menú esquerra
* <b>Tres</b> columnes
	* Cos de la pàgina
	* Columna menú esquerra
	* Columna dreta

------------------------------
<!--- https://raw.github.com/travishorn/jquery-headerPersist/master/README.md --->
## Description
Locks a header to the top of the page only when user is scrolling within it's parent container.

Open example.html for example usage.

## Required HTML
```html
    <div class="persistMe">
      <h2>Header 1</h2>
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
```

## Required JavaScript
```html
    $('.persistMe').headerPersist();
```

## Links
* [Online Demo](http://jsfiddle.net/6U7zf/)
* [Screenshots](https://sites.google.com/site/tpopsjqueryplugins/headerpersist/screenshots)

------------------------------
<!--- https://raw.github.com/dvbscript/dynamictitle/master/README.md -->
## Mostra de cita html
In some CMS, for example, Drupal 7, you need to wrap your code in the jQuery.noConflict() function:
```html
<script type="text/javascript">
var $dr = jQuery.noConflict();

$noConf(window).load(function(){	
        $noConf('.content img').dynamictitle({
            changePositionSpeed:500,
            collapseSpeed: 150,
            margin: 5,
            leftOffset: 50,
        });
});  
</script>
```
## Mostra de taula

<table>
  <tr>
    <th>Feature</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
    <th>Example</th>
  </tr>
  <tr>
    <td>tagattr</td>
    <td>'title' or 'alt' attributes.</td>
    <td>String</td>
    <td>'title'</td>
    <td>'alt'</td>
  </tr>
  <tr>
    <td>titleSplitter</td>
    <td>Separator header and content of the Dynamic Title, must be in the attribute 'title' or 'alt'.</td>
    <td>String</td>
    <td>'::'</td>
    <td>&lt;img src=&quot;demo.jpg&quot; title=&quot;PLUGIN DYNAMIC TITLE::This plugin allows you to show...&quot;/&gt;<br />
  </td>
  </tr>
  <tr>
    <td>stickWinWidth</td>
    <td>The width of the Dynamic Title. If 'lageElementSize' not set to 0, it will be applied to 'small' pictures only.</td>
    <td>Integer</td>
    <td>300</td>
    <td>300</td>
  </tr>
</table>
The rest coming soon...

## Mostra d'enllaç
http://dvbscript.ru/dynamictitle