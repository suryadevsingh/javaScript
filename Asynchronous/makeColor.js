
function makeColor(r,g,b){
    const color ={};
    color.r=r;
    color.g=g;
    color.b=b;

color.rgb=function(){
    return `rgb${r} ,${g}, ${b}`;
};
color.hex = function(){
    const {r,g,b,} = this;
    return `# +(1<<24) + (r<<16) +(g<<8)+.b`.toString(16).slice(1)
};
return color;
}

const firstColor = makeColor(35,255,150);
firstColor.hex();
firstColor.rgb();



///=======================================================

function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
}

Color.prototype.rgb = function(){
    const {r,g,b} = this;
    return `rgb(${r},${g},${b})`
};

// here we use new keyword to create as many object we want to create ,if we don't use it object is not created
const color1 = new Color(30,40,60);