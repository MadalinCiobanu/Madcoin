import React from 'react'

export default function About() {
    return (
        <div style={container}>
            <div style={textBox}>
                <div style={title}>About</div>
                <div style={text}>
                    <p>It all started when our founder Madalin Florin Ciobanu decided to create 
                        this project in the last part of the Codecool Romania course where he 
                        started to learn the basics of programming. Codecool is an intensive 
                        programming course that lasts 1 year and is practice-oriented, where 
                        you can learn over 10 technologies.</p>
                    <p>Madalin's passion, determination and vision were the basis for the success of this project.</p>
                    <p>Madcoin is a currency that runs on the Madcoin Wallet web platform and
                    it's not based on blockchain, but all the transactions are listed on 
                    the platform in real time for total transparency. On every transaction 5% 
                    of coins are sent to Madcoin holders and 5% are burnt forever.</p>
                    <p>The project will be led by the community!</p>
                </div>
            </div>
        </div>
    )
}


const container = {
    display: "flex",
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    height: "800px",
    font: "inherit",
    backgroundColor: "#F1EC40",
    alignItems: "center",
    justifyContent: "center"
}

const textBox = {
    color: "white",
    backgroundColor: "black",
    width: "60%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const title = {
    width: "206px",
    height: "40px",
    fontFamily: "Avenir",
    fontSize: "40px",
    fontWeight: "900",
}
const text= {
    width: "70%",
    fontFamily: "Avenir",
    fontSize: "20px",
    lineHeight: "1.56",
    marginTop: "11px"
}