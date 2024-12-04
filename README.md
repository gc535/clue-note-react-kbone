# wechat miniprograme -- Boardgame "Clue/Cluedo" note taking
#### developed with react + kbone framework

## Dependency
This project is created with kbone. 
Necessary kbone dependency might be needed to run the dev and build flow. 

## To start

```
npm run mp        // dev build miniprogram
npm run build:mp  // prod build miniprogram
npm run web       // dev web version
```

## To deploy and test mini app
The build artifact will be in dist/mp after running
```
npm run build:mp
```
To test mini app with wechat mini app dev tool, load the project from 
the path that contains artifact or copy of /mp. 

To deploy, simply use the deploy option in the mini app dev tool. 


## directory

```
├─ dist
│  ├─ mp     // prod build
│  ├─ web    // web build
├─ build     
├─ src
│  ├─ assets
│  ├─ components     // page components
│  ├─ game.jsx       // game page
│  └─ index.jsx      // welcome page
```

## License

MIT 
