export class Recipe {
public name :string;
public description : string;
public imagepath: string;

constructor(name , dec  , imgpath )
{
    this.name = name;
    this.description = dec;
    this.imagepath = imgpath;
}

}