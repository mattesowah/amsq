import * as PIXI from 'pixi.js'

import t from "./1.jpg";


const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const texture = PIXI.Texture.from(t);

for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.width = 30;
    bunny.height = 30;
    bunny.x = (i % 5) * 30;
    bunny.y = Math.floor(i / 5) * 30;
    bunny.rotation = Math.random() * (Math.PI * 2);
    container.addChild(bunny);
}

const brt = new PIXI.BaseRenderTexture(300, 300, PIXI.SCALE_MODES.LINEAR, 1);
const rt = new PIXI.RenderTexture(brt);
container.y = 60;

app.ticker.add(() => {
    app.renderer.render(container, rt);
});
