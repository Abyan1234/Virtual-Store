AFRAME.registerComponent("comic", {
  init: function () {
    this.comicContainer = this.el;
    this.createCards() 
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/thumbnails/spiderman.jpg",
      },
      {
        id: "wolverine",
        title: "Wolverine",
        url: "./assets/thumbnails/wolverine.jpg",
      },

      {
        id: "avengers",
        title: "Avengers",
        url: "./assets/thumbnails/avengers.jpg",
      },
      {
        id: "captain-america",
        title: "Captain America",
        url: "./assets/thumbnails/Captain_America.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);
      // Thumbnail Element
      const thumbNail=this.createThumbNail(item)
      borderEl.appendChild(thumbNail)
      // Title Text Element
      const titleEl=this.createTitleE1(position,item)
      borderEl.appendChild(titleEl)

      this.comicContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) { 
    const entityEl = document.createElement("a-entity"); 
    entityEl.setAttribute("id", id); 
    entityEl.setAttribute("visible", true); 
    entityEl.setAttribute("geometry", { 
      primitive: "ring", 
      radiusInner: 9, 
      radiusOuter: 10, 
    }); 
    entityEl.setAttribute("position", position); 
    entityEl.setAttribute("material", { 
      color: "#0077CC", 
      opacity: 1, 
    }); 
    return entityEl; },

  createThumbNail:function(item){
    const entityEl = document.createElement("a-entity"); 
    entityEl.setAttribute("visible", true); 
    entityEl.setAttribute("geometry", { 
      primitive: "circle", 
      radius: 9, 
    });
    entityEl.setAttribute("material",{src:item.url});
    return entityEl;
  },
  

  createTitleE1:function(position,item){
    const entityE1=document.createElement("a-entity");
    entityE1.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:70,
      color:"red",
      value:item.title
    });
    const e1Position=position
    e1Position.y=20
    entityE1.setAttribute("position",e1Position);
    entityE1.setAttribute("visible",true)
    return entityE1
  }
});
