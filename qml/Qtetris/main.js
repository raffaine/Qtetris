var maxColumn = 10;
var maxRow = 10;
var arrSize = 100;
var component = null;


function index(column, row) {
    return column + (row * maxColumn);
}

function createBlock(row, col) {
    if(component === null) {
        component = Qt.createComponent("Block.qml")
    }

    return component.createObject(board, {
        "x": col*board.blockSize,
        "y": row*board.blockSize,
        "blockSize": board.blockSize,
        "visible": false});
}

function update() {
    for( var i = 0; i < 9; i++ ) {
        var obj = board.teste[ index(cur_block.x + (i%3), cur_block.y + Math.floor(i/3)) ];
        obj.visible = false;
    }

    cur_block.y += 1

    for( var i = 0; i < 9; i++ ) {
        var obj = board.teste[ index(cur_block.x + (i%3), cur_block.y + Math.floor(i/3)) ];
        obj.visible = cur_block.shape[i];
    }

    //check colision and stop
}

function makeBlock() {
    return {
        "x": (maxColumn / 2) - 1,
        "y": 0,
        "shape": [false, true, false,
                  true, true, true,
                  false, true, false],
        "moveRight": function() { if ( this.x + 1 <= maxColumn) this.x += 1;}
    };
}

function func() {
    maxColumn = board.width / board.blockSize;
    maxRow = board.height / board.blockSize;

    arrSize = maxColumn * maxRow;

    var arr = new Array(arrSize);

    cur_block = makeBlock();

    for (var col = 0; col < maxColumn; ++col) {
        for (var row = 0; row < maxRow; ++row) {
            arr[index(col,row)] = createBlock(row, col);
        }
    }
    return arr;
}
