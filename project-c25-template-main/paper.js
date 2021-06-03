class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2	
			}
		this.x=x;
		this.y=y;
		this.r=r
	   this.Image=loadImage="paper.png";
		this.body=Bodies.Circle(x, y, (this.r-20)/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
            Imagemode(CENTRE);
            this.Image(this.Image,0,0,this.r,this.r);
			rect(0,0,this.w, this.h);
			pop()
			
	}

}