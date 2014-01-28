import QtQuick 2.0
import "main.js" as Main

Rectangle {
    id: board

    width: 200
    height: 400

    property int blockSize: 20

    property var teste: Main.func()

    property var cur_block

    Timer {
        interval: 500; running: true; repeat: true
        onTriggered: Main.update()
    }

    Keys.onRightPressed: cur_block.moveRight();

    Text {
        text: qsTr("Hello World")
        anchors.centerIn: parent
    }

    MouseArea {
        anchors.fill: parent
        onClicked: {
            Qt.quit();
        }
    }
}
