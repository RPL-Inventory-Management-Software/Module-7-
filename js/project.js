class User {
    constructor(username, password, name, userpicture, position, email, phonenumber) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.userpicture = userpicture;
        this.position = position;
        this.email = email;
        this.phonenumber = phonenumber;
    }
    getDetails(){
        console.log (`Name is ${this.name}`),
        console.log (`Position is ${this.position}`),
        console.log (`Contact details:`),
        console.log (`Phone number: ${this.phonenumber}`),
        console.log (`Email: ${this.email}`)
    }
}

class Project extends User{
    constructor(username, password, name, userpicture, position, email, phonenumber, ProjectID, ProjectName, ProjectPicture ){
        super(username, password, name, userpicture, position, email, phonenumber);
        this.ProjectID = ProjectID;
        this.ProjectName = ProjectName;
        this.ProjectPicture = ProjectPicture;
    }
    projectDetails(){
        console.log (`Project ID ${this.ProjectID}`)
        console.log (`Project Name ${this.ProjectName}`)
        console.log (`ProjectPicture ${this.ProjectPicture}`)
        console.log (`Project Owner: ${this.getDetails()}`)
    }
}

class Item{
    constructor(ItemID, NameItem, Username, BrandItem, QuantityItems, TypeItem, DescriptionItem){
        this.ItemID = ItemID;
        this.NameItem = NameItem;
        this.BrandItem = BrandItem;
        this.QuantityItems = QuantityItems;
        this.TypeItem = TypeItem;
        this.DescriptionItem = DescriptionItem;
    }
    itemDetails(){
        console.log(`ItemID ${this.ItemID}`)
        console.log(`Item Name ${this.NameItem}`)
        console.log(`Item Brand ${this.BrandItem}`)
        console.log(`Quantity ${this.QuantityItems}`)
        console.log(`Item Type ${this.TypeItem}`)
        console.log(`Item Description ${this.DescriptionItem}`)
    }
}

    // Making object with the help of the constructor
    let user1 = new User('meizanarthur', 'aplwks', 'Meizan Arthur Alfianto', 'img', 'Member', 'meizan@gmail.com', '0812xxxxxxxx');
    let user2 = new User('axelnaufal', 'ammoaunts', 'Naufal Xeela Pandityatama', 'img', 'Assistant', 'axel@gmail.com', '0811xxxxxxxx');
    let user3 = new User('andiadjie', 'g', 'Andi Achmad Adjie', 'img', 'Assistant', 'adjie@gmail.com', '0811xxxxxxxx');

    let project1 = new Project('axelnaufal', 'ammoaunts', 'Naufal Xeela Pandityatama', 'img', 'Assistant', 'axel@gmail.com', '0811xxxxxxxx', '1', "GTA 6", "Secret");

    user1.getDetails();
    console.log("");
    user2.getDetails();

    console.log("");
    console.log("");
    project1.projectDetails();