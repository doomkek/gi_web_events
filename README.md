# gi_web_events
Repository for extracting animations from genshin web events. <br>
Currently only [Dancing Beasts and Soaring Kites](https://act.hoyoverse.com/ys/event/e20240208lantern-vc7vnh/index.html) is supported 


# Instruction
1. Download and install [nodejs](https://nodejs.org/en) 
2. Check that nodejs is installed, open CMD and type `node`, it should reply with "Welcome to Node.js v21.6.0."
3. Download this repository ~40mb<br>
<img src="https://github.com/doomkek/gi_web_events/assets/141933494/c97d65cf-794e-4e80-8d91-3b5591ffc572" height="250">
4. Extract into any folder 
5. Open CMD and navigate to folder with extracted repository (cd "C:\Projects\gi_web_events")
6. In CMD execute `npm install`, it should restore dependencies, you should see folder `node_modeules` being created
7. Execute `npm start`, you should see `Server is running on http://localhost:30000`
8. Navigate to [http://localhost:30000](http://localhost:30000)

# How to use as a wallpaper 
I'm using [Lively](https://www.rocksdanister.com/lively/), its open source and free, should work with any similar tool that allow you to use web page url as wallpaper.
Simply point it to `http://localhost:30000`

# Autorun 
To make this whole thing autorun on boot, there is `install_autorun.bat` and `uninstall_autorun.bat` scripts. <br>
Open `install_autorun.bat` and edit following variables
- `NODE_PATH` you can get it by typing `where node` in CMD and it should return you full path, copy it and replace one in script. <br> Example `set NODE_PATH=C:\Users\doomkek\scoop\apps\nodejs\current\node.exe`
- `PROJECT_DIR` directory where you extracter whole thing <br>
Example `set PROJECT_DIR="C:\Projects\gi_web_events"`

Run `install_autorun.bat` (as administrator obviously) <br>
![image](https://github.com/doomkek/gi_web_events/assets/141933494/6ffa9c85-039f-42de-8f0f-e5e1edba750f)<br>
Verify that it was installed <br>
<img src="https://github.com/doomkek/gi_web_events/assets/141933494/312201e7-fe03-4551-8d96-043869e27552" height="350"><br>
**Script will automatically run this task so if you see this task appeared, it should be running.**



# Customization
## Removing/editing assets
Open `e20240208lantern\public\images` find relevant image and modify it, if you want to remove something, make picture invisible (don't change resolution).

## Port
If for whatever reson you need to change hosting port, open `e20240208lantern\index.html` and find following text and change 30000 to whatever you need.
```js  
ultraGlobal = {
    host: "http://localhost:30000"
};
```
and in `server.js` one of the first lines `const port = 30000;`

## Wallpaper 
Currently there are 2 screens that can be used without braking anything `scene_home_green` for CR and `scene_home_red` for Gaming, change to whatever you prefer.
```js  
ultraGlobal = {
    wallpaper: "scene_home_green"
};
```


# Privacy
Everything except for `server.js` file is original, you can inspect it to verify that it does not do anything shady, its just a web server with bunch of mock routes that are needed for web event to work properly (load necessary animated screens not actually work).