var database = {
    elements: {
        gaugeChart: [],
        lineChart:  [],
        cicle:      [],
        rect:       [],
        ellipse:    [],

    },
    clicked: [],

    createID: function(type){
       return this.elements[type].length;
    },

    deleteElement: function(type, id){
        this.elements[type].forEach((node, index)=>{
            if (node.id == id){
                this.elements[type].splice(index, 1);
                $(`#${node.id}`).remove();

                console.log(type + " was deleted.");
            }
        })
    },

    addElement: function(type, posX, posY, width, height){
        let id = this.elements[type].length;
        let x  = posX;
        let y  = posY;
        let width  = width;
        let height = height;

        switch(type){
            case "gaugeChart": this.elements[type].push(new gaugeChart(id, x, y, width, height)); break;
            case "lineChart":  this.elements[type].push(new lineChart(id, x, y, width, height)); break;
            case "circle":     this.elements[type].push(new circle(id, x, y, width, height)); break;
            case "rect":       this.elements[type].push(new rect(id, x, y, width, height)); break;
            case "ellipse":    this.elements[type].push(new ellipse(id, x, y, width, height)); break;
        }

    }

}

function gaugeChart(id, x, y, width, height){
    this.id = id;
    this.x  = x;
    this.y  = y;
    this.width  = width;
    this.heigth = height;
}

function lineChart(id, x, y, width, height){
    this.id = id;
    this.x  = x;
    this.y  = y;
    this.width  = width;
    this.heigth = height;
}

function circle(id, x, y, width, height){
    this.id = id;
    this.x  = x;
    this.y  = y;
    this.width  = width;
    this.heigth = height;
}

function rect(id, x, y, width, height){
    this.id = id;
    this.x  = x;
    this.y  = y;
    this.width  = width;
    this.heigth = height;
}

function ellipse(id, x, y, width, height){
    this.id = id;
    this.x  = x;
    this.y  = y;
    this.width  = width;
    this.heigth = height;
}



