class HealthBar {
    constructor(x,y,w,h,maxHealth, color) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health=maxHealth;
        this.color = color;
    }
    show (context) {
        context.lineWith = 5;
        context.strokeStyle = "#333";
        context.fiillstyle=this.color;
        context.fillRect(this.x,this.y,this.w,this.h)
    }
}