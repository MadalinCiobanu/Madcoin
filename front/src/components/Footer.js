import React from 'react'

export default function Footer() {
    return (
        <div style={container}>
            <div style={left}>
                <div style={title}>Contact</div>
                <span>Madcoin Building,</span>
                <span>Strada Albastrelelor, Nr. 1,</span>
                <span>Bucuresti</span>
            </div>
            <div style={right}>
                <span>Tel: 123-455-7890</span>
                <span>Email: CiobanuMadalinFlorin@Gmail.com</span>
                <span>GitHub: https://github.com/MadalinCiobanu</span>
            </div>
        </div>
    )
}


const container = {
    backgroundColor: "#F1EC40",
    width: "100%",
    height: "150px",
    marginTop: "42px",
    paddingBottom: "35px",
    display: "flex",
    alignItems: "center",
}

const left = {
    width: "50%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "ProximaNova",
    fontSize: "20px",
    color: "black",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "40px",
    marginTop: "36px"
}

const title = {
    lineHeight: "2",
    width: "100%",
    height: "22px",
    fontFamily: "Avenir",
    fontSize: "30px",
    fontWeight: "900",
    marginBottom: "50px",
}

const right = {
    width: "50%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "ProximaNova",
    fontSize: "20px",
    color: "black",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "40px",
    marginTop: "80px"
}