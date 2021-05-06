import React from 'react'
import bg from '../crypto12.jpg';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={container}>
            <div style={firstPart}>
                <div style={title}>
                    Welcome to Madcoin Wallet
                </div>
                <div style={subTitle}>
                    Let's Trade
                </div>
                <Link to="/buy" style={link}><button style={button}>Buy Now</button></Link>
            </div>
            <div style={secondPart}>
                <div style={secondPartTextBox}>
                    <div style={textTitle}>About</div>
                    <div style={text}>Madcoin is a currency that runs on the Madcoin Wallet web platform and
                    it's not based on blockchain, but all the transactions are listed on the platform in real time for total transparency.
                    On every transaction 5% of coins are sent to Madcoin holders and 5% are burnt forever.
                    The project will be led by the community!</div>
                </div>
                <div style={secondPartImg}></div>
            </div>
            {/* <div style={thirdTitle}>List of Trades</div>
            <div style={thirdPart}></div> */}
        </div>
    )
}

const container = {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline"
}

const firstPart = {
    backgroundImage: `url(${bg})`,
    width: "100%",
    height: "700px",
    backgroundAttachment: "fixed",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

}

const title = {
    width: "80%",
    fontFamily: "Avenir",
    fontSize: "80px",
    fontWeight: "900",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.29",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#f4f4f4",
    zIndex: "99",
}

const subTitle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    fontFamily: "Avenir",
    textAlign: "center",
    zIndex: "99",
    width: "350px",
    fontSize: "40px",
    color: "#f4f4f4",
    marginTop: "50px"
}

const button = {
    backgroundColor: "#F1EC40",
    color: "black",
    width: "150px",
    fontSize: "20px",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    fontFamily: "Avenir",
    textAlign: "center",
    zIndex: 99
}

const link = {
    textDecoration: "none"
}

const secondPart = {
    width: "100%",
    height: "600px",
    position: "relative",
    marginBottom: "150px"
}

const secondPartTextBox = {
    color: "black",
    backgroundColor: "#F1EC40",
    width: "40%",
    height: "100%",
    marginTop: "50px",
    marginLeft: "10%",
    paddingLeft: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

const textTitle = {
    width: "206px",
    height: "40px",
    fontFamily: "Avenir",
    fontSize: "40px",
    fontWeight: "900",
    marginBottom: "10px"
}

const text = {
    width: "60%",
    fontFamily: "Avenir",
    fontSize: "20px",
    lineHeight: "1.56",
    marginTop: "11px"
}

const secondPartImg = {
    backgroundImage: `url(${bg})`,
    position: "absolute",
    right: "200px",
    top: "60px",
    width: "45%",
    height: "80%",
    backgroundAttachment: "fixed",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
}

// const thirdTitle = {
//     color: "white",
//     display: "flex",
//     alignItems: "center",
//     width: "100%",
//     justifyContent: "center",
//     margin: "30px 0 30px 0",
//     height: "100px",
//     fontFamily: "Avenir",
//     fontSize: "40px",
//     fontWeight: "900"
// }

// const thirdPart = {
//     backgroundColor: "#F1EC40",
//     display: "flex",
//     alignItems: "center",
//     width: "60%",
//     margin: "0 20% 3% 20%",
//     justifyContent: "center",
//     height: "500px",
//     fontFamily: "Avenir",
//     fontSize: "20px",
// }
