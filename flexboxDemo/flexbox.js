
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';



/*

//test 1   基本布局

export default class TestRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
            </View>
        );
    }
}



// 样式
const styles = StyleSheet.create({
    container: {
        backgroundColor:'blue'
    },
});

*/


/*
//test2  flex  充满属性

export default class TestRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
            </View>
        );
    }
}



// 样式
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'blue'
    },
});

*/

/*
//test3  flex  半属性

export default class TestRN extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
            </View>
        );
    }
}



// 样式
const styles = StyleSheet.create({
    container: {
        flex:0.5,
        backgroundColor:'blue'
    },
});

*/



/*
//text4  布局



export default class TestRN extends Component {

    render() {
        return (

                <View style={styles.container}>
                    <View style={styles.style1}></View>
                    <View style={styles.style2}></View>
                    <View style={styles.style3}></View>

                </View>


        );


    }


}


const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        flex:1
    },

    style1:{
        backgroundColor:'red',
        width:60,
        height:60
    },
    style2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60

    },
    style3:{
        backgroundColor:'green',
        width:60,
        height:60
    }

});


*/



/*
//text5  布局-flexDirection   主轴方向



export default class TestRN extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.style1}></View>
                <View style={styles.style2}></View>
                <View style={styles.style3}></View>

            </View>


        );


    }


}


const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        flex:1,
        flexDirection:'row'
    },

    style1:{
        backgroundColor:'red',
        width:60,
        height:60
    },
    style2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60

    },
    style3:{
        backgroundColor:'green',
        width:60,
        height:60
    }

});


*/


/*
//text6  布局-flexDirection   主轴方向(起点方向在右侧)

export default class TestRN extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.style1}></View>
                <View style={styles.style2}></View>
                <View style={styles.style3}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        flex:1,
        flexDirection:'row-reverse'
    },

    style1:{
        backgroundColor:'red',
        width:60,
        height:60
    },
    style2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60

    },
    style3:{
        backgroundColor:'green',
        width:60,
        height:60
    }

});

*/

/*
//text7  布局-flexDirection   主轴方向(竖直方向，起点在上)

export default class TestRN extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.style1}></View>
                <View style={styles.style2}></View>
                <View style={styles.style3}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        flex:1,
        flexDirection:'column'
    },

    style1:{
        backgroundColor:'red',
        width:60,
        height:60
    },
    style2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60

    },
    style3:{
        backgroundColor:'green',
        width:60,
        height:60
    }

});

*/


/*
//text8  布局-flexDirection   主轴方向(竖直方向，起点在下)

export default class TestRN extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.style1}></View>
                <View style={styles.style2}></View>
                <View style={styles.style3}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        flex:1,
        flexDirection:'column-reverse'
    },

    style1:{
        backgroundColor:'red',
        width:60,
        height:60
    },
    style2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60

    },
    style3:{
        backgroundColor:'green',
        width:60,
        height:60
    }

});

*/


/*
//text9  布局-justifyContent   flex-start（默认）：伸缩项目向一行的起始位置靠齐

export default class TestRN extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.style1}></View>
                <View style={styles.style2}></View>
                <View style={styles.style3}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        flex:1,
        justifyContent:'flex-start'
    },

    style1:{
        backgroundColor:'red',
        width:60,
        height:60
    },
    style2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60

    },
    style3:{
        backgroundColor:'green',
        width:60,
        height:60
    }

});

*/


/*
//test10  布局-justifyContent   flex-end：伸缩项目向一行的结束位置靠齐

export default class TestRN extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.style1}></View>
                <View style={styles.style2}></View>
                <View style={styles.style3}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        flex:1,
        justifyContent:'flex-end'
    },

    style1:{
        backgroundColor:'red',
        width:60,
        height:60
    },
    style2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60

    },
    style3:{
        backgroundColor:'green',
        width:60,
        height:60
    }

});

*/


//test11  布局-justifyContent   center：伸缩项目向一行的中间位置靠齐

export default class TestRN extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.style1}></View>
                <View style={styles.style2}></View>
                <View style={styles.style3}></View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'blue',
        flex:1,
        justifyContent:'center'
    },

    style1:{
        backgroundColor:'red',
        width:60,
        height:60
    },
    style2: {
        backgroundColor: 'yellow',
        width: 60,
        height: 60

    },
    style3:{
        backgroundColor:'green',
        width:60,
        height:60
    }

});