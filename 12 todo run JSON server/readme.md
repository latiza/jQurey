# JavaScript jQuery CRUD App AJAX JSON
CRUD app: az adatbázis már tartalmaz egy feladatot. A feladattal a jQuery-t, az AJAX kéréseket fogjuk gyakorolni, egy fake json szerveren futtatva.
## Felhasznált technológiák
* HTML5
* CSS
* JavaScript
* jQuery
* AJAX
* JSON server
A JSON szerver egy csomóponti modul, amellyel kevesebb mint egy perc alatt létrehozhatsz demo rest json webszolgáltatást. Mindössze egy JSON-fájlra van szükséged a mintaadatokhoz.

#  Először globálisan kell telepíteni a JSON szervert!
npm install -g json-server

#  Utána kell lokálisan!
npm install json-server

# Mindenképpen ellenőrizd le, hogy sikerült e a telepítés. Ha vissza kapod a verzió számot akkor sikerült. 
json-server --version

# Futtasd a fake JSON servered, nyisd meg a localhost:3000-et de kiírja a címeket. A db.json-ban szereplő cím, jelen esetben a todo alapján állítja össze: localhost:3000/todo, ha ezt megnyitod vissza kapod mi van a json fájlban. Az index fájlt simán elindíthatod live-serverrel. 
json-server --watch db.json

# megállítani ctr+c-vel tudod

# Az app.js elkészültével, minden új adatbevitel bele kerül a json fájlodba, illetve, ha módosítasz, vagy törölsz.


