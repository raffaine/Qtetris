import QtQuick 2.0

Item {
    id: block

    property int blockSize: 20
    property string blockColor: "#ff0000"

    x:0
    y:0

    width: blockSize
    height: blockSize

    Rectangle {
        width: 20
        height: 20
        radius: 0
        anchors.verticalCenter: parent.verticalCenter
        anchors.horizontalCenter: parent.horizontalCenter
        border.width: 1
        transformOrigin: Item.Center
        gradient: Gradient {
            GradientStop {
                position: 0.5
                color: "#ffffff"
            }

            GradientStop {
                position: 0
                color: blockColor
            }

            GradientStop {
                position: 1
                color: blockColor
            }
        }
    }
}
